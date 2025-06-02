# EcoTrack Mobile API Documentation

This document provides a reference for all API routes used by the **EcoTrack Flutter mobile application**. All endpoints are prefixed with `/api/auth/mobile`.

## Authentication

All secured endpoints require:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## User Registration & Login

### POST /register
**Register a new user**  
**Body:**
```json
{
  "name": "Juan Dela Cruz",
  "username": "juandelacruz",
  "phone": "09171234567",
  "email": "juan@email.com",
  "password": "securePass123",
  "barangay": "Wawa"
}
```

### POST /login
**Login using email, phone, or username**  
**Body:**
```json
{
  "identifier": "juan@email.com",
  "password": "securePass123"
}
```

---

## OTP Verification

### POST /verify-otp
**Verify account using OTP**  
**Body:**
```json
{
  "email": "juan@email.com",
  "otp": "123456"
}
```

### POST /resend-verification
**Resend OTP to user's email**  
**Body:**
```json
{
  "email": "juan@email.com"
}
```

### POST /lookup-resend-otp
**Resend OTP using any identifier**  
**Body:**
```json
{
  "identifier": "09171234567"
}
```

---

## Password Recovery

### POST /request-otp
**Request OTP for password reset**  
**Body:**
```json
{
  "email": "juan@email.com"
}
```

### POST /reset-password
**Reset password using OTP**  
**Body:**
```json
{
  "email": "juan@email.com",
  "otp": "123456",
  "newPassword": "newSecurePass123"
}
```

### POST /verify-forgot-otp
**Verify password reset OTP only**  
**Body:**
```json
{
  "email": "juan@email.com",
  "otp": "123456"
}
```

### POST /resend-reset-password-otp
**Resend OTP for password reset**  
**Body:**
```json
{
  "email": "juan@email.com"
}
```

---

## Profile

### PUT /update-profile
**Update name and/or username**  
**Headers:** Bearer token required  
**Body:**
```json
{
  "name": "Juan Updated",
  "username": "updatedjuan"
}
```

---

## Plug Management

### GET /:userId/plugs
**Get all plugs for a user**  
Returns a list of all **non-deleted** smart plugs linked to the user.

### GET /:userId/plugs/:plugId
**Get a specific plug by ID**  
Returns details of a specific plug if it exists and is not deleted.

---

## Notes

- Most requests return JSON responses with either `message`, `user`, `token`, or `plugs` keys.
- OTPs expire after **10 minutes**.
- All plugs returned are filtered for `isDeleted: false`.

