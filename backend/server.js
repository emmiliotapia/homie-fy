const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const jwt = require('jsonwebtoken');
const cors = require('cors');  // Importar CORS

const app = express();

// Middleware de CORS
app.use(cors());

// Middleware de autenticación
app.use((req, res, next) => {
  const token = req.headers.authorization || '';
  try {
    req.user = jwt.verify(token, 'your_secret_key');
  } catch (err) {
    req.user = null;
  }
  next();
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

mongoose.connect('mongodb://localhost:27017/homiefy', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000');
  }))
  .catch(err => console.log(err));
