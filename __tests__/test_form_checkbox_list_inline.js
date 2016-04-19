/*global
describe
expect
it
*/

// Dependencies.
import React from 'react'
import T from 'react-addons-test-utils'

// UI components.
import CheckboxListInline from '../source/components/form_checkbox_list_inline'

// Describe `<Component/>` name.
describe('CheckboxListInline', function () {
  const options = [
    {
      label: 'example_label_0'
    },
    {
      label: 'example_label_1'
    }
  ]

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <CheckboxListInline options={options} />
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-list-inline')

  // Get items.
  const items = parent.querySelectorAll('li')

  // Get checkboxes.
  const checkboxes = parent.querySelectorAll('input[type="checkbox"]')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ====================
  // Test for list items.
  // ====================

  it('has list items', function () {
    expect(items.length).toBe(2)
  })

  // ====================
  // Test for checkboxes.
  // ====================

  it('has checkboxes', function () {
    expect(checkboxes.length).toBe(2)
  })
})
