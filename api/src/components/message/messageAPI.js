import messageRouter from '../../libs/router/enrichRouter';

messageRouter.get('/', async (req, res) => {
  const messages = await req.context.models.Message.find();
  return res.send(messages);
});

messageRouter.get('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(
    req.params.messageId
  );
  return res.send(message);
});

messageRouter.post('/', async (req, res) => {
  const message = await req.context.models.Message.create({
    text: req.body.text,
    user: req.context.me.id
  });

  return res.send(message);
});

messageRouter.delete('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(
    req.params.messageId
  );

  let result = null;
  if (message) {
    result = await message.remove();
  }

  return res.send(result);
});

export default messageRouter;
