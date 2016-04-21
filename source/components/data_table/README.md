This component can be used like so.

```js
/*
  You would likely get this data from an API,
  but for this example, these are hard-coded
  arrays for the columns and data (rows).
*/

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

const data = [
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
]
```

To use the component, pass these props.

**Note:** The following example shows the defaults for each prop. Meaning, `pageTop` is default. If you want pagination on the bottom, you could set `pageTop={false}` and `pageBottom={true}`.

```xml
<DataTable
  columns={columns}
  data={data}

  pageTop={true}
  pageBottom={false}
  pageSize={20}
  sortIndex={0}
  sortDirection='desc'
/>
```