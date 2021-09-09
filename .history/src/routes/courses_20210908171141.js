const express = require('express');
const router = express.Router();

const courseController = require('../app/controller/CourseController');
// newsController.index;


router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.get('/:slug', courseController.show);









//tính chất của router là map từ trên xuống và chỉ map 1 địa chỉ
//nên để tuyến đường đi index cuối cùng. để khi cần chạy tuyến đường khác thì nó sẽ tìm từ trên xuống và thấy rồi chạy nó. nếu để nó phía dưới thì khi gặp file index sẽ chạy luôn chứ không chạy nó nữa.
module.exports = router;