function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}

let currentStep = 0;
let steps;
let timerInterval;
let seconds = 0;

function startCooking() {
  steps = document.querySelectorAll(".step");
  document.getElementById("steps").classList.remove("hidden");
  document.getElementById("nextBtn").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  steps[currentStep].classList.add("active");
  startTimer();
}

function nextStep() {
  steps[currentStep].classList.remove("active");
  currentStep++;
  if (currentStep < steps.length) {
    steps[currentStep].classList.add("active");
  } else {
    document.getElementById("nextBtn").disabled = true;
    clearInterval(timerInterval);
    alert("You're done! 🎉");
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    document.getElementById("timer").textContent =
      `Timer: ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}
