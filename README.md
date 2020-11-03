# node_eval

RESTful Bookmarks Node.js
Basic example of bookmarks application, which uses Angular.js, Bootstrap and Express.js backend running on top of Node.js.

The main purpose of this project was show communication between Angular.js and Node.js backend through REST JSON data.

TODO: review frontend and backend code
Prerequisites
Must have Git installed

Must have node.js (at least v0.10.0) installed with npm (Node Package Manager)

Installation Guide
Enter the following commands in the terminal

git clone https://github.com/erkobridee/restful-bookmarks-nodejs.git
cd restful-bookmarks-nodejs
npm install
Commands
Run application
npm start or node server

REST resources
bookmark resource
GET - get 1 or more bookmarks

.../rest/bookmarks/ - list all available bookmarks with pagination support ?page=${num}&size=${length}

.../rest/bookmarks/{id} - get bookmark by given id

POST - add new one

.../rest/bookmarks/ - data sent inside body request
PUT - update an existent one

.../rest/bookmarks/{id} - data sent inside body request
DELETE - remove bookmark by given id

.../rest/bookmarks/{id}
