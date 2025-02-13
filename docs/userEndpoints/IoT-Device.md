# IoT Device Management (Smart Meters)

## List Registered IoT Devices
**Endpoint:** `GET /devices`  
**Description:** Returns a list of IoT smart meters linked to the user's account.  

### Response (JSON)
```json
[
  {
    "device_id": "1000abcdef",
    "name": "Living Room Plug",
    "status": "online",
    "last_power_reading": {
      "power": 60,
      "voltage": 120,
      "current": 0.5,
      "timestamp": "2025-02-14T10:00:00Z"
    }
  }
]
```

## Fetch Power Consumption (Real-Time)
**Endpoint:** `GET /devices/{device_id}/power`  
**Description:** Retrieves real-time power consumption data from the specified device.  

### Response (JSON)
```json
{
  "device_id": "1000abcdef",
  "power": 60,
  "voltage": 120,
  "current": 0.5,
  "timestamp": "2025-02-14T10:00:00Z"
}
```
