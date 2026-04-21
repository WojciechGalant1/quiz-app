export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correct: number[];
    explanation?: string;
}

export const quizData: QuizQuestion[] = [
    {
        id: 1,
        question: "Ograniczenia rozmiaru węzła w Composer nie mogą być:",
        options: [
            "bounded",
            "unbounded",
            "exact",
            "flexible",
        ],
        correct: [3]
    },
    {
        id: 2,
        question: "Jezeli temp == 18 to wartością wyrażenia \nval desc = when {\ntemp < 15 czy -> \"cold\"\ntemp <= 24 czy -> \"warm\"\nelse -> 'hot' \n}\njest",
        options: [
            "cold",
            "warm",
            "hot",
            "to nie jest prawidłowe wyrażenie",
        ],
        correct: [1]
    },
    {
        id: 3,
        question: "Które stwierdzenie na temat głównego konstruktora klasy nie jest prawdziwe?",
        options: [
            "jego parametry podaje się bezpośrednio po nazwie klasy (z opcjonlanym słowem constructor)",
            "nie jest zawsze wykonywany przy tworzeniu obiektu",
            "składnia konstruktora pozwala na równoczesne stworzenie właściwości klasy",
            "nie musi miećparametrów",
        ],
        correct: [1]
    },
    {
        id: 4,
        question: "Jakie zadanie pełnią repozytoria (Repositories) w warstwie danych:",
        options: [
            "Wyświetlanie komunikatów o błędach użytkownikowi",
            "abstraktowanie źródeł danych (np. bazy lokalnej i sieci) od reszty aplikacji oraz realizowanie logiki biznesowej",
            "definiowanie stylów i motywaó kolorystycznych aplikacji",
            "zarządzanie cyklem życia aktywności",
        ],
        correct: [1]
    },
    {
        id: 5,
        question: "Operator Elvisa to:",
        options: [
            ":?",
            "?:",
            ">.",
            "!!",
        ],
        correct: [1]
    },
    {
        id: 6,
        question: "Obiektu listy nie tworzy się za pomocą:",
        options: [
            "funkcji x",
            "metody toMutableList",
            "funkcji listOf",
            "metody createList",
        ],
        correct: [0]
    },
    {
        id: 7,
        question: "Do definiowania celów nawigacji w elemencie NavHost używa się funkcji:",
        options: [
            "route",
            "composable",
            "navTarget",
            "target",
        ],
        correct: [1]
    },
    {
        id: 8,
        question: "Czym charakteryzuje się język Kotlin w kontekście platformy Android?",
        options: [
            "Jest językiem interpretowanym, działającym tylko w przeglądarce",
            "Jest językiem wieloplatformowym, statycznie typowanym językiem wysokiego poziomu z wnioskowaniem typów",
            "Nie współpracuje z kodem napisanym w języku Java",
            "Jest używany wyłącznie do tworzenia logiki serwerowej",
        ],
        correct: [1]
    },
    {
        id: 9,
        question: "Jaka jest główna różnica między deklaracją zmiennej za pomocą val a var?",
        options: [
            "val służy do deklaracji zmiennych globalnych, a var lokalnych",
            "val tworzy zmienną tylko do odczytu (immutable), a var zmienną modyfikowalną",
            "var automatycznie określa typ danych, a val wymaga jawnego podania typu",
            "Nie ma między nimi żadnej różnicy funkcjonalnej",
        ],
        correct: [1]
    },
    {
        id: 10,
        question: "Na cykl życia elementu w kompozycji nie wpływa:",
        options: [
            "miejsce wywołania funkcji komponowalnej",
            "dodatkowe informacje takie jak klucze",
            "kolejność wywołań funkcji komponowalnej w pętli",
            "stabilność typu parametrów funkcji komponowalnej",
        ],
        correct: [3]
    },
    {
        id: 11,
        question: "Na szczycie hierarchii dziedziczenia w języku Kotlin jest typ:",
        options: [
            "Object",
            "Unit",
            "Any",
            "Nothing",
        ],
        correct: [2]
    },
    {
        id: 12,
        question: "Przy zachowywaniu stanu w przypadku zmiany konfiguracji lub śmierci procesu nie jest używany/są używane:",
        options: [
            "ViewModel",
            "proste klasy właścicieli stanu",
            "SavedStateHandle i API saveable",
            "SavedStateHandle i StateFlow",
        ],
        correct: [1]
    },
    {
        id: 13,
        question: "Co oznacza pojęcie \"rekompozycja\" w Jetpack Compose?",
        options: [
            "Proces kompilacji kodu do formatu XML",
            "Ponowne wywołanie funkcji komponowalnych przy zmianie ich danych wejściowych (parametrów)",
            "Ręczne odświeżanie całego interfejsu przez programistę po każdej akcji",
            "Usuwanie nieużywanych zasobów z pamięci urządzenia",
        ],
        correct: [1]
    },
    {
        id: 14,
        question: "Który z podstawowych układów (layouts) w Compose umieszcza swoje elementy w pionie?",
        options: [
            "Row",
            "Box",
            "Column",
            "Scaffold",
        ],
        correct: [2]
    },
    {
        id: 15,
        question: "Co charakteryzuje architekturę opartą na \"Jednokierunkowym przepływie danych\" (UDF)?",
        options: [
            "Dane krążą w pętli między wszystkimi warstwami bez określonego kierunku",
            "Stan płynie w dół (do UI), a zdarzenia płyną w górę (do właściciela stanu)",
            "Użytkownik może przesyłać dane tylko w jednym kierunku przez formularze",
            "Tylko baza danych może inicjować zmiany w interfejsie użytkownika",
        ],
        correct: [1]
    },
    {
        id: 16,
        question: "Do czego służy klasa ViewModel w architekturze Android Jetpack?",
        options: [
            "Do projektowania układu graficznego w edytorze wizualnym",
            "Zapewnia dostęp do logiki biznesowej i przygotowuje dane do prezentacji, jest zachowywany przy zmianach konfiguracji (np. obrót ekranu)",
            "Służy jako bezpośredni zamiennik dla bazy danych SQLite",
            "Odpowiada za wyświetlanie powiadomień systemowych",
        ],
        correct: [1]
    },
    {
        id: 17,
        question: "Co zapewnia komponent Scaffold w Material Design?",
        options: [
            "Automatyczne testowanie interfejsu użytkownika",
            "Szyfrowanie danych przesyłanych przez sieć",
            "Miejsce (sloty) na standardowe komponenty Material Design, takie jak pasek górny (TopAppBar) czy przycisk FAB",
            "Kompresję obrazów wyświetlanych w aplikacji",
        ],
        correct: [2]
    },
    {
        id: 18,
        question: "Który komponent służy do wyświetlania dużych list elementów w sposób wydajny (ładując tylko widoczne elementy):",
        options: [
            "Column",
            "Row",
            "LazyColumn",
            "ScrollBox",
        ],
        correct: [2]
    },
    {
        id: 19,
        question: "W zalecanej architekturze aplikacji dla Androida ViewModel jest częścią:",
        options: [
            "warstwy danych",
            "warstwy domeny",
            "warstwy UI",
            "warstwy logiki biznesowej",
        ],
        correct: [2]
    },
    {
        id: 20,
        question: "W skład warstwy danych wchodzą:",
        options: [
            "źródła danych",
            "repozytoria",
            "repozytoria i źródła danych",
            "repozytoria, źródła danych i view modele",
        ],
        correct: [2]
    },
    {
        id: 21,
        question: "Jaki jest cel stosowania funkcji remember w funkcjach komponowalnych?",
        options: [
            "Przechowywanie obiektu w pamięci kompozycji, aby przetrwał on proces rekompozycji",
            "Zapisywanie danych na stałe w pamięci wewnętrznej telefonu",
            "Przesyłanie danych do zewnętrznego serwera",
            "Zapamiętywanie historii nawigacji użytkownika",
        ],
        correct: [0]
    },
];