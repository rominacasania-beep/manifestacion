/* Magia de la web del Kit 2027 (24/11/2026): destellos, destellos al tocar, aparición al bajar,
   sección «Tu app Mi Año Magnético» con celular animado y mini juego «¿cómo te querés sentir?».
   Para sacarlo: borrar este archivo y su <script> en index.html. */
(function () {
  if (window.__magia) return; window.__magia = 1;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var css = `
#mg-fx{position:fixed;inset:0;pointer-events:none;z-index:40;overflow:hidden}
#mg-fx i{position:absolute;font-style:normal;color:#e8b04a;text-shadow:0 0 6px #ffd98a,0 0 12px #f7b6cf;opacity:0;animation:mgtw var(--t) ease-in-out infinite;animation-delay:var(--d)}
#mg-fx i.p{color:#e86a9b;text-shadow:0 0 6px #ffc2d9}
@keyframes mgtw{0%,100%{opacity:0;transform:scale(.3) rotate(0)}50%{opacity:var(--o);transform:scale(1) rotate(60deg)}}
.mg-tap{position:fixed;pointer-events:none;z-index:60;font-size:14px;color:#e8b04a;animation:mgfly .9s ease-out forwards}
@keyframes mgfly{to{transform:translate(var(--x),var(--y)) scale(.4);opacity:0}}
.mg-rev{opacity:0;transform:translateY(26px);transition:opacity .8s ease,transform .8s ease}
.mg-rev.mg-in{opacity:1;transform:none}
#mg-app{position:relative;padding:56px 18px 64px;background:radial-gradient(120% 80% at 50% 0%,#3a2259,#1a1030 70%);color:#fbf3f8;overflow:hidden;font-family:Poppins,system-ui,sans-serif}
#mg-app *{box-sizing:border-box}
#mg-app .in{max-width:980px;margin:0 auto;display:flex;flex-wrap:wrap;gap:40px;align-items:center;justify-content:center;position:relative;z-index:1}
#mg-app .tx{flex:1 1 320px;max-width:460px}
#mg-app .k{display:inline-block;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#e8c27a;font-weight:600;padding:6px 12px;border:1px solid rgba(232,194,122,.4);border-radius:999px}
#mg-app h2{font-family:"Cormorant Garamond",Georgia,serif;font-weight:600;font-size:clamp(30px,6vw,46px);line-height:1.05;margin:14px 0 12px}
#mg-app h2 em{font-style:italic;background:linear-gradient(100deg,#f38bb0,#ffc1a6 55%,#e8c27a);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:mgsh 5s ease-in-out infinite}
@keyframes mgsh{50%{background-position:100% 0}}
#mg-app p{font-size:15px;line-height:1.6;color:#dccbe6;margin:0 0 14px}
#mg-app ul{list-style:none;padding:0;margin:0 0 18px;display:grid;gap:8px}
#mg-app li{font-size:14px;color:#fbf3f8;display:flex;gap:10px;align-items:flex-start;opacity:0;transform:translateX(-14px);transition:all .6s ease}
#mg-app.mg-in li{opacity:1;transform:none}
#mg-app li b{color:#e8c27a;font-weight:600}
#mg-app .ph{flex:0 0 auto;width:250px;height:510px;border-radius:42px;padding:10px;background:linear-gradient(160deg,#4a3560,#120a1f);box-shadow:0 40px 80px -20px #000c,0 0 0 2px rgba(255,255,255,.08),0 0 60px -10px rgba(243,139,176,.5);position:relative;animation:mgfl 6s ease-in-out infinite}
@keyframes mgfl{50%{transform:translateY(-10px) rotate(-1deg)}}
#mg-app .sc{position:relative;width:100%;height:100%;border-radius:33px;overflow:hidden;background:radial-gradient(120% 70% at 50% 0%,#3a2259,#140c22 65%)}
#mg-app .sc:before{content:"";position:absolute;top:8px;left:50%;transform:translateX(-50%);width:80px;height:20px;border-radius:20px;background:#000;z-index:5}
#mg-app .v{position:absolute;inset:0;padding:40px 14px 14px;display:flex;flex-direction:column;gap:9px;opacity:0;transform:scale(.97);transition:opacity .7s,transform .7s}
#mg-app .v.on{opacity:1;transform:none}
#mg-app .v h4{font-family:"Cormorant Garamond",serif;font-size:21px;margin:0;line-height:1.05;color:#fbf3f8}
#mg-app .v h4 em{font-style:italic;color:#f7a8c6}
#mg-app .v small{font-size:10px;color:#a995bd;letter-spacing:.14em;text-transform:uppercase}
#mg-app .g{display:grid;grid-template-columns:1fr 1fr;gap:6px}
#mg-app .c{font-size:10.5px;padding:9px 8px;border-radius:12px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);color:#fbf3f8}
#mg-app .c.on{background:linear-gradient(150deg,rgba(243,139,176,.4),rgba(232,194,122,.35));border-color:#e8c27a}
#mg-app .chs{display:flex;flex-wrap:wrap;gap:5px}
#mg-app .chs span{font-size:10px;padding:6px 9px;border-radius:999px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12)}
#mg-app .chs span.on{background:linear-gradient(100deg,#f38bb0,#ffc1a6,#e8c27a);color:#2a1238;font-weight:600}
#mg-app .orb{width:110px;height:110px;margin:22px auto 8px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#e8c27a 45%,#8f52c9);box-shadow:0 0 50px 12px rgba(232,194,122,.4);animation:mgbr 8s ease-in-out infinite}
@keyframes mgbr{0%,100%{transform:scale(.8)}40%,55%{transform:scale(1.25)}}
#mg-app .wp{margin:4px auto 0;width:150px;height:250px;border-radius:18px;background:radial-gradient(circle at 50% 30%,#4a2b70,#140c22 75%);border:1px solid rgba(255,255,255,.15);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding:14px 10px;text-align:center;gap:4px}
#mg-app .wp b{font-family:"Cormorant Garamond",serif;font-style:italic;font-size:22px;background:linear-gradient(100deg,#f38bb0,#e8c27a);-webkit-background-clip:text;background-clip:text;color:transparent}
#mg-app .wp span{font-size:8.5px;color:#dccbe6}
#mg-app .bd{display:grid;grid-template-columns:1fr 1fr;gap:6px}
#mg-app .bd div{height:92px;border-radius:12px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end;font-size:9.5px;line-height:1.2;position:relative}
#mg-app .bd div i{position:absolute;top:6px;left:8px;font-style:normal;font-size:18px}
#mg-app .bd div em{position:absolute;top:6px;right:6px;font-style:normal;font-size:8px;background:rgba(0,0,0,.35);padding:2px 6px;border-radius:9px;color:#e8c27a}
#mg-app .dots{position:absolute;bottom:14px;left:0;right:0;display:flex;justify-content:center;gap:5px;z-index:4}
#mg-app .dots i{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.25);transition:all .3s}
#mg-app .dots i.on{width:16px;border-radius:6px;background:#e8c27a}
#mg-play{max-width:980px;margin:44px auto 0;padding:22px 18px;border-radius:26px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);text-align:center;position:relative;z-index:1}
#mg-play h3{font-family:"Cormorant Garamond",serif;font-size:clamp(24px,5vw,32px);margin:0 0 6px;font-weight:600}
#mg-play .ar,#mg-play .fe{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:14px 0}
#mg-play button{font:inherit;font-size:14px;color:#fbf3f8;padding:10px 15px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);cursor:pointer;transition:all .25s}
#mg-play button:hover{border-color:#e8c27a}
#mg-play button.on{background:linear-gradient(100deg,#f38bb0,#ffc1a6 55%,#e8c27a);color:#2a1238;font-weight:600;transform:scale(1.05);border-color:transparent}
#mg-play .res{min-height:0;transition:all .5s}
#mg-play .big{font-family:"Cormorant Garamond",serif;font-style:italic;font-size:clamp(28px,6vw,40px);background:linear-gradient(100deg,#f38bb0,#ffc1a6 55%,#e8c27a);-webkit-background-clip:text;background-clip:text;color:transparent;margin:6px 0}
#mg-play .cta{display:inline-block;margin-top:12px;font-weight:600;font-size:15px;text-decoration:none;color:#2a1238;padding:14px 26px;border-radius:999px;background:linear-gradient(100deg,#f38bb0,#ffc1a6 55%,#e8c27a);box-shadow:0 10px 30px -8px rgba(243,139,176,.7);animation:mgpu 2.4s ease-in-out infinite}
@keyframes mgpu{50%{transform:scale(1.05)}}
#mg-app .st{position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(1.4px 1.4px at 12% 18%,#fff9 50%,transparent 51%),radial-gradient(1px 1px at 80% 10%,#fff8 50%,transparent 51%),radial-gradient(1.2px 1.2px at 46% 40%,#fff7 50%,transparent 51%),radial-gradient(1px 1px at 92% 60%,#fff6 50%,transparent 51%),radial-gradient(1.3px 1.3px at 22% 80%,#fff6 50%,transparent 51%),radial-gradient(1px 1px at 64% 88%,#fff5 50%,transparent 51%)}
@media (prefers-reduced-motion:reduce){#mg-fx,.mg-tap{display:none}.mg-rev{opacity:1;transform:none}#mg-app *{animation:none!important}}
`;
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* destellos fijos */
  if (!reduce) {
    var fx = document.createElement('div'); fx.id = 'mg-fx'; fx.setAttribute('aria-hidden', 'true');
    var h = ''; for (var k = 0; k < 22; k++) h += '<i class="' + (k % 3 ? '' : 'p') + '" style="left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 100) + '%;font-size:' + (8 + Math.random() * 11) + 'px;--t:' + (2.5 + Math.random() * 4) + 's;--d:' + (-Math.random() * 6) + 's;--o:' + (.45 + Math.random() * .45) + '">✦</i>';
    fx.innerHTML = h; document.body.appendChild(fx);
    /* destellos al tocar */
    document.addEventListener('pointerdown', function (e) {
      for (var j = 0; j < 7; j++) { var s = document.createElement('span'); s.className = 'mg-tap'; s.textContent = ['✦', '✧', '✨'][j % 3];
        s.style.left = (e.clientX - 7) + 'px'; s.style.top = (e.clientY - 7) + 'px';
        s.style.setProperty('--x', (Math.random() * 90 - 45) + 'px'); s.style.setProperty('--y', (-Math.random() * 80 - 10) + 'px');
        document.body.appendChild(s); setTimeout(function (n) { return function () { n.remove(); }; }(s), 950); }
    }, { passive: true });
  }

  /* sección de la app */
  var AREAS = { 'Amor': '💞', 'Dinero': '💰', 'Cuerpo y salud': '🌿', 'Trabajo y propósito': '✨', 'Familia': '🫶', 'Mi hogar': '🏡' };
  var FE = ['Libre', 'En paz', 'Segura', 'Amada', 'Plena', 'Valiosa', 'Liviana', 'Feliz'];
  function buyHref() {
    var a = [].slice.call(document.querySelectorAll('a[href*="hotmart"],a[href*="pay."],a[href*="checkout"]'))[0];
    return a ? a.getAttribute('href') : '#';
  }
  function section() {
    var s = document.createElement('section'); s.id = 'mg-app';
    s.innerHTML = '<div class="st"></div><div class="in">' +
      '<div class="tx"><span class="k">✦ Nuevo · incluido en tu Kit</span>' +
      '<h2>Tu Kit también vive en <em>una app</em> en tu celular</h2>' +
      '<p>No es lo que querés: es cómo te querés sentir. «Mi Año Magnético 2027» te guía paso a paso, en todas las áreas de tu vida.</p>' +
      '<ul><li style="transition-delay:.1s">🌱 <span><b>Tu rueda de la vida:</b> amor, dinero, cuerpo, trabajo, familia, hogar… cómo te querés sentir en cada una.</span></li>' +
      '<li style="transition-delay:.2s">🌬️ <span><b>Respiración al 2027:</b> te anclás en tu futuro con el cuerpo, en menos de 2 minutos.</span></li>' +
      '<li style="transition-delay:.3s">👑 <span><b>Tu alter ego:</b> creás a la mujer que ya lo vive y te llevás tu fondo de pantalla.</span></li>' +
      '<li style="transition-delay:.4s">🖼️ <span><b>Vision board con evidencias:</b> cómo armarlo para que tu cerebro (tu SAR) empiece a ver oportunidades.</span></li>' +
      '<li style="transition-delay:.5s">🔢 <span><b>Ritual diario:</b> 369, la acción del día y tu frasco de evidencias.</span></li></ul>' +
      '<p style="font-size:13px;color:#a995bd">Entrás con el mail de tu compra. Se instala en tu celular con un toque.</p></div>' +
      '<div class="ph"><div class="sc">' +
      '<div class="v on"><small>Paso 1 · Tu rueda de la vida</small><h4>¿En qué áreas querés que <em>2027</em> sea distinto?</h4><div class="g">' +
      Object.keys(AREAS).map(function (a, i) { return '<div class="c' + (i === 0 || i === 1 || i === 5 ? ' on' : '') + '">' + AREAS[a] + ' ' + a + '</div>'; }).join('') + '</div></div>' +
      '<div class="v"><small>Paso 2 · Sentilo ahora</small><h4>Y cuando lo tengas… <em>¿cómo te querés sentir?</em></h4><div class="chs">' +
      FE.map(function (f, i) { return '<span class="' + (i === 1 || i === 3 ? 'on' : '') + '">' + f + '</span>'; }).join('') + '</div>' +
      '<h4 style="margin-top:10px;text-align:center"><em>en paz y amada</em></h4><p style="font-size:10.5px;text-align:center;margin:0">Eso lo podés empezar a sentir hoy ✨</p></div>' +
      '<div class="v"><small>Paso 3 · Respiración al 2027</small><h4>Seguí la luz</h4><div class="orb"></div><p style="font-size:11px;text-align:center;margin:0">Imaginá que es diciembre de 2027 y lo lograste.</p></div>' +
      '<div class="v"><small>Paso 4 · Tu alter ego</small><h4>La mujer que <em>ya lo vive</em></h4><div class="wp"><span style="letter-spacing:.2em;color:#e8c27a">MI ALTER EGO 2027</span><b>La Magnética</b><span>Decide desde la paz, no desde el miedo</span><span style="font-style:italic;font-size:10px">«Lo que es para mí me encuentra»</span></div></div>' +
      '<div class="v"><small>Paso 5 · Vision board</small><h4>Tu tablero <em>con evidencias</em></h4><div class="bd">' +
      '<div style="background:linear-gradient(160deg,#f38bb066,#2a173f)"><i>💞</i><em>3 evidencias</em><b>Amor</b>Me siento amada y en paz.</div>' +
      '<div style="background:linear-gradient(160deg,#e8c27a66,#2a173f)"><i>💰</i><em>5 evidencias</em><b>Dinero</b>Me siento libre con mi plata.</div>' +
      '<div style="background:linear-gradient(160deg,#9be3c666,#2a173f)"><i>🌿</i><b>Cuerpo</b>Me siento viva y liviana.</div>' +
      '<div style="background:linear-gradient(160deg,#f6d58e66,#2a173f)"><i>🏡</i><em>1 evidencia</em><b>Hogar</b>Me siento segura en mi casa.</div></div></div>' +
      '<div class="dots"><i class="on"></i><i></i><i></i><i></i><i></i></div></div></div></div>' +
      '<div id="mg-play"><h3>Probalo ahora: ¿cómo te querés sentir en 2027?</h3><p style="margin:0">Elegí un área de tu vida</p>' +
      '<div class="ar">' + Object.keys(AREAS).map(function (a) { return '<button data-a="' + a + '">' + AREAS[a] + ' ' + a + '</button>'; }).join('') + '</div>' +
      '<div class="res"></div></div>';
    return s;
  }
  function wire(s) {
    var vs = s.querySelectorAll('.v'), ds = s.querySelectorAll('.dots i'), n = 0;
    if (!reduce) setInterval(function () { vs[n].classList.remove('on'); ds[n].classList.remove('on'); n = (n + 1) % vs.length; vs[n].classList.add('on'); ds[n].classList.add('on'); }, 3200);
    var play = s.querySelector('#mg-play'), res = play.querySelector('.res'), area = '';
    play.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.dataset.a) {
        area = b.dataset.a; play.querySelectorAll('.ar button').forEach(function (x) { x.classList.toggle('on', x === b); });
        res.innerHTML = '<p style="margin:10px 0 0">Cuando ' + (area === 'Mi hogar' ? 'tengas tu hogar soñado' : 'eso que querés en ' + area.toLowerCase() + ' ya sea tuyo') + '… ¿cómo te vas a sentir?</p><div class="fe">' +
          FE.map(function (f) { return '<button data-f="' + f + '">' + f + '</button>'; }).join('') + '</div>';
      } else if (b.dataset.f) {
        var f = b.dataset.f.toLowerCase();
        res.innerHTML = '<p style="margin:14px 0 0">Lo que buscás de verdad en ' + area.toLowerCase() + ' es sentirte</p><div class="big">' + f + '</div>' +
          '<p style="margin:0">Y eso no tiene que esperar a 2027: lo podés empezar a sentir hoy. En la app te acompaño a sentirlo cada día.</p>' +
          '<a class="cta" href="' + buyHref() + '">Quiero mi Kit con la app ✨</a>';
      }
    });
  }
  function reveal(root) {
    var els = [].slice.call(root.querySelectorAll('main section, main > div > section, #mg-app'));
    if (!('IntersectionObserver' in window) || reduce) { els.forEach(function (e) { e.classList.add('mg-in'); }); return; }
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('mg-in'); io.unobserve(x.target); } }); }, { threshold: .12 });
    els.forEach(function (e, i) { if (i > 0) { e.classList.add('mg-rev'); io.observe(e); } });
  }
  function anchor() {
    var w = document.createTreeWalker(document.querySelector('main') || document.body, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) { if (/CUATRO PILARES/i.test(n.textContent)) return n.parentElement.closest('section'); }
    return null;
  }
  function mount() {
    if (document.getElementById('mg-app')) return true;
    var a = anchor(); if (!a) return false;
    var s = section(); a.parentNode.insertBefore(s, a.nextSibling); wire(s); reveal(document); return true;
  }
  function start() {
    if (mount()) {
      new MutationObserver(function () { if (!document.getElementById('mg-app')) mount(); }).observe(document.body, { childList: true, subtree: true });
      return;
    }
    var tries = 0, t = setInterval(function () { if (mount() || ++tries > 40) clearInterval(t); }, 250);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
