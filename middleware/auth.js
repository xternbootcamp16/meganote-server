module.exports = (req, res, next) => {
  if (isPreflight(req) || isLoggingInOrSigningUp(req)) { next(); return; }
  const token = req.headers.authorization;
  if (token) {
    // verify the token
    // get the user
    next();
  }
  else {
    res.status(401).json({ message: 'Authentication required.' });
  }
};

function isLoggingInOrSigningUp(req) {
  if (req.method.toLowerCase() !== 'post') { return false; }
  const loggingIn = req.originalUrl.includes('sessions');
  const signingUp = req.originalUrl.includes('users');
  return (loggingIn || signingUp);
}

function isPreflight(req) {
  return (req.method.toLowerCase() === 'options');
}
