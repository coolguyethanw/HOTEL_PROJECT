// script has to be last in the body
var guestsRm1 = [""];
var guestsRm2 = [""];
var guestsRm3 = [""];
var guestsRm4 = [""];
// guest names stored
var command = "start of guest log";
// used for logging commands
var NumGuestsRm1 = 0;
var NumGuestsRm2 = 0;
var NumGuestsRm3 = 0;
var NumGuestsRm4 = 0;
var d = new Date();
// amount guests in each room, very critical that it is correct
var Room1Full = false;
var Room2Full = false;
var Room3Full = false;
var Room4Full = false;
// find current date
var RoomClean1 = false;
var RoomClean2 = false;
var RoomClean3 = false;
var RoomClean4 = false;
/* main switches to tell if room locked or if it is full*/

//  window.alert(d)
//  getUTCMonth()
//  getUTCDate()
//  getUTCHours()
//  getUTCMinutes()
//  getUTCSeconds()
var RoomClean1 = false;
// list of check in guests
function addGuestrm1() {
  NumGuestsRm1 += 1;
  var guest = document.getElementById('GuestName1').value;
  guestsRm1.push(guest);
  // add guest name to guest list
  var room = document.getElementById("GRoom1");
  // find the room that were about to thro w guests into
  var checkIn = room.getElementsByTagName("li");
  // find the list inside the room
  var Newli = document.createElement('li');
  // create new element and save it as new li
  var ul = document.getElementById("GRoom1");
  // find the list inside the room
  // add an ID to the list items so we can identify and remove it later
  var newText = document.createTextNode(guest);
  document.body.appendChild(Newli);
  ul.appendChild(Newli);
  Newli.appendChild(newText);
  d = new Date();
  command = guest + " has been checked into room 1 at " + d + "!";
  ConsoleLog()

  document.getElementById("GuestName1").value = "";
  if (NumGuestsRm1 >= 4) {
    document.getElementById('statusbar1').innerHTML = "Room Full";
    // tell other funcs that room is full
    Room1Full = true;
    document.getElementById('button1', 'GuestName1').disabled = true;
    // TODO: find a way to stop people from overflowing the room effectively
  } else if (NumGuestsRm1 <= 4) {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'GuestName1').disabled = false;
    Room1Full = false;
  } else {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'GuestName1').disabled = false;
    Room1Full = false;
  }

};

function clearRoom1() {
  var num = 1;
  document.getElementById("GuestName1").value = "";
  guestsRm1 = [""];
  guestsRm1.length = 0;
  d = new Date();
  command = "Room1 has been cleared at " + d + "!";
  ConsoleLog()
  while (num <= 4) {
    // run remove code 4 times to remove all guests, will create errors
    var badGuest = document.getElementById('Room1Kicker').value = 0;
    // make sure the value is 0 so we can remove all guests properly
    var room = document.getElementById('room1');
    var kick = room.getElementsByTagName('li')[badGuest];
    var gtfo = kick.parentNode;
    NumGuestsRm1 -= 1;
    console.log("Clearing room! (Creates errors if less than 4 guests)")
    gtfo.removeChild(kick);
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'GuestName1').disabled = false;
    num++;
  };
  num = 0;
  document.getElementById('statusbar1').innerHTML = " ";
  document.getElementById('button1', 'GuestName1').disabled = false;
}

function removeRoom1() {
  // TODO: add ability to clear entire room
  var badGuest = document.getElementById('Room1Kicker').value;
  var room = document.getElementById('room1');
  var kick = room.getElementsByTagName('li')[badGuest];
  var gtfo = kick.parentNode;
  NumGuestsRm1 -= 1;
  console.log("Kicking guest from room 1, may create errors if no guest found!")
  gtfo.removeChild(kick);
  d = new Date();
  command = "Guest number " + badGuest + " has been removed at " + d + "!";
  ConsoleLog()
  // logging section
  //  document.getElementById("GuestName1").value = "";
  if (NumGuestsRm1 >= 4) {
    document.getElementById('statusbar1').innerHTML = "Room Full";
    document.getElementById('button1').disabled = true;
    document.getElementById("GuestName1").value = "";
    // enable guests to enter room if not full
    Room1Full = true;
    // TODO: find a way to stop people from overflowing the room effectively
  } else if (NumGuestsRm1 <= 4) {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'GuestName1').disabled = false;
    // enable guests to enter room once not full
    Room1Full = false;
  } else {
    document.getElementById('statusbar1').innerHTML = "";
    document.getElementById('button1', 'GuestName1').disabled = false;
    Room1Full = false;
  }

}

function CleanRoom1() {
  RoomClean1 = true;
  if (RoomClean1 = true) {
    document.getElementById('statusbar1').innerHTML = "Room Locked!";
    // disable and close room
    document.getElementById('button1').disabled = true;
    d = new Date();
    command = "Room 1 has been locked for cleaning at " + d + "!";
    ConsoleLog()
    // logging section

  } else {
    document.getElementById('statusbar1').innerHTML = "";
    // open room up
    document.getElementById('button1').disabled = false;

  }
}

function OpenRoom1() {
  RoomClean1 = false;
  if (NumGuestsRm1 >= 4) {
    document.getElementById('statusbar1').innerHTML = "Remove guest to unlock!";
    document.getElementById('button1').disabled = true;
    // enable guests to enter room if not full
    Room1Full = true;
  } else if (RoomClean1 = true) {
    document.getElementById('statusbar1').innerHTML = "";
    d = new Date();
    command = "Room 1 has been unlocked at " + d + "!";
    ConsoleLog()
    // logging section
    // disable and close room
    document.getElementById('button1').disabled = false;

  } else {
    document.getElementById('statusbar1').innerHTML = "";
    d = new Date();
    command = "Room 1 has been unlocked at " + d + "!";
    ConsoleLog()
    // logging section
    // open room up
    document.getElementById('button1').disabled = false;

  }

}
  function ConsoleLog() {
    // add guest name to guest list
    var log = document.getElementById("logger");
    // find the room that were about to thro w guests into
    var checkIn = log.getElementsByTagName("li");
    // find the list inside the room
    var Newli = document.createElement('li');
    // create new element and save it as new li
    var ul = document.getElementById("logs");
    // find the list inside the room
    // add an ID to the list items so we can identify and remove it later
    var newText = document.createTextNode(command);
    document.body.appendChild(Newli);
    ul.appendChild(Newli);
    Newli.appendChild(newText);
  }
