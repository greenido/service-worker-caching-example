//
// main12.js
// Author: Ido Green | @greenido
// Date: April 2015
//
//
// Main code for our web app
//
//
console.log("** We started the party in main12.js **");

// Detect when we are online / offline
//
window.addEventListener('load', function() {
  var status = document.getElementById("status");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    status.className = condition;
    status.innerHTML = condition.toUpperCase();
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});