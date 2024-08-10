# ExpressJs Security Measures

1. Express Sessions:

Used to maintain user sessions across multiple requests. It’s useful for implementing login sessions. Managed by express-session.

2. JSON Web Tokens (JWT):

A compact, URL-safe means of representing claims to be transferred between two parties. Commonly used for stateless authentication. Managed by jsonwebtoken.

3. Crypto:

The Node.js crypto module provides cryptographic functionality, including random number generation, hashing, and more.

4. Bcrypt:

A library to help you hash passwords securely. Bcrypt is a popular choice for password hashing due to its adaptive nature, making it resistant to brute-force attacks. Managed by bcrypt.

5. Passport:

A popular authentication middleware for Node.js. It provides various strategies for authentication, such as local strategy (username/password), OAuth, etc. Managed by passport.

Use ``` openssl rand -base64 32`` to create random keys
