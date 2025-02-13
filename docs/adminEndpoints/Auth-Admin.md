# Admin API Documentation for EcoTrack

**Base URL:**  
`https://api.ecotrack.com/v1/admin`

**Authentication:**  
Bearer Token (JWT)

---

## Authentication & Admin Management

### Admin Login
**Endpoint:** `POST /admin/login`  
**Description:** Allows admins to log in using email and password.  

#### Request (JSON)
```json
{
  "email": "admin@example.com",
  "password": "securepassword"
}
```

#### Response (JSON)
```json
{
  "token": "your_admin_jwt_token",
  "message": "Login successful",
  "admin": {
    "id": "admin123",
    "name": "Admin User",
    "role": "superadmin"
  }
}
```

### Fetch Admin Profile
**Endpoint:** `GET /admin/profile`  
**Description:** Retrieves authenticated admin details.  

#### Response (JSON)
```json
{
  "id": "admin123",
  "name": "Admin User",
  "email": "admin@example.com",
  "role": "superadmin"
}
