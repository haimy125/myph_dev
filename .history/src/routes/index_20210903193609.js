const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  app.use('/news', newRouter);
  app.use('/', siteRouter);

  //no bang cai o duoi
  // app.get('/news', (req, res) => {
  //     // console.log(req.query.q);//lay parameter tren url qua name cua thuoc tinh
  //     res.render('news');
  // });

  // app.get('/', (req, res) => {
  //     res.render('home');
  // });

  // app.get('/search', (req, res) => {
  //     // console.log(req.query.q); //cach de lay duoc tham so parameter truyen tren browser
  //     res.render('search');
  // });

  // app.post('/search', (req, res) => {
  //     //form data hay phương thức post thì dùng body để lấy.
  //     //còn get thì dùng query
  //     console.log(req.body);
  //     res.send('');
  // });
}

module.exports = route;
