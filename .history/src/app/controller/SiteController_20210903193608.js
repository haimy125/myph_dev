class SiteController {
  //[GET] /
  index(req, res) {
    res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController(); //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do
