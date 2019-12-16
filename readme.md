Build a simple demo app that demonstrates your understanding
 of REST, NodeJS, JavaScript, Postgres SQL, Sequelize and ExpressJS.

 Create Express.js Project and Install Required Modules
Add and Configure Sequelize.js Module and Dependencies
Create or Generate Sequelize Models and Migrations
Create Routers for REST API Web Service and Authentication
Run and Test Secure Node.js, Express.js, Passport.js, and PostgreSQL Web Service

 The following tools, frameworks, and modules are required for this tutorial:

Node.js
PostgreSQL Server
Express.js
Sequelize.js
Terminal or Command Line
Text Editor or IDE
Postman

Create Express.js Project and Install Required Modules
 First, install express-generator using this command.

sudo npm install express-generator -g
Next, create an Express.js app using this command.

express <secure-node> or <your choice of name> --view=ejs
This will create Express.js project with the EJS view instead of Jade view template because using '--view=ejs' parameter. Next, go to the newly created project folder then install node modules.

Before run and test connection, make sure you have created a database 
psql postgres --u postgres
Next, type this command for creating a new user with password then give access for creating the database.

postgres-# CREATE ROLE <username> WITH LOGIN PASSWORD <'userpassword'>
postgres-# ALTER ROLE <username> CREATEDB;
Quit `psql` then log in again using the new user that previously created.

postgres-# \q
psql postgres -U <username>
Enter the password, then you will enter this `psql` console.
psql (9.5.13)
Type "help" for help.

postgres=>
Type this command to creating a new database.

postgres=> CREATE DATABASE <yourdatabase>;
Then give that new user privileges to the new database then quit the `psql`.

postgres=> GRANT ALL PRIVILEGES ON DATABASE <yourdatabase> TO <username>;
postgres=> \q


create a new file touch.env --> DB_NAME=<yourdatabase>
DB_SERVER=localhost ||psgres<on docker your server - herein my project docker name psgres>
DB_PORT=5432||5436 (for my project port is 5436 as psql is inside docker , we are connecxting from outside to docker local host so the port is 5436 . docker exp[osed 5436 port to main machine)])
DB_USERNAME=reachuser
DB_PASSWORD=reachpassword
EXPRESS_SESSION_SECRET=ebe31a49c4deed96460c429d8223c2c5cf5805dd99f9458d5e9f659e5d9efd1894719cdbbd9e8b5d4a869d74d82671e75d2fe1bf53ea8c10cc1fa54549686384


cd <projectname> && npm install 
 npm install sequelize sequelize-cli pg pg-hstore

create a file at the  root of project . here we will  tell/configure  paths  for database handling
this  files will tell Sequelize initialization to generate config, models, seeders and migrations files to specific directories.  --> touch .sequelizerc

 Next, type this command to initialize the Sequelize. ->  //Sequelize init
 npx sequelize init
 the following message diply on commandline -
 Created "config/config.json"
Successfully created models folder at "/home/pi/node-psgres-sequlize-express-passport-rest/models".
Successfully created migrations folder at "/home/pi/node-psgres-sequlize-express-passport-rest/migrations".
Successfully created seeders folder at "/home/pi/node-psgres-sequlize-express-passport-rest/seeders".

npx sequelize model:create --name User --attributes userName:string,passwordHash:string,userRoleId:integer

 npx sequelize model:create --name Donors --attributes Name:string,identifier:string,salutationId:integer,contactNo:string,email:string,donorTypeId:integer,donorFrequencyId:integer,address:string,donationStart:date,prefferedContactMode:integer,doNotContact:boolean,idNo:integer
 
 npx sequelize model:create --name Donations --attributes amount:integer,campaignId:integer,sourceId:integer,donationDate:date,donorId:integer





