export const brandsColumns = [
  {
    accessorKey: "brand_logo", //access nested data with dot notation
    header: "Logo",
    width: 100,
    Cell: ({ cell }) => (
      <div>
        <img src={cell.getValue()} alt="" width={50} />
      </div>
    ),
  },
  {
    accessorKey: "brand_name", //access nested data with dot notation
    header: "Brand Name",
  },
];

export const brands = [
  {
    brand_id: 1,
    brand_name: "Apple",
    brand_logo: "/images/brands/apple.png",
  },
  {
    brand_id: 2,
    brand_name: "Samsung",
    brand_logo: "/images/brands/samsung.png",
  },
  {
    brand_id: 3,
    brand_name: "Google",
    brand_logo: "/images/brands/google.png",
  },
  {
    brand_id: 4,
    brand_name: "Microsoft",
    brand_logo: "/images/brands/microsoft.png",
  },
  {
    brand_id: 5,
    brand_name: "Dell",
    brand_logo: "/images/brands/dell.png",
  },
  {
    brand_id: 6,
    brand_name: "Lenovo",
    brand_logo: "/images/brands/lenovo.png",
  },
  {
    brand_id: 7,
    brand_name: "HP",
    brand_logo: "/images/brands/hp.png",
  },
  {
    brand_id: 8,
    brand_name: "Asus",
    brand_logo: "/images/brands/asus.png",
  },
  {
    brand_id: 9,
    brand_name: "Acer",
    brand_logo: "/images/brands/acer.png",
  },
];
