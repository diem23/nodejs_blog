const news = require('./news');
const search = require('./search');
const site = require('./site');
function route(app) {
    app.use('/news', news);
    app.use('/hehe', search);
    app.use('/', site);
}
module.exports = route;
