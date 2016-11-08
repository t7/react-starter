// Returns 1 day, in milliseconds.
function today (offset) {
  const isValid = !isNaN(offset)

  let day = new Date().getTime()

  if (isValid) {
    day = day + (offset * 86400000)
  }

  return day
}

// Expose function.
export default today
