const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const artikelRouter = require('../app/routes/artikelRouter');

app.get('/', (req, res) => res.send('Halo, Remas!'));
app.use('/artikel', artikelRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
