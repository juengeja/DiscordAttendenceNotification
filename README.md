# DiscordAttendenceNotification

Ein Tool zur automatischen Benachrichtigung über bestimmte Discord-Events per Telegram. Nutzer sollen bestimmte Discord-Channel oder -User auswählen und tracken können. Dadurch erhalten sie dann Benachrichtigungen über Events, die den entsprechenden Channel oder User betreffen, von einem Telegram Chatbot.

Dieses Projekt ist im Rahmen der Vorlesungsreihe **"Web-Programmierung"** im Kurs _WWI20SEA_ entstanden.

## Nutzung

Starte auf unserer Website: [Discord Attendance Notification](http://5.45.107.109:8800/)
Schreibe unserem [Telegram-Bot](https://t.me/discordattendancenotificationbot) eine Nachricht, um eine ChatID zu erhalten und damit er dir Nachrichten senden kann!
Füge unseren [Discord-Bot](https://discord.com/api/oauth2/authorize?client_id=946429904260595712&permissions=8&scope=bot) zu deinem Discord-Server hinzu!

Gib nun deine persönliche ChatID, die du von unserem Telegram-Bot erhalten hast, auf der Login-Page unserer Website ein.

Auf der nächsten Seite kannst du einen gesamten Server (nicht empfohlen), einen einzelnen User, oder einen bestimmten Channel angeben. Zu Events, die die ausgewählte Entität betreffen wirst du später per Telegram-Nachricht auf dem Laufenden gehalten werden.

Um einen Server, Channel oder User angeben zu können, benötigst du dessen ID. Öffne dazu deine Discord-Einstellungen, wähle erweitert und aktiviere den **Entwicklermodus**.

![grafik](https://user-images.githubusercontent.com/73344489/163879997-8516f8b1-7393-4f46-ac55-cfdc30724f6e.png)

Jetzt wähle die Entsprechende Entität mit Rechtsklick aus und wähle **ID kopieren**.

![grafik](https://user-images.githubusercontent.com/73344489/163880185-7a99510b-7ef1-4944-9bfa-559994204056.png)

Füge die kopierte ID in das entsprechende linke Feld ein. Nun kannst du noch einen **Spitznamen** definieren, den unser Bot benutzen soll, wenn er dir Nachrichten zu dem gewählten Objekt sendet. Dieser ist jedoch optional.

Unter den Eingabefeldern wird dir eine Tabelle mit deinen ausgewählten Benachrichtigungseinstellungen angezeigt. Über den **DELETE**-Button in jeder Zeile lässt sich der Eintrag wieder löschen.

## Komponenten

Unser Projekt setzt sich aus einem **Backend**, einem **Frontend** und den beiden **Bots** zusammen.

## Entwicklung

Bei Fragen, Anregungen oder anderen Ideen: Gerne einfach ein Issue oder ein Pull Request öffnen!

Das Backend lässt sich mit folgendem Befehl aus dem Hauptverzeichnis heraus starten:
```
deno run --allow-all ./backend/server.ts
```

Das Frontend wird aus dem Verzeichnis [frontend/discordAttendence](/frontend/discordAttendence) heraus mit folgendem Befehl gestartet:
```
trex run start
```

Die Bots werden mit dem Befehl:
```
deno run --allow-all ./backend/telegramChatbot.ts
```
bzw.
```
deno run --allow-all ./backend/discordbot.ts
```
ebenfalls aus dem Hauptverzeichnis heraus gestartet.
