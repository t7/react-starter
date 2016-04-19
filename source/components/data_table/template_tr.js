// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// UI components.
import DataTableCell from './template_td'

// Define class.
class DataTableRow extends React.Component {
  // Render method.
  render () {
    const columns = this.props.columns
    const data = this.props.data
    const dateFormat = this.props.dateFormat
    const numberFormat = this.props.numberFormat
    const numberFormatNegative = this.props.numberFormatNegative

    // Events.
    const handleRowClick = this.props.handleRowClick

    // Build cells.
    const cells = columns.map(function (column, i) {
      if (utils.exists(data[column.field])) {
        return (
          <DataTableCell
            dateFormat={dateFormat}
            numberFormat={numberFormat}
            numberFormatNegative={numberFormatNegative}

            key={i}
            index={i}
            nowrap={column.nowrap}
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
  dateFormat: React.PropTypes.string,
  numberFormat: React.PropTypes.string,
  numberFormatNegative: React.PropTypes.string,

  // Events.
  handleRowClick: React.PropTypes.func,
  rowIsClickable: React.PropTypes.bool
}

// Export.
export default DataTableRow
