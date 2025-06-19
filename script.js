const animationContainer = document.getElementById('animation-container');

const animation = lottie.loadAnimation({
  container: animationContainer,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation.json', // This should be in your project folder
});

// Add interactivity to a specific layer inside the Lottie
animation.addEventListener('DOMLoaded', () => {
  const svg = animationContainer.querySelector('svg');
  const targetLayer = svg.querySelector('#button-bridge');

  if (targetLayer) {
    targetLayer.style.cursor = 'pointer';
    targetLayer.addEventListener('click', () => {
      // Replace with your own CTA action
      window.location.href = 'https://example.com';
    });
  } else {
    console.warn('CTA layer not found: button-bridge');
  }
});
