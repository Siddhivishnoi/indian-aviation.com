const needle = document.getElementById('compass-needle');
const directionText = document.getElementById('direction');

// Listen for orientation events
window.addEventListener('deviceorientationabsolute', handleOrientation, true);
window.addEventListener('deviceorientation', handleOrientation, true);

function handleOrientation(event) {
  let alpha = event.alpha;

  if (typeof alpha === "number") {
    // Rotate the needle opposite to device heading
    needle.style.transform = `rotate(${-alpha}deg)`;
    const heading = Math.round(alpha);
    directionText.textContent = `North: ${heading}°`;
  } else {
    directionText.textContent = "Compass not supported on this device.";
  }
}
