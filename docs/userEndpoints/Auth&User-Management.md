# Authentication & User Management

## User Registration
**Endpoint:** `POST /auth/register`  
**Description:** Allows new users to register with email and password.  
**Notes:**
- Users must upload a BATELEC I electric bill receipt for verification.
- Verification is manual (Admin must approve accounts).
- Store user details in MongoDB with JWT-based authentication.

## User Login
**Endpoint:** `POST /auth/login`  
**Description:** Authenticates users and generates a JWT token.  
**Notes:**
- Requires email and password.
- Returns a JWT token used for API authorization.
- Invalid credentials return an error response.

## Fetch User Profile
**Endpoint:** `GET /users/profile`  
**Description:** Retrieves authenticated user details.  
**Notes:**
- Requires JWT authentication.
- Returns user name, email, verified status, and registered devices.
