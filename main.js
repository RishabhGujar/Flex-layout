const clock = document.querySelector("#digitalClock");

function getTime(){
  let time = new Date().toTimeString();
  clock.textContent =time.slice(0,8) + (time.slice(0,2)>=12 ? " pm" : " am");
  console.log(time.slice(0,2));
}

setInterval(getTime,1000);