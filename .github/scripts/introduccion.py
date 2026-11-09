from pathlib import Path
p = Path("index.html")
s = p.read_text(encoding="utf-8")
if 'id="problema-territorial"' not in s:
    css = """<style>
#problema-territorial{position:fixed;inset:0;z-index:9999;background:#f0eee8;color:#252a29;font-family:Inter,Arial,sans-serif;overflow-y:auto}
#problema-territorial *{box-sizing:border-box}
#problema-territorial .marco{min-height:100%;max-width:1600px;margin:auto;padding:clamp(24px,4vw,64px);display:flex;flex-direction:column}
#problema-territorial .cabecera{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #a8aaa5;padding-bottom:18px;gap:20px;font-size:11px;font-weight:600;letter-spacing:.09em;text-transform:uppercase}
#problema-territorial .cabecera span:last-child{font-weight:400;color:#6e7673}
#problema-territorial .cuerpo{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.35fr);gap:clamp(35px,7vw,120px);align-items:center;flex:1;padding:clamp(50px,9vh,110px) 0}
#problema-territorial .indice{font-size:12px;color:#727b78;letter-spacing:.06em;align-self:start}
#problema-territorial .texto{max-width:800px}
#problema-territorial .sobrelinea{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#68736f;margin-bottom:26px}
#problema-territorial h1{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:clamp(43px,5.5vw,88px);letter-spacing:-.045em;line-height:1.04;margin:0 0 34px}
#problema-territorial p{font-size:clamp(16px,1.35vw,20px);line-height:1.75;color:#4b5451;max-width:650px;margin:0}
#problema-territorial .pie{border-top:1px solid #a8aaa5;padding-top:18px;display:flex;justify-content:space-between;align-items:center;gap:24px}
#problema-territorial .pie small{font-size:11px;color:#6b7470;letter-spacing:.04em}
#problema-territorial button{background:transparent;color:#252a29;border:0;border-bottom:1px solid #252a29;padding:10px 0;font-size:13px;font-weight:600;letter-spacing:.01em;cursor:pointer}
#problema-territorial button:hover{color:#526e67;border-color:#526e67}
#problema-territorial button:focus-visible{outline:2px solid #526e67;outline-offset:6px}
@media(max-width:760px){#problema-territorial .cuerpo{grid-template-columns:1fr;gap:30px;align-content:center}#problema-territorial .indice{align-self:auto}#problema-territorial .pie small{max-width:150px}#problema-territorial h1{font-size:clamp(42px,10vw,62px)}}
</style>"""
    intro = """<section id="problema-territorial" role="dialog" aria-modal="true" aria-labelledby="problema-titulo"><div class="marco"><header class="cabecera"><span>Tierra Bomba</span><span>Lectura territorial / 01</span></header><div class="cuerpo"><div class="indice">01 — Problema central</div><div class="texto"><div class="sobrelinea">Transformaciones del borde costero</div><h1 id="problema-titulo">La tierra que<br>retrocede.</h1><p>La pérdida paulatina de suelo costero por el aumento del mar amenaza con desplazar progresivamente a la población de Tierra Bomba y fragmentar sus modos de vida.</p></div></div><footer class="pie"><small>Isla de Tierra Bomba · Cartagena, Colombia</small><button id="entrar-tierrabomba" type="button">Entrar al territorio &nbsp;↗</button></footer></div></section><script>document.getElementById('entrar-tierrabomba').addEventListener('click',function(){document.getElementById('problema-territorial').remove()});</script>"""
    s = s.replace("</head>", css + "\n</head>", 1)
    s = s.replace("<body>", "<body>\n" + intro, 1)
    p.write_text(s, encoding="utf-8")
