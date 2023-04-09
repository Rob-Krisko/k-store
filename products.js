const products = [
    {
        id: 1,
        name: "Gain Scent Bead",
        image: "product1.jpg",
        sizes: [
            { size: "5.7 oz", price: 7.00 },
            { size: "14.8 oz", price: 8.00 },
        ],
        category: "laundry",
    },

    {
        id: 2,
        name: "Downy Scent Bead",
        image: "product1.jpg",
        sizes: [
            { size: "5.7 oz", price: 4.00 },
            { size: "10 oz", price: 6.00 },
            { size: "14.8 oz", price: 8.00 },
            { size: "20.1 oz", price: 9.00 },
        ],
        category: "laundry",
    },

    {
        id: 3,
        name: "Purex Scent Bead",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 3.50 },
        ],
        category: "laundry",
    },

    {
        id: 4,
        name: "Gain Pods",
        image: "product1.jpg",
        sizes: [
            { size: "14-16ct", price: 3.50 },
            { size: "42 ct", price: 10.00 },
        ],
        category: "laundry",
    },

    {
        id: 5,
        name: "Gain Liquid",
        image: "product1.jpg",
        sizes: [
            { size: "32 Loads", price: 3.50 },
        ],
        category: "laundry",
    },

    {
        id: 6,
        name: "Gain Softener",
        image: "product1.jpg",
        sizes: [
            { size: "48 Loads", price: 3.50 },
        ],
        category: "laundry",
    },

    {
        id: 7,
        name: "Gain Dryer Sheets",
        image: "product1.jpg",
        sizes: [
            { size: "105 ct", price: 4.00 },
        ],
        category: "laundry",
    },

    {
        id: 8,
        name: "Snuggle Dryer Sheets",
        image: "product1.jpg",
        sizes: [
            { size: "40 ct", price: 1.00 },
            { size: "70-80 ct", price: 2.00 },
        ],
        category: "laundry",
    },

    {
        id: 9,
        name: "Snuggle Softener",
        image: "product1.jpg",
        sizes: [
            { size: "30-40 Loads", price: 3.50 },
        ],
        category: "laundry",
    },

    {
        id: 10,
        name: "Bounce Dryer Sheets",
        image: "product1.jpg",
        sizes: [
            { size: "40 ct", price: 1.00 },
            { size: "120 ct", price: 4.50 },
            { size: "160 ct", price: 5.00 },
        ],
        category: "laundry",
    },

    {
        id: 11,
        name: "Bounce Free&Gentle Sheets",
        image: "product1.jpg",
        sizes: [
            { size: "80 ct", price: 3.00 },
            { size: "105 ct", price: 3.50 },
        ],
        category: "laundry",
    },

    {
        id: 12,
        name: "Bounce Pet Hair Sheets",
        image: "product1.jpg",
        sizes: [
            { size: "80 ct", price: 4.00 },
        ],
        category: "laundry",
    },

    {
        id: 13,
        name: "Tide Pods",
        image: "product1.jpg",
        sizes: [
            { size: "12-14 ct", price: 3.50 },
            { size: "42 ct", price: 10.50 },
            { size: "112 ct", price: 21.00 },
        ],
        category: "laundry",
    },

    {
        id: 14,
        name: "Tide Simply Pods",
        image: "product1.jpg",
        sizes: [
            { size: "12-14ct", price: 3.00 },
        ],
        category: "laundry",
    },

    {
        id: 15,
        name: "Tide Power w/ Oxi Pods",
        image: "product1.jpg",
        sizes: [
            { size: "25 ct", price: 7.00 },
        ],
        category: "laundry",
    },

    {
        id: 16,
        name: "Tide Ultra Oxi 4in1",
        image: "product1.jpg",
        sizes: [
            { size: "32 ct", price: 8.00 },
        ],
        category: "laundry",
    },

    {
        id: 17,
        name: "Tide Free&Gentle Pod",
        image: "product1.jpg",
        sizes: [
            { size: "16 ct", price: 4.00 },
        ],
        category: "laundry",
    },

    {
        id: 18,
        name: "Tide Coral Blast",
        image: "product1.jpg",
        sizes: [
            { size: "92 oz", price: 10.00 },
        ],
        category: "laundry",
    },

    {
        id: 19,
        name: "Tide w/ Downy",
        image: "product1.jpg",
        sizes: [
            { size: "92 oz", price: 10.00 },
        ],
        category: "laundry",
    },

    {
        id: 20,
        name: "All Free&Gentle",
        image: "product1.jpg",
        sizes: [
            { size: "36 oz", price: 2.50 },
        ],
        category: "laundry",
    },

    {
        id: 21,
        name: "Downy Infusions Softener",
        image: "product1.jpg",
        sizes: [
            { size: "41 oz", price: 4.00 },
        ],
        category: "laundry",
    },

    {
        id: 22,
        name: "Downy Softener",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 3.00 },
        ],
        category: "laundry",
    },

    {
        id: 23,
        name: "Persil Liquid",
        image: "product1.jpg",
        sizes: [
            { size: "40 oz", price: 4.00 },
        ],
        category: "laundry",
    },

    {
        id: 24,
        name: "Persil Pods",
        image: "product1.jpg",
        sizes: [
            { size: "40 ct", price: 10.00 },
        ],
        category: "laundry",
    },

    {
        id: 25,
        name: "Lysol Laundry Sanitizer",
        image: "product1.jpg",
        sizes: [
            { size: "41 oz", price: 4.50 },
        ],
        category: "laundry",
    },

    {
        id: 26,
        name: "Arm&Hammer w/ Oxi Pods",
        image: "product1.jpg",
        sizes: [
            { size: "24 ct", price: 4.00 },
        ],
        category: "laundry",
    },

    {
        id: 27,
        name: "9Elements Bundle",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 8.00 },
        ],
        category: "laundry",
    },

    {
        id: 28,
        name: "Scott Toilet Paper",
        image: "product1.jpg",
        sizes: [
            { size: "12 Rolls", price: 4.00 },
        ],
        category: "paper",
    },

    {
        id: 29,
        name: "AngelSoft Toilet Paper",
        image: "product1.jpg",
        sizes: [
            { size: "6=24 Rolls", price: 4.50 },
        ],
        category: "paper",
    },

    {
        id: 30,
        name: "Cottonelle Toilet Paper",
        image: "product1.jpg",
        sizes: [
            { size: "6 Rolls", price: 5.00 },
        ],
        category: "paper",
    },

    {
        id: 31,
        name: "Charmin 1-ply Toilet Paper",
        image: "product1.jpg",
        sizes: [
            { size: "6=24 Rolls", price: 5.00 },
        ],
        category: "paper",
    },

    {
        id: 32,
        name: "Charmin Flushable Wipes",
        image: "product1.jpg",
        sizes: [
            { size: "40 ct", price: 2.50 },
        ],
        category: "paper",
    },

    {
        id: 33,
        name: "Cottonelle Flushable Wipes",
        image: "product1.jpg",
        sizes: [
            { size: "84 ct", price: 4.00 },
        ],
        category: "paper",
    },

    {
        id: 34,
        name: "Scott Paper Towels",
        image: "product1.jpg",
        sizes: [
            { size: "6 Rolls", price: 4.00 },
        ],
        category: "paper",
    },

    {
        id: 35,
        name: "Viva Paper Towels",
        image: "product1.jpg",
        sizes: [
            { size: "6 Rolls", price: 5.00 },
        ],
        category: "paper",
    },

    {
        id: 36,
        name: "Brawny Paper Towels",
        image: "product1.jpg",
        sizes: [
            { size: "2=4 Rolls", price: 3.00 },
            { size: "4=6 Rolls", price: 4.00 },
            { size: "4=8 Rolls", price: 5.00 },
        ],
        category: "paper",
    },

    {
        id: 37,
        name: "AAA Batteries",
        image: "product1.jpg",
        sizes: [
            { size: "48 ct", price: 10.00 },
        ],
        category: "household",
    },

    {
        id: 38,
        name: "Dial Hand Soap",
        image: "product1.jpg",
        sizes: [
            { size: "7.5 oz", price: 1.00 },
        ],
        category: "household",
    },

    {
        id: 39,
        name: "Febreze Air Effects",
        image: "product1.jpg",
        sizes: [
            { size: "1", price: 2.00 },
        ],
        category: "household",
    },

    {
        id: 40,
        name: "Febreze Small Spaces",
        image: "product1.jpg",
        sizes: [
            { size: "1 Pack", price: 1.50 },
        ],
        category: "household",
    },

    {
        id: 41,
        name: "Clorox Disinfecting Spray",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 4.50 },
        ],
        category: "household",
    },

    {
        id: 42,
        name: "Clorox Spray Refill",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 4.00 },
        ],
        category: "household",
    },

    {
        id: 43,
        name: "9Elements Cleaning Spray",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 3.00 },
        ],
        category: "household",
    },

    {
        id: 44,
        name: "9Elements Dish Soap",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 3.00 },
        ],
        category: "household",
    },

    {
        id: 45,
        name: "Palmolive Dish Liquid",
        image: "product1.jpg",
        sizes: [
            { size: "20 oz", price: 2.00 },
        ],
        category: "household",
    },

    {
        id: 46,
        name: "Dawn Dish Soap",
        image: "product1.jpg",
        sizes: [
            { size: "Small", price: 1.00 },
            { size: "Large (32 oz)", price: 4.00 },
        ],
        category: "household",
    },

    {
        id: 47,
        name: "Dawn Power Wash Refill",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 3.00 },
        ],
        category: "household",
    },

    {
        id: 48,
        name: "Lysol Wipes",
        image: "product1.jpg",
        sizes: [
            { size: "30 ct", price: 2.50 },
        ],
        category: "household",
    },

    {
        id: 49,
        name: "Swiffer Wet Pads",
        image: "product1.jpg",
        sizes: [
            { size: "12 ct", price: 7.00 },
        ],
        category: "household",
    },

    {
        id: 50,
        name: "Wipeout Disinfecting Wipes",
        image: "product1.jpg",
        sizes: [
            { size: "80 ct", price: 3.00 },
        ],
        category: "household",
    },

    {
        id: 51,
        name: "Mr Clean Magic Eraser",
        image: "product1.jpg",
        sizes: [
            { size: "2 Pack", price: 2.00 },
        ],
        category: "household",
    },

    {
        id: 52,
        name: "Dishwasher Tabs",
        image: "product1.jpg",
        sizes: [
            { size: "20-25 ct", price: 5.00 },
            { size: "36 ct", price: 7.00 },
        ],
        category: "household",
    },

    {
        id: 53,
        name: "Finish Rinse Aid",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 3.00 },
        ],
        category: "household",
    },

    {
        id: 54,
        name: "Air Wick Plugin",
        image: "product1.jpg",
        sizes: [
            { size: "1 Oil + Warmer", price: 1.50 },
            { size: "2 Oil + Warmer", price: 3.00 },
        ],
        category: "household",
    },

    {
        id: 55,
        name: "Febreze Plugin Starter",
        image: "product1.jpg",
        sizes: [
            { size: "Oil + Warmer", price: 3.00 },
        ],
        category: "household",
    },

    {
        id: 56,
        name: "Febreze Plugin Refill",
        image: "product1.jpg",
        sizes: [
            { size: "2 Pack", price: 5.00 },
        ],
        category: "household",
    },

    {
        id: 57,
        name: "Umbrella",
        image: "product1.jpg",
        sizes: [
            { size: "Small / Personal", price: 7.00 },
        ],
        category: "household",
    },

    {
        id: 58,
        name: "Toothbrush",
        image: "product1.jpg",
        sizes: [
            { size: "Single", price: 1.00 },
        ],
        category: "oral",
    },

    {
        id: 59,
        name: "Toothpaste",
        image: "product1.jpg",
        sizes: [
            { size: "Less than 3.5 oz", price: 1.00 },
            { size: "Over 3.5 oz", price: 1.50 },
        ],
        category: "oral",
    },

    {
        id: 60,
        name: "Kids Toothpaste",
        image: "product1.jpg",
        sizes: [
            { size: "1 ct", price: 1.00 },
        ],
        category: "oral",
    },

    {
        id: 61,
        name: "Oral-B Floss",
        image: "product1.jpg",
        sizes: [
            { size: "1 Pack", price: 1.00 },
        ],
        category: "oral",
    },

    {
        id: 62,
        name: "Mouthwash",
        image: "product1.jpg",
        sizes: [
            { size: "Colgate", price: 3.00 },
            { size: "Scope (1 liter)", price: 3.50 },
            { size: "Listerine (1 liter)", price: 4.00 },
        ],
        category: "oral",
    },

    {
        id: 63,
        name: "Dove Shampoo / Conditioner",
        image: "product1.jpg",
        sizes: [
            { size: "Bundle", price: 6.00 },
        ],
        category: "personal",
    },

    {
        id: 64,
        name: "Pantene Shampoo / Conditioner",
        image: "product1.jpg",
        sizes: [
            { size: "Bundle", price: 5.00 },
        ],
        category: "personal",
    },

    {
        id: 65,
        name: "Suave Body Wash",
        image: "product1.jpg",
        sizes: [
            { size: "Womens", price: 1.50 },
            { size: "Mens", price: 1.50 },
        ],
        category: "personal",
    },

    {
        id: 66,
        name: "Nivea Body Wash",
        image: "product1.jpg",
        sizes: [
            { size: "Womens (20 oz)", price: 3.50 },
            { size: "Mens (16.9 oz)", price: 2.50 },
        ],
        category: "personal",
    },

    {
        id: 67,
        name: "Dove Body Wash",
        image: "product1.jpg",
        sizes: [
            { size: "Womens", price: 5.50 },
            { size: "Womens 2 for 10", price: 10.00 },
            { size: "Mens", price: 5.00 },
        ],
        category: "personal",
    },

    {
        id: 68,
        name: "Caress Body Wash",
        image: "product1.jpg",
        sizes: [
            { size: "Womens", price: 3.50 },
        ],
        category: "personal",
    },

    {
        id: 69,
        name: "Olay Body Wash",
        image: "product1.jpg",
        sizes: [
            { size: "Small (size)", price: 5.00 },
            { size: "Large w/ Pump", price: 6.50 },
        ],
        category: "personal",
    },

    {
        id: 70,
        name: "Dove Bar Soap",
        image: "product1.jpg",
        sizes: [
            { size: "Single", price: 1.00 },
            { size: "2 Pack", price: 1.50 },
            { size: "3 Pack", price: 2.50 },
        ],
        category: "personal",
    },

    {
        id: 71,
        name: "Softsoap Body Wash",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 2.00 },
        ],
        category: "personal",
    },

    {
        id: 72,
        name: "Degree Womens Deodorant",
        image: "product1.jpg",
        sizes: [
            { size: "Stick", price: 3.00 },
            { size: "Spray", price: 4.00 },
        ],
        category: "personal",
    },

    {
        id: 73,
        name: "Toms Womens Deodorant",
        image: "product1.jpg",
        sizes: [
            { size: "Aluminum Free", price: 3.00 },
        ],
        category: "personal",
    },

    {
        id: 74,
        name: "Dove 0% (No Aluminum)",
        image: "product1.jpg",
        sizes: [
            { size: "Stick", price: 5.00 },
            { size: "Spray", price: 6.00 },
        ],
        category: "personal",
    },

    {
        id: 75,
        name: "Dove Deodorant (w/ Aluminum)",
        image: "product1.jpg",
        sizes: [
            { size: "Spray", price: 5.50 },
        ],
        category: "personal",
    },

    {
        id: 76,
        name: "Axe Deodorant",
        image: "product1.jpg",
        sizes: [
            { size: "Stick", price: 3.00 },
            { size: "Spray", price: 3.00 },
        ],
        category: "personal",
    },

    {
        id: 77,
        name: "Degree Mens Deodorant",
        image: "product1.jpg",
        sizes: [
            { size: "Stick (2 for 7)", price: 7.00 },
            { size: "Spray", price: 4.00 },
        ],
        category: "personal",
    },

    {
        id: 78,
        name: "Nivea Lotion",
        image: "product1.jpg",
        sizes: [
            { size: "Small", price: 3.00 },
            { size: "Large", price: 4.00 },
        ],
        category: "personal",
    },

    {
        id: 79,
        name: "Aveeno Lotion",
        image: "product1.jpg",
        sizes: [
            { size: "12 oz", price: 4.00 },
        ],
        category: "personal",
    },

    {
        id: 80,
        name: "Gillette Mach3 Razor",
        image: "product1.jpg",
        sizes: [
            { size: "pack?", price: 5.00 },
        ],
        category: "personal",
    },
    
    {
        id: 81,
        name: "Schick Stubble Eraser",
        image: "product1.jpg",
        sizes: [
            { size: "Starter", price: 1.00 },
        ],
        category: "personal",
    },

    {
        id: 82,
        name: "Schick 3-Blade Razor",
        image: "product1.jpg",
        sizes: [
            { size: "3 Cartridges", price: 4.00 },
            { size: "4 Disposable", price: 4.00 },
        ],
        category: "personal",
    },

    {
        id: 83,
        name: "Bic 3-Blade Razor",
        image: "product1.jpg",
        sizes: [
            { size: "3 Disposable", price: 3.00 },
        ],
        category: "personal",
    },

    {
        id: 84,
        name: "Venus 3-Blade Razor",
        image: "product1.jpg",
        sizes: [
            { size: "1 Cartridge", price: 4.00 },
            { size: "2 Cartridge", price: 5.00 },
        ],
        category: "personal",
    },

    {
        id: 85,
        name: "Skintimate 4-Blade Razor",
        image: "product1.jpg",
        sizes: [
            { size: "4 Disposable", price: 4.00 },
            { size: "2 Cartridge", price: 8.00 },
            { size: "6 Cartridge", price: 12.00 },
        ],
        category: "personal",
    },

    {
        id: 86,
        name: "Nivea Mens Shaving",
        image: "product1.jpg",
        sizes: [
            { size: "Gel", price: 3.50 },
            { size: "Foam", price: 3.00 },
        ],
        category: "personal",
    },

    {
        id: 87,
        name: "Beauty 360 Shave",
        image: "product1.jpg",
        sizes: [
            { size: "Gel", price: 2.00 },
        ],
        category: "personal",
    },

    {
        id: 88,
        name: "Blade Shave",
        image: "product1.jpg",
        sizes: [
            { size: "Gel", price: 2.00 },
        ],
        category: "personal",
    },

    {
        id: 89,
        name: "Shaving Cream",
        image: "product1.jpg",
        sizes: [
            { size: "Barbasol", price: 1.00 },
            { size: "Gillette", price: 1.00 },
        ],
        category: "personal",
    },

    {
        id: 90,
        name: "Skintimate Shave",
        image: "product1.jpg",
        sizes: [
            { size: "Gel", price: 2.50 },
        ],
        category: "personal",
    },

    {
        id: 91,
        name: "Icy Hot",
        image: "product1.jpg",
        sizes: [
            { size: "Patches", price: 5.00 },
            { size: "Cream", price: 5.00 },
        ],
        category: "medicine",
    },

    {
        id: 92,
        name: "Motrin (200 mg)",
        image: "product1.jpg",
        sizes: [
            { size: "50 Tablets", price: 3.00 },
            { size: "100 Tablets", price: 5.00 },
        ],
        category: "medicine",
    },

    {
        id: 93,
        name: "U by Kotex",
        image: "product1.jpg",
        sizes: [
            { size: "Liners", price: 2.50 },
        ],
        category: "feminine",
    },

    {
        id: 94,
        name: "One by Poise",
        image: "product1.jpg",
        sizes: [
            { size: "Liners", price: 3.00 },
            { size: "Pads", price: 3.00 },
        ],
        category: "feminine",
    },

    {
        id: 95,
        name: "Carefree / Stayfree",
        image: "product1.jpg",
        sizes: [
            { size: "Liners", price: 2.00 },
            { size: "Pads", price: 2.00 },
        ],
        category: "feminine",
    },

    {
        id: 96,
        name: "Cetaphil Baby",
        image: "product1.jpg",
        sizes: [
            { size: "Wash", price: 4.00 },
        ],
        category: "baby",
    },

    {
        id: 97,
        name: "Luvs Diapers",
        image: "product1.jpg",
        sizes: [
            { size: "Size N", price: 5.00 },
            { size: "Size 1", price: 5.00 },
            { size: "Size 2", price: 5.00 },
            { size: "Size 3", price: 5.00 },
        ],
        category: "baby",
    },

    {
        id: 98,
        name: "Huggies Little Swimmers",
        image: "product1.jpg",
        sizes: [
            { size: "Size 4", price: 5.00 },
        ],
        category: "baby",
    },

    {
        id: 99,
        name: "Huggies Diapers",
        image: "product1.jpg",
        sizes: [
            { size: "Size 4 (76 ct)", price: 18.00 },
            { size: "Size 5 (68 ct)", price: 18.00 },
        ],
        category: "baby",
    },

    {
        id: 100,
        name: "Pampers Swimmers",
        image: "product1.jpg",
        sizes: [
            { size: "Size Small", price: 5.00 },
        ],
        category: "baby",
    },
    
    {
        id: 101,
        name: "Diaper Wipes",
        image: "product1.jpg",
        sizes: [
            { size: "Small", price: 1.00 },
            { size: "Large", price: 3.00 },
        ],
        category: "baby",
    },

    {
        id: 102,
        name: "Johnson & Johnson Lotion",
        image: "product1.jpg",
        sizes: [
            { size: "need", price: 2.50 },
        ],
        category: "baby",
    },

    {
        id: 103,
        name: "Baby Dove Hypoallergenic",
        image: "product1.jpg",
        sizes: [
            { size: "Wash", price: 3.00 },
            { size: "Lotion", price: 3.00 },
        ],
        category: "baby",
    },
    

];
