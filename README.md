# Restful API Practice - [Building Routes using API]

| Routes | Request methods |
|----------|----------|
|/Products| [POST , GET] |
|/products/{id}| [GET , PATCH , DELETE] |
|/orders |  [GET , POST] |
|/orders/{id}| [GET , DELETE] |

## Introduction

A RESTful API is a type of application programming interface (API) that allows two computer systems to exchange information securely over the internet. REST stands for representational state transfer. RESTful APIs use HTTP requests to access and use data.

Provide a brief introduction to your RESTful API project, highlighting how it utilizes the principles of REST and the benefits it offers.

## five commonly used methods in HTTP
| Methods      |   Description |
|--------------|---------------|
| POST | CREATE(C) new resources, on successful creation it returns HTTP status 201|
| GET | READ(R) -> HTTP 200(OK) or 404(NOT FOUND) or 400(BAD REQUEST)|
| PUT | UPDATION(U) new resources, on successful updations it returns HTTP status 200 or if the resource is not present it will create a new resource and return HTTP status 2001|
| PATCH |allowing clients to update specific fields without altering the entire resource.|
|DELETE| on successful deletion it returns 200(OK)|

## Let's Start Building the Project
1. **Install Node:**
  [click here](https://nodejs.org/en/download)
2. **Create a folder and initialize the npm in that folder:**
   ```bash
   npm init
   ```
3. **Install express so that we can work on the backend:**
   ```bash
   npm install --save express
   ```
4. **Create a folder with the name server.js and refer to the above code:**
5. **To run the server.js:**
   ```bash
   node server.js
   ```
:tada: **Congratulations you have built your own server**<br/>
But you don't want to repeat the 5 steps every time you update something in your code. That's where **nodemon** comes in.
**nodemon** is a package that helps restart the server whenever you make changes in the code, saving you a significant amount of time during development.

## Installation

There are 2 ways to install **nodemon**:

- **Globally**
- **Locally**

### Local Installation

To install **nodemon** locally, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the root directory of your project.
3. Run the following command to install **nodemon** as a development dependency:

   ```bash
   npm install --save-dev nodemon
   ```
4. Once the installation is complete, update your package.json file to include a script for starting your application with nodemon:
```bash
"scripts": {
  "start": "nodemon your-app.js"
}
```
5. Save the package.json file.
6. Run the following command to start the server using nodemon
```bash
npm start
```
:tada: **Your server is ready now with nodemon**

**_It's not over, friends! There's a lot more to come. Stay updated, guys!_**
> **If you have any suggestions, feedback, or if you've found any issues, feel free to create a pull request. I'm happy to collaborate!**

