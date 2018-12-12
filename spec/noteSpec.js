describe('Note', function (){
  describe('@content', function() {
    it('has text content', function () {
      var note1 = new Note('This is a new note');
      expect(note1.content).toBe('This is a new note');
    });
    it('has text content', function () {
      var note1 = new Note('This is new note');
      expect(note1.content).toNotBe('This is a new note');
    });
  });

  describe('.summary', function() {
    it('shows the first 20 chars of a 30 char string', function() {
      var note1 = new Note('abcdefghsisisislfdjemerpwitrms');
      expect(note1.summary()).toBe('abcdefghsisisislfdje');
      expect(note1.summary().length).toBe(20);
    });

    it('will show all of a string that is 20 chars or less', function () {
      var note2 = new Note('12345678910');
      expect(note2.summary()).toBe('12345678910');
      expect(note2.summary().length).toBe(11);
    });
  });
});
