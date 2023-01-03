const { Bling } = require('bling-erp-api')
const apiKey = ''

const blingConnection = new Bling(apiKey)

async function produtos(){
    const products = await blingConnection.contatos
    pedidos().all()
    

    console.log(products)
}

produtos()