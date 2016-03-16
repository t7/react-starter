/*
  Loops through an array, and returns
  child object with matching `*.name`.
*/
function getDataByName(arr, name) {
  // Populated in loop.
  var o = []

  // Drill through data.
  arr.forEach(function (item) {
    if (item.name === name) {
      o.push(item)
    }
  })

  // Single item?
  if (o.length === 1) {
    o = o[0]

  // No items?
  } else if (!o.length) {
    o = undefined
  }

  // Expose result.
  return o
}

// Export.
export default getDataByName
