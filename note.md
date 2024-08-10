# Login Flow

When a user logs in using the provided flow, here's what happens step-by-step:

1. User Submits Login Form
The user submits the login form with their email and password.
2. Login Route (/login)
The POST request to the /login route is handled by your Express route defined in routes/loginRoute.js.
3. Passport Authentication
Passport Strategy: Passport.js uses the LocalStrategy to handle authentication. It checks the user's credentials (email and password) against the database.
Find User: Passport queries the database to find a user with the provided email.
Password Comparison: It compares the hashed password stored in the database with the password provided by the user using bcrypt.
4. Serialize User
Serialize User: Upon successful authentication, Passport serializes the user’s ID into the session. This ID is stored in the session store.
5. Session Management
Session Creation: Express-session middleware creates a session for the user, using the SESSION_SECRET to sign the session ID cookie.
Session Storage: The session ID is stored in a cookie on the user's browser, allowing them to be identified on subsequent requests.
6. Generate JWT Token
JWT Creation: After successful login, a JWT (JSON Web Token) is created using jwt.sign. The token includes the user's ID and is signed with JWT_SECRET. It is set to expire in one hour.
JWT in Response: The token is included in the response and can be used by the client to authenticate future requests or store in local storage for frontend interactions.
7. Redirect to Dashboard
Redirect: The user is redirected to the /dashboard route upon successful login. This is the endpoint where the user can access protected content, likely using the JWT for authentication.
8. Access Protected Routes
Protected Routes: On protected routes (e.g., /dashboard), the server will verify the JWT (if required) to ensure the user is authenticated and authorized to access the content.
Summary Flow Diagram
User Login Form Submission → POST /login
Passport LocalStrategy → Authenticate User
Serialize User → Create Session
Generate JWT Token → Send Token to User
Redirect to /dashboard
This flow ensures that user authentication is handled securely with sessions and JWTs, allowing for efficient and secure access control.