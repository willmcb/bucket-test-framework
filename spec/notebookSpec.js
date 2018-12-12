describe('Notebook', function (){
  var note = createDouble(['content','summary', 'id'],['this is a senetence that is longer than 20 chars', 'this is a senetence t', 1]);
  it('can store notes', function () {

    var notebook = new NoteBook();
    notebook.add(note);
    expect(notebook.notes).includes(note);
  });

  // it('has text content', function () {
  //   var note1 = new Note('This is new note');
  // });
});
