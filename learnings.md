# Personal Learnings

## Generelles

- Deno kennengelernt  
  - Im Zuge dessen auch erster Kontakt mit Typescript
- pm2 kennengelernt (und lieben gelernt)
  - Wir hatten uns zunächst mit Docker befasst, uns dann aber schnell von pm2 überzeugen lassen
- GitHub actions & GitHub pages zum ersten mal genutzt
  - Nutzung eines snel.yml workflows
- Versuch: Coden eines eigenen GitHub Webhooks zur Deploy-Automatisierung

## Backend

- Nutzung einer eigenen Datenbank
  - Erster Versuch: AWS DynamoDB
    - Nutzung eines Deno-Moduls zur Anbindung an DynamoDB
    - AWS kennengelernt, Datenbank aufgebaut und Anbindung ausprobiert
    - Das Modul war jedoch nicht fertig, von den beschriebenen Operationen existierte nur die Abfrage existierender Werte -> Einfügen neuer Werte nur händisch über AWS möglich
    - Damit war DynamoDB doch nicht praktikabel
  - Zweiter Versuch: AloeDB (Deno-Modul)
    - Lokal gespeicherte Datenbank in JSON-Form
    - Gut zu bedienen und vollständig nutzbar!
    - -> Aktuell genutzte Lösung
- Middleware Frameworks
  - Opine kennengelernt und begeistert genutzt
    - Nutzen von http-Methoden: POST, GET, DELETE
    - Testen der API-Funktion mittels Postman
  - Einarbeitung CORS-Header
  - Nutzung von .env files zum Schutz sensibler Daten (in Form von TOKEN)
  - Telegram Chatbot
    - Erster eigener Telegram Chatbot
    - Steuerung mittels gleichnamigem Deno-Modul
  - Discord Bot
    - Erster eigener Discord Bot
    - Steuerung mittels des harmony-Frameworks
  - Viel neue Erfahrung im Umgang mit Bots gesammelt!

## Frontend

- Svelte / Snel kennengelernt
  - Im Zuge dessen erster intensiver Kontakt mit JavaScript
  - Verschiedene Methoden zum Page-Routing ausprobiert
  - Verschiedene Methoden zum Weitergeben der Variablen zwischen Components ausprobiert
- Dynamische Tabellen mit Button, um Zeile zu Laden und zu Löschen
  - Ausprobieren von JQuery und anderen Alternativen
- Probleme beim Build & Deploy
  - Trotz korrekter Ausführung Generierung einer leeren Seite
  - Lösung durch bereitstellen entsprechender css und js files unter zugehörigen Pfaden
  - Bereitstellung mittels Opine (res.sendfile) auf eigenem Server

## Spezielle Learnings

Wir sind beim Aufbau unseres Discord-Bots mittels des Deno-Moduls harmony auf einige Probleme bezüglich der Event-Listener gestoßen. Diese haben nicht alle Daten geliefert, die wir benötigten - obwohl sie das laut Dokumentation hätten tun sollen. Wir sind daraufhin mit den Entwicklern auf Discord in Verbindung getreten und haben den Bug gemeldet, daraufhin wurde sehr zeitnah ein Fix für das Problem bereitgestellt.
- Gelernt: Problemlösung durch finden der richtigen Ansprechpartner
