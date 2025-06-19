animation.addEventListener('DOMLoaded', () => {
  const svg = animationContainer.querySelector('svg');
  const group = svg.querySelector('#button-bridge');

  if (group) {
    group.style.cursor = 'pointer';
    group.style.pointerEvents = 'all';

    group.addEventListener('click', event => {
      console.log('CTA clicked on path:', event.target.nodeName);
      window.location.href = 'https://example.com';
    });
  } else {
    console.error('button-bridge group not found');
  }
});
