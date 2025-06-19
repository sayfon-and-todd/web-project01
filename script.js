window.onload = function () {
  const animation = bodymovin.loadAnimation({
    container: document.getElementById('animation-container'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'bridge_button.json',
  });

  animation.addEventListener('DOMLoaded', () => {
    const svg = document.querySelector('#bm svg');
    const group = svg?.querySelector('#button-bridge');

    if (group) {
      group.style.cursor = 'pointer';
      group.style.pointerEvents = 'auto';
      group.addEventListener('click', () => {
        console.log('Clicked!');
        animation.playSegments([30, 60], true);
      });
    } else {
      console.warn('button-bridge not found');
    }
  });
};
