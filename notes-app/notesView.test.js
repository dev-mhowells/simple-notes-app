/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')
const NotesClient = require('./notesClient')

describe('', () => {
    it('', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel()
        model.addNote('a note')
        model.addNote('another note')

        view = new NotesView(model)
        view.displayNotes()

        expect(document.querySelectorAll('#note').length).toEqual(2)
    })

    it('adds a note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');


        const model = new NotesModel()
        new NotesView(model)

        const input = document.querySelector('#note-input')
        input.value = 'test'

        const addButton = document.querySelector('#add-button')
        addButton.click()

        expect(document.querySelector('#note').textContent).toEqual('test')
    })
    it('adds more than one note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel()
        new NotesView(model)

        const addButton = document.querySelector('#add-button')

        const input = document.querySelector('#note-input')
        input.value = 'test'
        addButton.click()

        input.value = 'test2'
        addButton.click()

        expect(document.querySelectorAll('#note').length).toEqual(2)

    })
    it('displays a note from the API', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const fakeClient = {
            loadNotes: (callback) => callback(['some note'])
        }
        
        const model = new NotesModel();
        const view = new NotesView(model, fakeClient);

        view.displayNotesFromAPI()

        console.log(document.querySelector('#note'))

        expect(document.querySelector('#note').textContent).toEqual('some note')

    })
})