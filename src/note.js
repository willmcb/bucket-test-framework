

var Note = (function() {
  var nextId = 0;

  return function Note(content) {
      this.content = content;
      this.id = nextId++;
   }
})();

Note.prototype.summary = function() {
  return this.content.slice(0, 20);
};
