window.onload = function () {
  const animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
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
      group.style.pointerEvents = 'all';

      group.addEventListener('click', () => {
        console.log('CTA clicked');
        window.location.href = 'https://example.com';
      });
    } else {
      console.warn('button-bridge group not found');
    }
  });
};
