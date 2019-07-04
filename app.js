const index = require('./index')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

// Configurando Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurando Rotas
const router  = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

router.get('/test', (req, res) => res.json({ message: 'Route Test Okay!' }));

router.get('/aplicarDesconto/:valor/:desconto', (req, res) => {
    const valor = parseInt(req.params.valor)
    const desconto = parseInt(req.params.desconto)
    res.json({valorDescontado: index.aplicarDesconto(valor,desconto)})
    })

app.use( '/', router)
if(require.main === module ){
    app.listen(port)
    console.log('API Funcionando');
}

module.exports = app
