const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');
// newsController.index;

router.get('/search', siteController.search);
router.get('/', siteController.index);
//nên để tuyến đường đi index cuối cùng. để khi cần chạy tuyến đường khác thì nó sẽ tìm từ trên xuống và thấy rồi chạy nó. nếu để nó phía dưới thì khi gặp file index sẽ chạy luôn chứ không chạy nó nữa.
module.exports = router;