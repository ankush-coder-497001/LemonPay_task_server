const jwt = require('jsonwebtoken');
//we are extracting the token from bearer authorization header and verifying it using the jwt library. If the token is valid, we call next() to proceed to the next middleware or route handler. If the token is invalid or missing, we return a 401 Unauthorized or 403 Forbidden response.
const Auth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from the Authorization header
  if (!token) {
    return res.status(401).json({ message: 'No token provided' }); // No token provided
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' }); // Invalid token
    }
    req.user = decoded; // Attach user info to request object
    next(); // Proceed to the next middleware or route handler
  });
}

module.exports = Auth;
// This middleware function checks for a valid JWT token in the request headers. If the token is valid, it allows the request to proceed; otherwise, it returns an error response.