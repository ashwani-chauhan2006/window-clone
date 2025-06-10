// this script update the time every second
function updateTime() {
    const timeDiv = document.querySelector('.time');
    const now = new Date();
    // Format as HH:MM (no seconds)
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    timeDiv.textContent = timeString;
  }
  setInterval(updateTime, 1000);
  updateTime();

//   this script update the date every day
function updateTime() {
    const timeDiv = document.querySelector('.time');
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    timeDiv.textContent = timeString;
  }
  function updateDate() {
    const calDiv = document.querySelector('.calender');
    const now = new Date();
    // Format as M/D/YYYY
    const dateString = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
    calDiv.textContent = dateString;
  }
  setInterval(updateTime, 1000);
  updateTime();
  updateDate();

