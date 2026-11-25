/* Black Friday en la web del Kit (25/11/2026): los botones de compra dicen
   «Acceder al descuento de Black Friday» y arriba del botón de la oferta va
   47 USD tachado → 19 USD. Se apaga solo el domingo 29/11 23:59 (Uruguay).
   Para sacarlo: borrar este archivo y su <script> en index.html. */
(function () {
  var FIN = new Date('2026-11-30T02:59:59Z');
  if (new Date() > FIN) return;
  var TXT = '🎁 Acceder al descuento de Black Friday';

  var css = document.createElement('style');
  css.textContent =
    '.kbf-precio{display:flex;flex-direction:column;align-items:center;gap:2px;margin:0 auto 14px;text-align:center;font-family:Poppins,system-ui,sans-serif}' +
    '.kbf-precio .et{font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:#fff;background:linear-gradient(90deg,#8b6bd8,#d0578d);padding:5px 12px;border-radius:99px}' +
    '.kbf-precio .antes{font-size:18px;color:#9a8fb0;text-decoration:line-through;margin-top:6px}' +
    '.kbf-precio .ahora{font-family:"Cormorant Garamond",serif;font-size:44px;font-weight:700;line-height:1;color:#6b4fc4}' +
    '.kbf-precio .ahora small{font-size:18px;font-weight:600}' +
    '.kbf-precio .unico{font-size:12px;color:#7a6f90}';
  document.head.appendChild(css);

  function aplicar() {
    var links = document.querySelectorAll('a[href*="pay.hotmart.com"]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      if (a.textContent.trim() !== TXT) a.textContent = TXT;
      // precio solo junto al botón de la sección de oferta (no en el de arriba)
      if (i > 0 && i === links.length - 1 && !document.querySelector('.kbf-precio')) {
        var p = document.createElement('div');
        p.className = 'kbf-precio';
        p.innerHTML = '<span class="et">Black Friday · hasta el domingo 29</span>' +
          '<span class="antes">47 USD</span>' +
          '<span class="ahora">19 <small>USD</small></span>' +
          '<span class="unico">pago único, sin suscripción</span>';
        var caja = a.parentNode;
        caja.parentNode.insertBefore(p, caja);
      }
    }
  }
  var veces = 0;
  var t = setInterval(function () { aplicar(); if (++veces > 20) clearInterval(t); }, 500);
  new MutationObserver(function () { aplicar(); }).observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
