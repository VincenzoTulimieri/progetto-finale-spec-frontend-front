# Visual Gaming

![React](https://img.shields.io/badge/React-18-blue?logo=react) 

Visual gaming simula un comparatore di videogames, utilizzando le tecnologie viste con il corso di Boolean.

---

## 📌 Funzionalità  

### 🥉 Requisiti Minimi  
- Gestione di una risorsa (`product`) definita in `types.ts`.  
- Lista games con proprietà principali: `title` e `category`.  
- Barra di **ricerca** per filtrare per titolo.  
- **Filtro per categoria**.  
- **Ordinamento** A-Z / Z-A su `title` e `category`.  
- Pagina di **dettaglio game** con informazioni estese.  
- **Comparatore di 2 games** affiancate.  
- **Sistema preferiti** sempre accessibile.  

### 🥈 Requisiti Consigliati  
- Comparatore di **più 2 games** (layout adattivo).  
- **Debounce sulla ricerca** per migliorare UX.  
- Persistenza preferiti con `localStorage`.  
- Gestione stati vuoti:  
  - Nessun risultato trovato.  
  - Lista preferiti vuota.  
  - Nessun elemento selezionato nel comparatore.  

--- 

## 🛠️ Tecnologie Utilizzate  
- **Frontend**: [React](https://reactjs.org/), [React Router](https://reactrouter.com/)  
- **Styling**: css, Bootstrap
- **Gestione stato**: React Hooks + Context API  
- **Persistenza locale**: `localStorage`  
- **Backend**: REST API (Node.js + Express / JSON Server), dati in typescript