
​Blog API - Secure Backend System

​A secure RESTful API built with Node.js, Express, and MongoDB. This project features user authentication, data validation, and a relational database structure linking articles to their creators.



​𝐓𝐡𝐮𝐧𝐝𝐞𝐫 𝐂𝐥𝐢𝐞𝐧𝐭

​Backend: Node.js, Express.js
​Database: MongoDB with Mongoose ODM
​Security: JSON Web Tokens (JWT), Bcrypt password hashing
​Validation: Joi
​Testing: Postman and Thunder Client (VS Code)
​


Key Features

•​User Authentication: Secure sign-up and login with encrypted passwords.

•​Access Control: Protected routes using a custom requireAuth middleware.

•​User Ownership: Articles are automatically linked to the logged-in user who created them.

•​Data Population: Returns human-readable author details (Name/Email) instead of just IDs.

•​Pagination & Search: Efficient data retrieval with limit/skip logic and global text search.