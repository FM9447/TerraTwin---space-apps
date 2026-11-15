/** Canvas-free confetti, ported from the prototype's DOM particle burst. */
export function confettiBurst(count = 110) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const colors = ['#f4e3c2', '#cfe0f5', '#e8b07e', '#d6dce6', '#d9a45b', '#ffffff'];

  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement('span');
    const size = Math.random() * 9 + 4;
    particle.style.cssText = `position:fixed;z-index:250;left:50%;top:42%;width:${size}px;height:${size * (Math.random() > 0.5 ? 1 : 0.4)}px;pointer-events:none;background:${colors[i % colors.length]};box-shadow:0 0 10px ${colors[i % colors.length]};`;
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * 380;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 120;

    particle.animate(
      [
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy + 260}px) rotate(${Math.random() * 900 - 450}deg)`, opacity: 0 }
      ],
      { duration: 1200 + Math.random() * 900, easing: 'cubic-bezier(0.23,1,0.32,1)' }
    ).onfinish = () => particle.remove();
  }
}
