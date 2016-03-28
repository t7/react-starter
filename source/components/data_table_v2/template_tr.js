// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// UI components.
import DataTableCell from './template_td'

// Define class.
class DataTableRow extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const columns = this.props.columns
    const data = this.props.data

    // Events.
    const handleRowClick = this.props.handleRowClick

    // Populated in loop.
    const cells = []

    // Build cells.
    columns.map(function (column, i) {
      if (utils.exists(data[column.field])) {
        cells.push(
          <DataTableCell
            key={i}
            index={i}
            type={column.type}
            value={data[column.field]}
          />
        )
      }
    })

    // Make row focusable?
    const tabIndex =
      this.props.rowIsClickable
      ? '0'
      : null

    // Expose UI.
    return (
      <tr
        role='row'
        tabIndex={tabIndex}
        onClick={handleRowClick}
        onKeyDown={handleRowClick}
      >
        {cells}
      </tr>
    )
  }
}

// Validation.
DataTableRow.propTypes = {
  columns: React.PropTypes.array,
  data: React.PropTypes.object,
  handleRowClick: React.PropTypes.func,
  rowIsClickable: React.PropTypes.bool
}

// Export.
export default DataTableRow
