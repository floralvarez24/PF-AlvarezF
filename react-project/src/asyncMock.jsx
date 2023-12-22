const products = [
    {
        id: '1',
        name: 'Aros',
        price: 1000,
        category: 'joyas',
        stock:25,
        description: 'Aros de plata',
    },
    {
        id: '2',
        name: 'Collar',
        price: 2000,
        category: 'joyas',
        stock:25,
        description: 'Collar de plata',
    },
    {
        id: '3',
        name: 'Pulsera',
        price: 3000,
        category: 'joyas',
        stock:25,
        description: 'Pulsera de plata',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}