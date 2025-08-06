# Node.js Application

This project is a simple Node.js application that demonstrates various functionalities including printing to the console, creating an HTTP server, file handling, password generation, and sending emails.

## Project Structure

```
nodejs-app
├── hello-world.js         # Prints "HELLO WORLD" to the console
├── server.js              # Creates an HTTP server on port 3000
├── welcome.txt            # Contains the line "Hello Node"
├── read-hello.js          # Reads and logs the contents of welcome.txt
├── password-generator.js   # Generates and logs random passwords
├── email-sender.js        # Sends an email using nodemailer
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```
   cd nodejs-app
   ```
3. Install the required packages:
   ```
   npm install generate-password nodemailer
   ```

### Running the Application

- To run the hello-world program:
  ```
  node hello-world.js
  ```

- To start the server:
  ```
  node server.js
  ```
  Access the server at `http://localhost:3000`.

- To create the welcome.txt file:
  ```
  node read-hello.js
  ```

- To generate a random password:
  ```
  node password-generator.js
  ```

- To send an email:
  ```
  node email-sender.js
  ```

## License

This project is licensed under the MIT License."# nodejs-app" 
