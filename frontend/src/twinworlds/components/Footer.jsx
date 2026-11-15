import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__giant" aria-hidden="true">TWIN&nbsp;WORLDS</div>
      <div className="footer__brand">TWIN&nbsp;WORLDS ✦ EARTH · MARS · MOON</div>
      <p className="footer__note">Earth’s Mars and Moon analogues, with the science and the caveats attached.</p>
      <p className="footer__fine">
        Built for students, the curious and space enthusiasts · signal ends · <a href="#top">back to orbit ↑</a>
      </p>
    </footer>
  );
}

export function ToTop() {
  return (
    <button className="to-top" id="toTop" aria-label="Back to top">↑</button>
  );
}
