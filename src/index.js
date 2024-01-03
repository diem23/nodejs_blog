const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');
// SETTING READ STATIC FILE
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//console.log(path.join(__dirname,'resource/public'))
// HTTP LOGGER
app.use(morgan('combined'));

// SET HANDLEBARS
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
// console.log("PATH: ",path.join(__dirname,'resource/views'));
const route = require('./routers');
// route init
route(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
