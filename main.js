const clock = document.querySelector("#digitalClock");

function getTime(){
  let time = new Date().toTimeString();
  clock.textContent =time.slice(0,8) + (time.slice(0,3)>12 ? " pm" : " am");
}

setInterval(getTime,1000);