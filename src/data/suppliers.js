export const suppliersColumns = [
  {
    accessorKey: "logo", //access nested data with dot notation
    header: "Logo",
    width: 100,
    Cell: ({ cell }) => (
      <div>
        <img src={cell.getValue()} alt="" width={50} />
      </div>
    ),
  },
  {
    accessorKey: "supplier_name", //access nested data with dot notation
    header: "Supplier's Name",
  },
  {
    accessorKey: "contact_name", //access nested data with dot notation
    header: "Contact Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

export const suppliers = [
  {
    supplier_id: 1,
    supplier_name: "Acme Corporation",
    contact_name: "John Smith",
    phone: "212-555-1212",
    email: "johnsmith@acme.com",
    logo: "/images/suppliers/acme.png",
  },
  {
    supplier_id: 2,
    supplier_name: "XYZ Inc.",
    contact_name: "Jane Doe",
    phone: "212-555-2323",
    email: "janedoe@xyz.com",
    logo: "/images/suppliers/xyz.png",
  },
  {
    supplier_id: 3,
    supplier_name: "ABC Limited",
    contact_name: "Bob Johnson",
    phone: "212-555-3434",
    email: "bobjohnson@abc.com",
    logo: "/images/suppliers/abc.png",
  },
  {
    supplier_id: 4,
    supplier_name: "ADef Corp.",
    contact_name: "Alice Williams",
    phone: "212-555-4545",
    email: "alicewilliams@def.com",
    logo: "/images/suppliers/adef.png",
  },
  {
    supplier_id: 5,
    supplier_name: "Ghi Company",
    contact_name: "Mike Thompson",
    phone: "212-555-5656",
    email: "mikethompson@example",
    logo: "/images/suppliers/ghi.jpg",
  },
  {
    supplier_id: 6,
    supplier_name: "Jkl Enterprises",
    contact_name: "Samantha Jones",
    phone: "212-555-6767",
    email: "samanthajones@jkl.com",
    logo: "/images/suppliers/jkl.jpg",
  },
  {
    supplier_id: 7,
    supplier_name: "Mno Inc.",
    contact_name: "Chris Anderson",
    phone: "212-555-7878",
    email: "chrisanderson@mno.com",
    logo: "/images/suppliers/mno.png",
  },
  {
    supplier_id: 8,
    supplier_name: "Pqr Corporation",
    contact_name: "Emily Williams",
    phone: "212-555-8989",
    email: "emilywilliams@pqr.com",
    logo: "/images/suppliers/pqr.png",
  },
  {
    supplier_id: 9,
    supplier_name: "Stuart Company",
    contact_name: "David Johnson",
    phone: "212-555-9898",
    email: "davidjohnson@stu.com",
    logo: "/images/suppliers/stuart.png",
  },
  {
    supplier_id: 10,
    supplier_name: "Vwx Industries",
    contact_name: "Sarah Smith",
    phone: "212-555-0909",
    email: "sarahsmith@vwx.com",
    logo: "/images/suppliers/abc.png",
  },
];
