# Prosjekt  4

## Om prosjektet

Premier League Search er en mobilapp hvor en kan søke, filtrere og få opp informasjon og statistikk på ulike spillere
i Premier League. Når appen åpnes, displayes et søkefelt, en filtreringsknapp samt en liste scroll-bar liste med spillernavn. En bruker kan søke på en spiller i Premier League. Ved å trykke på en spiller i listen, vil man få opp utfyllende informasjon om den valgte spilleren, inkluder bilde av spilleren.

Ved å klikke på "Filter"-knappen, vil man få et display av ulike filtrerings og sorteringsmuligheter. Sorteringsmulighetene inkluderer å få spillere listet opp alfabetisk etter navn, både stigende og synkende. Tilsvarende funksjonalitet er implementert for å liste opp spillere basert på antall mål en spiller har scoret. Brukeren av appen kan filtrere søket sitt etter lagene i Premier
League. 

## Oppsett av prosjektet (hvordan starte det)

For å kunne kjøre prosjektet må man enten være koblet til NTNUs nett eller NTNUs VPN.

Etter å ha klonet repoet:

Kjør "npm i" i både backend-og my-new-project mappen.
Naviger til my-new-peoject/store/actions/PlayersAction. Endre delen markert i bildet under til din egen IP adresse, og trykk ctrl+s.
![IP picture](my-new-project/assets/images/IP_picture.png)
 
Ha deretter to terminaler åpne:

- Naviger deg inn i /Backend og kjør 'node App.ts run'.
- I den andre terminalen, naviger til /my-new-project og kjør 'expo start'. En webside vil da åpne seg, og vise en QR-kode.
- Last ned 'Expo Client' i AppStore (eller tilsvarende), og scan deretter QR-koden. Applikasjonen skal da kjøre på mobil enhet.  

## Teknologi

### Backend 

Backend er identisk som i prosjekt 3. Databasen kontinuerlig på virtuell maskin. 

### React-native og Expo 

Prosjektet er basert på React-Native og Expo. Det ble initalisert på følgende måte:

````
npm install --global expo-cli

expo init my-new-project
````

En stor del av koden er lik som i prosjekt 3. Det var likevel en del endringer som var nødvendig, for å tilpasse prosjektet til React Native. For det første var vi nødt til å endre på det meste av styling. I dette prosjektet har vi tatt i bruk Stylesheets direkte inn i .tsx-filene for å style komponentene. I tillegg bruker React Native egne komponenter for å rendre. Der vi i forrige prosjekt tok i bruk HTML-komponenter som "div" og "h1", har vi i dette projektet brukt React Native komponennter som "Text" og "View". 

### State management

**Redux** ble benyttet til state managament i applikasjonen. Hvor prinsippet er å ha en store for lagring av tilstander.
Dette gjør at en kan flytte tilstander ut av komponenter, til en egen «enhet».
Actions for å beskrive hendelser som fører til en endring, og reducers som beskriver hvordan tilstandene endres av actions.

I tillegg ble props og states tatt i bruk for å sende states fra de ulike sort- og filterkomponentene. Disse statesene ble sendt til disptach-metoden i "TabOneScreen". Denne metoden henter data fra databasen, basert på variablene den blir gitt. 

### Testing

Vi har gjort fortløpende manuell e2e-testing, både selv men også av en tredjepart. Denne hadde android og startet og sjekket appen vår med sin telefon og kom med tilbakemeldinger.

### Tredjepartskomponenter

I tillegg til bruk av React Native sine egne komponenter, er det tatt i bruk tredjepartskomponenter for å implementere hhv. Picker-list og Checkbox. 

## Kilder

- https://www.npmjs.com/package/@react-native-community/picker
- https://www.npmjs.com/package/react-native-check-box
- https://fantasy.premierleague.com/
- https://www.transfermarkt.co.uk/
