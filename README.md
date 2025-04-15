#  EcoTrack Admin Webside – API Documentation

**Version:** 1.1  
**Base URL:** `http://localhost:5003/api`  
**Auth:** JWT Bearer Token required for protected routes.

---

##  Admin Routes

### `POST /api/admin/login`
Authenticate an admin and return a JWT.

#### Request Body
```json
{
  "email": "admin@ecotrack.com",
  "password": "ask_luis_for_password"
}
```

#### Response
```json
{
  "token": "JWT_TOKEN"
}
```

---

##  User Routes

>  All user routes below require a `Bearer` token in the `Authorization` header.

### `POST /api/users/register`
Register a new user.

#### Request Body
```json
{
  "name": "Luis",
  "username": "luisadmin",
  "phone": "09123456789",
  "email": "luis@example.com",
  "password": "securepassword"
}
```

---

### `POST /api/users/login`
Login an existing user.

#### Request Body
```json
{
  "email": "luis@example.com",
  "password": "securepassword"
}
```

#### Response
```json
{
  "_id": "userId",
  "name": "Luis",
  "email": "luis@example.com",
  "token": "JWT_TOKEN"
}
```

---

### `GET /api/users`
Get a list of all users.  
**Headers:**  
`Authorization: Bearer <token>`

---

### `PUT /api/users/:id`
Update a user.

#### Request Body
```json
{
  "name": "Updated Name",
  "email": "new@email.com"
}
```

---

### `DELETE /api/users/:id`
Delete a user by ID.

---

##  News Routes

>  All news routes require `Authorization: Bearer <token>`.

### `GET /api/news`
Get all news entries.

---

### `POST /api/news`
Create a new news entry.

#### Request Body
```json
{
  "title": "Power Interruption Notice",
  "content": "There will be a maintenance...",
  "image": "https://example.com/image.jpg"
}
```

---

### `PUT /api/news/:id`
Update a news entry.

#### Request Body
```json
{
  "title": "Updated title",
  "content": "Updated content",
  "image": "https://example.com/updated.jpg"
}
```

---

### `DELETE /api/news/:id`
Delete a news entry by ID.

---

##  Notes

- Ensure the backend is running at `http://localhost:5003`.
- Include `Authorization: Bearer <JWT_TOKEN>` in protected routes.
- All input fields are validated via Mongoose.

---

##  Related Repositories

- [Frontend (admin-panel)](https://github.com/EcoTrack-projectSMISKIs/EcoTrack-Admin-webside/tree/main/admin-panel)
- [Frontend (admin-panel)](https://github.com/EcoTrack-projectSMISKIs/EcoTrack-Admin-webside/tree/main/backend)

---

##  Built by
** EcoTrack Dev Team**
