const NotesModel = require("./notesModel.js")

describe("NotesModel", () => {
    it("gets notes", () => {
        model = new NotesModel()
        expect(model.getNotes()).toEqual([])
    })
    it("returns notes", () => {
        model = new NotesModel()
        model.addNote('Buy milk')
        model.addNote('Go to the gym')
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
    })
    it("resets notes", () => {
        model = new NotesModel()
        model.addNote('Buy milk')
        model.addNote('Go to the gym')
        model.reset()
        expect(model.getNotes()).toEqual([])
    })
})