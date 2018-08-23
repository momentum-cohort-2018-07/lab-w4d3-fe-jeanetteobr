# Note-Taking App

## Directions

In today's project, you will use Ajax to make GET, POST, PUT, and DELETE requests, making a one-page application in the process.

Your application is a note-taking app. It should display a list of all your notes and give you the ability to create new notes, edit old notes, and delete notes. Notes are made up of a title, text, optional tags, and the date/time most recently updated.

No wireframe is provided. You will have to create a design yourself. Looking at Google Keep may provide some inspiration.

The API you will use to retrieve and store your notes is https://notes-api.glitch.me/. This API was created for this assignment. If you encounter any errors with it, contact Clinton.

## Bonus steps

Make tags on notes clickable and update the page to only show notes with that tag. If you implement this, you'll need to indicate you're looking at a view of only that tag and have a way to get back to the full list.

## Getting started... 

1. Play w/API w/ Insomnia
2. Make basic HTML & CSS for notes
3. Make an AJAX request to get your notes and log them
4. Display notes on page
5. Make simple form on page on the page
6. Add event listener to create the JS object you will need to send and log
7. Add AJAX to create note on server and add code to add to the page 


## REST convenstion
GET /items - get list of items
POST /items - create an item
GET /item/:id - get one item
PUT /items/:id - update item
DELETE /items/:id - delete item
