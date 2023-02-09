class NotesView {
    constructor(model, client) {
        this.model = model
        this.client = client
        this.mainContainerEl = document.querySelector('#main-container')
        this.addButton = document.querySelector('#add-button')
        this.addButton.addEventListener('click', () => {
            this.clearDisplay()
            const inputVal = document.querySelector('#note-input').value 
            this.model.addNote(inputVal)
            this.client.createNote(inputVal)
            this.displayNotes()
            this.clearInput()
        })
    }
    displayNotes() {
        this.model.getNotes().forEach((note) => {
            const div = document.createElement("div")
            div.setAttribute('id', 'note')
            div.textContent = `${note}`
            this.mainContainerEl.append(div)
        })
    }
    clearDisplay() {
        const notes = document.querySelectorAll('#note')
        notes.forEach((note) => {
            note.remove()
        })
    }
    clearInput() {
        document.querySelector('#note-input').value = ''
    }
    displayNotesFromAPI() {
        this.client.loadNotes((data) => {
            this.model.setNotes(data)
            this.displayNotes()
        })
    }
}

module.exports = NotesView