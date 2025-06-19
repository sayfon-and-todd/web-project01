const animationContainer = document.getElementById('animation-container');

const animation = lottie.loadAnimation({
  container: animationContainer,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation.json', // This should be in your project folder
});

const player = document.getElementById('animation');
player.addEventListener('DOMLoaded', () => {
  const svgDoc = player.shadowRoot || player.contentDocument;
  const btn = svgDoc.getElementById('button-bridge');
  if (btn) {
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', () => {
      player.playSegments([startFrame, endFrame], true);
    });
  }
});
