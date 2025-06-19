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


// this manage app bar
let taskbar = document.getElementsByClassName("window")[0];
let systemApps = document.getElementsByClassName("system-apps")[0];

taskbar.addEventListener("click", () => {
  // Get the computed style
  let currentBottom = getComputedStyle(systemApps).bottom;
  if (currentBottom === "55px") {
    systemApps.style.bottom = "-655px";
  } else {
    systemApps.style.bottom = "55px";
  }
});


// weather update script
function updateTemperature() {
    const tempDiv = document.querySelector('.temperature');
    if (!tempDiv) {
        console.error('Temperature div not found');
        return;
    }

    // Set initial content
    tempDiv.textContent = 'Loading...';
    console.log('Temperature div found, setting loading state');

    // Add error handling for network issues
    if (!navigator.onLine) {
        tempDiv.textContent = 'Offline';
        console.log('Device is offline');
        return;
    }

    // Using a free weather API that doesn't require an API key
    fetch('https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data received:', data);
            if (data && data.current && typeof data.current.temperature_2m === 'number') {
                const temp = Math.round(data.current.temperature_2m);
                tempDiv.textContent = temp + '°C';
                console.log('Temperature updated successfully:', temp + '°C');
            } else {
                throw new Error('Invalid temperature data received');
            }
        })
        .catch(error => {
            console.error('Error fetching temperature:', error);
            tempDiv.textContent = '--°C';
        });
}

// Update temperature immediately and then every 5 minutes
updateTemperature();
setInterval(updateTemperature, 300000); // Update every 5 minutes

// Add event listener for online/offline status
window.addEventListener('online', updateTemperature);
window.addEventListener('offline', () => {
    const tempDiv = document.querySelector('.temperature');
    if (tempDiv) {
        tempDiv.textContent = 'Offline';
    }
});


// taskbar edge redirect to browser page
document.querySelector('.edge').onclick = function() {
  window.location.href = 'browser.html';
};

// previous app edge redirect to browser page 
document.getElementById('recent-app-edge').onclick = function() {
  window.location.href = 'browser.html';
};


let currentInput = '';
let operator = '';
let firstValue = '';

function appendNumber(num) {
  currentInput += num;
  document.getElementById('calc-display').value = currentInput;
}

function setOperation(op) {
  if (currentInput === '') return;
  operator = op;
  firstValue = currentInput;
  currentInput = '';
}

function calculateResult() {
  if (firstValue === '' || currentInput === '' || operator === '') return;
  let result;
  const a = parseFloat(firstValue);
  const b = parseFloat(currentInput);
  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Error'; break;
    default: result = 'Error';
  }
  document.getElementById('calc-display').value = result;
  currentInput = '';
  operator = '';
  firstValue = '';
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstValue = '';
  document.getElementById('calc-display').value = '';
}


// Toggle calculator
let calculatorApp = document.getElementsByClassName("system-apps-list-calculator")[0];
let calculatorPanel = document.getElementsByClassName("calculator")[0];

calculatorApp.addEventListener("click", () => {
  let currentBottom = getComputedStyle(calculatorPanel).bottom;
  if (currentBottom === "55px") {
    calculatorPanel.style.bottom = "-655px";
  } else {
    calculatorPanel.style.bottom = "55px";
  }
});


// Redirect "This PC" icon to this_pc.html
document.querySelector('.system-this-pc').onclick = function() {
  window.location.href = 'this_pc.html';
};