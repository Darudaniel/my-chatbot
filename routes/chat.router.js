const express = require('express');
const ChatService = require('../services/chat.service')
const validatorHandler = require('../middlewares/validator.handler')
const { chatSchema } = require('../schemas/chat.schema')
const limitRequestsToSameDomain = require('../middlewares/request.handler')

const router = express.Router();

router.post('/',
limitRequestsToSameDomain,
validatorHandler(chatSchema, 'body'),
async (req, res) => {
  const service = new ChatService();
  try {
      const { message } = req.body;
      // console.log(message);
      const response = await service.chat(message);

      res.json({
        choices: response
      });
    } catch (error) {
      console.log('error en la peticion' + error.message);
      res.status(500).json({ error: 'Internal server error: ' + error.message });
    }
  }
);

module.exports = router;
