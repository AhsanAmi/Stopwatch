
// HTML elements
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const display = document.querySelector('.display');

// Variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Format time in HH:MM:SS format
function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update the display with the elapsed time
function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

// Start the stopwatch
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
  startButton.style.display="none";
  stopButton.style.display="block";
}

// Stop the stopwatch
function stop() {
  clearInterval(timerInterval);
  stopButton.style.display="none";
  startButton.style.display="block";
}

// Reset the stopwatch
function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  startButton.style.display="block";
  stopButton.style.display="none";
}

// Event listeners
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
