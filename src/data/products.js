export const productsColumns = [
  {
    accessorKey: 'product_name',
    header: 'Product',
  },
  {
    accessorKey: 'image',
    header: 'Image',
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <img src={cell.getValue()} alt="" width={60} />
      </div>
    ),
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
  },
  {
    accessorKey: 'price',
    header: 'Price',
    Cell: ({ cell }) => <span>${cell.getValue()}</span>,
  },
  {
    accessorKey: 'instock',
    header: 'Status',
    Cell: ({ cell, row }) => (
      <div>
        {row.original.instock && (
          <span style={{ color: '#388b84', textTransform: 'capitalize' }}>
            In Stock
          </span>
        )}
        {!row.original.instock && (
          <span style={{ color: '#fd4332', textTransform: 'capitalize' }}>
            Out of Stock
          </span>
        )}
      </div>
    ),
  },
];

export const products = [
  {
    id: 1,
    product_name: 'iPhone 12',
    category: 'Mobile Phones',
    price: 799,
    quantity: 10,
    instock: false,
    short_description:
      'The latest iPhone with a Super Retina XDR display and 5G capabilities',
    image: '/images/products/317JiGToz-L.jpg',
  },
  {
    id: 2,
    product_name: 'MacBook Pro',
    category: 'Laptops',
    price: 1499,
    quantity: 5,
    instock: true,
    short_description:
      'A powerful laptop with a Retina display and an 8-core processor',
    image: '/images/products/macbook-pro-2021-cnet-review-15.webp',
  },
  {
    id: 3,
    product_name: 'Apple Watch Series 6',
    category: 'Watches',
    price: 399,
    quantity: 15,
    instock: false,
    short_description:
      'The latest Apple Watch with a always-on Retina display and various health features',
    image:
      '/images/products/apple-watch-series-6-lte-gold-stainless-deep-navy-44mm-mjxl3lla.jfif',
  },
  {
    id: 4,
    product_name: 'Canon EOS R6',
    category: 'Cameras',
    price: 1999,
    quantity: 3,
    instock: true,
    short_description:
      'A professional mirrorless camera with a 20 megapixel full-frame CMOS sensor',
    image: '/images/products/Canon-EOS-R6-lead-01.jpeg',
  },
  {
    id: 5,
    product_name: 'Google Pixel 5',
    category: 'Mobile Phones',
    price: 699,
    quantity: 8,
    instock: false,
    short_description:
      'A flagship smartphone with a 5G-compatible processor and a 6-inch OLED display',
    image: '/images/products/Google-Pixel-5-Review-Brilliant-but-outshined.jpg',
  },
  {
    id: 6,
    product_name: 'Dell XPS 13',
    category: 'Laptops',
    price: 1299,
    quantity: 12,
    instock: true,
    short_description:
      'A thin and lightweight laptop with an InfinityEdge display and an 11th Gen Intel Core processor',
    image: '/images/products/05-dell-xps-13.webp',
  },
  {
    id: 7,
    product_name: 'Samsung Galaxy Watch 3',
    category: 'Watches',
    price: 329,
    quantity: 20,
    instock: true,
    short_description:
      'A smartwatch with various health and fitness tracking features, as well as mobile payments',
    image: '/images/products/samsung-galaxy-watch-3-review-header.jpg',
  },
  {
    id: 8,
    product_name: 'Lenovo ThinkPad X1 Carbon',
    category: 'Laptops',
    price: 1199,
    quantity: 7,
    instock: false,
    short_description:
      'A lightweight business laptop with a 14-inch Full HD display and an Intel Core i7 processor',
    image:
      '/images/products/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.webp',
  },
  {
    id: 9,
    product_name: 'Fitbit Versa 3',
    category: 'Watches',
    price: 229,
    quantity: 25,
    instock: false,
    short_description:
      'A smartwatch with GPS, music storage, and various health and fitness tracking features',
    image: '/images/products/fall21-features-cover.jpg',
  },
  {
    id: 10,
    product_name: 'Asus ROG Zephyrus G14',
    category: 'Laptops',
    price: 1199,
    quantity: 10,
    instock: true,
    short_description:
      'A gaming laptop with a 14-inch Full HD display and an AMD Ryzen 9 processor',
    image:
      '/images/products/Front_view_of_the_Moonlight_White_ROG_Zephyrus_G14_with_the_ROG_Fearless_Eye_logo_on_screen44.jpg',
  },
  {
    id: 11,
    product_name: 'Garmin Fenix 6S',
    category: 'Watches',
    price: 599,
    quantity: 15,
    instock: true,
    short_description:
      'A rugged smartwatch with GPS, music storage, and various outdoor and fitness tracking features',
    image: '/images/products/becky-stern-garmin-fenix-review-03-1024x768.jpg',
  },
  {
    id: 12,
    product_name: 'Fujifilm X-T4',
    category: 'Cameras',
    price: 1699,
    quantity: 5,
    instock: false,
    short_description:
      'A high-end mirrorless camera with a 26 megapixel APS-C sensor and 5-axis in-body image stabilization',
    image: '/images/products/FujifilmX-T4-lead-02.jpeg',
  },
  {
    id: 13,
    product_name: 'LG V60 ThinQ',
    category: 'Mobile Phones',
    price: 699,
    quantity: 8,
    instock: true,
    short_description:
      'A flagship smartphone with a 5G-compatible processor, a 6.8-inch OLED display, and a triple camera setup',
    image: '/images/products/51oQx6Xh04L.jpg',
  },
  {
    id: 14,
    product_name: 'HP Spectre x360',
    category: 'Laptops',
    price: 1199,
    quantity: 12,
    instock: true,
    short_description:
      'A convertible laptop with a 13.3-inch Full HD display and an Intel Core i7 processor',
    image: '/images/products/014-hp-spectre-x360-14.webp',
  },
  {
    id: 15,
    product_name: 'TicWatch Pro 3',
    category: 'Watches',
    price: 259,
    quantity: 20,
    instock: false,
    short_description:
      'A smartwatch with GPS, music storage, and various health and fitness tracking features, as well as a dual-display design',
    image: '/images/products/gsmarena_009.jpg',
  },
  {
    id: 16,
    product_name: 'Panasonic Lumix S1H',
    category: 'Cameras',
    price: 2299,
    quantity: 3,
    instock: true,
    short_description:
      'A professional mirrorless camera with a 24.2 megapixel full-frame sensor and 6K video recording capabilities',
    image: '/images/products/Panasonic-S1H.jpg',
  },
  {
    id: 17,
    product_name: 'OnePlus 9',
    category: 'Mobile Phones',
    price: 699,
    quantity: 10,
    instock: true,
    short_description:
      'A flagship smartphone with a 5G-compatible processor, a 6.5-inch AMOLED display, and a triple camera setup',
    image: '/images/products/onePlus.webp',
  },
];
