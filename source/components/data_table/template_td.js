// Dependencies.
import React from 'react'
import accounting from 'accounting'
import moment from 'moment'

// Define class.
class DataTableCell extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Money formatting.
    accounting.settings.currency.format = {
      pos: this.props.numberFormat,
      neg: this.props.numberFormatNegative
    }
  }

  // Render method.
  render () {
    const dateFormat = this.props.dateFormat
    const index = this.props.index
    const nowrap = this.props.nowrap
    const type = this.props.type

    const isCurrency = type === 'currency'
    const isDate = type === 'date'

    let value = this.props.value
    const isNegative = value < 0

    // Default class="…".
    let className = ['t7-data-table__td']

    // Nowrap?
    if (nowrap) {
      className.push('t7-data-table__td--nowrap')
    }

    // Currency value?
    if (isCurrency) {
      className.push('t7-data-table__td--currency')

      // Negative?
      if (isNegative) {
        className.push('t7-data-table__td--negative')
      }

      value = accounting.formatMoney(value)

    // Date value?
    } else if (isDate && moment(value).isValid()) {
      value = moment(value).format(dateFormat)
    }

    // Convert to string.
    className = className.join(' ')

    // Expose `<td>`.
    return (
      <td
        key={index}
        className={className}
        role='gridcell'
      >
        {value}
      </td>
    )
  }
}

// Validation.
DataTableCell.propTypes = {
  dateFormat: React.PropTypes.string,
  numberFormat: React.PropTypes.string,
  numberFormatNegative: React.PropTypes.string,

  index: React.PropTypes.number,
  nowrap: React.PropTypes.bool,
  type: React.PropTypes.string,

  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
}

// Defaults.
DataTableCell.defaultProps = {
  dateFormat: 'MMM D, YYYY',
  numberFormat: '%s%v',
  numberFormatNegative: '(%s%v)'
}

// Export.
export default DataTableCell
