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
import Image from '../source/components/image'

// Describe `<Component/>` name.
describe('Image', function () {
  const alt = 'example_alt'
  const border = '#999'
  const src = 'photo.jpg'
  const width = '100'
  const height = '50'

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Image
      alt={alt}
      border={border}
      src={src}
      width={width}
      height={height}
    />
  )

  // Get the `<img/>`.
  const image = T.findRenderedDOMComponentWithTag(el, 'img')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ===============
  // Test for image.
  // ===============

  it('has alt text', function () {
    expect(image.getAttribute('alt')).toBe('example_alt')
  })

  it('has a border', function () {
    expect(image.getAttribute('style')).toContain('1px solid #999')
  })

  it('has correct source', function () {
    expect(image.getAttribute('src')).toBe('photo.jpg')
  })

  it('has correct width', function () {
    expect(image.getAttribute('width')).toBe('100')
  })

  it('has correct height', function () {
    expect(image.getAttribute('height')).toBe('50')
  })
})
