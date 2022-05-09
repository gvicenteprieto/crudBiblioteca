const express = require ('express');
const app = express();

const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require ('./router'));

app.listen (PORT, () => {
    console.log(`🛰️  server running on port ${PORT} 🚀`)
});
