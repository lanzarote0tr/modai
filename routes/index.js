import express from 'express';
var router = express.Router();

router.get('/', async function(req, res, next) {
  res.render('index');
  return;
});

export default router;
