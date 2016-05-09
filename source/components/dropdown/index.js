// Dependencies.
import React from 'react'
import utils from '../../utils'

// UI components.
import DropDownItem from './template_item'

// Define class.
class DropDown extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    const id = this.props.id || utils.unique()
    const idMenu = id + '_menu'
    const idTrigger = id + '_trigger'
    const isActive = !!this.props.isActive

    this.state = {
      idMenu: idMenu,
      idTrigger: idTrigger,
      isActive: isActive
    }
  }

  // Click event for items.
  handleClick (e, text) {
    this.setState({
      isActive: false
    })

    // Place focus back on trigger.
    this.refs.trigger.focus()

    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e, text)
  }

  // Toggle event.
  toggleClick (e) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const isActive = !this.state.isActive

    this.setState({
      isActive: isActive
    })

    this.bodyClickListener(isActive)
  }

  // Handle `<body>` click.
  bodyClickHandler (e) {
    const el = e.target
    const c = el.className || ''

    // Determine which "level" we're at, if any.
    const isLink = c.match('t7-dropdown__menu__link')
    const isItem = c.match('t7-dropdown__menu__item')
    const isMenu = c.match('t7-dropdown__menu')
    const isTrigger = c.match('t7-dropdown__trigger')
    const isDropdown = c.match('t7-dropdown')

    // Does component exist in page?
    const componentParent = this.refs.dropdown

    // Set in conditional.
    var parent

    // Get parent.
    if (isLink) {
      parent = el.parentNode.parentNode.parentNode
    } else if (isItem) {
      parent = el.parentNode.parentNode
    } else if (isMenu) {
      parent = el.parentNode
    } else if (isTrigger) {
      parent = el.parentNode
    } else if (isDropdown) {
      parent = el
    }

    // Ensure it's not the dropdown itself.
    const isValid = parent !== componentParent

    // Change state.
    if (isValid && componentParent) {
      this.setState({
        isActive: false
      })
    }
  }

  // Add `<body>` click listener.
  bodyClickListener (isActive) {
    const b = document.body
    const f = this.bodyClickHandler.bind(this)

    // Un-bind events.
    b.removeEventListener('mousedown', f)
    b.removeEventListener('touchstart', f)

    // Re-add, if needed.
    if (isActive) {
      b.addEventListener('mousedown', f)
      b.addEventListener('touchstart', f)
    }
  }

  // Remove `<body>` click listener.
  componentWillUnmount () {
    const b = document.body
    const f = this.bodyClickHandler.bind(this)

    b.removeEventListener('mousedown', f)
    b.removeEventListener('touchstart', f)
  }

  // Render method.
  render () {
    // State driven.
    const idMenu = this.state.idMenu
    const idTrigger = this.state.idTrigger
    const isActive = this.state.isActive

    // Props driven.
    const menuAlign = this.props.menuAlign
    const text = this.props.text

    // Toggle event.
    const toggleClick = this.toggleClick.bind(this)

    // Item click event.
    const handleClick = this.handleClick.bind(this)

    // Populated in loop.
    const listItems = []

    this.props.items.map(function (item, i) {
      const href = item.href
      const target = item.target
      const text = item.text

      listItems.push(
        <DropDownItem
          key={i}
          href={href}
          target={target}
          text={text}

          handleClick={handleClick}
        />
      )
    })

    // Expose UI.
    return (
      <div
        ref='dropdown'
        className='t7-dropdown'
        data-menu-align={menuAlign}
      >
        <a
          id={idTrigger}
          ref='trigger'
          aria-controls={idMenu}

          aria-expanded={isActive}
          aria-haspopup='true'
          tabIndex='0'

          className='t7-dropdown__trigger'

          onClick={toggleClick}
          onKeyDown={toggleClick}
        >
          {text}
        </a>
        <ul
          id={idMenu}
          aria-labelledby={idTrigger}

          aria-expanded={isActive}
          aria-hidden={!isActive}
          role='menu'

          className='t7-dropdown__menu'
        >
          {listItems}
        </ul>
      </div>
    )
  }
}

// Validation.
DropDown.propTypes = {
  isActive: React.PropTypes.bool,
  menuAlign: React.PropTypes.string,
  id: React.PropTypes.string,
  items: React.PropTypes.array,
  target: React.PropTypes.string,
  text: React.PropTypes.string,

  // Events.
  handleClick: React.PropTypes.func
}

// Defaults.
DropDown.defaultProps = {
  menuAlign: 'left',
  text: 'Dropdown Trigger Text',
  items: [
    {
      text: 'Dropdown Item Text #1'
    },
    {
      text: 'Dropdown Item Text #2'
    }
  ]
}

// Export.
export default DropDown
