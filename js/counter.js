// counter

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const eid = new Date("April 10 2024 00:00:00");

// function to update countdown time
function update() {
  const currentDate = new Date();
  const diffTime = eid - currentDate;

  const d = Math.floor(diffTime / 1000 / 60 / 60 / 24);
  const h = Math.floor((diffTime / 1000 / 60 / 60) % 24);
  const m = Math.floor((diffTime / 1000 / 60) % 60);
  const s = Math.floor((diffTime / 1000) % 60);

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(update, 1000);

//Confetti

const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

start();
stop();
