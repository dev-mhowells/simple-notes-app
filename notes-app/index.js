const NotesClient = require("./notesClient.js");
const NotesModel = require("./notesModel.js");
const NotesView = require("./notesView.js");

const client = new NotesClient()
const model = new NotesModel()
// model.addNote("test note")
// model.addNote("another test note")
const view = new NotesView(model, client)
// client.createNote(['test'])
view.displayNotesFromAPI()


function createNote(data) {
    console.log(JSON.stringify({data}))

    fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({content: data}),
    })
    .then((response) => { console.log(response) ; return response.json()})
    .then((data) => {
        console.log('Success:', data);
    })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
}
createNote('hillo')
// console.log(model.getNotes())