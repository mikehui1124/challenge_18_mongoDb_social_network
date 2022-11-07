# challenge_18_mongoDb_social_network

This is a JavaScript source-code for building an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM
It uses Express.js for routing, a MongoDB database framework , and the Mongoose ODM to define collection schema and parent-child relationship. 
The app will be using Express.js and Mongoose of NPM as dependency. The app will be invoked by using the following commands:

  “node ./util/seed.js” or “npm run seed”

  “node index.js”

The completed JavaScript source-code, database schema, api routes and package log (ie package.json file) are available in the following GitHub repo as Main branch,

  https://github.com/mikehui1124/challenge_18_mongoDb_social_network
  
The workthrough video of the API is available as follows.

  https://drive.google.com/file/d/1wQbpkhP7FL0YWrjuR2yL7RAGgP8PvOiC/view

Description

The API will provide CRUD services for users to display, add, update and deletes user account. It also allows users to add or remove friends from his friend-list.
Users are allowed to display, add, update, and delete thoughts in his own profile. Other users can then leave reactions to a thought.

The application has a database with 3 collections of documents, namely

  -	User & Thought


Snapshot of Users’ Document and Sub-document Structure 

![image](https://user-images.githubusercontent.com/105307687/200332181-15fa5527-49d1-4077-8cae-b3bb3badac61.png)

Snapshot of Thoughts’ Document and Sub-document Structure

![image](https://user-images.githubusercontent.com/105307687/200332357-b7f1c7c8-a1d1-48d9-ab95-a5b216a180fd.png)
