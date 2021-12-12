# Ładowanie danych

Aplikacja ładuje dane zawarte w plikach *users.json* oraz *hobbies.json* do tabeli w widoku głównym.

# Praca z tabelą

- Tabela zawiera kolumny: *Name*, *E-mail*, *Gender*, *Age*, *Hobbies*, *Date of Birth*, *Address*, *Phone number*, *Action*.
- Kolumna action zawiera dwa przyciski: 
    - *Details* - przenosi na podstronę zawierającą formularz z danymi wybranego użytkownika,
    - *Delete* - pozwala skasować wybranego użytkownika, przed skasowaniem pojawia się komunikat z pytaniem czy napewno chcemy skasować danego z imienia i nazwiska użytkownika, wybranie przycisku *OK* powoduje skasowanie użytkownika i powrót do uaktualnionej tabeli, wybranie przycisku *Cancel* powoduje powrót do niezmienionej tabeli.
- Tabela pozwala na sortowanie kolumn: *Name*, *E-mail*, *Age*, *Date of birth*, *Address*.
- Tabela pozwala na filtrowanie kolumn: *Name*, *E-mail*, *Gender*, *Age*, *Hobbies*, *Date of Birth*, *Address*.
- Tabela pozwala na zaznaczenie jednego lub więcej użytkowników, po zaznaczeniu przynajmniej jednego użytkownika dostęnym staje się przycisk *Delete selected*.
- Po kliknięciu w przycisk *Delete selected* wyświetla się pytanie czy na pewno chcemy usunąć zaznaczonych użytkowników (w komunikacie lista imion i nazwisk wybranych użtkowników), wybranie przyciku *OK*, powoduje usunięcie użytkowników i powrót do zaktualizowaniej tabeli, wybranie przycisku *Cancel* powoduje powrót do niezmienionej tabeli.

# Praca z formularzem danych użytkownika

- W formularzu wyświetlją się dane użtkownika: *Name*, *Last Name*, *E-Mail*, *Gender*, *Age*, *Hobbies*, *Date of birth*, *Address*, *Phone number*.
- Dane te można edytować poprzez wpisanie nowych wartości bądź:
    dla pola *Gender* wybranie jednej wartości spośród *male/female*,
    dla pola *Hobbies* wybranie jednej bądż więcej wartości z wyświetlającej się listy,
    dla pola *Date of birth* wybranie daty z kalendarza.
- Pola wymagane:
    - *Name* - wymaga wpisania dowolnego tekstu, puste pole generuje komunikat: *"User name is required!"*,
    - *Last Name* - wymaga wpisania dowolnego tekstu, puste pole generuje komunikat: *"User last name is required!"*,
    - *E-mail* - wymaga wpisania tekstu typu *email*, puste pole lub nieprawidłowy tekst generują komunikat: *"User e-mail is required!"*,
    - *Age* - wymaga podania liczby z zakresu 0-150, puste pole generuje komunikat: *"Age is required!"*, wybranie niewłaściwej wartości generuje komunikat: *"Provide right age!"*,
    - *Hobbies* - wymaga wybrania przynajmniej jednej opcji z listy, puste pole generuje komunikat: *"Please provide at least one hobby!"*.
- Na formularzu znajdują się przyciski:
    - *Back to main view* - powoduje powrót do tabeli użytkowników bez wprowadzania jakichkolwiek zmian,
    - *Reset* - powoduje przywrócenie wartości w formularzu do stanu początkowego,
    - *Save* - przeprowadza walidację formularza, w przypadku poprawnego wypałnienia zapisuje zmienionego użytkownika i powraca do tabeli użytkowników, w której pojawiają się nowe wartości dla edytowanego użytkownika, w przypadku negatywnej walidacji pojawia się komunikat błędu z prośbą o wprowadzenie poprawnych danych.

# Testy E2E Cypress

Do aplikacji dołączone są częściowe testy E2E Cypress.

#### Dla tabeli użytkowników testy:
- Usuwanie jednego użytkownika *Cabrera Stokes*,
- Rezygnacja (w oknie komunikatu) z usuwania jednego użytkownika *Cabrera Stokes*,
- Sprawdzanie dostępności przycisku *Delete selected*,
- Usuwanie wielu użytkowników,
- Rezygnacja (w oknie komunikatu) z usuwania wielu użytkowników,
- Przejście do formularza edycji konkretnego użytkownika,
- Filtrowanie po kolumnie *Name*.

#### Dla formularza edycji użytkownika testy:
- Przycisku *Back to main view*,
- Walidacji pola *Name*,
- Zamiany wartości pola *Name*,
- Walidacji pola *Last Name*,
- Zmiany warości pola *Last Name*,
- Walidacji pola *E-mail*,
- Zmiany wartości pola *E-mail*,
- Zmiany wartości pola *Gender*,
- Przycisku *Reset*.

