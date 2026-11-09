from pathlib import Path
p = Path("index.html")
s = p.read_text(encoding="utf-8")
if 'id="problema-territorial"' not in s:
    css = """<style>
#problema-territorial{position:fixed;inset:0;z-index:9999;background:#080d11;color:#f3f5f5;display:flex;align-items:center;justify-content:center;padding:clamp(24px,6vw,90px);font-family:Inter,Arial,sans-serif}
#problema-territorial .contenido{max-width:980px;width:100%}
#problema-territorial .etiqueta{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:#4FB6B0;font-weight:700;margin-bottom:28px}
#problema-territorial h1{font-size:clamp(36px,6vw,84px);line-height:1.05;letter-spacing:-.045em;margin-bottom:28px;font-weight:700}
#problema-territorial p{font-size:clamp(17px,2.1vw,26px);line-height:1.5;color:#c5cfd3;max-width:820px;margin-bottom:40px}
#problema-territorial button{border:1px solid #4FB6B0;background:#4FB6B0;color:#071012;padding:15px 25px;border-radius:4px;font-weight:700;font-size:14px;cursor:pointer}
#problema-territorial button:focus-visible{outline:3px solid white;outline-offset:4px}
</style>"""
    intro = """<section id="problema-territorial" role="dialog" aria-modal="true" aria-labelledby="problema-titulo"><div class="contenido"><div class="etiqueta">Tierra Bomba / Problema central</div><h1 id="problema-titulo">Un territorio frente al aumento del mar</h1><p>La pérdida paulatina de suelo costero por el aumento del mar amenaza con desplazar progresivamente a la población de Tierra Bomba y fragmentar sus modos de vida.</p><button id="entrar-tierrabomba" type="button">Explorar el territorio →</button></div></section><script>document.getElementById('entrar-tierrabomba').addEventListener('click',function(){document.getElementById('problema-territorial').remove()});</script>"""
    s = s.replace("</head>", css + "\n</head>", 1)
    s = s.replace("<body>", "<body>\n" + intro, 1)
    p.write_text(s, encoding="utf-8")
