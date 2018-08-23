import 'shoelace-css/dist/shoelace.css'
import '/main.css'

import uuid from 'uuid/v4'

import request from 'superagent'

request.get('https://notes-api.glitch.me/api/notes')
  .auth('jeanetteobr', 'password')
  .then(response => {
    let notes = response.body.notes
    // console.log(notes)
    displayNoteResults(notes)
  })

function displayNoteResults (notes) {
  document.getElementById('notes').innerHTML = ''
  let outputDiv
  for (let note of notes) {
    outputDiv = document.createElement('div')
    outputDiv.classList.add('notes__content')
    outputDiv.innerHTML = `<h1>${note.title}<h1> <p>${note.text}</p>`
    document.getElementById('notes').appendChild(outputDiv)
  }
}

document.getElementById('notes-form').addEventListener('submit', event => {
  event.preventDefault()

  let formData = {
    id: uuid(),
    title: document.getElementById('note-title').value.trim(),
    text: document.getElementById('note-text').value.trim()
  }

  request.post('https://notes-api.glitch.me/api/notes')
    .send(formData)
    .auth('jeanetteobr', 'password')
    .then(response => {
      document.getElementById('notes-form').reset()
      let note = response.body
      // console.log('hi')
      addNote(note)
    })
})

function addNote (note) {
  let outputDiv = createNoteDOM(note)
  document.getElementById('notes').appendChild(outputDiv)
}

function createNoteDOM (note) {

  let outputDiv = document.createElement('div')
  outputDiv.id = `_${note.id}`
  outputDiv.classList.add('notes__content')
  outputDiv.innerHTML = `<h1>${note.title}</h1> <p>${note.text}</p>`

  let deleteButton = document.createElement('button')
  deleteButton.href = '#'
  deleteButton.innerText = 'Delete note'
  deleteButton.addEventListener('click', event => {
    deleteNote(note)
  })
  outputDiv.appendChild(deleteButton)
  return outputDiv
}

function deleteNote (note) {
  request.delete(`https://notes-api.glitch.me/api/notes/${note._id}`)
    .auth('jeanetteobr', 'password')
    .then(response => {
      document.getElementById(`_${note.id}`).remove()
    })
}
