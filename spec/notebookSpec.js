describe('Notebook', function (){
  var note = createDouble(['content','summary', 'id'],['this is a senetence that is longer than 20 chars', 'this is a senetence t', 1]);
  it('can store notes', function () {
    var notebook = new NoteBook();
    notebook.add(note);
    expect(notebook.notes).includes(note);
  });

  it('can delete a note', function () {
    var notebook = new NoteBook();
    notebook.add(note);
    notebook.delete(1);
    expect(notebook.notes.includes(note)).toBe(false);
  });

  it('can get a note', function () {
    var notebook = new NoteBook();
    console.log("nside test " + note.content())
    notebook.add(note);
    returnedNote = notebook.getNote(1)
    console.log("in the test"+returnedNote)
    expect(returnedNote.content()).toBe('this is a senetence that is longer than 20 chars');
  });

  it('creates a note', function() {
    var notebook = new NoteBook();
    notebook.create('Im a note. note note note');
    expect(notebook.notes.length).toBe(1);
  });
});
