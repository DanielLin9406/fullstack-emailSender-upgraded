const Router = require('express').Router;

const router = Router();

router.get('/', async (req, res) => {
  // const user = await req.context.models.User.findById(
  //   req.context.me.id,
  // );
  return res.send(req.user);  
});

module.exports = router;