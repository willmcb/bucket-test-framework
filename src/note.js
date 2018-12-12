function Note(content) {
  this.content = content;
}

Note.prototype.summary = function() {
  return this.content.slice(0, 20);
};
