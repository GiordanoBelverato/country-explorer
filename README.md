# Country Explorer

Country Explorer è una semplice applicazione web sviluppata con React, TypeScript e Vite. L'applicazione consente di esplorare informazioni sui paesi del mondo utilizzando le REST Countries API.

----------------------------------------------------------------

## **Funzionalità Implementate**

### **1. Homepage**
- Visualizza una lista di tutti i paesi recuperati dall'API `https://restcountries.com/v3.1/all`.
- Per ogni paese vengono mostrati:
  - Nome
  - Bandiera
  - Regione
  - Popolazione
- Ogni paese nella lista include un link che conduce alla sua pagina di dettagli.
- **Route**: `/`

### **2. Dettagli del Paese**
- Una pagina dedicata mostra informazioni dettagliate su un singolo paese selezionato.
- Informazioni incluse:
  - Nome
  - Bandiera
  - Regione
  - Popolazione
  - Capitale
  - Lingue
  - Valute
  - Confini con altri paesi
  - Fusi orari
  - Codice della chiamata internazionale
- **Route**: `/country/:name`

### **3. Navigazione**
- Una barra di navigazione semplice permette di tornare alla Homepage.
- Gestione della navigazione con React Router.

----------------------------------------------------------------

## **Struttura del Progetto**

Il progetto è organizzato nelle seguenti cartelle principali:

- `src/components`: Contiene i componenti principali (es. `CountryCard`, `CountryList`, `CountryDetails`, `Header`, `Layout`).
- `src/pages`: Contiene le pagine principali (Homepage e pagina dei dettagli del paese).
- `src/services`: Contiene la logica per le chiamate API.

----------------------------------------------------------------

## **Setup e Installazione**

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd country-explorer
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri l'applicazione nel browser**
   Visita `http://localhost:5173` per visualizzare l'app.

----------------------------------------------------------------

## **Tecnologie Utilizzate**

- **React**: Libreria principale per la costruzione dell'interfaccia utente.
- **TypeScript**: Per una tipizzazione rigorosa e un codice più robusto.
- **Vite**: Strumento di build veloce e moderno.
- **Chakra UI**: Libreria di componenti per uno stile moderno e responsive.
- **React Router**: Per la gestione delle rotte e della navigazione.
- **REST Countries API**: Fonte dei dati sui paesi.

----------------------------------------------------------------
