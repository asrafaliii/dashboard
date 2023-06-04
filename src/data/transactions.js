export const transactionsColumns = [
  {
    accessorKey: "payment_number", //access nested data with dot notation
    header: "Payment Number",
  },
  {
    accessorKey: "date_and_time",
    header: "Date and Time",
  },
  {
    accessorKey: "amount", //normal accessorKey
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    //or in the component override callbacks like this
    Cell: ({ cell, row }) => (
      <div>
        {row.original.status === "Completed" && (
          <span
            className="status"
            style={{ color: "#388b84", backgroundColor: "#388b8433" }}
          >
            {cell.getValue()}
          </span>
        )}
        {row.original.status === "Declined" && (
          <span
            className="status"
            style={{ color: "#fd4332", backgroundColor: "#fd433233" }}
          >
            {cell.getValue()}
          </span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

export const transactions = [
  {
    transaction_id: 1,
    payment_number: "#7823",
    date_and_time: "January 1, 2021 10:00 AM",
    amount: 799,
    status: "Completed",
  },
  {
    transaction_id: 2,
    payment_number: "#7824",
    date_and_time: "January 2, 2021 12:00 PM",
    amount: 1499,
    status: "Declined",
  },
  {
    transaction_id: 3,
    payment_number: "#7825",
    date_and_time: "January 3, 2021 2:00 PM",
    amount: 798,
    status: "Completed",
  },
  {
    transaction_id: 4,
    payment_number: "#7826",
    date_and_time: "January 4, 2021 4:00 PM",
    amount: 1999,
    status: "Declined",
  },
  {
    transaction_id: 5,
    payment_number: "#7827",
    date_and_time: "January 5, 2021 6:00 PM",
    amount: 699,
    status: "Completed",
  },
  {
    transaction_id: 6,
    payment_number: "#7828",
    date_and_time: "January 6, 2021 8:00 PM",
    amount: 1299,
    status: "Declined",
  },
  {
    transaction_id: 7,
    payment_number: "#7829",
    date_and_time: "January 7, 2021 10:00 PM",
    amount: 329,
    status: "Completed",
  },
  {
    transaction_id: 8,
    payment_number: "#7830",
    date_and_time: "January 8, 2021 12:00 AM",
    amount: 2499,
    status: "Completed",
  },
  {
    transaction_id: 9,
    payment_number: "#7831",
    date_and_time: "January 9, 2021 2:00 AM",
    amount: 1199,
    status: "Declined",
  },
  {
    transaction_id: 10,
    payment_number: "#7832",
    date_and_time: "January 10, 2021 4:00 AM",
    amount: 229,
    status: "Completed",
  },
];
