# Security & Admin Access Control

### Fetch Admin Roles
**Endpoint:** `GET /admin/roles`  
**Description:** Retrieves a list of available admin roles.  

#### Response (JSON)
```json
[
  {
    "role_id": "1",
    "role_name": "superadmin",
    "permissions": ["manage_users", "manage_news", "manage_support"]
  },
  {
    "role_id": "2",
    "role_name": "moderator",
    "permissions": ["manage_news", "manage_support"]
  }
]
```


### Assign Admin Roles
**Endpoint:** `POST /admin/roles/{admin_id}/assign`  
**Description:** Assigns a new role to an admin.  

#### Request (JSON)
```json
{
  "role": "moderator"
}
```
