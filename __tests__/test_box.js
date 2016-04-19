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
import Box from '../source/components/box'

// Describe `<Component/>` name.
describe('Box', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Box>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </Box>
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-box')

  // Get content.
  const content = parent.querySelectorAll('p')

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
})
