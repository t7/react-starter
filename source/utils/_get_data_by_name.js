/*
  Loops through an array, and returns
  child object with matching `*.name`.
*/
function getDataByName (data, name) {
  // Drill through data.
  let o = data.filter(function (item) {
    return item.name === name
  })

  // Single item?
  if (o.length === 1) {
    o = o[0]

  // No items?
  } else if (!o.length) {
    o = undefined
  }

  // Expose result.
  return o || {}
}

// Export.
export default getDataByName
