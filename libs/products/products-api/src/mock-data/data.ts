export const search = {
    query: 'iphone',
    response: {
        products: [{
            id:'MLA1139392343',
            title:'Apple iPhone 11 (128 Gb) - Negro',
            price:{amount: 214499.22, currency: 'ARS', decimals: 0},
            picture:'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg',
            condition:'new',
            free_shipping:true,
            city:'Medellin'
        }],
        categories: [
            'Celulares y Teléfonos',
            'Celulares y Smartphones'
        ],
        author: {
            name: 'Juan',
            lastname: 'Puerta'
        }
    }
}

export const  getById = {
    query: 'MLA1119561622',
    response: {
        'author': {
            'name': 'Juan',
            'lastname': 'Puerta'
        },
        'id': 'MLA1119561622',
        'title': 'Apple iPhone 11 (128 Gb) - Blanco',
        'price': {
            'amount': 214499.22,
            'currency': 'ARS',
            'decimals': 0
        },
        'condition': 'new',
        'picture': 'http://http2.mlstatic.com/D_796892-MLA46114829828_052021-O.jpg',
        'sold_quantity': 100,
        'free_shipping': true,
        'description': 'Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración (2). Y no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros (1).\n\n\nAvisos Legales\n(1) El iPhone 11 es resistente a las salpicaduras, al agua y al polvo, y fue probado en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 2 metros). La resistencia a las salpicaduras, al agua y al polvo no es una condición permanente, y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos.\n(2) La duración de la batería varía según el uso y la configuración.\n(3) La pantalla tiene las esquinas redondeadas. Si se mide en forma de rectángulo, la pantalla del iPhone 11 tiene 6.06 pulgadas en diagonal. El área real de visualización es menor.\n(4) Los cargadores inalámbricos Qi se venden por separado.',
        "category": "Celulares y Smartphones" 
    }
 }