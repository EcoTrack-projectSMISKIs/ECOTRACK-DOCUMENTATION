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
### Request Body (JSON)
```json
{
  "message": "User registered successfully. Awaiting verification.",
  "userId": "12345"
}
```
