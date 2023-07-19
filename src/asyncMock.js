const products = [
    {
        id:'1',
        name:'Remeron Galaxy',
        price: 10000,
        stock: 5,
        description: 'aca iría la descripcion del producto',
        category: 'indumentaria',
        img: "https://dummyimage.com/100x100/000"
    },
    {
        id:'2',
        name:'Remeron Andrómeda',
        price: 9000,
        stock: 10,
        description: 'aca iría la descripcion del producto',
        category: 'indumentaria',
        img: "https://dummyimage.com/100x100/000"
    },
    {
        id:'3',
        name:'Buzo Oversize Orion',
        price: 8000,
        stock: 13,
        description: 'aca iría la descripcion del producto',
        category: 'indumentaria',
        img: "https://dummyimage.com/100x100/000"
    }
    ,
    {
        id:'4',
        name:'Buzo Oversize Neptuno',
        price: 7500,
        stock: 16,
        description: 'aca iría la descripcion del producto',
        category: 'indumentaria',
        img: "https://dummyimage.com/100x100/000"
    },
    {
        id:'5',
        name:'Riñonera Urano',
        price: 7000,
        stock: 8,
        description: 'aca iría la descripcion del producto',
        category: 'accesorios',
        img: "https://dummyimage.com/100x100/000"
    },
    {
        id:'6',
        name:'Zapatillas Júpiter',
        price: 27000,
        stock: 11,
        description: 'aca iría la descripcion del producto',
        category: 'calzado',
        img: "https://dummyimage.com/100x100/000"
    },
    {
        id:'7',
        name:'Zapatillas Neptuno',
        price: 26000,
        stock: 12,
        description: 'aca iría la descripcion del producto',
        category: 'calzado',
        img: "https://dummyimage.com/100x100/000"
    },
    {
        id:'8',
        name:'Medias Cometa',
        price: 2000,
        stock: 16,
        description: 'aca iría la descripcion del producto',
        category: 'indumentaria',
        img: "https://dummyimage.com/100x100/000"
    },
    {
        id:'9',
        name:'Medias Eclipse',
        price: 2500,
        stock: 18,
        description: 'aca iría la descripcion del producto',
        category: 'indumentaria',
        img: "https://dummyimage.com/100x100/000"
    },
    {
        id:'10',
        name:'Cartera Saturno',
        price: 22000,
        stock: 14,
        description: 'aca iría la descripcion del producto',
        category: 'indumentaria',
        img: "https://dummyimage.com/100x100/000"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}


