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
