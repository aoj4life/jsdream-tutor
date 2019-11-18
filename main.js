// this will listen to keydown event and will output whatever is typed on another DIV called output
//const itemInput = document.querySelector('input[type="text"]');
//const itemInput = document.querySelector("#outpt");
const itemInput = document.getElementById("outpt");

// the event keydown
itemInput.addEventListener("keyup", runEvent);
//itemInput.addEventListener("keydown", runDoEvent);
//itemInput.addEventListener("keypress", runEvent);

//various key event
//itemInput.addEventListener("focus", runDoEvent);
//itemInput.addEventListener("blur", runEvent);

//itemInput.addEventListener("cut", runDoEvent);
//itemInput.addEventListener("paste", runEvent);
itemInput.addEventListener("input", runDoEvent);

// the function that is fired when a key is pressed
// the event of keyup remove the lag in keydown
function runEvent(e) {
  //console.log("EVENT TYPE: " + e.type);
  //console.log(e);

  //console.log(e.target.value);
  const numT = "<h3>" + e.target.value + "</h3>";
  const plainN = e.target.value;
  function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    num_parts.join(".");
  }
  thousands_separators(plainN);
  document.getElementById("output").innerHTML = numT;
  //thousands_separators(plainN);
}

// there is a lag in the output of key down
// the event of down takes place before the function ran
function runDoEvent(e) {
  //console.log("EVENT TYPE: " + e.type);

  //console.log(e.target.value);
  document.getElementById("output2").innerHTML =
    "<h3>" + e.target.value + "</h3>";
}

//listen  for form submit
//FORM MANIPULATION AND CONTROL
document.getElementById("myForm").addEventListener("submit", saveBookmark);
// the above the line can be rewriiten this way
const formTarget = document.getElementById("myForm");
formTarget.addEventListener("submit", saveBookmark);

// callback declaration
function saveBookmark(e) {
  e.preventDefault();
  //get the form value
  const siteNme = document.getElementById("siteName").value;
  const sitePath = document.getElementById("siteUrl").value;

  //put the value gootten into an object.
  //will can only store string in the localstorage; hence and object is needed to be created
  //then converted to a string by using JSON.Stringify()

  const bookmark = {
    name: siteNme,
    pathname: sitePath
  };

  /*
    //localstorage test
    localStorage.setItem('test', 'hello world');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test', 'hello world');
    console.log(localStorage.getItem('test'));
    */

  //test if bookmark is null
  if (localStorage.getItem("bookmarks") === null) {
    //init an array that the value supply will be push to
    const bookmarks = [];
    //add the value to the array
    bookmarks.push(bookmark);
    //set to localStorage and convert the array to a string before storing can be successfull
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    //get bookmarks from the localstorage and push the new value into the array
    // json.parse will convert the string into an object array
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    //add bookmark to the array
    bookmarks.push(bookmark);
    //re-set back the loacalstorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

//delete bookmark
function deleteBookmark(url) {
  //get bookmarks from local storage
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  //loop through the callled bookmarks that is parsed into json object
  const bookMarkLenght = bookmarks.length;

  for (let i = 0; i < bookMarkLenght; i++) {
    if (bookmarks[i].url == url) {
      //remove from the array because what will want to delete is suppied
      bookmarks.splice(i, 1);
      //remeve only one property of the array in position i
    }
  }
  //after deletion there is need to reinsert the array into the localstorage.
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

//fetch bookmarks
//there is need to present the stored bookmarks to the client
//hence create a function to do this
function fetchBookmarks() {
  //get bookmarks from local storage
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  //get the ouput position on the html
  const bookmarksResults = document.getElementById("bookmarksResults");
  //
  bookmarksResults.innerHTML = "";
  const bookMarkLenght = bookmarks.length;

  for (let i = 0; i < bookMarkLenght; i++) {
    const name = bookmarks[i].name;
    const url = bookmarks[i].url;

    bookmarksResults.innerHTML +=
      '<div class="well">' +
      "<h3>" +
      name +
      '<a class="btn btn-default" target="_blank" href="' +
      url +
      '">visit</a>' +
      "<a onclick=\"deleteBookmark('" +
      url +
      '\')" class="btn btn-danger" href="#">Delete</a>' +
      "</h3>" +
      "</div>";
  }
}
