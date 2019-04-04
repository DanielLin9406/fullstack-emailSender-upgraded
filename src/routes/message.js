const uuidv4 = require('uuid/v4');
const Router = require('express').Router;

const router = Router();

router.get('/', async (req, res) => {
  const messages = await req.context.models.Message.find();
  return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(
    req.params.messageId,
  );
  return res.send(message);
});

router.post('/', async (req, res) => {
  const message = await req.context.models.Message.create({
    text: req.body.text,
    user: req.context.me.id,
  });

  return res.send(message);  
  // const id = uuidv4();
  // const message = {
  //   id,
  //   text: req.body.text,
  //   userId: req.context.me.id,
  // };

  // req.context.models.messages[id] = message;

  // return res.send(message);
});

router.delete('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(
    req.params.messageId,
  );

  let result = null;
  if (message) {
    result = await message.remove();
  }

  return res.send(result);
  // const {
  //   [req.params.messageId]: message,
  //   ...otherMessages
  // } = req.context.models.messages;

  // req.context.models.messages = otherMessages;

  // return res.send(message);
});

module.exports = router;