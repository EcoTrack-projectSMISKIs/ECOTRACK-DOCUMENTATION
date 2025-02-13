# Authentication & User Management

## User Registration
**Endpoint:** `POST /auth/register`  
**Description:** Allows new users to register with email and password.  
**Notes:**
- Users must upload a BATELEC I electric bill receipt for verification.
- Verification is manual (Admin must approve accounts).

### Request Body (JSON)
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword",
  "electric_bill_receipt": "base64_encoded_image"
}
```
### Response (JSON)
```json
{
  "message": "User registered successfully. Awaiting verification.",
  "userId": "12345"
}
```
--
## User Login
**Endpoint:** `POST /auth/login`  
**Description:** Authenticates users and generates a JWT token.  

### Request Body (JSON)
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Response (JSON)
```json
{
  "token": "your_jwt_token",
  "message": "Login successful",
  "user": {
    "id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "verified": true
  }
}
```
