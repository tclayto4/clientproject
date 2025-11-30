const headerHTML = `
  <header class="site-header">
    <div class="logo-area">
      <img src="images/logo.png" alt="Calculated Car Audio Creations logo" class="logo">
      <div class="site-title">
        <h1>Calculated Car Audio Creations</h1>
        <p class="tagline">Design. Calculate. Create.</p>
      </div>
    </div>
    <nav class="site-nav">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="calculators.html">RMS Calculator</a></li>
        <li><a href="sound-deadening.html">Sound Deadening</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

const footerHTML = `
  <footer class="site-footer">
    <p>&copy; 2025 Calculated Car Audio Creations</p>
  </footer>
`;

const container = document.getElementById("page-wrapper");
if (container) {
  container.insertAdjacentHTML("afterbegin", headerHTML);
  container.insertAdjacentHTML("beforeend", footerHTML);
}

const rmsButton = document.getElementById("calc-rms");
const powerInput = document.getElementById("power");
const ohmsInput = document.getElementById("ohms");
const rmsResult = document.getElementById("rms-result");

if (rmsButton && powerInput && ohmsInput && rmsResult) {
  rmsButton.addEventListener("click", () => {
    const power = parseFloat(powerInput.value);
    const ohms = parseFloat(ohmsInput.value);
    if (isNaN(power) || isNaN(ohms) || power <= 0 || ohms <= 0) {
      rmsResult.textContent = "Enter valid power and load values.";
      return;
    }
    const voltage = Math.sqrt(power * ohms);
    rmsResult.textContent = "Estimated voltage: " + voltage.toFixed(2) + " V";
  });
}

const boxButton = document.getElementById("calc-box");
const wInput = document.getElementById("box-width");
const hInput = document.getElementById("box-height");
const dInput = document.getElementById("box-depth");
const boxResult = document.getElementById("box-result");

if (boxButton && wInput && hInput && dInput && boxResult) {
  boxButton.addEventListener("click", () => {
    const w = parseFloat(wInput.value);
    const h = parseFloat(hInput.value);
    const d = parseFloat(dInput.value);
    if (isNaN(w) || isNaN(h) || isNaN(d) || w <= 0 || h <= 0 || d <= 0) {
      boxResult.textContent = "Enter valid dimensions.";
      return;
    }
    const volume = (w * h * d) / 1728;
    boxResult.textContent = "Internal volume: " + volume.toFixed(2) + " ft³";
  });
}
