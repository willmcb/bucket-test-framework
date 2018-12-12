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
    notebook.add(note);
    expect(notebook.getNote(1)).toBe(note);
  });
});
