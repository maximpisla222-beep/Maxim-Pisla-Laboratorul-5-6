# Task Manager

Aplicație React (Vite) pentru gestionarea sarcinilor: adăugare, vizualizare,
marcare ca finalizată, ștergere.

## Analiza structurii proiectului

**1. Care este rolul folderului `src`?**
Folderul `src` conține tot codul sursă al aplicației — componentele React,
fișierele de stil și punctul de intrare (`main.jsx`). Este folderul în care
se lucrează efectiv la funcționalitatea aplicației.

**2. Ce reprezintă fișierul `App.jsx`?**
Este componenta principală (rădăcină) a aplicației React. Aici este definită
structura generală a interfeței și, de obicei, tot aici se gestionează starea
principală a aplicației (de exemplu, lista de sarcini), care apoi este
transmisă componentelor mai mici prin props.

**3. Ce informații sunt păstrate în `package.json`?**
Conține metadatele proiectului (nume, versiune), lista de dependențe
(bibliotecile folosite, ex: react, react-dom) și dependențele de dezvoltare
(ex: vite), precum și scripturile disponibile (`npm run dev`, `npm run build`
etc.).

**4. Ce reprezintă folderul `node_modules`?**
Este folderul în care sunt instalate fizic toate bibliotecile și
dependențele proiectului, descărcate pe baza `package.json` la rularea
`npm install`. Nu se urcă pe Git (este inclus în `.gitignore`), deoarece
poate fi regenerat oricând cu `npm install`.

## Funcționalități implementate

- adăugarea unei sarcini noi (nu se permite adăugarea unui câmp gol)
- vizualizarea tuturor sarcinilor
- marcarea unei sarcini ca finalizată (click pe text)
- ștergerea unei sarcini
- afișarea numărului total de sarcini și a celor finalizate
- mesaj afișat când lista este goală

## Rulare locală

```bash
npm install
npm run dev
```
