document.onreadystatechange = function () {
  if (document.readyState === "complete") {
  // document is ready. Do your stuff here

    // var notebook = new Notebook();

    function displayAllNotes() {
      main = document.getElementById("main");
      main.innerHTML = notebook.summariseAll().forEach(myFunction);
        function myFunction(value) {
          value.summary();
        }
    }
    displayAllNotes();

  //   function createNote() {
  //     document.getElementById(id).onclick = function(){
  //
  //
  //       code}
  //   }
  // }
  }
};
