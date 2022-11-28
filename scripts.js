// True if the start time is 
function validTime(start, end) {
  return start < end;
}



function addEvent(hour = 12, name = "event") {
  const event = document.createElement("div");
  event.className = "col-2";
  const eventName = document.createTextNode(name);
  event.appendChild(eventName);
  document.getElementById("" + hour).appendChild(event);
}