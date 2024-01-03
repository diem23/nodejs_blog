class SearchController {
    index(req, res) {
        res.render('search');
    }
    sendMsg(req, res) {
        res.send(req.body);
    }
}
module.exports = new SearchController();
