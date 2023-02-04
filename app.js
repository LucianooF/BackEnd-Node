const { json } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const {infoCursos} = require('./datos/cursos.js');

// routers

const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

// routing

app.get('/', (req, res) => {
	res.send('Mi primer servidor. Cursos.')
});

app.get('/api/cursos', (req, res) => {
	res.send(infoCursos);
});




app.listen(PORT, () => {
	console.log(`El servidor esta escuchando en el puerto ${PORT}...`);
});