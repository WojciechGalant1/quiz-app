export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correct: number[];
}

export const quizData: QuizQuestion[] = [
    {
        id: 1,
        question: "Wskaż poprawną postać instrukcji SELECT  w języku PL/SQL, umieszczoną w części wykonawczej bloku PL/SQL (w zadaniu wykorzystano przykład bazy danych używanej na zajęciach laboratoryjnych).",
        options: [
            "SELECT Id_Student, Nazwisko, Imie FROM Studenci ;",
            "CURSOR c1 IS SELECT Id_Student, Nazwisko, Imie FROM Studenci ;",
            "SELECT Id_Student, Nazwisko, Imie INTO vid, vnazwisko, vimie FROM Studenci ;",
        ],
        correct: [2]
    },
    {
        id: 2,
        question: "W jakim celu wykorzystuje się kursory? Wskaż zdanie, które najlepiej oddaje celowość zastosowania kursorów.",
        options: [
            "Umożliwiają pobranie wiersza danych i zapisanie ich w zmiennej",
            "Umożliwiają wielokrotne powtarzanie tych samych operacji z wykorzystaniem różnych danych",
            "Umożliwiają przetwarzanie danych z wykorzystaniem wielu wierszy będących wynikiem zapytania",
            "Umożliwiają wykonanie zapytania do bazy danych",
        ],
        correct: [2]
    },
    {
        id: 3,
        question: "Twoim zadaniem jest utworzyć pakiet o nazwie Pckg_Validate, który będzie udostępniał typy kolekcji oraz funkcje walidujące dane. Przyjmując założenie, że pakiet ten nie istnieje jeszcze w bazie danych, jakie polecenia wykonasz, aby utworzyć ten pakiet? Wskaz odpowiedź, która opisuje poprawny sposób tworzenia tego pakietu.",
        options: [
            "CREATE OR REPLACE PACKAGE Pckg_Validate",
            "Najpierw CREATE PACKAGE Pckg_Validate, potem CREATE PACKAGE BODY Pckg_Validate",
            "CREATE OR REPLACE PACKAGE BODY Pckg_Validate",
            "Najpierw CREATE OR REPLACE PACKAGE Pckg_Validate, potem CREATE OR REPLACE PACKAGE BODY Pckg_Validate",
        ],
        correct: [3]
    },
    {
        id: 4,
        question: "Twoim zadaniem jest zmodyfikowanie kodu PL/SQL w funkcji składowanej SF_Validate istniejącej już w bazie danych. Które z poniższych polecenie wykorzystasz do tego celu?",
        options: [
            "CREATE OR REPLACE FUNCTION SF_Validate",
            "MODIFY FUNCTION SF_Validate",
            "ALTER FUNCTION BY REPLACING SF_Validate",
            "CREATE OR MODIFY FUNCTION SF_Validate",
            "CREATE FUNCTION SF_Validate",
            "ALTER FUNCTION SF_Validate",
        ],
        correct: [0]
    },
    {
        id: 5,
        question: "Procedura PL/SQL została zdefiniowana w następujący sposób:\nPROCEDURE dodaj_przedmiot (n_nazwa VARCHAR2 DEFAULT 'Informatyka',\nn_opis VARCHAR2) IS\nBEGIN\nINSERT INTO Przedmioty VALUES(n_nazwa, n_opis);\nEND dodaj przedmiot;\nProszę wskazać poprawne wywołanie tej procedury:",
        options: [
            "dodaj_ przedmiot(n_opis => NULL);",
            "dodaj przedmiot('Algorytmy');",
            "dodaj_ przedmiot('Algorytmy', 'Opis algorytmów\");",
            "dodaj_przedmiot;",
        ],
        correct: [0, 2]
    },
    {
        id: 6,
        question: "Która kolekcja jest zawszę gęsta?",
        options: [
            "Kolekcja typu VARRAY",
            "Kolekcja typu tablica asocjacyjna",
            "Kolekcja typu NESTED TABLE",
        ],
        correct: [0]
    },
    {
        id: 7,
        question: "W jaki sposób można sprawdzić poprawność semantyczną obsługi wyjątku?",
        options: [
            "Poprzez kompilację bloku PL/SQL, zawierającego kod obsługi wyjątku",
            "Poprzez wykonanie tylko tej instrukcji, która powoduje powstanie wyjątku",
            "Poprzez analizę poprawności składni kodu PL/SQL, zawierającego instrukcję powodującą powstanie wyjątku oraz jego obsługę",
            "Poprzez uruchomienie (wykonanie) bloku PL/SQL, zawierającego instrukcję powodującą powstanie wyjątku oraz jego obsługę",
        ],
        correct: [3]
    },
    {
        id: 8,
        question: "Proszę wskazać predefiniowane nazwy wyjątków:",
        options: [
            "INVALID_CURSOR",
            "DUP_VAL_ON_INDEX",
            "NO_DATA_FOUND",
            "TOO_MANY_ROWS",
            "DUP_VAL_ON_COLUMN",
            "TO_MANY_DATA",
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 9,
        question: "Które polecenie spowoduje skompilowanie ciała istniejącego pakietu o nazwie Pckg_Validate?",
        options: [
            "ALTER PACKAGE Pckg_Validate COMPILE",
            "ALTER PACKAGE Pckg_Validate COMPILE SPECIFICATION",
            "ALTER PACKAGE Pckg_Validate COMPILE BODY",
            "ALTER PACKAGE Pckg_Validate COMPILE PACKAGE",
        ],
        correct: [2]
    },
    {
        id: 10,
        question: "Wskaż sposób skojarzenia błędu o numerze -1 z nazwą wyjątku DUPLICATE_VALUES:",
        options: [
            "declare\n PRAGMA EXCEPTION_INIT(duplicate_values, -1); duplicate_values exception;\nbegin\n null;\nend;",
            "declare\nduplicate_values exception;\nPRAGMA EXCEPTION_INIT(duplicate_values, -1);\nbegin\nnull;\nend;",
        ],
        correct: [1]
    },
    {
        id: 11,
        question: "Twoim zadaniem jest zmodyfikować definicję funkcji udostępnianej w istniejącym pakiecie o nazwie Pckg_Validate. Jakie polecenie musisz zdefiniować, aby wykonać to zadanie? Wskaż odpowiedź, która opisuje poprawny sposób wykonania tej modyfikacji.",
        options: [
            "CREATE OR REPLACE PACKAGE Pckg_Validate",
            "Najpierw CREATE PACKAGE Pckg_Validate, potem CREATE PACKAGE BODY Pckg_Validate",
            "Najpierw CREATE OR REPLACE PACKAGE Pckg_Validate, potem CREATE OR REPLACE PACKAGE BODY Pckg_Validate",
            "CREATE PACKAGE BODY Pckg_Validate",
            "CREATE OR REPLACE PACKAGE BODY Pckg_Validate",
        ],
        correct: [4]
    },
    {
        id: 12,
        question: "W którym momencie wykonywane jest zapytanie zdefiniowane w deklaracji kursora jawnego?",
        options: [
            "Podczas sprawdzania czy kursor został otwarty przy pomocy atrybutu %ISOPEN",
            "Podczas sprawdzania wartości atrybutu %FOUND",
            "Podczas wykonania instrukcji otwarcia kursora",
            "Podczas sprawdzania wartości atrybutu %NOTFOUND",
            "Podczas pobierania danych do zmiennej przy pomocy instrukcji FETCH",
        ],
        correct: [2]
    },
    {
        id: 13,
        question: "Wskaż zdanie prawdziwe dotyczące pakietów definiowanych w bazie danych ORACLE.",
        options: [
            "Każdy pakiet składa się ze specyfikacji i ciała.",
            "Każdy pakiet musi składać się ze specyfikacji i opcjonalnie może posiadać ciało.",
            "W bazie danych można tworzyć pakiety o tej samej nazwie, jednak muszą one różnić się specyfikacją.",
            "Każdy pakiet musi zawierać co najmniej jeden podprogram PL/SQL.",
            "Każdy pakiet musi mieć unikalną nazwę w bazie danych.",
        ],
        correct: [1]
    },
    {
        id: 14,
        question: "W której z sekcji bloku PL/SQL można zagnieżdżać kolejne bloki?",
        options: [
            "Tylko w sekcji EXCEPTION",
            "Tylko w sekcji BEGIN lub EXCEPTION",
            "Tylko w sekcji BEGIN",
            "W każdej sekcji tj. w części DECLARE, BEGIN, EXCEPTION",
        ],
        correct: [1]
    },
    {
        id: 15,
        question: "Wskaż poprawny sposób deklarowania zmiennej rekordowej o nazwie My_Rec w bloku PL/SQL:",
        options: [
            "TYPE tMy_Rec AS OBJECT (Id NUMBER(5), Name VARCHAR2(30));\nMy_Rec tMy_Rec;",
            "My Rec IS RECORD (Id NUMBER(5), Name VARCHAR2(30));",
            "My Rec ROWTYPE (Id NUMBER(5), Name VARCHAR2(30));",
            "TYPE tMy_Rec IS RECORD (Id NUMBER(5), Name VARCHAR2(30)); My_Rec tMy_Rec;",
        ],
        correct: [3]
    },
    {
        id: 16,
        question: "Twoim zadaniem jest zmodyfikować definicję funkcji udostępnianej w istniejącym pakiecie o nazwie\nPckg_Validate. Jakie polecenie musisz zdefiniować, aby wykonać to zadanie? Wskaż odpowiedź, która opisuje poprawny sposób wykonania tej modyfikacji.",
        options: [
            "CREATE PACKAGE BODY Pckg_Validate",
            "Najpierw CREATE PACKAGE Pckg_Validate, potem CREATE PACKAGE BODY Pckg_Validate",
            "CREATE OR REPLACE PACKAGE BODY Pckg_Validate",
            "CREATE OR REPLACE PACKAGE Pckg_Validate",
            "Najpierw CREATE OR REPLACE PACKAGE Pckg_Validate, potem CREATE OR REPLACE PACKAGE BODY Pckg_Validate",
        ],
        correct: [2]
    },
    {
        id: 17,
        question: "Twoim zadaniem jest zdefiniowanie typu kolekcji, który będzie dostępny dla innych użytkowników bazy danych podczas tworzenia kodu PL/SQL. W jaki sposób to zrobisz? Wskaż tę odpowiedź (te odpowiedzi), które umożliwiają wykonanie tego zadania.",
        options: [
            "Należy utworzyć w bazie danych pakiet, w którego specyfikacji znajdzie się deklaracja wymaganego typu kolekcji. Następnie w ciele pakietu należy zdefiniować typ danych dla elementów takiej kolekcji.",
            "Należy utworzyć blok PL/SQL, w którego części deklaracyjnej znajdzie się definicja wymaganego typu kolekcji. Następnie należy zapisać plik zawierający ten blok w bazie danych.",
            "Należy utworzyć w bazie danych specyfikację pakietu, w której znajdzie się definicja wymaganego typu kolekcji",
            "Należy utworzyć w bazie danych obiekt będący typem danych przy pomocy polecenia CREATE TYPE AS OBJECT, podając w nim definicję typu kolekcji",
            "Należy utworzyć blok PL/SQL, w którego części deklaracyjnej znajdzie się definicja wymaganego typu kolekcji. Następnie należy zapisać ten blok w specyfikacji pakietu, utworzonej w bazie danych.",
        ],
        correct: [2]
    },
    {
        id: 18,
        question: "Proszę wskazać zdanie fałszywe dotyczące wyjątków:",
        options: [
            "Każdy błąd systemowy jest skojarzony z wyjątkiem\npredefiniowanym o odpowiedniej nazwie",
            "Wyjątki użytkownika muszą mieć nazwy unikalne w tym samym bloku PL/SQL",
            "Wyjątki użytkownika nie mogą mieć nazw identycznych z nazwami wyjątków predefiniowanych",
            "Każdy wyjątek musi być obsłużony w tym samym bloku, w którym powstał",
        ],
        correct: [0, 2, 3]
    },
    {
        id: 19,
        question: "Twoim zadaniem jest utworzyć pakiet o nazwie Pckg_Validate, który będzie udostępniał typy kolekcji oraz funkcje walidujące dane. Przyjmując założenie, że pakiet ten nie istnieje jeszcze w bazie danych, jakie polecenia wykonasz, aby utworzyć ten pakiet? Wskaż odpowiedź, która opisuje poprawny sposób tworzenia tego pakietu.",
        options: [
            "CREATE OR REPLACE PACKAGE BODY Pckg_Validate",
            "Najpierw CREATE OR REPLACE PACKAGE Pckg_Validate, potem CREATE OR REPLACE PACKAGE BODY Pckg_Validate",
            "Najpierw CREATE PACKAGE Pckg_Validate, potem CREATE PACKAGE BODY Pckg_Validate",
            "CREATE OR REPLACE PACKAGE Pckg_Validate",
        ],
        correct: [1]
    },
    {
        id: 20,
        question: "Jak spowodować powstanie wyjątku predefiniowanego NO_DATA_FOUND?",
        options: [
            "Otworzyć kursor, który nie pobierze żadnych rekordów z bazy danych",
            "Wykonać instrukcję SELECT ... INTO, podając w niej warunek, który nigdy nie będzie spełniony.",
            "Wykonać instrukcję FETCH dla kursora jawnego, który nie zawiera żadnych rekordów",
            "Wykonać instrukcję RAISE NO_DATA_FOUND",
        ],
        correct: [1, 3]
    },
    {
        id: 21,
        question: "Jakie wyjątki powinno obsłużyć się w poniższym kodzie PL/SQL?\nDECLARE\n vx studenci.id_student%TYPE ;\nBEGIN\n SELECT ID student INTO vx FROM Studenci WHERE Nazwisko = 'Muryjas' ;\n IF vx IS NULL THEN\n DBMS_OUTPUT.PUT_LINE('This student does not exist');\nEND IF ;\nend ;",
        options: [
            "NO_DATA",
            "TOO_MANY_VALUES",
            "VALUE_ERROR",
            "NO_DATA_FOUND",
            "TOO_MANY_ROWS",
        ],
        correct: [3, 4]
    },
    {
        id: 22,
        question: "Który z atrybutów kursora jawnego powinien być wykorzystany jako pierwszy po instrukcji otwarciu kursora:",
        options: [
            "%ROWCOUNT",
            "%FOUND",
            "%NOTFOUND",
            "%ISOPEN",
        ],
        correct: [3]
    },
    {
        id: 23,
        question: "Czy poniższy kod PL/SQL jest poprawny z punktu widzenia składni:\nDECLARE\nFUNCTION Count_Exams (sid studenci.ID_student%TYPE) RETURN NUMBER IS exnr NUMBER ;\nBEGIN\nSELECT COUNT(*) INTO exnr FROM Egzaminy\nWHERE ID student = sid;\nRETURN exnr;\nEND Count_Exams ;\nCURSOR c1 IS SELECT ID student, Nazwisko, Imie FROM Studenci WHERE UPPER (Nazwisko) = 'MURYJAS' ;\nBEGIN\nFOR vc1 IN c1 LOOP\nDBMS_OUTPUT.PUT_LINE('ID - ' || Count_Exams (vc1.ID_student) );\nEND LOOP;\nEND;",
        options: [
            "Tak",
            "Nie",
        ],
        correct: [1]
    },
    {
        id: 24,
        question: "Podczas deklarowania zmiennej użyto atrybutu %ROWTYPE. Do czego odwołuje się ten atrybut?",
        options: [
            "Do definicji kursora (jego struktury)",
            "Do zmiennej kursora",
            "Do typu innej dowolnej zmiennej",
            "Do typu innej zmiennej skalarnej",
            "Do struktury tabeli",
            "Do zmiennej rekordowej",
        ],
        correct: [0, 1, 4]
    },
    {
        id: 25,
        question: "W bloku PL/SQL zadeklarowano wyjątek użytkownika o nazwie NO_DATA_FOUND. W tym samym bloku użyto instrukcji SELECT ... INTO, która może spowodować powstanie wyjątku predefiniowanego NO_DATA_FOUND. W jaki sposób dokonać obsługi wyjątku predefiniowanego w sekcji EXCEPTION?",
        options: [
            "WHEN STANDARD.NO_DATA_FOUND THEN Blok_Obsługi;",
            "WHEN SERVER.NO_DATA_FOUND THEN Blok_Obsługi;",
            "WHEN NO_DATA_FOUND THEN Blok_Obsługi;",
            "WHEN BUILT_IN.NO_DATA_FOUND THEN Blok_Obsługi;",
        ],
        correct: [0]
    },
    {
        id: 26,
        question: "Proszę wskazać numer linii kodu, w której występuje błąd:\n1| DECLARE\n2| Liczba NUMBER ;\n3| Mwyjatek EXCEPTION;\n4| BEGIN\n5| SELECT COUNT(*) INTO liczba FROM Egzaminy WHERE Id_osrodek = 1;\n6| IF liczba = 0 THEN\n7| EXECUTE mwyjatek ;\n8| END IF ;\n9|  INSERT INTO Osrodki (Id_osrodek, Nazwa_o) VALUES (10, 'Politechnika Lubelska');\n10| EXCEPTION\n11| WHEN OTHERS THEN dbms_output.put_line ('Powstał nieznany wyjątek');\n12| WHEN mwyjatek THEN\n13| dbms_output.put_line ('Brak egzaminów w ośrodku');\n14| END ;",
        options: [
            "9",
            "11",
            "3",
            "7",
        ],
        correct: [1, 3]
    },
    {
        id: 27,
        question: "Który rodzaj kolekcji wymaga stosowania indeksu numerycznego w celu odwoływania się do jej elementów?",
        options: [
            "Kolekcja typu NESTED TABLE",
            "Kolekcja typu tablica asocjacyjna",
            "Kolekcja typu VARRAY",
        ],
        correct: [0, 2]
    },
    {
        id: 28,
        question: "Która linia poniższego kodu będzie źródłem błędu?\n1| DECLARE\n2| exno NUMBER := 0;\n3| PROCEDURE Count_Exams (ids egzaminy.id_student%TYPE, exn NUMBER) IS\n4| BEGIN\n5| SELECT COUNT(*) INTO exn FROM Egzaminy WHERE ID_student = ids;\n6| END Count_Ex  ams;\n7| BEGIN\n8| Count_Exams ('0000001', exno) ;\n9| DBMS_OUTPUT.PUT_LINE('This student had || exno || exams' ) ;\n10| END;",
        options: [
            "5",
            "8",
            "2",
            "9",
        ],
        correct: [0]
    },
    {
        id: 29,
        question: "Dla jakiego typu kolekcji metoda COUNT i LAST zwrócą tę samą wartość?",
        options: [
            "Kolekcji typu tablica asocjacyjna",
            "Kolekcji VARRAY",
            "Kolekcji NESTED TABLE",
        ],
        correct: [1]
    },
    {
        id: 30,
        question: "Czym się charakteryzuje mocna zmienna kursora?",
        options: [
            "Można skojarzyć z nią tylko jedno zapytanie, dla którego struktura zbioru wynikowego jest zgodna z definicją typu danych określonego w deklaracji zmiennej",
            "Można skojarzyć z nią tylko takie zapytanie, dla którego struktura zbioru wynikowego jest zgodna z definicją typu danych określonego w deklaracji zmiennej",
            "Można z nią skojarzyć dowolne zapytanie",
            "Jej deklaracja zawiera definicję typu danych, który opisuje strukturę zbioru wynikowego zapytania skojarzonego z tą zmienną",
        ],
        correct: [3]
    },
    {
        id: 31,
        question: "Wskaż numer linii, w której występuje błąd deklaracji zmiennej:\n1| declare\n2| cursor c1 is SELECT Id_Student, COUNT(*) FROM Egzaminy GROUP BY Id_Student;\n3| vc1 c1%ROWTYPE;\n4| vc2 c1%TYPE;\n5| vc3 vc1%TYPE;\n6| vc4 vc1%ROWTYPE;\n7| begin\n8| null;\n9| end;",
        options: [
            "4",
            "3",
            "6",
            "5",
        ],
        correct: [0, 2]
    },
    {
        id: 32,
        question: "Instrukcja otwarcia kursora jawnego (OPEN) spowoduje powstanie wyjątku, jeśli:",
        options: [
            "Instrukcja SELECT definiująca kursor nie jest poprawna składniowo",
            "Kursor został już uprzednio otwarty",
            "Połączenie z bazą danych zostało utracone",
            "Zbiór wynikowy powstały po wykonaniu instrukcji SELECT, definiującej kursor, jest pusty",
        ],
        correct: [1]
    },
    {
        id: 33,
        question: "Co można umieścić w specyfikacji pakietu, dla którego nie istnieje ciało pakietu?",
        options: [
            "Deklarację wyjątku",
            "Deklarację kursora",
            "Deklarację stałej",
            "Deklarację zmiennej",
            "Deklarację typu danych",
        ],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 34,
        question: "Wskaż prawidłowy kod PL/SQL, umożliwiający wyświetlenie identyfikatora studenta, który nie zdawał żadnego egzaminu? Przyjmij założenie, że jeśli student zdawał egzamin to otrzymał z niego co najmniej 2 punkty.",
        options: [
            "DECLARE\nCURSOR C1 IS SELECT Id_Student, Nazwisko, Imie FROM Studenci ; CURSOR C2(ids studenci.id_student%TYPE) IS\nBEGIN\nSELECT COUNT(Punkty) Total FROM Egzaminy WHERE Id_student ids;\nFOR vc1 IN c1 LOOP\nFOR vc2 IN c2(vc1.Id_Student) LOOP\nIF vc2.Total = 0 THEN\nDBMS_OUTPUT.PUT_LINE('Student o ID = vc1.Id_Student || nie zdawał egzaminu');\nEND IF;\nEND LOOP;\nEND LOOP;\nEND;",
            "DECLARE\nCURSOR C1 IS SELECT Id Student, Nazwisko, Imie FROM Studenci ;\nCURSOR C2(ids studenci.id_student%TYPE) IS\nBEGIN\nSELECT SUM(Punkty) Total FROM Egzaminy WHERE Id_student = ids;\nFOR vc1 IN c1 LOOP\nFOR vc2 IN c2(vc1.Id_Student) LOOP\nIF vc2. Total IS NULL THEN\nDBMS_OUTPUT.PUT_LINE('Student o ID= || vc1.Id_Student || nie zdawał egzaminu');\nEND IF ;\nEND LOOP;\nEND LOOP;\nEND;",
            "DECLARE\nCURSOR C1 IS SELECT Id_Student, Nazwisko, Imie FROM Studenci ; CURSOR C2(ids studenci.id_student%TYPE) IS\nBEGIN\nSELECT SUM(Punkty) Total FROM Egzaminy WHERE Id_student = ids;\nFOR vc1 IN c1 LOOP\nFOR vc2 IN c2(vc1.Id_Student) LOOP\nIF vc2.Total = 0 THEN\nDBMS_OUTPUT.PUT_LINE('Student o ID= || vc1.Id_Student ||\nnie zdawał egzaminu');\nEND IF ;\nEND LOOP;\nEND LOOP;\nEND;",
            "DECLARE\nCURSOR C1 IS SELECT Id_Student, Nazwisko, Imie FROM Studenci ; CURSOR C2(ids studenci.id_student%TYPE) IS\nBEGIN\nSELECT COUNT(Punkty) Total FROM Egzaminy WHERE Id_student = ids;\nFOR vc1 IN c1 LOOP\nFOR vc2 IN c2(vc1. Id_Student) LOOP\nIF vc2.Total IS NULL THEN\nDBMS_OUTPUT.PUT_LINE('Student o ID = ' || vc1.Id_Student || nie zdawał egzaminu');\nEND IF ;\nEND LOOP;\nEND LOOP;\nEND;",
        ],
        correct: [0, 1]
    },
    {
        id: 35,
        question: "W jakim miejscu zapisane są definicje podprogramów składowanych?",
        options: [
            "W pakiecie predefiniowanym o nazwie STANDARD",
            "W schemacie bazy danych jako jej obiekt",
            "W pakiecie utworzonym przez użytkownika, zapisanym jako obiekt bazy danych",
            "W pliku dyskowym zapisanym w miejscu określonym przez definiującego podprogram składowany",
        ],
        correct: [1]
    },
    {
        id: 36,
        question: "Które instrukcje, dotyczące kursora, realizowane są przez pętlę kursora?",
        options: [
            "zamknięcie kursora",
            "pobranie wiersza z kursora i zapisanie go w zmiennej rekordowej",
            "definicja kursora",
            "otwarcie kursora",
        ],
        correct: [0, 1, 3]
    },
    {
        id: 37,
        question: "Który rodzaj kolekcji umożliwia odwoływanie się do jej elementów przy pomocy indeksu, którego wartości mogą być liczbą całkowitą dodatnią lub ujemną?",
        options: [
            "Nie ma takiej kolekcji, której indeks może być liczbą całkowitą ujemną",
            "Kolekcja typu VARRAY",
            "Kolekcja typu tablica asocjacyjna",
            "Kolekcja typu NESTED TABLE",
        ],
        correct: [2]
    },
    {
        id: 38,
        question: "Który rodzaj kolekcji umożliwia odwoływanie się do jej elementów przy pomocy indeksu, którego wartości mogą być liczbą całkowitą dodatnią lub ujemną? Wybierz wszystkie poprawne:",
        options: [
            "Kolekcja typu tablica asocjacyjna",
            "Nie ma takiej kolekcji, której indeks może być liczbą całkowitą ujemną",
            "Kolekcja typu NESTED TABLE",
            "Kolekcja typu VARRAY",
        ],
        correct: [0]
    },
    {
        id: 39,
        question: "Czy składnia instrukcji SELECT w części wykonawczej bloku PL/SQL jest identyczna ze składnią instrukcji SELECT języka SQL?",
        options: [
            "Nie",
            "Tak",
        ],
        correct: [0]
    },
    {
        id: 40,
        question: "Dokonaj analizy poniższego kodu i odpowiedz na następujące pytanie. Jakie wartości zostaną odpowiednio wyświetlone w wyniku wykonania instrukcji w liniach 10 i 11?\n1| DECLARE\n2| TYPE t_col_courses IS TABLE OF NUMBER;\n3| col_courses t_col_courses := t_col_courses();\n4| BEGIN\n5| FOR K IN 1..10 LOOP\n6| col_courses.EXTEND ;\n7| col_courses (k) := 2*k ;\n8| END LOOP;\n9| col_courses. EXTEND (3,3);\n10| DBMS_OUTPUT.PUT_LINE(col_courses.COUNT) ;\n11| DBMS_OUTPUT.PUT_LINE(col_courses (12)) ;\n12| end;",
        options: [
            "13 i 3",
            "13 i 20",
            "13 i 6",
        ],
        correct: [2]
    },
    {
        id: 41,
        question: "Jaki wyjątek (lub wyjątki) mogą powstać podczas wykonania polecenia SELECT INTO?",
        options: [
            "INVALID_SELECT",
            "Instrukcja ta nigdy nie powoduje powstanie wyjątku",
            "TOO_MANY_ROWS",
            "NO_DATA_FOUND",
            "INVALID_CURSOR",
        ],
        correct: [2, 3]
    },
    {
        id: 42,
        question: "Czym się charakteryzuje słaba zmienna kursora?",
        options: [
            "Można z nią skojarzyć dowolne zapytanie",
            "Jej deklaracja zawiera definicję typu danych, który opisuje strukturę zbioru wynikowego zapytania skojarzonego z tą zmienną",
            "Można skojarzyć z nią tylko jedno zapytanie, dla którego struktura zbioru wynikowego jest zgodna z definicją typu danych określonego w deklaracji zmiennej",
            "Można skojarzyć z nią tylko takie zapytanie, dla którego struktura zbioru wynikowego jest zgodna z definicją typu danych określonego w deklaracji zmiennej",
        ],
        correct: [0]
    },
    {
        id: 43,
        question: "Czy poniższy kod PL/SQL pozwala wyświetlić odpowiedni komunikat w przypadku, gdy student o nazwisku Kot nie istnieje w tabeli Studenci?\nDECLARE\ncursor c1 IS SELECT ID student, Nazwisko, Imie FROM Studenci\nWHERE UPPER (Nazwisko) = 'KOT' ;\nvc1 c1%ROWTYPE;\nBEGIN\nOPEN c1 ;\nFETCH c1 INTO vc1 ;\nIF C1%FOUND THEN\nDBMS_OUTPUT.PUT_LINE('Nie ma studenta o podanym nazwisku');\nEND IF ;\nCLOSE c1 ;\nEXCEPTION\nWHEN NO_DATA_FOUND THEN\nDBMS_OUTPUT.PUT_LINE('Nie ma studenta o podanym nazwisku') ;",
        options: [
            "Tak",
            "Nie",
        ],
        correct: [1]
    },
    {
        id: 44,
        question: "Wyjątki NO_DATA_FOUND I INVALID_NUMBER wymagają tego samego sposobu obsługi w tym samym bloku np. wyświetlenia komunikatu o tej samej treści (obsługa ma dotyczyć wyłącznie tych dwóch wyjątków). Jak wykonać obsługę tej sytuacji?",
        options: [
            "WHEN NO_DATA_FOUND THEN\nBlok_obsługi_1;\nWHEN INVALID_NUMBER THEN\nBlok_obsługi_1;",
            "WHEN NO_DATA_FOUND OR INVALID_NUMBER THEN\nBlok_obsługi_1;",
            "WHEN NO_DATA_FOUND AND INVALID_NUMBER THEN\nBlok_obsługi_1;",
            "WHEN OTHERS THEN\nBlok_obsługi_1;",
        ],
        correct: [1]
    },
    {
        id: 45,
        question: "Wskaż poprawny sposób deklarowania zmiennej rekordowej o nazwie My Rec w bloku PL/SQL:",
        options: [
            "My Rec ROWTYPE (Id NUMBER(5), Name VARCHAR2(30));",
            "TYPE tMy_Rec IS RECORD (Id NUMBER(5), Name VARCHAR2(30)); My_Rec tMy_Rec;",
            "TYPE tMy_Rec AS OBJECT (Id NUMBER(5), Name VARCHAR2(30)); My_Rec tMy_Rec;",
            "My Rec IS RECORD (Id NUMBER(5), Name VARCHAR2(30));",
        ],
        correct: [1]
    },
    {
        id: 46,
        question: "Który z atrybutów kursora jawnego można wykorzystać do kontroli istnienia rekordów pobranych poleceniem SELECT, zdefiniowanym w deklaracji kursora:",
        options: [
            "%FOUND",
            "%ROWCOUNT",
            "%NOTFOUND",
            "%ISOPEN",
        ],
        correct: [0, 2]
    },
    {
        id: 47,
        question: "Które instrukcje, dotyczące kursora jawnego, realizowane są przez pętlę kursora?",
        options: [
            "CLOSE",
            "OPEN",
            "DECLARE CURSOR",
            "FETCH",
        ],
        correct: [0, 1, 3]
    },
    {
        id: 48,
        question: "Wskaż poprawny sposób deklarowania stałej o nazwie My_Constant w bloku PL/SQL:",
        options: [
            "My Constant IS CONSTANT NUMBER(1) := 5;",
            "My Constant CONSTANT NUMBER(1) NOT NULL := 10;",
            "My Constant CONSTANT NUMBER(1) := 10;",
            "My Constant CONSTANT NUMBER(1) := 5;",
        ],
        correct: [3]
    },
    {
        id: 49,
        question: "Jaka wartość zostanie wyświetlona w wyniku wykonania instrukcji znajdującej się w 12 linii poniższego kodu?\nDECLARE\nTYPE NT_Exams IS TABLE OF INTEGER ;\nvex NT_Exams := NT_Exams ();\nBEGIN\nFOR i IN 1..10 LOOP\nvex.extend ;\nvex(i) := i;\nEND LOOP;\nFOR i IN 1..10 LOOP\nvex.DELETE (i*2) ;\nEND LOOP;\nDBMS_OUTPUT.PUT_LINE('#Elements is ' || vex.COUNT);\nEND;",
        options: [
            "5",
            "20",
            "0",
            "10",
        ],
        correct: [0]
    },
    {
        id: 50,
        question: "W jakiej sytuacji tworzona jest tylko specyfikacja pakietu w bazie danych, tj. nie tworzy się ciała pakietu?",
        options: [
            "Jeżeli specyfikacja zawiera tylko deklarację wyprzedzającą podprogramu PL/SQL",
            "Jeżeli specyfikacja zawiera tylko deklarację zmiennej lub stałej.",
            "Jeżeli specyfikacja zawiera tylko deklarację kursora",
            "Jeżeli specyfikacja zawiera tylko deklarację typu danych",
            "Jeżeli specyfikacja zawiera tylko deklarację wyjątku",
        ],
        correct: [1, 3, 4]
    },
    {
        id: 51,
        question: "Proszę wskazać obowiązkowe sekcje bloku PL/SQL:",
        options: [
            "Sekcja obsługi wyjątków (EXCEPTION)",
            "Sekcja wykonawcza (BEGIN)",
            "Sekcja wywołania pakietów",
            "Sekcja wywołania funkcji i procedur",
            "Sekcja deklaracyjna (DECLARE)",
        ],
        correct: [1]
    },
    {
        id: 52,
        question: "Wskaż kolekcję, która jest lub może być rzadka:",
        options: [
            "Kolekcja typu VARRAY",
            "Kolekcja typu tablica zagnieżdżona",
            "Kolekcja typu tablica asocjacyjna",
        ],
        correct: [1, 2]
    },
    {
        id: 53,
        question: "Który z niżej wymienionych wyjątków może powstać podczas wykonywania poniższego kodu:\n1| declare\n2| CURSOR c1 is SELECT Id_Student, Nazwisko, Imie FROM Studenci ;\n3| vc1 c1%ROWTYPE;\n4| vdate DATE;\n5| begin\n6| FOR vc1 IN c1 LOOP\n7| SELECT MAX(Data_Egzamin) INTO vdate FROM Egzaminy WHERE Id_Student = vc1.Id_S\n8| dbms_output.put_line(vc1.Id_Student || ' - ' || to_char(vdate, 'yyyy-mm-dd')) ;\n9| END LOOP;\n10| end;",
        options: [
            "INVALID_CURSOR",
            "CURSOR_ALREADY_OPEN",
            "NO_DATA_FOUND",
            "Żaden wyjątek nie powstanie podczas wykonywania tego kodu PL/SQL",
            "TOO_MANY_ROWS",
        ],
        correct: [3]
    },
    {
        id: 54,
        question: "Jaki będzie rezultat wykonania poniższego kodu PL/SQL? Wskaż odpowiedź, w której zaprezentowano przykładowe dane wynikowe.\n1| declare\n2| CURSOR c1 is SELECT Id_Student, Nazwisko, Imie FROM Studenci ;\n3| vc1 c1%ROWTYPE;\n4| vdate DATE;\n5| begin\n6| FOR vc1 IN c1 LOOP\n7| begin\n8| SELECT MAX(Data_Egzamin) INTO vdate FROM Egzaminy WHERE Id_Stu\n9| dbms_output.put_line(vc1.Id_Student || ' - ' || to_char(vdate, 'yyyy-mm-dd\"))\n10| exception\n11| WHEN NO_DATA_FOUND THEN\n12| dbms_output.put_line(vc1.Id_Student || ' - ' || ' brak egzaminów');\n13| end;\n14| END LOOP;\n15| end;",
        options: [
            "0000020 - 2013-10-21\n0987654 - 2020-10-15\n9876543 -\n0909091 - 2022-12-06",
            "0000020 2013-10-21\n0987654-2020-10-15\n9876543 - brak egzaminów\n0909091 - 2022-12-06",
            "0000020 - 2013-10-21\n0987654 - 2020-10-15\n9876543-0\n0909091 2022-12-06",
        ],
        correct: [0]
    },
    {
        id: 55,
        question: "Twoim zadaniem jest zdefiniowanie funkcji PL/SQL, która będzie dostępna dla innych użytkowników bazy danych podczas tworzenia kodu PL/SQL. W jaki sposób to zrobisz? Wskaż tę odpowiedź (te odpowiedzi), które umożliwiają wykonanie tego zadania.",
        options: [
            "Należy utworzyć blok PL/SQL, w którego części deklaracyjnej znajdzie się definicja wymaganej funkcji. Następnie należy zapisać ten blok w pakiecie, utworzonym w bazie danych.",
            "Należy utworzyć w bazie danych obiekt będący funkcją przy pomocy polecenia CREATE FUNCTION, podając w nim definicję wymaganej funkcji.",
            "Należy utworzyć blok PL/SQL, w którego części deklaracyjnej znajdzie się definicja wymaganej funkcji. Następnie należy zapisać plik zawierający ten blok w bazie danych.",
            "Należy utworzyć w bazie danych pakiet, w którego specyfikacji znajdzie się deklaracja wymaganej funkcji. Następnie w ciele pakietu należy zdefiniować kod źródłowy dla tej funkcji.",
            "Należy utworzyć w bazie danych specyfikację pakietu, w której znajdzie się definicja wymaganej funkcji",
        ],
        correct: [1, 3]
    },
    {
        id: 56,
        question: "Który z poniższych kodów PL/SQL umożliwia wyświetlenie komunikatu informującego, iż dany student nie przystąpił jeszcze do żadnego egzaminu?",
        options: [
            "declare\nCURSOR c1 is SELECT Id_Student, Nazwisko, Imie FROM Studenci;\nvnum NUMBER;\nno_data_found EXCEPTION;\nbegin\nFOR vc1 IN c1 LOOP\nbegin\nSELECT DISTINCT 1 INTO vnum FROM Egzaminy WHERE Id Student = vc1.Id_Student;\n dbms_output.put_line(vc1.Id_Student || ' - istnieje egzamin' );\nexception\nwhen NO_DATA_FOUND then\ndbms_output.put_line(vc1.Id_Student || ' - brak egzaminów\");\nend;\nEND LOOP;\n end;",
            "declare\nCURSOR c1 is SELECT Id_Student, Nazwisko, Imie FROM Studenci;\nvnum NUMBER;\nno_data_found EXCEPTION;\nbegin\nFOR vc1 IN c1 LOOP\nbegin\nSELECT DISTINCT 1 INTO vnum FROM Egzaminy WHERE Id_Student = vc1.Id_Student;\n dbms_output.put_line(vc1.Id_Student || ' - istnieje egzamin' );\nexception\nwhen STANDARD.NO_DATA_FOUND then\ndbms_output.put_line(vc1.Id_Student || ' - brak egzaminów');\nend;\nEND LOOP;\nend;",
            "declare\nCURSOR c1 is SELECT Id Student, Nazwisko, Imie FROM Studenci ;\nvnum NUMBER;\nno_data_found EXCEPTION;\nbegin\nFOR vc1 IN c1 LOOP\nbegin\nSELECT DISTINCT 1 INTO vnum FROM Egzaminy WHERE Id_Student = vc1.Id_Student;\n IF vnum IS NOT NULL THEN\ndbms_output.put_line(vc1.Id_Student || ' - istnieje egzamin');\nELSE\ndbms_output.put_line(vc1.Id_Student || ' - brak egzaminów\");\nEND IF;\nend;\nEND LOOP;\n end;",
        ],
        correct: [1]
    },
];
