/*global
describe
expect
it
*/

// Dependencies.
import React from 'react'
import T from 'react-addons-test-utils'

// UI components.
import BoxWarn from '../source/components/box_warn'

// Describe `<Component/>` name.
describe('BoxWarn', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <BoxWarn>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </BoxWarn>
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-box--warn')

  // Get content.
  const content = parent.querySelectorAll('p')

  // Get close link.
  const close = parent.querySelector('.t7-box__close')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // =================
  // Test for content.
  // =================

  it('has content', function () {
    expect(content.length).toBe(2)
  })

  // ===============
  // Test for close.
  // ===============

  it('responds to close', function () {
    T.Simulate.click(close)

    // Box should be hidden.
    expect(parent.getAttribute('aria-hidden')).toBe('true')
  })
})
