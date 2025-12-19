#!/bin/bash
echo "1. Registering User..."
curl -s -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com", "password":"password123", "name":"Test User"}'
echo -e "\n"

echo "2. Logging In..."
RESPONSE=$(curl -s -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com", "password":"password123"}')
echo "Response: $RESPONSE"

TOKEN=$(echo $RESPONSE | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

if [ -z "$TOKEN" ]; then
  echo "Failed to get token"
  exit 1
fi

echo "Token: $TOKEN"
echo -e "\n"

echo "3. Accessing Profile (User Role)..."
curl -s -H "Authorization: Bearer $TOKEN" http://localhost:3000/users/profile
echo -e "\n"

echo "4. Accessing Admin Data (Should Fail 403)..."
curl -s -H "Authorization: Bearer $TOKEN" http://localhost:3000/users/admin
echo -e "\n"
