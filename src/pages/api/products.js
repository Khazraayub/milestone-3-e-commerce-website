export default function handler(req, res){
    const products =[
        {
            id: 1,
            name: "Chicken Chow mein",
            price: 700,
            image: "/images/hero1.jpg",
        },
        {
            id: 2,
            name: "Chicken Manchurian With Rice",
            price: 900,
            image: "/images/hero2.jpg",
        },
        {
            id: 3,
            name: "Alferado Pasta",
            price: 600,
            image: "/images/card5.jpg",
        },
        {
            id: 4,
            name: "Dumplings ",
            price: 150,
            image: "/images/product1.jpg",
        },
        {
            id: 5,
            name: "Chicken Cheese Balls",
            price: 600,
            image: "/images/product6.jpg",
        },
        {
            id: 6,
            name: "Roasted Fish",
            price: 500,
            image: "/images/card6.jpg",
        },
        {
            id: 7,
            name: "Lasagna",
            price: 300,
            image: "/images/hero3.jpg",
        },
        {
            id: 8,
            name: "Sushi",
            price: 300,
            image: "/images/hero4.jpg",
        },
        {
            id: 9,
            name: "Red Sauce Pasta",
            price: 400,
            image: "/images/hero5.jpg",
        },
        {
            id: 10,
            name: "Chicken Fried Rice",
            price: 400,
            image: "/images/card1.jpg",
        },
        {
            id: 11,
            name: "Veg Fried Rice",
            price: 350,
            image: "/images/card2.jpg",
        },
        {
            id: 12,
            name: "Noodles",
            price: 200,
            image: "/images/card3.jpg",
        },
        {
            id: 13,
            name: "Jalapeno Chiecken",
            price: 700,
            image: "/images/card4.jpg",
        },
        {
            id: 14,
            name: "Spring Rolls",
            price: 100,
            image: "/images/product2.jpg",
        },
        {
            id: 15,
            name: "Wonton",
            price: 100,
            image: "/images/product3.jpg",
        },
        {
            id: 16,
            name: "Chinese Soup",
            price: 500,
            image: "/images/product4.jpg",
        },
        {
            id: 17,
            name: "Shashlik With Rice",
            price: 900,
            image: "/images/product5.jpg",
        },

        
        
    ];
    res.status(200).json(products);
}