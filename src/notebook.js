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

NoteBook.prototype.getNote = function(id) {
  var that = this;
  var returnNote = '';
  this.notes.forEach(function(note, index){
    if (note.id() === id) {
        console.log(note);
        console.log(note.content());
        returnNote = note;
    }
  });
  return returnNote;
}


NoteBook.prototype.create = function(content) {
  this.add(new Note(content));
}
