// const bucket = require('../bucket-test-framework/bucket.js');
// const createDouble = bucket.createDouble;
// const describe = bucket.describe;
// const it = bucket.it;
// const expect = bucket.expect;
// const Note = require('../src/note.js');

describe('Note', function (){
  it('has text content', function () {
    var note1 = new Note('This is a new note');
    expect(note1.content).toBe('This is a new note');
  });
  it('has text content', function () {
    var note1 = new Note('This is new note');
    expect(note1.content).toBe('This is a new note');
  });
});
