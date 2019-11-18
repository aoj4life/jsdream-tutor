const inputBox = document.getElementById("message-input");
const messagesDiv = document.getElementById("messages");
const messagesDiv2 = document.getElementById("messages2");
const password = 'mandb';

//add event listener to the input box
inputBox.addEventListener("keypress", event => {
  //check if the key code 13 is enter i.e enter key
  if (event.keyCode == 13) {
    //console.log("hello");
    //get the content of the input box that you are listening to
    let message = event.target.value;
    //call the function that will output the message typed in the input box
    newMessage(message);
    //empty the input box when key enter is pressed
    event.target.value = "";
  }
});

//create the function that will output
//console.log(messagesDiv);
function newMessage(message) {
  //Socket.emit("new message", message);
  //create paragraph tag
  //console.log(messagesDiv);
  let p = document.createElement("p");
  p.innertText = message; //innertext will prevent javascrpts injection
  // p.innerHTML = message;
  p.innerText = message; //

  //const mess = messagesDiv.innerHTML;
  //messagesDiv.innerHTML = message;
  //mess = message;
  //console.log(messagesDiv);Z52H2F22
  //this will input the p tag inside the div as a child
  messagesDiv.appendChild(p);
  messagesDiv2.appendChild(p);

  //console.log(messagesDiv);
}
