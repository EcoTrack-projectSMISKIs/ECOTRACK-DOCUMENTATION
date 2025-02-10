# EcoTrack API Documentation

## Overview
The EcoTrack API provides endpoints for real-time electricity consumption monitoring, AI-driven energy-saving recommendations, and user notifications. This API serves as the backend for both the mobile (Flutter) and web (React) applications, enabling seamless data retrieval from IoT smart meters and interaction with users.

## Base URL
```
https://api.ecotrack. ????
```

## Authentication
The API uses JWT (JSON Web Token) authentication. Users must be logged in to access most endpoints.

### **User Registration**
**Endpoint:**
```
POST /auth/register
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword",
  "electricBillReceipt": "base64encodedimage"
}
```
**Response Body:**
```json
{
  "message": "User registered successfully",
  "userId": "12345"
}
```

### **User Login**
**Endpoint:**
```
POST /auth/login
```
**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```
**Response Body:**
```json
{
  "token": "your_jwt_token",
  "message": "Login successful"
}
```

## IoT Smart Meter Data Retrieval

### **Real-Time Energy Consumption**
**Endpoint:**
```
GET /iot/energy-usage
```
**Headers:**
```
Authorization: Bearer <JWT Token>
```
**Response Body:**
```json
{
  "user_id": "12345",
  "timestamp": "2025-02-10T15:30:00Z",
  "total_consumption_kwh": 8.5,
  "appliances": [
    { "name": "Air Conditioner", "usage_kwh": 3.2, "status": "ON" },
    { "name": "Refrigerator", "usage_kwh": 1.5, "status": "ON" }
  ]
}
```

### **Energy Consumption History**
**Endpoint:**
```
GET /iot/energy-history?period=monthly
```
**Query Parameters:**
- `period=hourly` → Returns hourly data for today
- `period=daily` → Returns last 7 days
- `period=monthly` → Returns last 3 months

**Response Body:**
```json
{
  "user_id": "12345",
  "history": [
    { "date": "2025-01-10", "consumption_kwh": 18.2 },
    { "date": "2025-01-11", "consumption_kwh": 20.5 }
  ]
}
```

## AI-Powered Energy Recommendations
**Endpoint:**
```
GET /ai/recommendations
```
**Headers:**
```
Authorization: Bearer <JWT Token>
```
**Response Body:**
```json
{
  "user_id": "12345",
  "recommendations": [
    "Reduce air conditioner usage by 30 minutes per day to save 5% energy.",
    "Use LED bulbs instead of incandescent to reduce energy costs by 15%.",
    "Unplug appliances when not in use to prevent phantom power consumption."
  ]
}
```

## Notifications (Power Outages & Updates)
**Endpoint:**
```
GET /notifications
```
**Headers:**
```
Authorization: Bearer <JWT Token>
```
**Response Body:**
```json
{
  "notifications": [
    { "title": "Scheduled Maintenance", "message": "Power interruption in District 5 from 2PM - 5PM on Feb 12.", "date": "2025-02-10" },
    { "title": "New Feature!", "message": "EcoTrack now offers AI-powered recommendations for energy saving!", "date": "2025-02-09" }
  ]
}
```

## Admin Features
### **Post News & Updates**
**Endpoint:**
```
POST /admin/news
```
**Headers:**
```
Authorization: Bearer <JWT Token>
```
**Request Body:**
```json
{
  "title": "Power Interruption Notice",
  "message": "Scheduled maintenance on Feb 15 from 1PM-5PM.",
  "date": "2025-02-10"
}
```
**Response Body:**
```json
{
  "message": "News posted successfully"
}
```

### **User Management (Admin Only)**
**Endpoint:**
```
GET /admin/users
```
**Headers:**
```
Authorization: Bearer <JWT Token>
```
**Response Body:**
```json
{
  "users": [
    { "user_id": "12345", "name": "John Doe", "email": "john.doe@example.com", "verified": true }
  ]
}
```

## Summary
| **Feature** | **Method** | **Endpoint** | **Description** |
|------------|------------|----------------|----------------|
| User Authentication | `POST` | `/auth/login` | Logs in user & returns JWT token |
| IoT Data Retrieval | `GET` | `/iot/energy-usage` | Fetches real-time energy usage |
| AI Recommendations | `GET` | `/ai/recommendations` | Provides energy-saving tips |
| Notifications | `GET` | `/notifications` | Fetches power outage & news updates |
| Admin User Management | `GET` | `/admin/users` | View registered users (Admin Only) |

## viva awit salvatore

**MIT License:**
```text
Copyright (c) 2025 EcoTrack Development Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

