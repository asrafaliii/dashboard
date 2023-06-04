export const orderDetailsColumns = [
  {
    accessorKey: "product_name",
    header: "Product Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    Cell: ({ cell }) => <span>${cell.getValue()}</span>,
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "total",
    header: "Total",
    Cell: ({ cell }) => <span>${cell.getValue()}</span>,
  },
];

export const orderDetails = [
  {
    product_name: "MacBook Pro",
    price: 892.23,
    quantity: 4,
    total: 2492.54,
  },
  {
    product_name: "Apple watch",
    price: 643.23,
    quantity: 4,
    total: 1246.54,
  },
];
