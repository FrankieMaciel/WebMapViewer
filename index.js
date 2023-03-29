let express = require('express');
let app = express();

let porta = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(porta, () => {
    console.log(`Servidor iniciado na porta ${porta}.`);
});