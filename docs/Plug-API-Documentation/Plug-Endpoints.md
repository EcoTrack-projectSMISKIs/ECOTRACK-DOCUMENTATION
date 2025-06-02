# EcoTrack Plug API Documentation

This document lists all API endpoints related to smart plug management, energy usage, control, and AI recommendations for the EcoTrack system.

Base route prefix: `/api/plug`

## Authentication

All routes that affect a user's plug require:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## Plug Control

### POST /:id/on
Turn the plug ON via MQTT

### POST /:id/off
Turn the plug OFF via MQTT

### GET /:id/status
Fetch energy status of plug and save it to history. May trigger AI recommendation if data available.

### GET /:id/switch
Check current ON/OFF switch status of the plug

---

## Plug Usage & History

### GET /:id/history
Get full usage history stored inside plug document

### GET /:id/history/daily
Get last 30 days of usage history

### GET /:id/chart?range=yesterday|week|month
Get chart data based on selected range (`yesterday`, `week`, `month`)

### GET /energy/monthly
(Admin) Get combined monthly kWh usage from all plugs

### POST /record/:plugId
Developer only — Add fake kWh record for testing

---

## Plug Setup & Configuration

### PUT /:id/rename
Rename plug and assign appliance metadata  
**Body:**
```json
{
  "name": "Living Room Plug",
  "applianceName": "Aircon",
  "iconKey": "aircon",
  "iconVariant": 1
}
```

### GET /addFromDevice/:ip/:userId
Register plug from LAN-discovered IP address and attach it to a user

---

## Stats and Insights

### GET /appliance-stats
Get a count of all appliance names used across plugs

---

## Plug Deletion

### DELETE /:id
Reset Tasmota plug via MQTT and remove plug from DB and user reference

---

## Notes

- Real-time control is powered via **MQTT**
- AI tips are triggered automatically inside `GET /:id/status` when `Today` usage is present
- Plug schema supports icons, names, and energy-saving recommendation logs

