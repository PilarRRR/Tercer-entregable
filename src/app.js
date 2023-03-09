const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/user.routes');
const todosRoutes = require('./routes/todo.routes')

initModels();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log('database conected')
    })
    .catch((error) => console.log(error));

db.sync({ })
    .then(() => console.log('db sync'))
    .catch((error) => console.log(error));

app.use(userRoutes);
app.use(todosRoutes);

app.get('/', (req, res) => {
    res.send('Wlecome yo my API')
});

app.listen(PORT, () =>{
    console.log(`Server running in ${PORT}`)
});