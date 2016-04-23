// Dependencies.
import React from 'react'
import { cloneDeep, isEqual } from 'lodash'

// Utility methods.
import fake from '../../fake'
import utils from '../../utils'

// UI Components.
import AccordionHeader from './template_header'

// Define class.
class Accordion extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Set state.
  defaultState () {
    this.state = {
      id: this.props.id || utils.unique(),
      selected: this.props.selected
    }
  }

  // Override state, if need be.
  componentWillReceiveProps (nextProps) {
    const isValid = !isEqual(nextProps, this.props)

    if (isValid) {
      this.setState({
        selected: nextProps.selected
      })
    }
  }

  // Click handler.
  handleClick (e, index, label) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const multi = this.props.multi

    var selected = cloneDeep(this.state.selected)
    const isSelected = selected[index]

    // If `multi` isn't supported,
    // then we reset state object.
    if (!multi) {
      selected = {}
    }

    // Set current selection.
    selected[index] = !isSelected

    this.setState({
      selected: selected
    })

    // Parent component's click handler.
    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e, index, label, selected)
  }

  // Render method.
  render () {
    // Unique ID, for tab group.
    const id = this.state.id

    // Get selected state.
    const selected = this.state.selected

    // Get the children.
    const children = this.props.children

    // Multi-select?
    const multi = this.props.multi

    // Events.
    const handleClick = this.handleClick.bind(this)

    // Populated in `map`.
    const output = []

    // Build the output.
    children.map(function (panel, i) {
      // For accessibility.
      const idPanel = 'accordion_panel_' + i + '_' + id
      const idHeader = 'accordion_header_' + i + '_' + id

      // Active state.
      const isActive = selected[i]

      // Panel label & content.
      const label = panel.props.label
      var content = panel.props.children

      if (typeof content === 'string') {
        content = (
          <p>
            {content}
          </p>
        )
      }

      // Add the `<dt>`.
      output.push(
        <AccordionHeader
          ariaControls={idPanel}
          ariaExpanded={isActive}
          ariaSelected={isActive}
          className='t7-accordion__header'
          id={idHeader}
          index={i}
          key={idHeader}
          label={label}

          handleClick={handleClick}
        />
      )

      // Add the `<dd>`.
      output.push(
        <dd
          aria-hidden={!isActive}
          aria-labelledby={idHeader}
          className='t7-accordion__panel'
          id={idPanel}
          key={idPanel}
          role='tabpanel'
        >
          {content}
        </dd>
      )
    })

    // Expose the UI.
    return (
      <dl
        className='t7-accordion'
        id={id}
        role='tablist'
        aria-multiselectable={multi}
      >
        {output}
      </dl>
    )
  }
}

// Validation.
Accordion.propTypes = {
  children: React.PropTypes.node,
  id: React.PropTypes.string,
  multi: React.PropTypes.bool,
  selected: React.PropTypes.object,

  // Events.
  handleClick: React.PropTypes.func
}

// Defaults.
Accordion.defaultProps = {
  children: fake.accordion(),
  multi: false,
  selected: {}
}

// Export.
export default Accordion
