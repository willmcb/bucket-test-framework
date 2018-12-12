function NoteBook() {
  this.notes = [];
}

NoteBook.prototype.add = function(note)  {
  this.notes.push(note);
}

NoteBook.prototype.delete = function(id)  {
  var that = this;
  this.notes.forEach(function(note, index){
    if (note.id() === id) {
       that.notes.splice(index, 1);
       return true;
    }
  });
  return false;
}
