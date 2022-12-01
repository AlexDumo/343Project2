// Creates a calendar node for the DOM at from start hour to end hour (inclusive)
// Input is in 24ht time, displays 12hr time
function createCalendar(start = 8, end = 20) {
  const container = document.createElement("section");
  container.className = "container";

  // builds the calendar graphic
  for (var i = start; i <= end; i++) {
    const row = document.createElement("div");
    row.className = "row";
    row.id = i;
    container.appendChild(row);

    const time = document.createElement("div");
    time.className = "row";
    // Converts 24hr time to 12hr time
    const text = document.createTextNode(
      (i < 12) ? (i + " am") : (((i % 12 == 0) ? 12 : i % 12) + " pm"));
    time.className = "col-2";

    time.appendChild(text);
    row.appendChild(time);
  }
  // document.getElementById("container").appendChild(container);
  return container;
}

// Adds an event to the DOM at the hour given.
// Will eventually have support for events longer than an hours
function addEvent(start = 12, end = 13, name = "event") {
  const event = document.createElement("div");
  event.className = "col-2";
  const eventName = document.createTextNode(name);
  event.appendChild(eventName);
  // TODO, set up multi hour events
  return event;
}