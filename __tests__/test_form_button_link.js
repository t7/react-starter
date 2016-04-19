/*global
describe
expect
it
*/

// Dependencies.
import React from 'react'
import T from 'react-addons-test-utils'

// UI components.
import Button from '../source/components/form_button'

// Describe `<Component/>` name.
describe('Button', function () {
  const href = 'http://example.com/'
  const target = '_blank'
  const text = 'GO'
  const title = 'Example Title'

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Button
    href={href}
    target={target}
    text={text}
    title={title}
    />
  )

  // Get button.
  const button = T.findRenderedDOMComponentWithClass(el, 't7-form__button')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // =============
  // Test for tag.
  // =============

  it('is a link tag', function () {
    const x = button.tagName.toLowerCase()

    expect(x).toBe('a')
  })

  // ==============
  // Test for href.
  // ==============

  it('has correct href', function () {
    const x = button.getAttribute('href')

    expect(x).toBe('http://example.com/')
  })

  // ================
  // Test for target.
  // ================

  it('is a link tag', function () {
    const x = button.getAttribute('target')

    expect(x).toBe('_blank')
  })

  // ==============
  // Test for text.
  // ==============

  it('has correct text', function () {
    const x = button.innerHTML

    expect(x).toBe('GO')
  })

  // ===============
  // Test for title.
  // ===============

  it('has correct title', function () {
    const x = button.getAttribute('title')

    expect(x).toBe('Example Title')
  })
})
