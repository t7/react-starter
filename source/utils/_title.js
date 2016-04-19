// Set the page `<title>`.
function title (props) {
  // Fallback site title.
  const suffix =
    document
    .querySelector('title')
    .getAttribute('data-suffix') ||
    ''

  // Used in conditional.
  var title = props.route.title

  // Is there a title?
  if (title) {
    title = title + ' | ' + suffix

  // If no title exists.
  } else {
    title = suffix
  }

  // Set title.
  document.title = title
}

// Expose function.
export default title
