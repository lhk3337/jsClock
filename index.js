const jsClockTitle = document.querySelector("#clockTitle");

function funTime() {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const second = time.getSeconds();
  jsClockTitle.innerHTML = `${hour < 10 ? `0${hour}` : `${hour}`} : ${
    min < 10 ? `0${min}` : `${min}`
  } : ${second < 10 ? `0${second}` : `${second}`}`;
}
setInterval(funTime, 1000);
