const NotesClient = require('./notesClient')

require('jest-fetch-mock').enableMocks()

describe('NotesClient class', () => {
    it('calls fetch and loads data', (done) => {
        const notesClient = new NotesClient()

        fetch.mockResponseOnce(JSON.stringify({
            name: 'something',
        }))

        notesClient.loadNotes((data) => {
            expect(data.name).toBe('something')

            done()
        })
    })
    // it('calls fetch and posts data', () => {
    //     const notesClient = new NotesClient()

    // })
})