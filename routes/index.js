import express from 'express';
import { callChatGPT } from '../helper';
var router = express.Router();

router.get('/', async function(req, res, next) {
  res.render('index');
  return;
});


router.post('/', async function(req, res, next) {
  res.send(callChatGPT(req.body.prompt));
  return;
});

export default router;
