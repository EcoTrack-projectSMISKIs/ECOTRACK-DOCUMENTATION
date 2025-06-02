# EcoTrack Admin API Documentation

This document covers all API endpoints related to the **Admin Panel** of EcoTrack (Web Dashboard). Admins can manage users, admins, and news posts using the routes documented below.

## Authentication & Headers

All protected routes require:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## Auth Routes

### POST /api/admin/login
**Description:** Admin login  
**Body:**  
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

### GET /api/admin/profile
**Description:** View admin's own profile  
**Access:** admin, superadmin

### PUT /api/admin/profile
**Description:** Update admin's own name/email  
**Access:** admin, superadmin

### PUT /api/admin/change-password
**Description:** Change current admin password  
**Access:** admin, superadmin  
**Body:**  
```json
{
  "currentPassword": "old123",
  "newPassword": "new123",
  "confirmPassword": "new123"
}
```

---

## Admin Management (Superadmin Only)

### POST /api/admin/create
**Description:** Create a new admin (random password emailed)  
**Body:**  
```json
{
  "name": "Jane Doe",
  "email": "jane@ecotrack.com"
}
```

### GET /api/admin/all
**Description:** Get all admins (excluding passwords)  
**Access:** superadmin

### PUT /api/admin/:id
**Description:** Update an admin's name/email  
**Access:** superadmin

### DELETE /api/admin/:id
**Description:** Archive (soft-delete) an admin  
**Access:** superadmin

### PATCH /api/admin/toggle/:id
**Description:** Toggle archive status (archive/unarchive admin)  
**Access:** superadmin

---

## User Management

### GET /api/users
**Description:** Get all registered users  
**Access:** admin

### GET /api/users/:id
**Description:** Get a single user’s details  
**Access:** admin

### PUT /api/users/:id
**Description:** Update a user’s data  
**Access:** admin

### DELETE /api/users/:id
**Description:** Archive user (soft-delete)  
**Access:** admin

### PATCH /api/users/toggle/:id
**Description:** Toggle archive status of a user  
**Access:** admin

---

## News Management

### GET /api/news
**Description:** Publicly fetch news  
**Query Params (optional):** `?status=published&category=alert`

### POST /api/news
**Description:** Create a news post  
**Access:** admin  
**Body:**  
```json
{
  "title": "Power Outage",
  "content": "There will be maintenance...",
  "status": "published",
  "category": "alert"
}
```

### PUT /api/news/:id
**Description:** Update an existing news post  
**Access:** admin

### DELETE /api/news/:id
**Description:** Permanently delete news  
**Access:** admin

### PUT /api/news/archive/:id
**Description:** Archive or unarchive a news post  
**Access:** admin  
**Body:**  
```json
{ "isArchived": true }
```

---

## Notes
- Routes are protected via JWT and role-based access (`admin`, `superadmin`)
- Some endpoints are limited to `superadmin` only (e.g., creating/deleting admins)


