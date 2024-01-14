const products = [
    {
        id: '1',
        name: 'Aros',
        price: 1000,
        category: 'joyas',
        img:'https://img.freepik.com/foto-gratis/papel-pintado-estetico-plateado-pendientes_23-2149871684.jpg?w=1380&t=st=1705031767~exp=1705032367~hmac=0cd629ea788fccf69b61a240f89890e122206c21258012cd152746b37dd4795e',
        stock:25,
        description: 'Aros de plata 925',
    },
    {
        id: '2',
        name: 'Collar',
        price: 2000,
        category: 'joyas',
        img:' https://img.freepik.com/foto-gratis/primer-plano-mujer-que-llevaba-hermoso-collar-plata-colgante_181624-15490.jpg?w=1380&t=st=1705033212~exp=1705033812~hmac=a52058cef420b4227dbfa5351e869655d2f6f36603514f37a36363a2609344e2',
        stock:25,
        description: 'Collar de plata 925',
    },
    {
        id: '3',
        name: 'Cadena',
        price: 3000,
        category: 'joyas',
        img:'https://img.freepik.com/foto-gratis/retrato-mujer-europea-vestido-novia-collar-anillo_343596-841.jpg?w=1380&t=st=1705033328~exp=1705033928~hmac=395388b5c4780a2231710ba2058309dbdedef933bc0aae92022de215a438472f',
        stock:25,
        description: 'Cadena de plata 925',
    },
    {
        id: '4',
        name: 'Reloj',
        price: 10000,
        category: 'relojes',
        img:'https://img.freepik.com/foto-gratis/mujer-mostrando-su-arte-reloj_23-2149820446.jpg?w=1380&t=st=1705031588~exp=1705032188~hmac=4920b1568fb42bdcb9e762608062657744f10ad1a39daa3c11f0bf66a2152bfc',
        stock:25, 
        description: 'Reloj pulsera',
    },
    {
        id: '5',
        name:'Cartera',
        price: 30000,
        category: 'carteras',   
        img:'https://img.freepik.com/foto-gratis/hermosa-elegancia-lujo-moda-mujer-bolso_74190-4900.jpg?w=1380&t=st=1705031620~exp=1705032220~hmac=8fd9096fa5e180adb7c6c74c62074533ba4092fa5e46984b7c78ef281afa7974',
        stock:25,
        description: 'Cartera simil cuero',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productoId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}