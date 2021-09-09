class NewsController {
  //[GET] /news
  index(req, res) {
    res.render('news');
  }

  //[GET] /news/:slug
  //slug la bien dong. la param tren url. tim hieu tren trang express => routes => use: se co cau hinh use bien dong

  show(req, res) {
    //tuong tu nhu trang chi tiet cua news
    res.send('news detail');
  }
}

module.exports = new NewsController(); //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do
