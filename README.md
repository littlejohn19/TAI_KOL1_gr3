# Technologie Aplikacji Internetowych - Kolokwium I

## Zadanie 1

Należy zrobić fork'a niniejszego projektu i sklonować repozytorium.


## Zadanie 2

W projekcie znajduje się 3 pliki: 
- index.html
- script.js
- style.css

Zadanie polega na dodanie zawartości pliku JavaScript. Następnie dodaniu go w odpowiednim miejscu w pliku html.
Wykorzystując język Javascript należy wykonać manipulacje na obiekcie DOM odnosząc się do odpowiednich 
elementów ze strony i wykonując następującą akcję:
(cały kod Javascript ma być zawarty w pliku script.js):
- po kliknięciu w przycisk kolor diva powinien zmienić się z zielonego na zółty.

W tym zadaniu należy dodać również kolejny kolejny przycisk oraz plik .js, który będzie obsługiwał zmianę tła strony. 

## Zadanie 3

Do projektu należy dodać dwa pliki:
- navbar.js
- kontakt.html (plik ten musi mieć strukturę strony internetowej - tagi html, head oraz body. Można powielić zawartość pliku index.html)

Zadanie:
- w pliku navbar.js należy zdefiniować zmienną, która będzie zawierać w sobie znacznik html - `<h1>Nawigacja</h1>` oraz dwa znaczniki `a`, 
których atrybuty href będą odpowiedzialne za przeniesienie użytkownika na podstrony `index` oraz `kontakt`. 
Dodatkowo plik ten należy dołączyć do obu podstron projektu.
- pliki `index.html` oraz `kontakt.html` powinny mieć tuż po otwarciu znacznika body umieszczony znacznik `<div class="nav-bar"></div>`. 
Ten pusty znacznik będzie odpowiedzialny za wyświetlenie nawigacji z pliku navbar.js.
- po dołączeniu pliku navbar.js do obu plików html należy umieścić w nich odpowiedni kod, który odniesie się do znacznika
 div i umieści w nim zdefiniowaną w zmiennej nawigację.

## Zadanie 4

Do projektu należy dodać kolejną podstronę (`formularz.html`) oraz bibliotekę bootstrap (tylko na tej podstronie).
Z pomocą dodanej biblioteki (jej klas) należy dodać pola:
- tekstowe Email: `<input type="email">`,
- tekstowe Temat: `<input type="text">`,
- textarea Wiadomość: `<textarea></textarea>`,
- przycisk "Wyślij" (class: primary),
- przycisk "Wyczyść" (class: danger).

Po wciśnięciu przycisku "Wyślij" - pod formularzem powinien pojawić się wpisany tekst odpowiednio sformatowany.
Np. 


| Wiadomość:  |                                      |
| ----------- | ------------------------------------ |
| Email:      | **Wpisany w formularzu email**       |
| Temat:      | **Wpisany w formularzu temat**       |
| Wiadomość   | **Wpisana w formularzu wiadomość**   |
|Została wysłana!|                                   |

 
Po wybraniu przycisku Wyczyść, fomrmularz zostaje wyczyszczony, a informacja wysłanej wiadomości znika.

Pod formularzem należy wstawić licznik, który będzie wyświetlał liczbę, ile razy został kliknęty przycisk wyślij.

Technika rozwiązania dowolna!

## Zadanie 5

Należy wykonać PR do głównego brancha repozytorium z treścią kolokwium.
