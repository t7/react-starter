// Dependencies.
import React from 'react'
import _ from 'lodash'

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

  // Apply to `state`, because we
  // don't want to mutate `props`.
  defaultState () {
    const state = {
      id: this.props.id || utils.unique(),
      pageCurrent: 0,
      sortIndex: this.props.sortIndex,
      sortDirection: this.props.sortDirection
    }

    // If state exists, reset it.
    if (typeof this.state === 'object') {
      this.setState(state)

    // Otherwise, create state.
    } else {
      this.state = state
    }
  }

  // Parse based on sort, pagination.
  parseData (index) {
    // Used in conditional.
    var data = _.cloneDeep(this.props.data)

    // Ensure index exists.
    if (utils.exists(index)) {
      let field = this.props.columns[index].field

      // Loop through data.
      data = _.sortBy(data, function (arr) {
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
  handleSort (e, index, direction) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    // Reverse.
    if (direction === 'asc') {
      direction = 'desc'
    } else {
      direction = 'asc'
    }

    this.setState({
      sortDirection: direction,
      sortIndex: index
    })
  }

  // Handle table pagination.
  handlePagination (e, page) {
    this.setState({
      pageCurrent: page
    })
  }

  // Row click.
  handleRowClick (e, data, index) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const handleRowClick = this.props.handleRowClick

    if (typeof handleRowClick !== 'function') {
      return
    }

    handleRowClick(e, data, index)
  }

  // Render method.
  render () {
    // Read from state.
    const id = this.state.id
    const sortIndex = this.state.sortIndex
    const sortDirection = this.state.sortDirection
    const pageCurrent = this.state.pageCurrent

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

    // Used in loop.
    var rows = []

    // Populate table rows.
    data.map(function (data, i) {
      rows.push(
        <DataTableRow
          key={i}
          columns={columns}
          data={data}
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
          <td className='gs-data-table__td' colSpan={columns.length}>
            No data to display.
          </td>
        </tr>
      )
    }

    // Populated in loop.
    const headings = []

    // Build headings.
    columns.map(function ({label, sort_direction, sortable}, i) {
      headings.push(
        <DataTableHeader
          key={i}
          index={i}
          label={label}
          sortIndex={data.length ? sortIndex : null}
          sortDirection={data.length ? sortDirection : null}
          sortable={data.length ? sortable : null}
          handleSort={handleSort}
        />
      )
    })

    // Put all the UI together.
    return (
      <div className='gs-data-table__wrapper'>

        {pageTop}

        <table
          id={id}
          className='gs-data-table'
          role='grid'
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
  id: React.PropTypes.string,
  pageSize: React.PropTypes.number,
  pageTop: React.PropTypes.bool,
  pageBottom: React.PropTypes.bool,
  sortIndex: React.PropTypes.number,
  sortDirection: React.PropTypes.string,

  // Events.
  handleRowClick: React.PropTypes.func
}

// Defaults.
DataTable.defaultProps = {
  pageSize: 20,
  pageTop: true,
  pageBottom: false,
  sortDirection: 'desc',

  // Fake data.
  columns: fake.dataTableCols(),
  data: fake.dataTableRows()
}

// Export.
export default DataTable
