(() => {
  const keyCode = 90; // key 'z'

  document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementsByTagName('body')[0];
    const spotlight = document.getElementById('spotlight');
    const moveSpotlight = (e) => {
      spotlight.style.cssText = `top: ${e.clientY}px; left: ${e.clientX}px;`;
    };
    body.addEventListener('keydown', (e) => {
      if(e.keyCode === keyCode) {
        spotlight.classList.add('enabled');
        body.addEventListener('mousemove', moveSpotlight);
      }
    });
    body.addEventListener('keyup', (e) => {
      if(e.keyCode === keyCode) {
        spotlight.classList.remove('enabled');
        body.removeEventListener('mousemove', moveSpotlight);
      }
    });
  })
})()
