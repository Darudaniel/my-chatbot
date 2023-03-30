const Joi = require('joi');
const boom = require('@hapi/boom');
const chatSchema = require('../schemas/chat.schema');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = chatSchema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
