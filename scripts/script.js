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
