# Baut aus den Einzeldateien eine einzelne HTML-Datei.
# Praktisch zum Antippen ohne Server und fuer Vorschauen.
MODULES = ["icons", "themes", "animations", "pieces", "modes", "input", "game"]

html = open("index.html", encoding="utf-8").read()
css = open("style.css", encoding="utf-8").read()

html = html.replace('<link rel="stylesheet" href="./style.css">', "<style>\n" + css + "\n</style>")
html = html.replace('<link rel="manifest" href="./manifest.json">\n', "")
html = html.replace('<link rel="apple-touch-icon" href="./apple-touch-icon.png">\n', "")
html = html.replace('<link rel="icon" href="./icon-192.png">\n', "")

for name in MODULES:
    tag = '<script src="./%s.js"></script>' % name
    src = open("%s.js" % name, encoding="utf-8").read()
    html = html.replace(tag, "<script>\n/* ---- %s.js ---- */\n%s\n</script>" % (name, src))

html = html.replace('if ("serviceWorker" in navigator) {', 'if (false) {')
html = html.replace("<title>BLOCKSTORM</title>",
                    "<title>BLOCKSTORM</title>\n<!-- Einzeldatei: CSS und JS eingebettet. "
                    "Fuer die PWA-Installation die Einzeldateien nutzen. -->")

open("blockstorm-standalone.html", "w", encoding="utf-8").write(html)
print("blockstorm-standalone.html:", len(html), "Zeichen")
