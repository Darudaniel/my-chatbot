const rateLimit = require('express-rate-limit');

const limitRequestsToSameDomain = rateLimit({
  windowMs: 60 * 1000, // 60 segundos
  max: 1, // Solo una solicitud permitida durante la ventana de tiempo
  keyGenerator: (req) => {
    return req.hostname; // Utiliza el hostname del objeto req como clave
  },
  handler: (req, res) => {
    res.status(429).json({ error: 'Too many requests from this domain' });
  }
});

module.exports = limitRequestsToSameDomain;
