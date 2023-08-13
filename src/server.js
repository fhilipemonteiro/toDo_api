const express = require('express');

require('dotenv').config();

const { accountsRoutes } = require('./routes');

const app = express();

app.use(express.json());

app.use(accountsRoutes);

app.listen(process.env.SERVER_PORT || 3000, () => console.log(`Server is running at port ${process.env.SERVER_PORT || 3000} 📦🔥`));
