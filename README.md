# User App Backend Application

## Getting started
To get started with the application, follow these steps:

### Initialize a demo project locally

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. `npm install`
4. `npm start` and to run in the local dev environment.



### Description
This Node Express application provides two endpoints for handling user data - one for fetching users and another for posting new users. It utilizes the GET and POST HTTP methods to accomplish these tasks.


### Endpoints
1. GET /users
- Description: Retrieves a list of users.
- Usage: Send a GET request to /users.
- Response: Returns a JSON array of user objects.


2. POST /users/add
- Description: Adds a new user.
- Usage: Send a POST request to /users/add with a JSON payload containing user data.
- Request Payload Example:
{
    "name":"SriRam",
    "email":"sriram@gmail.com",
    "age":"28",
    "city":"Bangalore"
}
- Response: Returns a JSON object confirming the addition of the new user.


### Technologies Used
- Node JS
- Express JS
- Javascript
- Nodemon

### Credits
This project was created by [Priyanka KM].
