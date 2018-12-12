function NoteBook() {
  this.notes = [];
}

NoteBook.prototype.add = function(note)  {
  this.notes.push(note);
}
