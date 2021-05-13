# Emerald_MERN
React,express,Mongodb,node.js




Steps to run the code on a local machine below

Requirements
1.Node.js
2.IDE

npm packages required:
(Installation with yarn - yarn add <package>)

Client package.json dependencies
1.Axios (npm i axios)
2.react-router-dom (npm i react-router-dom)
3.React testing library (npm i --save-dev @testing-library/react)
4.Material_ui (npm i @material-ui/core)

Backend package.json dependencies
1. cors (npm i cors)
2. express (npm i express)
3. mongoose (npm i mongoose)
4. nodemon (npm i nodemon)

STEPS

Github repository path - https://github.com/kligan/Emerald_MERN.git

1. Create a new folder e.g FolderX

2. Using git CLI or GitHub desktop clone https://github.com/kligan/Emerald_MERN.git in FolderX

3. Open FolderX in your IDE or editor

4. There will be two folders, client(React app) and backend(Node.js server)

6. Open a terminal and locate to the backend folder e.g- C:\Tab\Users\FolderX\backend and run the command 'node app.js'(this will run express server on Port 3001)

7. Open another terminal and locate to the frontend folder e.g- C:\Tab\Users\FolderX\client and run the command 'npm install'(this will install node_modules)

8. Once  node_modules have been installed from the previous step, run the command 'npm start'(this will run react frontend on port 3000)

9. Run test: 'npm test'


****KEY FEATURES****



1. Entire application is built using React, Context, React-router-dom,node.js express, mongoose and Material.UI

2. The application is fully responsive and can work on mobile devices and tablets.

3. http methods(post,get,put and delete) are initiated using Axios

4. The './contents' route is authenticated using context and react-router and hence needs to be logged in in order to access it.

5. Log in and Log out events sets and removes a key-value pair inside localstorage to maintain usersessions.

5. Once logged in , a user can create a new article.

6. New articles gets stored in a NoSQL db(MongoDB)

7. User can update and delete articles

8. User can Add new tags and update tags

9. User can filetr by category 

10. User can search by title or tags name

11. Unit testing of 'Home' component using @testing-library/react

12. Material.UI has been used to craete some UI elements such as Button










