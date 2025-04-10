import jordan1 from "./img/jordan-1.jpg";
import jordan2 from "./img/jordan-2.jpg";
import jordan3 from "./img/jordan-3.jpg";
import jordan4 from "./img/jordan-4.jpg";
import jordan5 from "./img/jordan-5.jpg";
import jordan6 from "./img/jordan-6.jpg";
import jordan7 from "./img/jordan-7.jpg";

const products = [
    {
        "id": 1,
        "imagen": "https://i.ibb.co/mrRTPnyN/jordan-1.jpg",
        "nombre": "Air Jordan 1 Low",
        "nuevo": "Lo nuevo",
        "descripcion": "Zapatillas Jordan para Hombre",
        "coleccion": "jordan",
        "genero": "hombre",
        "precio": 219999,
        "envioGratis": false,
        "precioEnvio": 10999,
        "descuento": "",
        "stock": 10
    },
    {
        "id": 2,
        "imagen": "https://i.ibb.co/Q3FB62r1/jordan-2.jpg",
        "nombre": "Air Jordan 1 Low",
        "nuevo": "",
        "descripcion": "Zapatillas Jordan para Hombre",
        "coleccion": "jordan",
        "genero": "hombre",
        "precio": 219999,
        "envioGratis": false,
        "precioEnvio": 10999,
        "descuento": "10% de descuento",
        "stock": 5
    },
    {
        "id": 3,
        "imagen": "https://i.ibb.co/fz0QRN16/jordan-3.jpg",
        "nombre": "Air Jordan 1 Mid",
        "nuevo": "Lo nuevo",
        "descripcion": "Zapatillas Jordan para Hombre",

        "coleccion": "jordan",
        "genero": "hombre",
        "precio": 239999,
        "envioGratis": false,
        "precioEnvio": 0,
        "descuento": "",
        "stock": 7
        
    },
    {
        "id": 4,
        "imagen": "https://i.ibb.co/vv3nwX5d/jordan-4.jpg",
        "nombre": "Air Jordan 1 High OG \"Mauve\"",
        "nuevo": "Lo nuevo",
        "descripcion": "Zapatillas Jordan para Hombre",
        "coleccion": "jordan",
        "genero": "hombre",
        "precio": 219999,
        "envioGratis": true,
        "precioEnvio": 0,
        "descuento": "",
        "stock": 8
    },
    {
        "id": 5,
        "imagen": "https://i.ibb.co/23gbBvnB/jordan-5.jpg",
        "nombre": "Air Jordan 1 Retro High OG",
        "nuevo": "",
        "descripcion": "Zapatillas Jordan para Mujer",
        "coleccion": "jordan",
        "genero": "mujer",
        "precio": 219999,
        "envioGratis": true,
        "precioEnvio": 0,
        "descuento": "",
        "stock": 15
    },
    {
        "id": 6,
        "imagen": "https://i.ibb.co/Rp6vc2pR/jordan-6.jpg",
        "nombre": "Air Jordan 1 Mid",
        "nuevo": "Lo nuevo",
        "descripcion": "Zapatillas Jordan para Mujer",
        "coleccion": "jordan",
        "genero": "mujer",
        "precio": 219999,
        "envioGratis": false,
        "precioEnvio": 15999,
        "descuento": "",
        "stock": 6
    },
    {
        "id": 7,
        "imagen": "https://i.ibb.co/p6dKyZ9N/jordan-7.jpg",
        "nombre": "Air Jordan 1 Retro High OG",
        "nuevo": "Lo nuevo",
        "descripcion": "Zapatillas de Moda, Jordan para Mujer",
        "coleccion": "jordan",
        "genero": "mujer",
        "precio": 344999,
        "envioGratis": true,
        "precioEnvio": 0,
        "descuento": "",
        "stock": 9
    }
];
export const getProducts = () => { // cuando llamemos a getProducts
    // nos va a traer una promesa
    return new Promise ( (resolve ) => {
        // y cuando se cumpla vamos a recibir products
        setTimeout( () => {
            resolve(products)
        }, 300)
    })
}

export const getProductsByGenero = (categoryId) => { // cuando llamemos a getProducts
    return new Promise ( (resolve ) => {
        setTimeout( () => {
            resolve(products.filter( product => product.genero === categoryId)) // nos va a traer el primer producto que tenga esa id
        }, 300)
    })
}

export const getProductsById = (productId) => { // cuando llamemos a getProducts
    return new Promise ( (resolve ) => {
        setTimeout( () => {
            resolve(products.find(prod => prod.id == productId)) // nos va a traer el primer producto que tenga esa id
        }, 300)
    })
}