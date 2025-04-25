# Task Management System - Server

A robust backend API for the Task Management System built with Node.js, Express, and MongoDB. This server provides secure authentication and task management endpoints with proper error handling and data validation.

## Features

- 🔐 JWT Authentication
- 🔒 Password Hashing
- 📝 Task Management API
- ✅ Input Validation
- 🛡️ Error Handling
- 📊 MongoDB Integration
- 🔄 CORS Support
- 📝 API Documentation
- 🧪 Environment Configuration
- 🔍 Request Logging

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv
- cors

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Postman (for API testing)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Todo_task_server
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
PORT=7000
MONGODB_URI=mongodb://localhost:27017/task_management
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm run dev
# or
yarn dev
```

The server will be available at `http://localhost:7000`

## API Endpoints

### Authentication

- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user

### Tasks

- `GET /api/task/getAll` - Get all tasks
- `POST /api/task/create` - Create a new task
- `PUT /api/task/update/:id` - Update a task
- `DELETE /api/task/delete/:id` - Delete a task

## Project Structure

```
src/
├── controllers/     # Route controllers
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic
├── middlewares/    # Custom middlewares
└── index.js        # Application entry point
```

## API Documentation

### User Registration
```http
POST /api/user/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### User Login
```http
POST /api/user/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Create Task
```http
POST /api/task/create
Content-Type: application/json
Authorization: Bearer <token>

{
  "taskName": "Task name",
  "description": "Task description",
  "dueDate": "2024-03-20T10:00:00Z"
}
```

## Error Handling

The API uses standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error

## Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS enabled
- Input validation
- Error handling middleware

## Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@example.com or create an issue in the repository. 