export const invoiceDataColumns = [
  {
    accessorKey: "invoice_id",
    header: "ID",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "order_number",
    header: "Order Number",
    Cell: ({ cell }) => <span>${cell.getValue()}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    //or in the component override callbacks like this
    Cell: ({ cell, row }) => (
      <div>
        {row.original.status === "Pending" && (
          <span className={`status ${cell.getValue()}`}>{cell.getValue()}</span>
        )}
        {row.original.status === "Completed" && (
          <span className={`status ${cell.getValue()}`}>{cell.getValue()}</span>
        )}
        {row.original.status === "Cancelled" && (
          <span className={`status ${cell.getValue()}`}>{cell.getValue()}</span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "total",
    header: "Total",
    Cell: ({ cell }) => <span>${cell.getValue()}</span>,
  },
];

export const invoiceData = [
  {
    id: 1,
    invoice_id: "#2290",
    date: "28 Jan, 2023",
    order_number: "Order No. 50289",
    total: 2492.54,
    status: "Completed",
  },
  {
    id: 2,
    invoice_id: "#2290",
    date: "28 Jan, 2023",
    order_number: "Order No. 50289",
    total: 2492.54,
    status: "Cancelled",
  },
  {
    id: 3,
    invoice_id: "#2290",
    date: "28 Jan, 2023",
    order_number: "Order No. 50289",
    total: 2492.54,
    status: "Completed",
  },
  {
    id: 4,
    invoice_id: "#2290",
    date: "28 Jan, 2023",
    order_number: "Order No. 50289",
    total: 2492.54,
    status: "Completed",
  },
  {
    id: 5,
    invoice_id: "#2290",
    date: "28 Jan, 2023",
    order_number: "Order No. 50289",
    total: 2492.54,
    status: "Pending",
  },
  {
    id: 6,
    invoice_id: "#2290",
    date: "28 Jan, 2023",
    order_number: "Order No. 50289",
    total: 2492.54,
    status: "Completed",
  },
];
