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

Session Management
Session Storage in the Database:

The express-mysql-session library stores session data in your MySQL database. Each session is identified by a unique session_id,
which is generated when a user first logs in or initiates a session.
Session Handling in Multiple Tabs/Windows:

When a user logs in, a session is created and associated with a unique session ID. This session ID is sent to the client as a cookie.
Multiple Tabs/Windows: If the same user logs in from multiple tabs or windows in the same browser, they are typically sharing the same session cookie. Therefore, they are essentially using the same session stored in the database. This is why you will see only one session in the database.

Session Expiration and Cookies:

Client-Side Cookie: The session cookie on the client side has an expiration (maxAge). When the cookie expires, the session on the server side is still valid if the expiration time in the session store configuration hasn’t yet passed.
Deleting Cookies: If you delete the session cookie from the browser, the server-side session still exists until the session expiration time is reached. However, without the cookie, the client cannot send the session ID to the server, making any subsequent requests unauthorized.

Multiple Browsers or Incognito:

Different Browsers: When you log in from different browsers or incognito modes, each browser or mode maintains its own session. This is because each browser or incognito window keeps its own set of cookies. Thus, you can have multiple sessions for the same user if logged in from different browsers or incognito windows.

Use of Session Store
Persistence: Storing sessions in the database ensures persistence. Even if the server restarts, sessions will remain intact and available until they expire.
Scaling: With session data stored in a database, it’s easier to scale your application across multiple server instances, as all instances can share the same session data from the database.
Security: Using a session store helps manage session expiration and invalidation more securely and consistently.

Example Scenario:
User A Logs In:

User A logs in on Browser Tab 1. A session is created with a unique session ID and stored in the MySQL database.
User A opens Browser Tab 2. Since it’s the same browser session, it uses the same session cookie, so it’s associated with the same session ID.
Both tabs use the same session data stored in the MySQL database.

Deleting Client-Side Cookie:

If the session cookie is deleted from Browser Tab 1 or 2, the session data still exists in the database, but the client can no longer send the session ID. Therefore, subsequent requests from those tabs will be unauthorized until a new session is created.

Logging In with Another Browser:

If User A logs in with a different browser, a new session is created, resulting in a new session ID and a new entry in the MySQL database.

Summary
Session Data: Managed and stored in the database.
Client-Side Cookie: Used to maintain session continuity between requests.
Multiple Tabs/Windows: Share the same session if from the same browser.
Different Browsers: Result in separate sessions due to different cookies.
This behavior is expected and aligns with how session management and cookies work in web applications.

### Generate Random Keys

Use `` openssl rand -base64 32` to create random keys
