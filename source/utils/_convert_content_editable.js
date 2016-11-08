// Utility methods.
import utils from './index'

function convertContentEditable (e) {
  const el = e.target

  // Check <tag> name.
  const tagName = el.tagName.toLowerCase()
  const isSpan = tagName === 'span'
  const isDiv = tagName === 'div'

  // Get placeholder.
  let placeholder = el.getAttribute('placeholder')
  placeholder = placeholder.trim()
  placeholder = placeholder.replace(/\s+/g, ' ')

  // Used in conditional.
  let value

  if (isSpan) {
    value = el.innerText
    value = value.trim()
    value = value.replace(/\s+/g, ' ')
  } else if (isDiv) {
    value = el.innerHTML
    value = value.trim()
    value = utils.convertToText(value)
  }

  // Check event and key.
  const isBlur = e.type === 'blur'
  const isEnter = e.keyCode === 13

  // Flag for replacement.
  const doReplaceInline = isSpan && (isBlur || isEnter)
  const doReplaceBlock = isDiv && isBlur

  // Use placeholder, if no value.
  value = value || placeholder

  // Replace, if need be.
  if (doReplaceInline) {
    el.innerHTML = value
  } else if (doReplaceBlock) {
    value = utils.convertToMarkup(value)

    el.innerHTML = value
  }
}

// Expose function.
export default convertContentEditable
