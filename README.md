
​𝐁𝐥𝐨𝐠 𝐀𝐏𝐈 - 𝐒𝐞𝐜𝐮𝐫𝐞 𝐁𝐚𝐜𝐤𝐞𝐧𝐝 𝐒𝐲𝐬𝐭𝐞𝐦

​A secure RESTful API built with Node.js, Express, and MongoDB. This project features user authentication, data validation, and a relational database structure linking articles to their creators.



​𝐓𝐞𝐜𝐡 𝐒𝐭𝐚𝐜𝐤

​Backend: Node.js, Express.js

​Database: MongoDB with Mongoose ODM

​Security: JSON Web Tokens (JWT), Bcrypt password hashing

​Validation: Joi

​Testing: Postman and Thunder Client (VS Code)
​


𝐊𝐞𝐲 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬

•​User Authentication: Secure sign-up and login with encrypted passwords.

•​Access Control: Protected routes using a custom requireAuth middleware.

•​User Ownership: Articles are automatically linked to the logged-in user who created them.

•​Data Population: Returns human-readable author details (Name/Email) instead of just IDs.

•​Pagination & Search: Efficient data retrieval with limit/skip logic and global text search.


𝐆𝐞𝐭𝐭𝐢𝐧𝐠 𝐒𝐭𝐚𝐫𝐭𝐞𝐝🚀


​1. 𝐏𝐫𝐞𝐫𝐞𝐪𝐮𝐢𝐬𝐢𝐭𝐞𝐬

•​Node.js installed
•​MongoDB Atlas account


​2. 𝐈𝐧𝐬𝐭𝐚𝐥𝐥𝐚𝐭𝐢𝐨𝐧

```bash
git clone <your-repo-link>
cd week8-blog-api
npm install
```

3. 𝐄𝐧𝐯𝐢𝐫𝐨𝐧𝐦𝐞𝐧𝐭 𝐕𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬

​Create a .env file in the root directory and add:

```env
PORT=3005
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```


4. 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 𝐭𝐡𝐞 𝐩𝐫𝐨𝐣𝐞𝐜𝐭

```bash
npm run dev
```

𝐀𝐏𝐈 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧

You can view the full interactive API documentation, including request examples and expected responses, here:

[🔗 View Postman Documentation]

https://documenter.getpostman.com/view/51991219/2sBXcDGM9V



