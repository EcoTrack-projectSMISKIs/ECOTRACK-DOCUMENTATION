# EcoTrack AI Recommendation System

This module generates short, personalized energy-saving tips for users based on their plug's daily consumption data. It uses OpenAI's GPT-4o model to analyze usage history and return concise suggestions.

## Features

- Fetches recent plug usage from MongoDB
- Formats a prompt dynamically
- Sends prompt to OpenAI GPT-4o API
- Returns 2-sentence energy optimization advice (max 30 words)

## Technologies

- Node.js (Express.js)
- MongoDB
- OpenAI GPT-4o API
- JWT Authentication

## How It Works

1. User taps "Get Tip" in the EcoTrack mobile app.
2. Backend fetches the latest `Yesterday` usage data.
3. It builds a natural language prompt based on appliance name and usage.
4. Sends to OpenAI and returns a friendly recommendation.

## Example API Endpoint
