/*global
describe
expect
it
jest
*/

jest.disableAutomock()

// Dependencies.
import React from 'react'
import T from 'react-addons-test-utils'

// UI components.
import RadioList from '../source/components/form_radio_list'

// Describe `<Component/>` name.
describe('RadioList', function () {
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
    <RadioList options={options} />
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-list-clean')

  // Get items.
  const items = parent.querySelectorAll('li')

  // Get radios.
  const radio = parent.querySelectorAll('input[type="radio"]')

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

  // ================
  // Test for radios.
  // ================

  it('has radios', function () {
    expect(radio.length).toBe(2)
  })

  it('has shared name', function () {
    expect(radio[0].name).toBe(radio[1].name)
  })
})
