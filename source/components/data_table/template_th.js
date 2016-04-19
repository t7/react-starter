// Dependencies.
import React from 'react'

// Define class.
class DataTableHeader extends React.Component {
  handleSort (e) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const index = this.props.index
    const sortDirection = this.props.sortDirection
    const handleSort = this.props.handleSort

    if (typeof handleSort !== 'function') {
      return
    }

    handleSort(e, index, sortDirection)
  }

  // Render method.
  render () {
    const index = this.props.index
    const title = this.props.title
    const sortable = this.props.sortable
    const sortDirection = this.props.sortDirection
    const sortIndex = this.props.sortIndex
    const handleSort = sortable ? this.handleSort.bind(this) : null

    var ariaSort

    if (index === sortIndex) {
      if (sortDirection === 'desc') {
        ariaSort = 'descending'
      } else if (sortDirection === 'asc') {
        ariaSort = 'ascending'
      }
    }

    // Default class="…".
    var className = ['t7-data-table__th']

    if (sortable) {
      className.push('t7-data-table__th--sortable')
    }

    // Convert to string.
    className = className.join(' ')

    return (
      <th
        aria-sort={ariaSort}
        className={className}
        role='columnheader'
        scope='col'
        tabIndex={sortable ? 0 : null}

        onClick={handleSort}
        onKeyDown={handleSort}
      >
        {title}
      </th>
    )
  }
}

// Validation.
DataTableHeader.propTypes = {
  // Required.
  title: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,

  // Optional.
  sortIndex: React.PropTypes.number,
  sortDirection: React.PropTypes.string,
  sortable: React.PropTypes.bool,

  // Events.
  handleSort: React.PropTypes.func
}

// Export.
export default DataTableHeader
