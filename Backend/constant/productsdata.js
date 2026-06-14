const products =
  [
    {
      "name": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "brand": "Essence",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "price": {
        "mrp": 11.99,
        "cost": 9.99,
        "discount": 17
      },
      "stock": 99,
      "averageRating": 2.56,
      "totalReviews": 353
    },
    {
      "name": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "brand": "Glamour Beauty",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 34,
      "averageRating": 2.86,
      "totalReviews": 174
    },
    {
      "name": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "brand": "Velvet Touch",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
      ],
      "price": {
        "mrp": 17.99,
        "cost": 14.99,
        "discount": 17
      },
      "stock": 89,
      "averageRating": 4.64,
      "totalReviews": 349
    },
    {
      "name": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "brand": "Chic Cosmetics",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
      ],
      "price": {
        "mrp": 15.59,
        "cost": 12.99,
        "discount": 17
      },
      "stock": 91,
      "averageRating": 4.36,
      "totalReviews": 72
    },
    {
      "name": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "category": "beauty",
      "brand": "Nail Couture",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
      ],
      "price": {
        "mrp": 10.79,
        "cost": 8.99,
        "discount": 17
      },
      "stock": 79,
      "averageRating": 4.32,
      "totalReviews": 331
    },
    {
      "name": "Calvin Klein CK One",
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      "category": "fragrances",
      "brand": "Calvin Klein",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
      ],
      "price": {
        "mrp": 59.99,
        "cost": 49.99,
        "discount": 17
      },
      "stock": 29,
      "averageRating": 4.37,
      "totalReviews": 52
    },
    {
      "name": "Chanel Coco Noir Eau De",
      "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      "category": "fragrances",
      "brand": "Chanel",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
      ],
      "price": {
        "mrp": 155.99,
        "cost": 129.99,
        "discount": 17
      },
      "stock": 58,
      "averageRating": 4.26,
      "totalReviews": 28
    },
    {
      "name": "Dior J'adore",
      "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      "category": "fragrances",
      "brand": "Dior",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"
      ],
      "price": {
        "mrp": 107.99,
        "cost": 89.99,
        "discount": 17
      },
      "stock": 98,
      "averageRating": 3.8,
      "totalReviews": 499
    },
    {
      "name": "Dolce Shine Eau de",
      "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      "category": "fragrances",
      "brand": "Dolce & Gabbana",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
      ],
      "price": {
        "mrp": 83.99,
        "cost": 69.99,
        "discount": 17
      },
      "stock": 4,
      "averageRating": 3.96,
      "totalReviews": 21
    },
    {
      "name": "Gucci Bloom Eau de",
      "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      "category": "fragrances",
      "brand": "Gucci",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
      ],
      "price": {
        "mrp": 95.99,
        "cost": 79.99,
        "discount": 17
      },
      "stock": 91,
      "averageRating": 2.74,
      "totalReviews": 54
    },
    {
      "name": "Annibale Colombo Bed",
      "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      "category": "furniture",
      "brand": "Annibale Colombo",
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"
      ],
      "price": {
        "mrp": 2279.99,
        "cost": 1899.99,
        "discount": 17
      },
      "stock": 88,
      "averageRating": 4.77,
      "totalReviews": 387
    },
    {
      "name": "Annibale Colombo Sofa",
      "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      "category": "furniture",
      "brand": "Annibale Colombo",
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"
      ],
      "price": {
        "mrp": 2999.99,
        "cost": 2499.99,
        "discount": 17
      },
      "stock": 60,
      "averageRating": 3.92,
      "totalReviews": 77
    },
    {
      "name": "Bedside Table African Cherry",
      "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      "category": "furniture",
      "brand": "Furniture Co.",
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp"
      ],
      "price": {
        "mrp": 359.99,
        "cost": 299.99,
        "discount": 17
      },
      "stock": 64,
      "averageRating": 2.87,
      "totalReviews": 174
    },
    {
      "name": "Knoll Saarinen Executive Conference Chair",
      "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      "category": "furniture",
      "brand": "Knoll",
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp"
      ],
      "price": {
        "mrp": 599.99,
        "cost": 499.99,
        "discount": 17
      },
      "stock": 26,
      "averageRating": 4.88,
      "totalReviews": 220
    },
    {
      "name": "Wooden Bathroom Sink With Mirror",
      "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      "category": "furniture",
      "brand": "Bath Trends",
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"
      ],
      "price": {
        "mrp": 959.99,
        "cost": 799.99,
        "discount": 17
      },
      "stock": 7,
      "averageRating": 3.59,
      "totalReviews": 168
    },
    {
      "name": "Apple",
      "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
      ],
      "price": {
        "mrp": 2.39,
        "cost": 1.99,
        "discount": 17
      },
      "stock": 8,
      "averageRating": 4.19,
      "totalReviews": 138
    },
    {
      "name": "Beef Steak",
      "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"
      ],
      "price": {
        "mrp": 15.59,
        "cost": 12.99,
        "discount": 17
      },
      "stock": 86,
      "averageRating": 4.47,
      "totalReviews": 322
    },
    {
      "name": "Cat Food",
      "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
      ],
      "price": {
        "mrp": 10.79,
        "cost": 8.99,
        "discount": 17
      },
      "stock": 46,
      "averageRating": 3.13,
      "totalReviews": 453
    },
    {
      "name": "Chicken Meat",
      "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
        "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"
      ],
      "price": {
        "mrp": 11.99,
        "cost": 9.99,
        "discount": 17
      },
      "stock": 97,
      "averageRating": 3.19,
      "totalReviews": 83
    },
    {
      "name": "Cooking Oil",
      "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"
      ],
      "price": {
        "mrp": 5.99,
        "cost": 4.99,
        "discount": 17
      },
      "stock": 10,
      "averageRating": 4.8,
      "totalReviews": 48
    },
    {
      "name": "Cucumber",
      "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"
      ],
      "price": {
        "mrp": 1.79,
        "cost": 1.49,
        "discount": 17
      },
      "stock": 84,
      "averageRating": 4.07,
      "totalReviews": 350
    },
    {
      "name": "Dog Food",
      "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"
      ],
      "price": {
        "mrp": 13.19,
        "cost": 10.99,
        "discount": 17
      },
      "stock": 71,
      "averageRating": 4.55,
      "totalReviews": 175
    },
    {
      "name": "Eggs",
      "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"
      ],
      "price": {
        "mrp": 3.59,
        "cost": 2.99,
        "discount": 17
      },
      "stock": 9,
      "averageRating": 2.53,
      "totalReviews": 244
    },
    {
      "name": "Fish Steak",
      "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"
      ],
      "price": {
        "mrp": 17.99,
        "cost": 14.99,
        "discount": 17
      },
      "stock": 74,
      "averageRating": 3.78,
      "totalReviews": 348
    },
    {
      "name": "Green Bell Pepper",
      "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"
      ],
      "price": {
        "mrp": 1.55,
        "cost": 1.29,
        "discount": 17
      },
      "stock": 33,
      "averageRating": 3.25,
      "totalReviews": 77
    },
    {
      "name": "Green Chili Pepper",
      "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
      ],
      "price": {
        "mrp": 1.19,
        "cost": 0.99,
        "discount": 17
      },
      "stock": 3,
      "averageRating": 3.66,
      "totalReviews": 385
    },
    {
      "name": "Honey Jar",
      "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"
      ],
      "price": {
        "mrp": 8.39,
        "cost": 6.99,
        "discount": 17
      },
      "stock": 34,
      "averageRating": 3.97,
      "totalReviews": 339
    },
    {
      "name": "Ice Cream",
      "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"
      ],
      "price": {
        "mrp": 6.59,
        "cost": 5.49,
        "discount": 17
      },
      "stock": 27,
      "averageRating": 3.39,
      "totalReviews": 443
    },
    {
      "name": "Juice",
      "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"
      ],
      "price": {
        "mrp": 4.79,
        "cost": 3.99,
        "discount": 17
      },
      "stock": 50,
      "averageRating": 3.94,
      "totalReviews": 57
    },
    {
      "name": "Kiwi",
      "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"
      ],
      "price": {
        "mrp": 2.99,
        "cost": 2.49,
        "discount": 17
      },
      "stock": 99,
      "averageRating": 4.93,
      "totalReviews": 93
    },
    {
      "name": "Lemon",
      "description": "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/lemon/1.webp"
      ],
      "price": {
        "mrp": 0.95,
        "cost": 0.79,
        "discount": 17
      },
      "stock": 31,
      "averageRating": 3.53,
      "totalReviews": 277
    },
    {
      "name": "Milk",
      "description": "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/milk/1.webp"
      ],
      "price": {
        "mrp": 4.19,
        "cost": 3.49,
        "discount": 17
      },
      "stock": 27,
      "averageRating": 2.61,
      "totalReviews": 310
    },
    {
      "name": "Mulberry",
      "description": "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/mulberry/1.webp"
      ],
      "price": {
        "mrp": 5.99,
        "cost": 4.99,
        "discount": 17
      },
      "stock": 99,
      "averageRating": 4.95,
      "totalReviews": 54
    },
    {
      "name": "Nescafe Coffee",
      "description": "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/1.webp"
      ],
      "price": {
        "mrp": 9.59,
        "cost": 7.99,
        "discount": 17
      },
      "stock": 57,
      "averageRating": 4.82,
      "totalReviews": 318
    },
    {
      "name": "Potatoes",
      "description": "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/potatoes/1.webp"
      ],
      "price": {
        "mrp": 2.75,
        "cost": 2.29,
        "discount": 17
      },
      "stock": 13,
      "averageRating": 4.81,
      "totalReviews": 189
    },
    {
      "name": "Protein Powder",
      "description": "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/protein-powder/1.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 80,
      "averageRating": 4.18,
      "totalReviews": 292
    },
    {
      "name": "Red Onions",
      "description": "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/red-onions/1.webp"
      ],
      "price": {
        "mrp": 2.39,
        "cost": 1.99,
        "discount": 17
      },
      "stock": 82,
      "averageRating": 4.2,
      "totalReviews": 76
    },
    {
      "name": "Rice",
      "description": "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/rice/1.webp"
      ],
      "price": {
        "mrp": 7.19,
        "cost": 5.99,
        "discount": 17
      },
      "stock": 59,
      "averageRating": 3.18,
      "totalReviews": 269
    },
    {
      "name": "Soft Drinks",
      "description": "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/1.webp"
      ],
      "price": {
        "mrp": 2.39,
        "cost": 1.99,
        "discount": 17
      },
      "stock": 53,
      "averageRating": 4.75,
      "totalReviews": 283
    },
    {
      "name": "Strawberry",
      "description": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/strawberry/1.webp"
      ],
      "price": {
        "mrp": 4.79,
        "cost": 3.99,
        "discount": 17
      },
      "stock": 46,
      "averageRating": 3.08,
      "totalReviews": 186
    },
    {
      "name": "Tissue Paper Box",
      "description": "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/1.webp",
        "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/2.webp"
      ],
      "price": {
        "mrp": 2.99,
        "cost": 2.49,
        "discount": 17
      },
      "stock": 86,
      "averageRating": 2.69,
      "totalReviews": 213
    },
    {
      "name": "Water",
      "description": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
      "category": "groceries",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/water/1.webp"
      ],
      "price": {
        "mrp": 1.19,
        "cost": 0.99,
        "discount": 17
      },
      "stock": 53,
      "averageRating": 4.96,
      "totalReviews": 74
    },
    {
      "name": "Decoration Swing",
      "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
      "category": "home-decoration",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/2.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/3.webp"
      ],
      "price": {
        "mrp": 71.99,
        "cost": 59.99,
        "discount": 17
      },
      "stock": 47,
      "averageRating": 3.16,
      "totalReviews": 470
    },
    {
      "name": "Family Tree Photo Frame",
      "description": "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
      "category": "home-decoration",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/1.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 77,
      "averageRating": 4.53,
      "totalReviews": 132
    },
    {
      "name": "House Showpiece Plant",
      "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
      "category": "home-decoration",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/1.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/2.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/3.webp"
      ],
      "price": {
        "mrp": 47.99,
        "cost": 39.99,
        "discount": 17
      },
      "stock": 28,
      "averageRating": 4.67,
      "totalReviews": 347
    },
    {
      "name": "Plant Pot",
      "description": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
      "category": "home-decoration",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/2.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/3.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/4.webp"
      ],
      "price": {
        "mrp": 17.99,
        "cost": 14.99,
        "discount": 17
      },
      "stock": 59,
      "averageRating": 3.01,
      "totalReviews": 209
    },
    {
      "name": "Table Lamp",
      "description": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
      "category": "home-decoration",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp"
      ],
      "price": {
        "mrp": 59.99,
        "cost": 49.99,
        "discount": 17
      },
      "stock": 9,
      "averageRating": 3.55,
      "totalReviews": 473
    },
    {
      "name": "Bamboo Spatula",
      "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp"
      ],
      "price": {
        "mrp": 9.59,
        "cost": 7.99,
        "discount": 17
      },
      "stock": 37,
      "averageRating": 3.27,
      "totalReviews": 114
    },
    {
      "name": "Black Aluminium Cup",
      "description": "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/1.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/2.webp"
      ],
      "price": {
        "mrp": 7.19,
        "cost": 5.99,
        "discount": 17
      },
      "stock": 75,
      "averageRating": 4.46,
      "totalReviews": 166
    },
    {
      "name": "Black Whisk",
      "description": "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/1.webp"
      ],
      "price": {
        "mrp": 11.99,
        "cost": 9.99,
        "discount": 17
      },
      "stock": 73,
      "averageRating": 3.9,
      "totalReviews": 35
    },
    {
      "name": "Boxed Blender",
      "description": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/1.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/2.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/3.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/4.webp"
      ],
      "price": {
        "mrp": 47.99,
        "cost": 39.99,
        "discount": 17
      },
      "stock": 9,
      "averageRating": 4.56,
      "totalReviews": 239
    },
    {
      "name": "Carbon Steel Wok",
      "description": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/1.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 40,
      "averageRating": 4.05,
      "totalReviews": 172
    },
    {
      "name": "Chopping Board",
      "description": "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/1.webp"
      ],
      "price": {
        "mrp": 15.59,
        "cost": 12.99,
        "discount": 17
      },
      "stock": 14,
      "averageRating": 3.7,
      "totalReviews": 311
    },
    {
      "name": "Citrus Squeezer Yellow",
      "description": "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/1.webp"
      ],
      "price": {
        "mrp": 10.79,
        "cost": 8.99,
        "discount": 17
      },
      "stock": 22,
      "averageRating": 4.63,
      "totalReviews": 409
    },
    {
      "name": "Egg Slicer",
      "description": "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/1.webp"
      ],
      "price": {
        "mrp": 8.39,
        "cost": 6.99,
        "discount": 17
      },
      "stock": 40,
      "averageRating": 3.09,
      "totalReviews": 253
    },
    {
      "name": "Electric Stove",
      "description": "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/1.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/2.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/3.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/4.webp"
      ],
      "price": {
        "mrp": 59.99,
        "cost": 49.99,
        "discount": 17
      },
      "stock": 21,
      "averageRating": 4.11,
      "totalReviews": 59
    },
    {
      "name": "Fine Mesh Strainer",
      "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/1.webp"
      ],
      "price": {
        "mrp": 11.99,
        "cost": 9.99,
        "discount": 17
      },
      "stock": 85,
      "averageRating": 3.04,
      "totalReviews": 233
    },
    {
      "name": "Fork",
      "description": "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/1.webp"
      ],
      "price": {
        "mrp": 4.79,
        "cost": 3.99,
        "discount": 17
      },
      "stock": 7,
      "averageRating": 3.11,
      "totalReviews": 348
    },
    {
      "name": "Glass",
      "description": "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/1.webp"
      ],
      "price": {
        "mrp": 5.99,
        "cost": 4.99,
        "discount": 17
      },
      "stock": 46,
      "averageRating": 4.02,
      "totalReviews": 432
    },
    {
      "name": "Grater Black",
      "description": "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/1.webp"
      ],
      "price": {
        "mrp": 13.19,
        "cost": 10.99,
        "discount": 17
      },
      "stock": 84,
      "averageRating": 3.21,
      "totalReviews": 118
    },
    {
      "name": "Hand Blender",
      "description": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/1.webp"
      ],
      "price": {
        "mrp": 41.99,
        "cost": 34.99,
        "discount": 17
      },
      "stock": 84,
      "averageRating": 3.86,
      "totalReviews": 94
    },
    {
      "name": "Ice Cube Tray",
      "description": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/1.webp"
      ],
      "price": {
        "mrp": 7.19,
        "cost": 5.99,
        "discount": 17
      },
      "stock": 13,
      "averageRating": 4.71,
      "totalReviews": 202
    },
    {
      "name": "Kitchen Sieve",
      "description": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/1.webp"
      ],
      "price": {
        "mrp": 9.59,
        "cost": 7.99,
        "discount": 17
      },
      "stock": 68,
      "averageRating": 3.09,
      "totalReviews": 394
    },
    {
      "name": "Knife",
      "description": "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/1.webp"
      ],
      "price": {
        "mrp": 17.99,
        "cost": 14.99,
        "discount": 17
      },
      "stock": 7,
      "averageRating": 3.26,
      "totalReviews": 282
    },
    {
      "name": "Lunch Box",
      "description": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/1.webp"
      ],
      "price": {
        "mrp": 15.59,
        "cost": 12.99,
        "discount": 17
      },
      "stock": 94,
      "averageRating": 4.93,
      "totalReviews": 395
    },
    {
      "name": "Microwave Oven",
      "description": "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/1.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/2.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/3.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/4.webp"
      ],
      "price": {
        "mrp": 107.99,
        "cost": 89.99,
        "discount": 17
      },
      "stock": 59,
      "averageRating": 4.82,
      "totalReviews": 55
    },
    {
      "name": "Mug Tree Stand",
      "description": "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/1.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/2.webp"
      ],
      "price": {
        "mrp": 19.19,
        "cost": 15.99,
        "discount": 17
      },
      "stock": 88,
      "averageRating": 2.64,
      "totalReviews": 293
    },
    {
      "name": "Pan",
      "description": "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/1.webp"
      ],
      "price": {
        "mrp": 29.99,
        "cost": 24.99,
        "discount": 17
      },
      "stock": 90,
      "averageRating": 2.79,
      "totalReviews": 353
    },
    {
      "name": "Plate",
      "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/1.webp"
      ],
      "price": {
        "mrp": 4.79,
        "cost": 3.99,
        "discount": 17
      },
      "stock": 66,
      "averageRating": 3.65,
      "totalReviews": 365
    },
    {
      "name": "Red Tongs",
      "description": "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/1.webp"
      ],
      "price": {
        "mrp": 8.39,
        "cost": 6.99,
        "discount": 17
      },
      "stock": 82,
      "averageRating": 4.42,
      "totalReviews": 374
    },
    {
      "name": "Silver Pot With Glass Cap",
      "description": "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/1.webp"
      ],
      "price": {
        "mrp": 47.99,
        "cost": 39.99,
        "discount": 17
      },
      "stock": 40,
      "averageRating": 3.22,
      "totalReviews": 143
    },
    {
      "name": "Slotted Turner",
      "description": "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/1.webp"
      ],
      "price": {
        "mrp": 10.79,
        "cost": 8.99,
        "discount": 17
      },
      "stock": 88,
      "averageRating": 3.4,
      "totalReviews": 415
    },
    {
      "name": "Spice Rack",
      "description": "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/1.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 79,
      "averageRating": 4.87,
      "totalReviews": 432
    },
    {
      "name": "Spoon",
      "description": "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/1.webp"
      ],
      "price": {
        "mrp": 5.99,
        "cost": 4.99,
        "discount": 17
      },
      "stock": 59,
      "averageRating": 4.03,
      "totalReviews": 18
    },
    {
      "name": "Tray",
      "description": "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/1.webp"
      ],
      "price": {
        "mrp": 20.39,
        "cost": 16.99,
        "discount": 17
      },
      "stock": 71,
      "averageRating": 4.62,
      "totalReviews": 262
    },
    {
      "name": "Wooden Rolling Pin",
      "description": "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/1.webp"
      ],
      "price": {
        "mrp": 14.39,
        "cost": 11.99,
        "discount": 17
      },
      "stock": 80,
      "averageRating": 2.92,
      "totalReviews": 296
    },
    {
      "name": "Yellow Peeler",
      "description": "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
      "category": "kitchen-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/1.webp"
      ],
      "price": {
        "mrp": 7.19,
        "cost": 5.99,
        "discount": 17
      },
      "stock": 35,
      "averageRating": 4.24,
      "totalReviews": 32
    },
    {
      "name": "Apple MacBook Pro 14 Inch Space Grey",
      "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
      "category": "laptops",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp",
        "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/2.webp",
        "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/3.webp"
      ],
      "price": {
        "mrp": 2399.99,
        "cost": 1999.99,
        "discount": 17
      },
      "stock": 24,
      "averageRating": 3.65,
      "totalReviews": 441
    },
    {
      "name": "Asus Zenbook Pro Dual Screen Laptop",
      "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
      "category": "laptops",
      "brand": "Asus",
      "images": [
        "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp",
        "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/2.webp",
        "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp"
      ],
      "price": {
        "mrp": 2159.99,
        "cost": 1799.99,
        "discount": 17
      },
      "stock": 45,
      "averageRating": 3.95,
      "totalReviews": 430
    },
    {
      "name": "Huawei Matebook X Pro",
      "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
      "category": "laptops",
      "brand": "Huawei",
      "images": [
        "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp",
        "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/2.webp",
        "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/3.webp"
      ],
      "price": {
        "mrp": 1679.99,
        "cost": 1399.99,
        "discount": 17
      },
      "stock": 75,
      "averageRating": 4.98,
      "totalReviews": 166
    },
    {
      "name": "Lenovo Yoga 920",
      "description": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
      "category": "laptops",
      "brand": "Lenovo",
      "images": [
        "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/1.webp",
        "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/2.webp",
        "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/3.webp"
      ],
      "price": {
        "mrp": 1319.99,
        "cost": 1099.99,
        "discount": 17
      },
      "stock": 40,
      "averageRating": 2.86,
      "totalReviews": 37
    },
    {
      "name": "New DELL XPS 13 9300 Laptop",
      "description": "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
      "category": "laptops",
      "brand": "Dell",
      "images": [
        "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp",
        "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp",
        "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp"
      ],
      "price": {
        "mrp": 1799.99,
        "cost": 1499.99,
        "discount": 17
      },
      "stock": 74,
      "averageRating": 2.67,
      "totalReviews": 289
    },
    {
      "name": "Blue & Black Check Shirt",
      "description": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
      "category": "mens-shirts",
      "brand": "Fashion Trends",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/4.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 38,
      "averageRating": 3.64,
      "totalReviews": 152
    },
    {
      "name": "Gigabyte Aorus Men Tshirt",
      "description": "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
      "category": "mens-shirts",
      "brand": "Gigabyte",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/4.webp"
      ],
      "price": {
        "mrp": 29.99,
        "cost": 24.99,
        "discount": 17
      },
      "stock": 90,
      "averageRating": 3.18,
      "totalReviews": 13
    },
    {
      "name": "Man Plaid Shirt",
      "description": "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
      "category": "mens-shirts",
      "brand": "Classic Wear",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/4.webp"
      ],
      "price": {
        "mrp": 41.99,
        "cost": 34.99,
        "discount": 17
      },
      "stock": 82,
      "averageRating": 3.46,
      "totalReviews": 254
    },
    {
      "name": "Man Short Sleeve Shirt",
      "description": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
      "category": "mens-shirts",
      "brand": "Casual Comfort",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/4.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 2,
      "averageRating": 2.9,
      "totalReviews": 223
    },
    {
      "name": "Men Check Shirt",
      "description": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
      "category": "mens-shirts",
      "brand": "Urban Chic",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/4.webp"
      ],
      "price": {
        "mrp": 33.59,
        "cost": 27.99,
        "discount": 17
      },
      "stock": 95,
      "averageRating": 2.72,
      "totalReviews": 227
    },
    {
      "name": "Nike Air Jordan 1 Red And Black",
      "description": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
      "category": "mens-shoes",
      "brand": "Nike",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/4.webp"
      ],
      "price": {
        "mrp": 179.99,
        "cost": 149.99,
        "discount": 17
      },
      "stock": 7,
      "averageRating": 4.77,
      "totalReviews": 280
    },
    {
      "name": "Nike Baseball Cleats",
      "description": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
      "category": "mens-shoes",
      "brand": "Nike",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/4.webp"
      ],
      "price": {
        "mrp": 95.99,
        "cost": 79.99,
        "discount": 17
      },
      "stock": 12,
      "averageRating": 3.88,
      "totalReviews": 73
    },
    {
      "name": "Puma Future Rider Trainers",
      "description": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
      "category": "mens-shoes",
      "brand": "Puma",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/4.webp"
      ],
      "price": {
        "mrp": 107.99,
        "cost": 89.99,
        "discount": 17
      },
      "stock": 90,
      "averageRating": 4.9,
      "totalReviews": 423
    },
    {
      "name": "Sports Sneakers Off White & Red",
      "description": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
      "category": "mens-shoes",
      "brand": "Off White",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/4.webp"
      ],
      "price": {
        "mrp": 143.99,
        "cost": 119.99,
        "discount": 17
      },
      "stock": 17,
      "averageRating": 4.77,
      "totalReviews": 413
    },
    {
      "name": "Sports Sneakers Off White Red",
      "description": "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
      "category": "mens-shoes",
      "brand": "Off White",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/3.webp",
        "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/4.webp"
      ],
      "price": {
        "mrp": 131.99,
        "cost": 109.99,
        "discount": 17
      },
      "stock": 62,
      "averageRating": 4.69,
      "totalReviews": 35
    },
    {
      "name": "Brown Leather Belt Watch",
      "description": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
      "category": "mens-watches",
      "brand": "Fashion Timepieces",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/3.webp"
      ],
      "price": {
        "mrp": 107.99,
        "cost": 89.99,
        "discount": 17
      },
      "stock": 32,
      "averageRating": 4.19,
      "totalReviews": 436
    },
    {
      "name": "Longines Master Collection",
      "description": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
      "category": "mens-watches",
      "brand": "Longines",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/3.webp"
      ],
      "price": {
        "mrp": 1799.99,
        "cost": 1499.99,
        "discount": 17
      },
      "stock": 100,
      "averageRating": 3.87,
      "totalReviews": 422
    },
    {
      "name": "Rolex Cellini Date Black Dial",
      "description": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
      "category": "mens-watches",
      "brand": "Rolex",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/3.webp"
      ],
      "price": {
        "mrp": 10799.99,
        "cost": 8999.99,
        "discount": 17
      },
      "stock": 40,
      "averageRating": 4.97,
      "totalReviews": 421
    },
    {
      "name": "Rolex Cellini Moonphase",
      "description": "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
      "category": "mens-watches",
      "brand": "Rolex",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/3.webp"
      ],
      "price": {
        "mrp": 15599.99,
        "cost": 12999.99,
        "discount": 17
      },
      "stock": 36,
      "averageRating": 2.58,
      "totalReviews": 46
    },
    {
      "name": "Rolex Datejust",
      "description": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
      "category": "mens-watches",
      "brand": "Rolex",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/3.webp"
      ],
      "price": {
        "mrp": 13199.99,
        "cost": 10999.99,
        "discount": 17
      },
      "stock": 86,
      "averageRating": 3.66,
      "totalReviews": 263
    },
    {
      "name": "Rolex Submariner Watch",
      "description": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
      "category": "mens-watches",
      "brand": "Rolex",
      "images": [
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/2.webp",
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/3.webp"
      ],
      "price": {
        "mrp": 16799.99,
        "cost": 13999.99,
        "discount": 17
      },
      "stock": 55,
      "averageRating": 2.69,
      "totalReviews": 10
    },
    {
      "name": "Amazon Echo Plus",
      "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
      "category": "mobile-accessories",
      "brand": "Amazon",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/2.webp"
      ],
      "price": {
        "mrp": 119.99,
        "cost": 99.99,
        "discount": 17
      },
      "stock": 61,
      "averageRating": 4.99,
      "totalReviews": 294
    },
    {
      "name": "Apple Airpods",
      "description": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
      "category": "mobile-accessories",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/2.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/3.webp"
      ],
      "price": {
        "mrp": 155.99,
        "cost": 129.99,
        "discount": 17
      },
      "stock": 67,
      "averageRating": 4.15,
      "totalReviews": 30
    },
    {
      "name": "Apple AirPods Max Silver",
      "description": "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
      "category": "mobile-accessories",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"
      ],
      "price": {
        "mrp": 659.99,
        "cost": 549.99,
        "discount": 17
      },
      "stock": 59,
      "averageRating": 3.47,
      "totalReviews": 238
    },
    {
      "name": "Apple Airpower Wireless Charger",
      "description": "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
      "category": "mobile-accessories",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/1.webp"
      ],
      "price": {
        "mrp": 95.99,
        "cost": 79.99,
        "discount": 17
      },
      "stock": 1,
      "averageRating": 3.68,
      "totalReviews": 260
    },
    {
      "name": "Apple HomePod Mini Cosmic Grey",
      "description": "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
      "category": "mobile-accessories",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/1.webp"
      ],
      "price": {
        "mrp": 119.99,
        "cost": 99.99,
        "discount": 17
      },
      "stock": 27,
      "averageRating": 4.62,
      "totalReviews": 194
    },
    {
      "name": "Apple iPhone Charger",
      "description": "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
      "category": "mobile-accessories",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/1.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/2.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 31,
      "averageRating": 4.15,
      "totalReviews": 310
    },
    {
      "name": "Apple MagSafe Battery Pack",
      "description": "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
      "category": "mobile-accessories",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/2.webp"
      ],
      "price": {
        "mrp": 119.99,
        "cost": 99.99,
        "discount": 17
      },
      "stock": 1,
      "averageRating": 3.62,
      "totalReviews": 74
    },
    {
      "name": "Apple Watch Series 4 Gold",
      "description": "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
      "category": "mobile-accessories",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/2.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/3.webp"
      ],
      "price": {
        "mrp": 419.99,
        "cost": 349.99,
        "discount": 17
      },
      "stock": 33,
      "averageRating": 2.74,
      "totalReviews": 186
    },
    {
      "name": "Beats Flex Wireless Earphones",
      "description": "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
      "category": "mobile-accessories",
      "brand": "Beats",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp"
      ],
      "price": {
        "mrp": 59.99,
        "cost": 49.99,
        "discount": 17
      },
      "stock": 50,
      "averageRating": 4.24,
      "totalReviews": 402
    },
    {
      "name": "iPhone 12 Silicone Case with MagSafe Plum",
      "description": "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
      "category": "mobile-accessories",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/1.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/2.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/3.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/4.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 69,
      "averageRating": 3.62,
      "totalReviews": 169
    },
    {
      "name": "Monopod",
      "description": "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
      "category": "mobile-accessories",
      "brand": "TechGear",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/1.webp",
        "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/2.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 48,
      "averageRating": 4.43,
      "totalReviews": 262
    },
    {
      "name": "Selfie Lamp with iPhone",
      "description": "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
      "category": "mobile-accessories",
      "brand": "GadgetMaster",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/1.webp"
      ],
      "price": {
        "mrp": 17.99,
        "cost": 14.99,
        "discount": 17
      },
      "stock": 58,
      "averageRating": 3.55,
      "totalReviews": 416
    },
    {
      "name": "Selfie Stick Monopod",
      "description": "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
      "category": "mobile-accessories",
      "brand": "SnapTech",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/1.webp"
      ],
      "price": {
        "mrp": 15.59,
        "cost": 12.99,
        "discount": 17
      },
      "stock": 11,
      "averageRating": 3.88,
      "totalReviews": 208
    },
    {
      "name": "TV Studio Camera Pedestal",
      "description": "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
      "category": "mobile-accessories",
      "brand": "ProVision",
      "images": [
        "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/1.webp"
      ],
      "price": {
        "mrp": 599.99,
        "cost": 499.99,
        "discount": 17
      },
      "stock": 15,
      "averageRating": 2.78,
      "totalReviews": 43
    },
    {
      "name": "Generic Motorcycle",
      "description": "The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.",
      "category": "motorcycle",
      "brand": "Generic Motors",
      "images": [
        "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/1.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/2.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/3.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/4.webp"
      ],
      "price": {
        "mrp": 4799.99,
        "cost": 3999.99,
        "discount": 17
      },
      "stock": 34,
      "averageRating": 4.91,
      "totalReviews": 97
    },
    {
      "name": "Kawasaki Z800",
      "description": "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
      "category": "motorcycle",
      "brand": "Kawasaki",
      "images": [
        "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/1.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/2.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/3.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/4.webp"
      ],
      "price": {
        "mrp": 10799.99,
        "cost": 8999.99,
        "discount": 17
      },
      "stock": 52,
      "averageRating": 3.98,
      "totalReviews": 285
    },
    {
      "name": "MotoGP CI.H1",
      "description": "The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.",
      "category": "motorcycle",
      "brand": "MotoGP",
      "images": [
        "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/1.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/2.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/3.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/4.webp"
      ],
      "price": {
        "mrp": 17999.99,
        "cost": 14999.99,
        "discount": 17
      },
      "stock": 10,
      "averageRating": 2.97,
      "totalReviews": 406
    },
    {
      "name": "Scooter Motorcycle",
      "description": "The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.",
      "category": "motorcycle",
      "brand": "ScootMaster",
      "images": [
        "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/1.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/2.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/3.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/4.webp"
      ],
      "price": {
        "mrp": 3599.99,
        "cost": 2999.99,
        "discount": 17
      },
      "stock": 84,
      "averageRating": 2.53,
      "totalReviews": 221
    },
    {
      "name": "Sportbike Motorcycle",
      "description": "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
      "category": "motorcycle",
      "brand": "SpeedMaster",
      "images": [
        "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/1.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/2.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/3.webp",
        "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/4.webp"
      ],
      "price": {
        "mrp": 8999.99,
        "cost": 7499.99,
        "discount": 17
      },
      "stock": 0,
      "averageRating": 3.94,
      "totalReviews": 432
    },
    {
      "name": "Attitude Super Leaves Hand Soap",
      "description": "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
      "category": "skin-care",
      "brand": "Attitude",
      "images": [
        "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp",
        "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/2.webp",
        "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/3.webp"
      ],
      "price": {
        "mrp": 10.79,
        "cost": 8.99,
        "discount": 17
      },
      "stock": 94,
      "averageRating": 3.19,
      "totalReviews": 213
    },
    {
      "name": "Olay Ultra Moisture Shea Butter Body Wash",
      "description": "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
      "category": "skin-care",
      "brand": "Olay",
      "images": [
        "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/1.webp",
        "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/2.webp",
        "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/3.webp"
      ],
      "price": {
        "mrp": 15.59,
        "cost": 12.99,
        "discount": 17
      },
      "stock": 34,
      "averageRating": 4.51,
      "totalReviews": 255
    },
    {
      "name": "Vaseline Men Body and Face Lotion",
      "description": "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
      "category": "skin-care",
      "brand": "Vaseline",
      "images": [
        "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/1.webp",
        "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/2.webp",
        "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/3.webp"
      ],
      "price": {
        "mrp": 11.99,
        "cost": 9.99,
        "discount": 17
      },
      "stock": 95,
      "averageRating": 3.16,
      "totalReviews": 361
    },
    {
      "name": "iPhone 5s",
      "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
      "category": "smartphones",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/3.webp"
      ],
      "price": {
        "mrp": 239.99,
        "cost": 199.99,
        "discount": 17
      },
      "stock": 25,
      "averageRating": 2.83,
      "totalReviews": 283
    },
    {
      "name": "iPhone 6",
      "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
      "category": "smartphones",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/3.webp"
      ],
      "price": {
        "mrp": 359.99,
        "cost": 299.99,
        "discount": 17
      },
      "stock": 60,
      "averageRating": 3.41,
      "totalReviews": 420
    },
    {
      "name": "iPhone 13 Pro",
      "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
      "category": "smartphones",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/3.webp"
      ],
      "price": {
        "mrp": 1319.99,
        "cost": 1099.99,
        "discount": 17
      },
      "stock": 56,
      "averageRating": 4.12,
      "totalReviews": 275
    },
    {
      "name": "iPhone X",
      "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
      "category": "smartphones",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/3.webp"
      ],
      "price": {
        "mrp": 1079.99,
        "cost": 899.99,
        "discount": 17
      },
      "stock": 37,
      "averageRating": 2.51,
      "totalReviews": 356
    },
    {
      "name": "Oppo A57",
      "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
      "category": "smartphones",
      "brand": "Oppo",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/3.webp"
      ],
      "price": {
        "mrp": 299.99,
        "cost": 249.99,
        "discount": 17
      },
      "stock": 19,
      "averageRating": 3.94,
      "totalReviews": 303
    },
    {
      "name": "Oppo F19 Pro Plus",
      "description": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
      "category": "smartphones",
      "brand": "Oppo",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/3.webp"
      ],
      "price": {
        "mrp": 479.99,
        "cost": 399.99,
        "discount": 17
      },
      "stock": 78,
      "averageRating": 3.51,
      "totalReviews": 361
    },
    {
      "name": "Oppo K1",
      "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
      "category": "smartphones",
      "brand": "Oppo",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/3.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/4.webp"
      ],
      "price": {
        "mrp": 359.99,
        "cost": 299.99,
        "discount": 17
      },
      "stock": 55,
      "averageRating": 4.25,
      "totalReviews": 220
    },
    {
      "name": "Realme C35",
      "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
      "category": "smartphones",
      "brand": "Realme",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/3.webp"
      ],
      "price": {
        "mrp": 179.99,
        "cost": 149.99,
        "discount": 17
      },
      "stock": 48,
      "averageRating": 4.2,
      "totalReviews": 443
    },
    {
      "name": "Realme X",
      "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
      "category": "smartphones",
      "brand": "Realme",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/realme-x/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/realme-x/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/realme-x/3.webp"
      ],
      "price": {
        "mrp": 359.99,
        "cost": 299.99,
        "discount": 17
      },
      "stock": 12,
      "averageRating": 3.7,
      "totalReviews": 166
    },
    {
      "name": "Realme XT",
      "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
      "category": "smartphones",
      "brand": "Realme",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/3.webp"
      ],
      "price": {
        "mrp": 419.99,
        "cost": 349.99,
        "discount": 17
      },
      "stock": 80,
      "averageRating": 4.58,
      "totalReviews": 321
    },
    {
      "name": "Samsung Galaxy S7",
      "description": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
      "category": "smartphones",
      "brand": "Samsung",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/3.webp"
      ],
      "price": {
        "mrp": 359.99,
        "cost": 299.99,
        "discount": 17
      },
      "stock": 67,
      "averageRating": 3.3,
      "totalReviews": 194
    },
    {
      "name": "Samsung Galaxy S8",
      "description": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
      "category": "smartphones",
      "brand": "Samsung",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/3.webp"
      ],
      "price": {
        "mrp": 599.99,
        "cost": 499.99,
        "discount": 17
      },
      "stock": 0,
      "averageRating": 4.4,
      "totalReviews": 260
    },
    {
      "name": "Samsung Galaxy S10",
      "description": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
      "category": "smartphones",
      "brand": "Samsung",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/3.webp"
      ],
      "price": {
        "mrp": 839.99,
        "cost": 699.99,
        "discount": 17
      },
      "stock": 19,
      "averageRating": 3.06,
      "totalReviews": 130
    },
    {
      "name": "Vivo S1",
      "description": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
      "category": "smartphones",
      "brand": "Vivo",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/3.webp"
      ],
      "price": {
        "mrp": 299.99,
        "cost": 249.99,
        "discount": 17
      },
      "stock": 50,
      "averageRating": 3.5,
      "totalReviews": 403
    },
    {
      "name": "Vivo V9",
      "description": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
      "category": "smartphones",
      "brand": "Vivo",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/3.webp"
      ],
      "price": {
        "mrp": 359.99,
        "cost": 299.99,
        "discount": 17
      },
      "stock": 82,
      "averageRating": 3.6,
      "totalReviews": 345
    },
    {
      "name": "Vivo X21",
      "description": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
      "category": "smartphones",
      "brand": "Vivo",
      "images": [
        "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/3.webp"
      ],
      "price": {
        "mrp": 599.99,
        "cost": 499.99,
        "discount": 17
      },
      "stock": 7,
      "averageRating": 4.26,
      "totalReviews": 398
    },
    {
      "name": "American Football",
      "description": "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/1.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 53,
      "averageRating": 4.91,
      "totalReviews": 400
    },
    {
      "name": "Baseball Ball",
      "description": "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/1.webp"
      ],
      "price": {
        "mrp": 10.79,
        "cost": 8.99,
        "discount": 17
      },
      "stock": 100,
      "averageRating": 2.57,
      "totalReviews": 109
    },
    {
      "name": "Baseball Glove",
      "description": "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/1.webp",
        "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/2.webp",
        "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/3.webp"
      ],
      "price": {
        "mrp": 29.99,
        "cost": 24.99,
        "discount": 17
      },
      "stock": 22,
      "averageRating": 3.96,
      "totalReviews": 214
    },
    {
      "name": "Basketball",
      "description": "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/1.webp"
      ],
      "price": {
        "mrp": 17.99,
        "cost": 14.99,
        "discount": 17
      },
      "stock": 75,
      "averageRating": 4.66,
      "totalReviews": 241
    },
    {
      "name": "Basketball Rim",
      "description": "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/1.webp"
      ],
      "price": {
        "mrp": 47.99,
        "cost": 39.99,
        "discount": 17
      },
      "stock": 43,
      "averageRating": 4.6,
      "totalReviews": 445
    },
    {
      "name": "Cricket Ball",
      "description": "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/1.webp"
      ],
      "price": {
        "mrp": 15.59,
        "cost": 12.99,
        "discount": 17
      },
      "stock": 30,
      "averageRating": 3.53,
      "totalReviews": 443
    },
    {
      "name": "Cricket Bat",
      "description": "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/1.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 98,
      "averageRating": 3.17,
      "totalReviews": 400
    },
    {
      "name": "Cricket Helmet",
      "description": "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/1.webp",
        "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/2.webp",
        "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/3.webp",
        "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/4.webp"
      ],
      "price": {
        "mrp": 53.99,
        "cost": 44.99,
        "discount": 17
      },
      "stock": 10,
      "averageRating": 4.69,
      "totalReviews": 67
    },
    {
      "name": "Cricket Wicket",
      "description": "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/1.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 25,
      "averageRating": 4.73,
      "totalReviews": 476
    },
    {
      "name": "Feather Shuttlecock",
      "description": "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/1.webp"
      ],
      "price": {
        "mrp": 7.19,
        "cost": 5.99,
        "discount": 17
      },
      "stock": 95,
      "averageRating": 2.85,
      "totalReviews": 508
    },
    {
      "name": "Football",
      "description": "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/football/1.webp"
      ],
      "price": {
        "mrp": 21.59,
        "cost": 17.99,
        "discount": 17
      },
      "stock": 96,
      "averageRating": 3.28,
      "totalReviews": 474
    },
    {
      "name": "Golf Ball",
      "description": "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/1.webp"
      ],
      "price": {
        "mrp": 11.99,
        "cost": 9.99,
        "discount": 17
      },
      "stock": 84,
      "averageRating": 4.3,
      "totalReviews": 130
    },
    {
      "name": "Iron Golf",
      "description": "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/1.webp"
      ],
      "price": {
        "mrp": 59.99,
        "cost": 49.99,
        "discount": 17
      },
      "stock": 90,
      "averageRating": 4.41,
      "totalReviews": 197
    },
    {
      "name": "Metal Baseball Bat",
      "description": "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/1.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 16,
      "averageRating": 4.66,
      "totalReviews": 27
    },
    {
      "name": "Tennis Ball",
      "description": "The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/1.webp"
      ],
      "price": {
        "mrp": 8.39,
        "cost": 6.99,
        "discount": 17
      },
      "stock": 28,
      "averageRating": 4.06,
      "totalReviews": 65
    },
    {
      "name": "Tennis Racket",
      "description": "The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/1.webp"
      ],
      "price": {
        "mrp": 59.99,
        "cost": 49.99,
        "discount": 17
      },
      "stock": 6,
      "averageRating": 4.03,
      "totalReviews": 255
    },
    {
      "name": "Volleyball",
      "description": "The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.",
      "category": "sports-accessories",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/1.webp"
      ],
      "price": {
        "mrp": 14.39,
        "cost": 11.99,
        "discount": 17
      },
      "stock": 0,
      "averageRating": 3.84,
      "totalReviews": 420
    },
    {
      "name": "Black Sun Glasses",
      "description": "The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.",
      "category": "sunglasses",
      "brand": "Fashion Shades",
      "images": [
        "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/1.webp",
        "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/2.webp",
        "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/3.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 60,
      "averageRating": 4.41,
      "totalReviews": 492
    },
    {
      "name": "Classic Sun Glasses",
      "description": "The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.",
      "category": "sunglasses",
      "brand": "Fashion Shades",
      "images": [
        "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/1.webp",
        "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/2.webp",
        "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/3.webp"
      ],
      "price": {
        "mrp": 29.99,
        "cost": 24.99,
        "discount": 17
      },
      "stock": 1,
      "averageRating": 3.86,
      "totalReviews": 287
    },
    {
      "name": "Green and Black Glasses",
      "description": "The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.",
      "category": "sunglasses",
      "brand": "Fashion Shades",
      "images": [
        "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/1.webp",
        "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/2.webp",
        "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/3.webp"
      ],
      "price": {
        "mrp": 41.99,
        "cost": 34.99,
        "discount": 17
      },
      "stock": 24,
      "averageRating": 4.55,
      "totalReviews": 277
    },
    {
      "name": "Party Glasses",
      "description": "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
      "category": "sunglasses",
      "brand": "Fashion Fun",
      "images": [
        "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/1.webp",
        "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/2.webp",
        "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/3.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 86,
      "averageRating": 2.79,
      "totalReviews": 289
    },
    {
      "name": "Sunglasses",
      "description": "The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.",
      "category": "sunglasses",
      "brand": "Fashion Shades",
      "images": [
        "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/1.webp",
        "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/2.webp",
        "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/3.webp"
      ],
      "price": {
        "mrp": 27.59,
        "cost": 22.99,
        "discount": 17
      },
      "stock": 27,
      "averageRating": 3.02,
      "totalReviews": 247
    },
    {
      "name": "iPad Mini 2021 Starlight",
      "description": "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
      "category": "tablets",
      "brand": "Apple",
      "images": [
        "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp",
        "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/2.webp",
        "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/3.webp",
        "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/4.webp"
      ],
      "price": {
        "mrp": 599.99,
        "cost": 499.99,
        "discount": 17
      },
      "stock": 47,
      "averageRating": 3.18,
      "totalReviews": 469
    },
    {
      "name": "Samsung Galaxy Tab S8 Plus Grey",
      "description": "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
      "category": "tablets",
      "brand": "Samsung",
      "images": [
        "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp",
        "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/2.webp",
        "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/3.webp",
        "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/4.webp"
      ],
      "price": {
        "mrp": 719.99,
        "cost": 599.99,
        "discount": 17
      },
      "stock": 62,
      "averageRating": 4.68,
      "totalReviews": 124
    },
    {
      "name": "Samsung Galaxy Tab White",
      "description": "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
      "category": "tablets",
      "brand": "Samsung",
      "images": [
        "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/1.webp",
        "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/2.webp",
        "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/3.webp",
        "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/4.webp"
      ],
      "price": {
        "mrp": 419.99,
        "cost": 349.99,
        "discount": 17
      },
      "stock": 92,
      "averageRating": 3.72,
      "totalReviews": 280
    },
    {
      "name": "Blue Frock",
      "description": "The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.",
      "category": "tops",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/tops/blue-frock/1.webp",
        "https://cdn.dummyjson.com/product-images/tops/blue-frock/2.webp",
        "https://cdn.dummyjson.com/product-images/tops/blue-frock/3.webp",
        "https://cdn.dummyjson.com/product-images/tops/blue-frock/4.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 52,
      "averageRating": 4.17,
      "totalReviews": 241
    },
    {
      "name": "Girl Summer Dress",
      "description": "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
      "category": "tops",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/1.webp",
        "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/2.webp",
        "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/3.webp",
        "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/4.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 43,
      "averageRating": 4.77,
      "totalReviews": 440
    },
    {
      "name": "Gray Dress",
      "description": "The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.",
      "category": "tops",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/tops/gray-dress/1.webp",
        "https://cdn.dummyjson.com/product-images/tops/gray-dress/2.webp",
        "https://cdn.dummyjson.com/product-images/tops/gray-dress/3.webp",
        "https://cdn.dummyjson.com/product-images/tops/gray-dress/4.webp"
      ],
      "price": {
        "mrp": 41.99,
        "cost": 34.99,
        "discount": 17
      },
      "stock": 55,
      "averageRating": 2.72,
      "totalReviews": 509
    },
    {
      "name": "Short Frock",
      "description": "The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.",
      "category": "tops",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/tops/short-frock/1.webp",
        "https://cdn.dummyjson.com/product-images/tops/short-frock/2.webp",
        "https://cdn.dummyjson.com/product-images/tops/short-frock/3.webp",
        "https://cdn.dummyjson.com/product-images/tops/short-frock/4.webp"
      ],
      "price": {
        "mrp": 29.99,
        "cost": 24.99,
        "discount": 17
      },
      "stock": 22,
      "averageRating": 3.23,
      "totalReviews": 100
    },
    {
      "name": "Tartan Dress",
      "description": "The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.",
      "category": "tops",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/tops/tartan-dress/1.webp",
        "https://cdn.dummyjson.com/product-images/tops/tartan-dress/2.webp",
        "https://cdn.dummyjson.com/product-images/tops/tartan-dress/3.webp",
        "https://cdn.dummyjson.com/product-images/tops/tartan-dress/4.webp"
      ],
      "price": {
        "mrp": 47.99,
        "cost": 39.99,
        "discount": 17
      },
      "stock": 73,
      "averageRating": 4.05,
      "totalReviews": 162
    },
    {
      "name": "300 Touring",
      "description": "The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.",
      "category": "vehicle",
      "brand": "Chrysler",
      "images": [
        "https://cdn.dummyjson.com/product-images/vehicle/300-touring/1.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/300-touring/2.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/300-touring/3.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/300-touring/4.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/300-touring/5.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/300-touring/6.webp"
      ],
      "price": {
        "mrp": 34799.99,
        "cost": 28999.99,
        "discount": 17
      },
      "stock": 54,
      "averageRating": 4.05,
      "totalReviews": 127
    },
    {
      "name": "Charger SXT RWD",
      "description": "The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.",
      "category": "vehicle",
      "brand": "Dodge",
      "images": [
        "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/1.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/2.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/3.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/4.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/5.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/6.webp"
      ],
      "price": {
        "mrp": 39599.99,
        "cost": 32999.99,
        "discount": 17
      },
      "stock": 57,
      "averageRating": 2.58,
      "totalReviews": 350
    },
    {
      "name": "Dodge Hornet GT Plus",
      "description": "The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.",
      "category": "vehicle",
      "brand": "Dodge",
      "images": [
        "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/1.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/2.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/3.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/4.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/5.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/6.webp"
      ],
      "price": {
        "mrp": 29999.99,
        "cost": 24999.99,
        "discount": 17
      },
      "stock": 82,
      "averageRating": 2.65,
      "totalReviews": 203
    },
    {
      "name": "Durango SXT RWD",
      "description": "The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.",
      "category": "vehicle",
      "brand": "Dodge",
      "images": [
        "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/1.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/2.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/3.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/4.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/5.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/6.webp"
      ],
      "price": {
        "mrp": 44399.99,
        "cost": 36999.99,
        "discount": 17
      },
      "stock": 95,
      "averageRating": 4.07,
      "totalReviews": 269
    },
    {
      "name": "Pacifica Touring",
      "description": "The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.",
      "category": "vehicle",
      "brand": "Chrysler",
      "images": [
        "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/1.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/2.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/3.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/4.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/5.webp",
        "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/6.webp"
      ],
      "price": {
        "mrp": 38399.99,
        "cost": 31999.99,
        "discount": 17
      },
      "stock": 53,
      "averageRating": 3.62,
      "totalReviews": 458
    },
    {
      "name": "Blue Women's Handbag",
      "description": "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
      "category": "womens-bags",
      "brand": "Fashionista",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/3.webp"
      ],
      "price": {
        "mrp": 59.99,
        "cost": 49.99,
        "discount": 17
      },
      "stock": 76,
      "averageRating": 2.92,
      "totalReviews": 176
    },
    {
      "name": "Heshe Women's Leather Bag",
      "description": "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
      "category": "womens-bags",
      "brand": "Heshe",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/3.webp"
      ],
      "price": {
        "mrp": 155.99,
        "cost": 129.99,
        "discount": 17
      },
      "stock": 99,
      "averageRating": 4.92,
      "totalReviews": 378
    },
    {
      "name": "Prada Women Bag",
      "description": "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
      "category": "womens-bags",
      "brand": "Prada",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/3.webp"
      ],
      "price": {
        "mrp": 719.99,
        "cost": 599.99,
        "discount": 17
      },
      "stock": 75,
      "averageRating": 2.71,
      "totalReviews": 353
    },
    {
      "name": "White Faux Leather Backpack",
      "description": "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
      "category": "womens-bags",
      "brand": "Urban Chic",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/3.webp"
      ],
      "price": {
        "mrp": 47.99,
        "cost": 39.99,
        "discount": 17
      },
      "stock": 39,
      "averageRating": 3.36,
      "totalReviews": 306
    },
    {
      "name": "Women Handbag Black",
      "description": "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
      "category": "womens-bags",
      "brand": "Elegance Collection",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/3.webp"
      ],
      "price": {
        "mrp": 71.99,
        "cost": 59.99,
        "discount": 17
      },
      "stock": 11,
      "averageRating": 2.89,
      "totalReviews": 177
    },
    {
      "name": "Black Women's Gown",
      "description": "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
      "category": "womens-dresses",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/3.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/4.webp"
      ],
      "price": {
        "mrp": 155.99,
        "cost": 129.99,
        "discount": 17
      },
      "stock": 25,
      "averageRating": 3.64,
      "totalReviews": 52
    },
    {
      "name": "Corset Leather With Skirt",
      "description": "The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.",
      "category": "womens-dresses",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/3.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/4.webp"
      ],
      "price": {
        "mrp": 107.99,
        "cost": 89.99,
        "discount": 17
      },
      "stock": 30,
      "averageRating": 3.05,
      "totalReviews": 96
    },
    {
      "name": "Corset With Black Skirt",
      "description": "The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.",
      "category": "womens-dresses",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/3.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/4.webp"
      ],
      "price": {
        "mrp": 95.99,
        "cost": 79.99,
        "discount": 17
      },
      "stock": 33,
      "averageRating": 4.52,
      "totalReviews": 54
    },
    {
      "name": "Dress Pea",
      "description": "The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.",
      "category": "womens-dresses",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/3.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/4.webp"
      ],
      "price": {
        "mrp": 59.99,
        "cost": 49.99,
        "discount": 17
      },
      "stock": 6,
      "averageRating": 4.88,
      "totalReviews": 361
    },
    {
      "name": "Marni Red & Black Suit",
      "description": "The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.",
      "category": "womens-dresses",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/3.webp",
        "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/4.webp"
      ],
      "price": {
        "mrp": 215.99,
        "cost": 179.99,
        "discount": 17
      },
      "stock": 62,
      "averageRating": 4.48,
      "totalReviews": 448
    },
    {
      "name": "Green Crystal Earring",
      "description": "The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.",
      "category": "womens-jewellery",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/3.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 54,
      "averageRating": 3.96,
      "totalReviews": 346
    },
    {
      "name": "Green Oval Earring",
      "description": "The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.",
      "category": "womens-jewellery",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/3.webp"
      ],
      "price": {
        "mrp": 29.99,
        "cost": 24.99,
        "discount": 17
      },
      "stock": 73,
      "averageRating": 3.57,
      "totalReviews": 141
    },
    {
      "name": "Tropical Earring",
      "description": "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
      "category": "womens-jewellery",
      "brand": "Unknown",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/3.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 1,
      "averageRating": 4.4,
      "totalReviews": 57
    },
    {
      "name": "Black & Brown Slipper",
      "description": "The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.",
      "category": "womens-shoes",
      "brand": "Comfort Trends",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/3.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/4.webp"
      ],
      "price": {
        "mrp": 23.99,
        "cost": 19.99,
        "discount": 17
      },
      "stock": 3,
      "averageRating": 2.53,
      "totalReviews": 190
    },
    {
      "name": "Calvin Klein Heel Shoes",
      "description": "Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.",
      "category": "womens-shoes",
      "brand": "Calvin Klein",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/3.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/4.webp"
      ],
      "price": {
        "mrp": 95.99,
        "cost": 79.99,
        "discount": 17
      },
      "stock": 93,
      "averageRating": 4.92,
      "totalReviews": 297
    },
    {
      "name": "Golden Shoes Woman",
      "description": "The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.",
      "category": "womens-shoes",
      "brand": "Fashion Diva",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/3.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/4.webp"
      ],
      "price": {
        "mrp": 59.99,
        "cost": 49.99,
        "discount": 17
      },
      "stock": 88,
      "averageRating": 3.26,
      "totalReviews": 202
    },
    {
      "name": "Pampi Shoes",
      "description": "Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.",
      "category": "womens-shoes",
      "brand": "Pampi",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/3.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/4.webp"
      ],
      "price": {
        "mrp": 35.99,
        "cost": 29.99,
        "discount": 17
      },
      "stock": 49,
      "averageRating": 3.05,
      "totalReviews": 383
    },
    {
      "name": "Red Shoes",
      "description": "The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.",
      "category": "womens-shoes",
      "brand": "Fashion Express",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/3.webp",
        "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/4.webp"
      ],
      "price": {
        "mrp": 41.99,
        "cost": 34.99,
        "discount": 17
      },
      "stock": 7,
      "averageRating": 3.25,
      "totalReviews": 148
    },
    {
      "name": "IWC Ingenieur Automatic Steel",
      "description": "The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
      "category": "womens-watches",
      "brand": "IWC",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/3.webp"
      ],
      "price": {
        "mrp": 5999.99,
        "cost": 4999.99,
        "discount": 17
      },
      "stock": 90,
      "averageRating": 2.93,
      "totalReviews": 339
    },
    {
      "name": "Rolex Cellini Moonphase",
      "description": "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
      "category": "womens-watches",
      "brand": "Rolex",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/3.webp"
      ],
      "price": {
        "mrp": 19199.99,
        "cost": 15999.99,
        "discount": 17
      },
      "stock": 52,
      "averageRating": 3.83,
      "totalReviews": 365
    },
    {
      "name": "Rolex Datejust Women",
      "description": "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
      "category": "womens-watches",
      "brand": "Rolex",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/3.webp"
      ],
      "price": {
        "mrp": 13199.99,
        "cost": 10999.99,
        "discount": 17
      },
      "stock": 4,
      "averageRating": 2.86,
      "totalReviews": 100
    },
    {
      "name": "Watch Gold for Women",
      "description": "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
      "category": "womens-watches",
      "brand": "Fashion Gold",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/3.webp"
      ],
      "price": {
        "mrp": 959.99,
        "cost": 799.99,
        "discount": 17
      },
      "stock": 0,
      "averageRating": 4.24,
      "totalReviews": 455
    },
    {
      "name": "Women's Wrist Watch",
      "description": "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
      "category": "womens-watches",
      "brand": "Fashion Co.",
      "images": [
        "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/1.webp",
        "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/2.webp",
        "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/3.webp"
      ],
      "price": {
        "mrp": 155.99,
        "cost": 129.99,
        "discount": 17
      },
      "stock": 12,
      "averageRating": 3.52,
      "totalReviews": 291
    }
  ]

module.exports = products;