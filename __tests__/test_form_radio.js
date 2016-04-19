/*global
describe
expect
it
*/

// Dependencies.
import React from 'react'
import T from 'react-addons-test-utils'

// UI components.
import Radio from '../source/components/form_radio'

// Describe `<Component/>` name.
describe('Radio', function () {
  const disabled = true
  const id = 'example_id'
  const label = 'example_label'
  const name = 'example_name'
  const required = true
  const value = 'example_value'

  // Called from `it responds to clicks`.
  function handleChange (e, value, checked) {
    expect(checked).toBe(true)
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Radio
      disabled={disabled}
      id={id}
      label={label}
      name={name}
      required={required}
      value={value}

      handleChange={handleChange}
    />
  )

  // Get parent label.
  const parent = T.findRenderedDOMComponentWithTag(el, 'label')

  // Get radio.
  const radio = parent.querySelector('input[type="radio"]')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ===============
  // Test for label.
  // ===============

  it('has associated label', function () {
    expect(parent.htmlFor).toBe(radio.id)
    expect(parent.textContent.trim()).toBe('example_label')
  })

  // ===============
  // Test for radio.
  // ===============

  it('is not checked', function () {
    expect(radio.checked).toBe(false)
  })

  it('is disabled', function () {
    expect(radio.disabled).toBe(true)
  })

  it('has correct ID', function () {
    expect(radio.id).toBe('example_id')
  })

  it('has correct name', function () {
    expect(radio.name).toBe('example_name')
  })

  it('has correct value', function () {
    expect(radio.value).toBe('example_value')
  })

  it('is required', function () {
    expect(radio.hasAttribute('required')).toBe(true)
  })

  it('responds to clicks', function () {
    // Fake click to check.
    T.Simulate.change(radio, {
      target: {
        checked: true
      }
    })
  })
})
