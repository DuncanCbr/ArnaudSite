const express = require('express')
const app = express()
const keyRouter = require ("./routes/key");
const cors = require('cors');

app.use(cors());

const db = require('./models');

app.use(express.json());
app.use('/key', keyRouter);

db.sequelize.sync().then(() => {

    app.listen(3001, () => {
        console.log('server running on port 3001');
    });
});
