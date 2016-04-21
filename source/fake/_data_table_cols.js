/*

//======================================
// Generates fake data in this format...
//======================================

[
  {
    title: 'Date',
    type: 'date',
    field: 'date',
    sortable: true
  },
  {
    title: 'Description',
    field: 'description',
    sortable: true
  },
  {
    title: 'Category',
    field: 'category',
    sortable: true
  },
  {
    title: 'Amount',
    type: 'currency',
    field: 'amount',
    sortable: true
  },
  {
    title: 'Balance',
    field: 'balance',
    type: 'currency'
  }
]

*/

export default function () {
  // Columns.
  const columns = [
    {
      title: 'Date',
      type: 'date',
      field: 'date',
      sortable: true
    },
    {
      title: 'Description',
      field: 'description',
      sortable: true
    },
    {
      title: 'Category',
      field: 'category',
      sortable: true
    },
    {
      title: 'Amount',
      type: 'currency',
      field: 'amount',
      sortable: true
    },
    {
      title: 'Balance',
      field: 'balance',
      type: 'currency'
    }
  ]

  // Expose object.
  return columns
}
