# User Management

### List All Registered Users
**Endpoint:** `GET /admin/users`  
**Description:** Retrieves a list of all registered users.  

#### Response (JSON)
```json
[
  {
    "id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "verified": false,
    "registration_date": "2025-02-01T10:00:00Z"
  }
]
```

### Approve or Reject User Verification
**Endpoint:** `POST /admin/users/{user_id}/verify`  
**Description:** Allows admins to approve or reject a user’s verification request.  

#### Request (JSON)
```json
{
  "status": "approved"
}
```
#### Response (JSON)
```json
{
  "message": "User verification status updated successfully."
}
```

