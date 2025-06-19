window.onload = function () {
  const animation = bodymovin.loadAnimation({
    container: document.getElementById('animation-container'), // ✅ your actual container
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'animation.json', // make sure the path is correct
  });

  animation.addEventListener('DOMLoaded', () => {
    const svg = document.querySelector('#animation-container svg');
    const group = svg?.querySelector('#button-bridge');

    if (group) {
      group.style.cursor = 'pointer';
      group.style.pointerEvents = 'auto';

      group.addEventListener('click', () => {
        console.log('Bridge button clicked!');
        animation.playSegments([30, 60], true); // Replace with your actual frames
      });
    } else {
      console.warn('button-bridge not found in SVG');
    }
  });
};
