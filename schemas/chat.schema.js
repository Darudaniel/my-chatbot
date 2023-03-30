const Joi = require('joi');

const chatSchema = Joi.object({
  message: Joi.string().trim().pattern(/^[^<>&]*$/).required()
});

module.exports = chatSchema;
