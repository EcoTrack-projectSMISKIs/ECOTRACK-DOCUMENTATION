# IoT Device Management (Smart Meters)

## List Registered IoT Devices
**Endpoint:** `GET /devices`  
**Description:** Returns a list of IoT smart meters linked to the user's account.  
**Notes:**
- Data is fetched from MongoDB where devices are stored.
- Shows device name, status (online/offline), and latest power reading.

## Fetch Power Consumption (Real-Time)
**Endpoint:** `GET /devices/{device_id}/power`  
**Description:** Retrieves real-time power consumption data from the specified device.  
**Notes:**
- Requires device ID in the request.
- Queries the eWeLink API to fetch live power readings.
- Returns voltage, current, power consumption, and timestamp.
