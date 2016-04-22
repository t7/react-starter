// Dependencies.
import React from 'react'
import { cloneDeep, isEqual, sortBy } from 'lodash'

// Utility methods.
import fake from '../../fake'
import utils from '../../utils'

// UI components.
import DataTableRow from './template_tr'
import DataTableHeader from './template_th'
import DataTablePagination from './template_pagination'

// Define class.
class DataTable extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Ensure columns exist.
    const columns = this.props.columns

    if (!columns || !columns.length) {
      throw new Error('No columns were passed to `<DataTable />`.')
    }

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    this.state = {
      id: this.props.id || utils.unique(),
      pageCurrent: this.props.pageCurrent,
      sortDirection: this.props.sortDirection,
      sortIndex: this.props.sortIndex
    }
  }

  // Update state, if need be.
  componentWillReceiveProps (nextProps) {
    const needsUpdate = !isEqual(nextProps, this.props)

    if (needsUpdate) {
      this.setState({
        pageCurrent: nextProps.pageCurrent,
        sortDirection: nextProps.sortDirection,
        sortIndex: nextProps.sortIndex
      })
    }
  }

  // Parse based on sort, pagination.
  parseData (index) {
    // Used in conditional.
    var data = cloneDeep(this.props.data)

    // Ensure index exists.
    if (utils.exists(index)) {
      let field = this.props.columns[index].field

      // Loop through data.
      data = sortBy(data, function (arr) {
        return arr[field]
      })

      // Reverse direction?
      if (this.state.sortDirection === 'desc') {
        data.reverse()
      }
    }

    const pageCurrent = this.state.pageCurrent
    const pageSize = this.props.pageSize
    const start = pageCurrent * pageSize
    const end = start + pageSize

    if (pageSize) {
      data = data.slice(start, end)
    }

    return data
  }

  // Handle column header sort.
  handleSort (e, sortIndex, sortDirection) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    // Reverse.
    if (sortDirection === 'asc') {
      sortDirection = 'desc'
    } else {
      sortDirection = 'asc'
    }

    this.setState({
      sortDirection: sortDirection,
      sortIndex: sortIndex
    })

    // Report to parent component?
    const handleSort = this.props.handleSort

    if (typeof handleSort === 'function') {
      handleSort(e, sortIndex, sortDirection)
    }
  }

  // Handle table pagination.
  handlePagination (e, pageCurrent) {
    this.setState({
      pageCurrent: pageCurrent
    })

    // Report to parent component?
    const handlePagination = this.props.handlePagination

    if (typeof handlePagination === 'function') {
      handlePagination(e, pageCurrent)
    }
  }

  // Row click.
  handleRowClick (e, data, index) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    // Report to parent component?
    const handleRowClick = this.props.handleRowClick

    if (typeof handleRowClick === 'function') {
      handleRowClick(e, data, index)
    }
  }

  // Render method.
  render () {
    // Read from state.
    const id = this.state.id
    const sortIndex = this.state.sortIndex
    const sortDirection = this.state.sortDirection
    const pageCurrent = this.state.pageCurrent

    // Formatting patterns.
    const dateFormat = this.props.dateFormat
    const numberFormat = this.props.numberFormat
    const numberFormatNegative = this.props.numberFormatNegative

    // Get columns.
    const columns = this.props.columns

    // Pagination sizing.
    const pageTotal = Math.ceil(this.props.data.length / this.props.pageSize)

    // Sort the data.
    const data = this.parseData(this.state.sortIndex)

    // Events.
    const handleSort = this.handleSort.bind(this)
    const handlePagination = this.handlePagination.bind(this)
    const handleRowClick = this.handleRowClick.bind(this)

    // Clickable row?
    const rowIsClickable =
      typeof this.props.handleRowClick === 'function'

    // Pagination.
    var pageTop
    var pageBottom

    // Is `pageTop` enabled?
    if (this.props.pageTop) {
      pageTop = (
        <DataTablePagination
          pageCurrent={pageCurrent}
          pageTotal={pageTotal}
          tableId={id}
          handlePagination={handlePagination}
        />
      )
    }

    // Is `pageBottom` enabled?
    if (this.props.pageBottom) {
      pageBottom = (
        <DataTablePagination
          pageCurrent={pageCurrent}
          pageTotal={pageTotal}
          tableId={id}
          handlePagination={handlePagination}
        />
      )
    }

    // Populate table rows.
    var rows = data.map(function (data, i) {
      return (
        <DataTableRow
          dateFormat={dateFormat}
          numberFormat={numberFormat}
          numberFormatNegative={numberFormatNegative}

          columns={columns}
          data={data}
          key={i}
          rowIsClickable={rowIsClickable}

          handleRowClick={function (e) {
            handleRowClick(e, data, i)
          }}
        />
      )
    })

    // Empty rows?
    if (!rows.length) {
      rows.push(
        <tr role='row' key={'table_data_empty_' + id}>
          <td className='t7-data-table__td' colSpan={columns.length}>
            No data to display.
          </td>
        </tr>
      )
    }

    // Build headings.
    const headings = columns.map(function ({title, sortable}, i) {
      return (
        <DataTableHeader
          key={i}
          index={i}
          title={title}
          sortIndex={data.length ? sortIndex : null}
          sortDirection={data.length ? sortDirection : null}
          sortable={data.length ? sortable : null}
          handleSort={handleSort}
        />
      )
    })

    // Put all the UI together.
    return (
      <div className='t7-data-table__wrapper'>

        {pageTop}

        <table
          id={id}
          className='t7-data-table'
          role='grid'
          data-cols={headings.length}
        >

          <thead role='rowgroup'>
            <tr>
              {headings}
            </tr>
          </thead>

          <tbody role='rowgroup'>
            {rows}
          </tbody>

        </table>

        {pageBottom}

      </div>
    )
  }
}

// Validation.
DataTable.propTypes = {
  // Required.
  columns: React.PropTypes.array.isRequired,
  data: React.PropTypes.array.isRequired,

  // Optional.
  dateFormat: React.PropTypes.string,
  id: React.PropTypes.string,
  numberFormat: React.PropTypes.string,
  numberFormatNegative: React.PropTypes.string,
  pageCurrent: React.PropTypes.number,
  pageSize: React.PropTypes.number,
  pageTop: React.PropTypes.bool,
  pageBottom: React.PropTypes.bool,
  sortIndex: React.PropTypes.number,
  sortDirection: React.PropTypes.string,

  // Events.
  handlePagination: React.PropTypes.func,
  handleRowClick: React.PropTypes.func,
  handleSort: React.PropTypes.func
}

// Defaults.
DataTable.defaultProps = {
  pageCurrent: 0,
  pageSize: 20,
  pageTop: true,
  pageBottom: false,

  // Fake data.
  columns: fake.dataTableCols(),
  data: fake.dataTableRows()
}

// Export.
export default DataTable
