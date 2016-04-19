// Dependencies.
import utils from '../utils'

/*

//======================================
// Generates fake data in this format...
//======================================

[
  {
    date: 1444338711008,
    description: "Lorem ipsum dolor sit amet...",
    category: "Expense",
    amount: -657.8544315416366,
    balance: 19342.145568458363
  },
  {
    date: 1444252311008,
    description: "Ut enim ad minim veniam...",
    category: "Revenue",
    amount: 225.9504753164947,
    balance: 19568.096043774858
  }

  // Etc.
]

*/

export default function (count, balance) {
  // Number of rows to generate.
  count = count || 60

  // Starting balance.
  balance = balance || 20000

  // Random currency.
  function generateCurrency (negative) {
    var modifier = 1

    if (negative) {
      modifier = -1
    }

    var num = Math.random()
    num = num * 100
    num = num * modifier

    return num
  }

  // Generate row.
  function generateRow (i) {
    const x = i % 2 === 0
    const amount = generateCurrency(x)

    const description = x
      ? 'Lorem ipsum dolor sit amet...'
      : 'Ut enim ad minim veniam...'

    const category = x
      ? 'Withdrawl'
      : 'Deposit'

    return {
      date: utils.today(-i),
      description: description,
      category: category,
      amount: amount,
      balance: balance += amount
    }
  }

  // Used in loop.
  var data = []

  // Build data.
  for (let i = 0; i < count; i++) {
    let row = generateRow(i)
    data.push(row)
  }

  // Expose object.
  return data
}
