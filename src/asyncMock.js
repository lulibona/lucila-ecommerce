const products = [
    {
        id:'1',
        name:'Iphone 12',
        price: 10000,
        stock: 25,
        img: 'https://www.fravega.com/p/celular-samsung-galaxy-a23-128gb-negro-781869'
    },
    {
        id:'2',
        name:'Iphone 11',
        price: 9000,
        stock: 20,
        img: 'https://www.fravega.com/p/celular-samsung-galaxy-a23-128gb-negro-781869'
    },
    {
        id:'3',
        name:'Iphone 10',
        price: 7000,
        stock: 16,
        img: 'https://www.fravega.com/p/celular-samsung-galaxy-a23-128gb-negro-781869'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
