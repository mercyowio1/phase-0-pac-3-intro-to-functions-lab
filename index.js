//Shout
function shout(string) {
  return string.toUpperCase();
}
//whisper
function whisper(string) {
  return string.toLowerCase();
}
//logshout
function logShout(string) {
  console.log(string.toUpperCase());
}
//logWhisper

function logWhisper(string) {
  console.log(string.toLowerCase());
}
//using of if else
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  // If the string is neither all lowercase nor all uppercase, return undefined (or add other behavior as needed)
  return;
}

function sayHiToHeadphonedRoommate(string) {
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  } else if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  // If the string doesn't match any of the above conditions, return undefined
  return;
}
