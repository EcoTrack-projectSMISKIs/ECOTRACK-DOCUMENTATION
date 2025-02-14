# EcoTrack API Documentation not final (proceed to the endpoints folder)

## Overview
The EcoTrack API provides endpoints for real-time electricity consumption monitoring, AI-driven energy-saving recommendations, and user notifications. This API serves as the backend for both the mobile (Flutter) and web (React) applications, enabling seamless data retrieval from IoT smart meters and interaction with users.

## Base URL
```
https://api.ecotrack. ???? asis
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

## License
This project, **EcoTrack**, is developed as a **capstone project** for the **College of Computing and Information Technologies (CCIT) at National University Manila**. The system is designed for use by **Batangas I Electric Cooperative, Inc. (BATELEC I)** to enhance energy efficiency monitoring and provide AI-powered insights to consumers.

**Ownership & Usage:**
- The system is intended for research and development purposes under the CCIT department.
- BATELEC I holds rights to system utilization and implementation but is subject to further legal agreements.
- Unauthorized distribution, reproduction, or commercial use without approval from the project team and relevant authorities is prohibited.

### 2025 EcoTrack Development Team
