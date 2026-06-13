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
        question: "W kontrolerze, metody do obsługi żądań http mogą być poprzedzone adnotacją:",
        options: [
            "@RequestParam, która pozwala pobrać do zmiennej wartość parametru przekazywanego w adresie URL np. „?userId=5”",
            "@RequestMapping, która mapuje adres URL i/lub metodę http na wskazaną metodę kontrolera",
            "@PathVariable, która obsługuje zmienną przekazaną w postaci fragmentu adresu URL np. user/5",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 2,
        question: "Serwlety mogą:",
        options: [
            "Przesyłać niejawne informacje w odpowiedzi http (np. nagłówki HTTP)",
            "Odczytywać informacje przesyłane przez formularz HTML",
            "Odczytywać nagłówki żądania http",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 3,
        question: "Meta dane w Spring można definiować za pomocą:",
        options: [
            "Widoków Thymeleaf i adnotacji",
            "Plików HTML i adnotacji",
            "Plików XML i adnotacji",
        ],
        correct: [2]
    },
    {
        id: 4,
        question: "Kontener IoC to",
        options: [
            "Injection of Control Container",
            "Inversion of Control Container",
            "Kontener odwróconego sterowania",
        ],
        correct: [1, 2]
    },
    {
        id: 5,
        question: "Pobranie obiektu sesji HttpSession skojarzonego z bieżącym żądaniem realizuje metoda HttpSession session=request.getSession(); Korzystając z obiektu session można:",
        options: [
            "Usunąć bieżącą sesję: session.invalidate()",
            "Zapisać informacje w sesji: session.setAttribute(„klucz,wartosc”);",
            "Pobrać informacje skojarzone z sesją: session.getAttribute(„klucz”);",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 6,
        question: "Hibernate umożliwia:",
        options: [
            "Translację danych pomiędzy relacyjną bazą danych a światem obiektowym",
            "Obsługę trwałości obiektów z wykorzystaniem informacji o odwzorowaniu obiektowo-relacyjnym modelu danych aplikacji",
            "Odwzorowanie obiektowej architektury systemu informatycznego na bazę danych o relacyjnym charakterze",
        ],
        correct: [0, 1]
    },
    {
        id: 7,
        question: "AOP to:",
        options: [
            "Aspect-Object Programming",
            "Aspect-Oriented Programming",
            "Aspect-Oriented Problems",
        ],
        correct: [1]
    },
    {
        id: 8,
        question: "Odwzorowanie obiektowo-relacyjne w Hibernate może być definiowane",
        options: [
            "W plikach XML",
            "Za pomocą odpowiednich adnotacji w klasie encji",
            "Za pomocą odpowiednich atrybutów w widokach",
        ],
        correct: [0, 1]
    },
    {
        id: 9,
        question: "Podstawowe stereotypy w Spring to na przykład:",
        options: [
            "@Component i @Service",
            "@Controller i @Repository",
            "@Model i @View",
        ],
        correct: [0, 1]
    },
    {
        id: 10,
        question: "DispatcherServlet w Spring Web MVC",
        options: [
            "Musi utworzyć kontekst aplikacji webowej (WebApplicationContext)",
            "To podstawowy punkt wejścia do aplikacji",
            "Odpowiada za przyjmowanie żądań z zewnątrz i przekierowanie żądań do właściwych kontrolerów",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 11,
        question: "DispatcherServlet wykorzystuje",
        options: [
            "HandlerMapping, do wyboru odpowiedniego kontrolera",
            "ViewResolver do pobrania i określenia widoku, który jest w efekcie renderowany w przeglądarce.",
            "Dependency Injection do pracy z danymi",
        ],
        correct: [0, 1]
    },
    {
        id: 12,
        question: "W plikach MVC",
        options: [
            "Dzięki wykorzystaniu techniki „wstrzykiwania zależności” (DI) repozytoria mogą być wstrzykiwane do klasy kontrolera",
            "Kontroler stanowi odrębną warstwę i nie współpracuje z repozytoriami",
            "Kontroler współpracuje z repozytoriami w celu wczytywania i zachowywania modelu biznesowego aplikacji",
        ],
        correct: [0, 2]
    },
    {
        id: 13,
        question: "Wzorzec repozytorium",
        options: [
            "Umożliwia osadzenie logiki dostępu do danych w metodach kontrolera",
            "Promuje dostęp do danych bezpośrednio w modelu",
            "Uzupełnia kluczową zasadę projektową architektury MVC i oddziela warstwę dostępu do danych od pozostałej części aplikacji",
        ],
        correct: [2]
    },
    {
        id: 14,
        question: "Metody HTTP wykorzystywane podczas komunikacji z serwerem to:",
        options: [
            "DELETE, UPDATE",
            "PUT, PATCH",
            "GET, POST",
        ],
        correct: [1, 2]
    },
    {
        id: 15,
        question: "Do pracy z bazami danych w Springu można korzystać na przykład z:",
        options: [
            "CrudRepository i JpaRepository",
            "OrmTemplate i JpaRepository",
            "JdbcTemplate i CrudRepository",
        ],
        correct: [0]
    },
    {
        id: 16,
        question: "Adnotacja @RestController w aplikacji Spring Boot",
        options: [
            "Domyślnie renderuje odpowiedź XML",
            "Domyślnie renderuje odpowiedź HTML",
            "Domyślnie renderuje odpowiedź JSON",
        ],
        correct: [2]
    },
    {
        id: 17,
        question: "Do walidacji danych w Springu",
        options: [
            "Można korzystać z adnotacji @Valid, która należy do standardu Bean Validation",
            "Można korzystać ze specyfikacji Java API do walidacji ziaren, która zapewnia, że właściwości klasy spełniają określone kryteria nadawane za pomocą adnotacji takich jak @NotNull, @Min, @Max itp.",
            "Można korzystać z Hibernate Validator, który udostępnia dodatkowe adnotacje do walidacji",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 18,
        question: "Metadane konfiguracyjne w Springu:",
        options: [
            "Są odczytywane przez Spring IoC Container",
            "Określają obiekty w aplikacji, ich konfigurację oraz współzależności między tymi obiektami.",
            "Są pobierane z obiektów POJO",
        ],
        correct: [0, 1]
    },
    {
        id: 19,
        question: "Metody interfejsu HttpServletRequest to na przykład:",
        options: [
            "getHeader() i getHeaderNames()",
            "getParameter() i getParameterNames()",
            "getResponse() i getSession()",
        ],
        correct: [0, 1]
    },
    {
        id: 20,
        question: "Przy założeniu, że adres URL jest postaci:\nhttp://localhost:8080/path/id\nwartość parametru id można wykorzystywać definiując w kontrolerze metodę np.",
        options: [
            "public String pobierz(@PathVariable String id) {…}",
            "public String pobierz(@Valid String id) {…}",
            "public String pobierz(@RequestParam String id) {…}",
        ],
        correct: [2]
    },
    {
        id: 21,
        question: "Spring Data JPA",
        options: [
            "to niewielka biblioteka upraszczająca pracę z JPA poprzez automatyczne tworzenie warstwy kodu repozytoriów",
            "skraca kod dostępu do danych i promuje spójną strukturę tej warstwy",
            "bazuje na centralnym interfejsie JpaRepository<T>",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 22,
        question: "Obsługa błędnych danych z formularza",
        options: [
            "jest możliwa po wstrzyknięciu do metody kontrolera obiektu BindingResult",
            "jest możliwa za pomocą metody np. public String addPost(…, BindingResult binding) {…}",
            "jest możliwa za pomocą metody np. public String addPost(…, @BindingRequest binding) {…}",
        ],
        correct: [0, 1]
    },
    {
        id: 23,
        question: "Wstrzykiwanie obiektów może odbywać się za pomocą na przykład:",
        options: [
            "@Inject i @Autowired",
            "@Inject i @Resource",
            "@Autowired i @Dependency",
        ],
        correct: [0, 1]
    },
    {
        id: 24,
        question: "We wzorcu REST obowiązują zasady:",
        options: [
            "Jeden interfejs – wiele urządzeń",
            "Serwer nie przechowuje informacji na temat stanu klienta, to klient wysyłając zapytanie musi dostarczyć dane, które umożliwiają jego autoryzację i pozwolą na dostęp do określonych akcji",
            "Wyraźnie wyznaczony podział pomiędzy aplikacją działającą po stronie klienta i serwera",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 25,
        question: "Interfejs JpaRepository udostępnia m.in. metody:",
        options: [
            "Save(), findAll() i delete()",
            "Count(), delete() i deleteById()",
            "Create(), save() i update()",
        ],
        correct: [0, 1]
    },
    {
        id: 26,
        question: "W Spring Web MVC:",
        options: [
            "Model łączy dane aplikacji, które definiowane są za pomocą klas repozytoriów",
            "Kontroler jest odpowiedzialny za przetwarzanie żądań użytkownika, budowę odpowiedniego modelu i przekazywanie go do renderowania przez widok",
            "Widok jest odpowiedzialny za renderowanie danych modelu i generowanie wyjściowego HTML",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 27,
        question: "Walidacja danych",
        options: [
            "jest możliwa po dodaniu adnotacji @Valid przed metodą kontrolera, obsługującą żądanie @PostMapping",
            "polega na sprawianiu poprawności modelu po powiązane z nim danych wprowadzonych do formularza przez użytkownika",
            "jest możliwa po dodaniu adnotacji @Valid przed odpowiednim parametrem metody kontrolera",
        ],
        correct: [1, 2]
    },
    {
        id: 28,
        question: "Adnotacje w Spring:",
        options: [
            "Nie mogą zawierać dodatkowych atrybutów",
            "To wskazówki dla Springa w jaki sposób ma traktować poszczególne metody, klasy, pola",
            "Pozwalają tworzyć ziarna, zarządzać nimi, wstrzykiwać je i weryfikować zabezpieczenia",
        ],
        correct: [1, 2]
    },
    {
        id: 29,
        question: "Definiując klasę kontrolera z adnotacją @RestController, jego metody można poprzedzać adnotacjami, na przykład:",
        options: [
            "@PutMapping, @RequestMapping",
            "@UpdateMapping, @PostMapping",
            "@GetMapping, @DeleteMapping",
        ],
        correct: [0, 2]
    },
    {
        id: 30,
        question: "Klasa encji powinna zawierać minimum:",
        options: [
            "Adnotację @Model poprzedzającą klasę oraz adnotację @Id poprzedzającą pole, odwzorowywane na klucz podstawowy w tabeli",
            "Adnotację @Enity poprzedzającą klasę oraz adnotację @Id poprzedzającą pole, odwzorowywane na klucz podstawowy w tabeli",
            "Adnotację @Column poprzedzającą klasę oraz adnotację @Id poprzedzającą pole, odwzorowywane na klucz podstawowy w tabeli",
        ],
        correct: [1]
    },
    {
        id: 31,
        question: "Model reprezentuje strukture bazy danych, dzięki czemu",
        options: [
            "Każde pole obiektu klasy modelu zostaje odwzorowane w oddzielną kolumnę tabeli",
            "Nie trzeba konfigurować dodatkowych relacji pomiędzy obiektami",
            "Każdy obiekt klasy modelu zostaje odwzorowany w wiersz tabeli",
        ],
        correct: [0, 2]
    },
    {
        id: 32,
        question: "Serwlet to klasa dziedzicząca po klasie javax.servlet.http.HttpServlet, która:",
        options: [
            "musi predefiniować przynajmniej jedną z metod doGet(), doPost()",
            "musi implementować interfejs Runnable",
            "może opcjonalnie wywoływać metody init() lub destroy()",
        ],
        correct: [0, 2]
    },
    {
        id: 33,
        question: "Moduły Springa to:",
        options: [
            "Web – zapewnia podstawowe funkcje zorientowane na sieć",
            "Core i Beans, które zapewniają podstawowe części struktury",
            "ORM – obsługuje integrację z Hibernate, JPA",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 34,
        question: "Wstrzykiwanie zależności (Dependency Injection) może być realizowane za pomocą:",
        options: [
            "Parametru odpowiedniej metody get w klasie ziarna",
            "Parametrów konstruktora klasy Bean",
            "Parametru odpowiedniej metody set w klasie ziarna",
        ],
        correct: [1, 2]
    },
    {
        id: 35,
        question: "Wyszukiwanie w repozytoriach można definiować za pomocą:",
        options: [
            "Odpowiednio nazwanych metod (np. findByName(), findByNameAndAddress()), jeśli tylko w klasie są zdefiniowane pola name i address",
            "Odpowiednio nazwanych metod (np. findByName(), findByNameAndAddress()), jeśli tylko w klasie są zdefiniowane pola Name i Address",
            "Metod zapytań z adnotacją @Query, która pozwala na wyszukanie dowolnej informacji w bazie danych",
        ],
        correct: [0, 2]
    },
    {
        id: 36,
        question: "We wzorcu REST obowiązują zasady:",
        options: [
            "Jeden interfejs - wiele urządzeń",
            "Serwer nie przechowuje informacji na temat stanu klienta, to klient wysyłając zapytanie musi dostarczyć dane, które umożliwią jego autoryzację i pozwolą na dostęp do określonych akcji. Każde zapytanie musi posiadać wszystkie potrzebne informacje konieczne do jego poprawnego zakończenia",
            "Wyraźnie wyznaczony podział pomiędzy aplikacją działającą po stronie klienta i serwera",
            "API powinno wspierać możliwość wykorzystania pamięci podręcznej do przechowywania danych w celu zwiększenia wydajności. Serwer może być obciążony olbrzymią ilością zapytań pochodzącą z API powinien dostarczyć informację na temat danych, które mogą być zapisywane w pamięci podręcznej, a które nie",
            "Serwer powinien być zaprojektowany w taki sposób, aby klient wysyłający zapytanie mógł uzyskać odpowiedź bez konieczności posiadania wiedzy o tym co dzieje się po stronie serwera. Klient wysyła zapytanie na serwer, a serwer w celu przygotowania odpowiedzi może wykonać wiele dodatkowych akcji, o których klient nie musi wiedzieć",
            "Zasada ta przewiduje możliwość przesłania fragmentów kodu (np. JavaScript), który ma być wykonany po stronie klienta. W odpowiedzi na zapytanie klienta serwer zwraca fragment kodu, który klient może dowolnie wykorzystać",
        ],
        correct: [0, 1, 2, 4, 5]
    },
    {
        id: 37,
        question: "Standardowymi parametrami metod serwletu są obiekty:",
        options: [
            "request",
            "response",
            "context",
            "Request klasy HttpServletRequest",
            "Response klasy HttpServletResponse",
            "App klasy ServletApplication",
        ],
        correct: [0, 1, 3, 4]
    },
    {
        id: 38,
        question: "Hibernate to:",
        options: [
            "technologia wspierająca pracę z bazami danych",
            "technologia mapowania obiektowo-relacyjnego",
            "technologia wspierająca pracę z AJAX",
            "Technologia Object-Relational Mapping (ORM)",
            "Technologia Open-Relational Mapping (ORM)",
            "Najpopularniejsza biblioteką służącą do mapowania obiektowo-relacyjnego w Javie",
        ],
        correct: [0, 1, 3, 5]
    },
    {
        id: 39,
        question: "Komponenty warstwy Web JEE to. Komponentami warstwy Web JEE są między innymi:",
        options: [
            "skryptlety",
            "serwlety",
            "strony HTML",
            "strony JSP",
            "strony JSF",
            "Java Bean",
        ],
        correct: [1, 2, 3, 4]
    },
    {
        id: 40,
        question: "Dodatkowym elementem aplikacji WWW w technologii JEE są:",
        options: [
            "arkusze CSS",
            "serwlety",
            "skrypty JavaScript",
        ],
        correct: [0, 2]
    },
    {
        id: 41,
        question: "Strony widoku to:",
        options: [
            "komponenty zarządzane",
            "Facelety",
            "strony JSP",
        ],
        correct: [1, 2]
    },
    {
        id: 42,
        question: "Serwlety to:",
        options: [
            "pliki z dyrektywą @page o strukturze HTML",
            "dokumenty HTML z osadzonym kodem JavaScript",
            "skrypty działające po stronie klienta",
            "programy napisane w języku Java",
        ],
        correct: [3]
    },
    {
        id: 43,
        question: "W serwletach można stosować",
        options: [
            "skryptlety, deklaracje i wyrażenia",
            "zwykłe znaczniki HTML",
            "obiekty Javy",
        ],
        correct: [2]
    },
    {
        id: 44,
        question: "Komponenty JavaBeans są wykorzystywane",
        options: [
            "w modelu MVC",
            "na stronach JSP",
            "w serwletach",
            "jako komponenty wspierające operację na danych",
            "jako komponenty wspierające pracę z JavaScript",
            "jako komponety wspierające pracę z danymi z formularza",
        ],
        correct: [3]
    },
    {
        id: 45,
        question: "Poprawna definicja komponentu klasy KomponentBean w Javie ma postać:",
        options: [
            "public class omponentBean { private int x,y; public int pobierzX() {return x;} public void ustawX(intx) {this.x=x;} public int pobierzY() {return x;}public void ustawY(int y) {this.y=y;}}",
            " <managed-bean> <managed-bean-name>komponentBean </managed-bean-name> <managed-bean-scope>session </managed-bean-scope> </managed-bean>",
            "public class omponentBean { private int x,y; public int getX() {return x;} public void setX(int x) {this.x=x;} public int getY() {return x;} public void setY(int y) {this.y=y;} }",
        ],
        correct: [2]
    },
    {
        id: 46,
        question: "Poprawna definicja komponentu klasy KomponentBean w pliku XML ma postać:",
        options: [
            "public class omponentBean { private int x,y; public int pobierzX() {return x;} public void ustawX(intx) {this.x=x;} public int pobierzY() {return x;}public void ustawY(int y) {this.y=y;}}",
            "<managed-bean><managed-bean-name>komponentBean</managed-bean-name><managed-bean-scope>request</managed-bean-scope></managed-bean>",
            "<managed-bean> <managed-bean-name>komponentBean </managed-bean-name> <managed-bean-class>komponentBean </managed-bean- class > <managed-bean-scope>request </managed-bean-scope> </managed-bean>",
        ],
        correct: [2]
    },
    {
        id: 47,
        question: "Komponenty JavaBean mogą być dostępne w zasięgu:",
        options: [
            "żądania",
            "sesji",
            "aplikacji",
            "strony i żądania",
            "żądania i sesji",
            "sesji i aplikacji",
        ],
        correct: [0, 1]
    },
    {
        id: 48,
        question: "Sposób współdzielenia danych można zdefiniować za pomocą atrybutu scope o wartości:",
        options: [
            "request",
            "response",
            "servlet",
            "session",
            "scope",
            "application",
        ],
        correct: [0, 3, 5]
    },
    {
        id: 49,
        question: "Technologia Hibernate bazuje na:",
        options: [
            "klasach Connection, Statement i ResultSet",
            "komponentach JDBC",
            "klasach SessionFactory i Transaction",
        ],
        correct: [1]
    },
    {
        id: 50,
        question: "Framework JSF bazuje na:",
        options: [
            "modelu MVC i JDBC",
            "komponentach zarządzanych i wzorcu MVC",
            "komponentach zarządzanych i stronach widoku",
            "modelu MVC",
            "komponentach zarządzanych",
            "technologii Hibernate",
        ],
        correct: [1, 3, 4]
    },
    {
        id: 51,
        question: "Usługi JSF to:",
        options: [
            "metody widoku Facelet",
            "konwersja i weryfikacja danych",
            "metody widoku JSP",
            "konwersja danych",
            "weryfikacja danych i obsługa błędów",
            "alternatywne metody widoku",
        ],
        correct: [4]
    },
    {
        id: 52,
        question: "Odpowiedniki znaczników HTML w JSF zawarte są:",
        options: [
            "w bibliotece html",
            "we wzorcu mvc",
            "w rdzeniu core",
        ],
        correct: [0]
    },
    {
        id: 53,
        question: "Znaczniki z biblioteki core mają postać:",
        options: [
            "<core:znacznik … >",
            "<f:znacznik … >",
            "<h:znacznik … >",
        ],
        correct: [2]
    },
    {
        id: 54,
        question: "Alternatywne metody widoku JSF to:",
        options: [
            "strony HTML i XML",
            "strony JSP i facelety",
            "strony JSP i skryptlety",
        ],
        correct: [1]
    },
    {
        id: 55,
        question: "Konwersję danych pobranych z formularza można w JSF zrealizować za pomocą:",
        options: [
            "odpowiedniego znacznika konwertera",
            "atrybutu converter",
            "własnej klasy konwertera",
        ],
        correct: [1, 2]
    },
    {
        id: 56,
        question: "Dostęp do atrybutów komponentów z poziomu stron widoku odbywa się następująco:",
        options: [
            "#{nazwa_komponentu.atrybut}",
            "{#nazwa_komponentu.atrybut}",
            "{nazwa_komponentu.atrybut}",
        ],
        correct: [0]
    },
    {
        id: 57,
        question: "Podstawą aplikacji WWW w technologii JEE są:",
        options: [
            "strony HTML",
            "skrypty JavaScript",
            "serwlety",
        ],
        correct: [2]
    },
    {
        id: 58,
        question: "Strony JSP to:",
        options: [
            "pliki z dyrektywą @page o strukturze HTML",
            "dokumenty HTML z osadzonym kodem JavaScript",
            "programy napisane w języku Java",
        ],
        correct: [0]
    },
    {
        id: 59,
        question: "Na stronach JSP można stosować:",
        options: [
            "skryptlety, deklaracje i wyrażenia",
            "zwykłe znaczniki HTML",
            "odwołania do JavaScript",
        ],
        correct: [0, 1]
    },
    {
        id: 60,
        question: "Interfejs JDBC umożliwia pracę z:",
        options: [
            "bazami danych",
            "plikami tekstowymi",
            "JavaScript",
        ],
        correct: [0]
    },
    {
        id: 61,
        question: "Interfejs JDBC bazuje na:",
        options: [
            "klasach Connection, Statement i ResultSet",
            "komponentach Swing",
            "klasach InputObject i OutputObject",
        ],
        correct: [0]
    },
    {
        id: 62,
        question: "Znaczniki JSF zawarte są w bibliotece",
        options: [
            "scope i html",
            "html i mvc",
            "core i html",
        ],
        correct: [2]
    },
    {
        id: 63,
        question: "Znaczniki z biblioteki html mają postać:",
        options: [
            "<h:znacznik … >",
            "<html:znacznik … >",
            "<znacznik …>",
        ],
        correct: [0]
    },
    {
        id: 64,
        question: "Sercem aplikacji JSF są",
        options: [
            "komponenty HTML",
            "komponenty zarządzane",
            "komponenty JDBC",
        ],
        correct: [1]
    },
    {
        id: 65,
        question: "Walidację danych pobranych z formularza można w JSF zrealizować za pomocą:",
        options: [
            "znacznika validator",
            "atrybutu validator",
            "własnej klasy walidator",
        ],
        correct: [1, 2]
    },
    {
        id: 66,
        question: "W aplikacjach MVC",
        options: [
            "Dzięki wykorzystaniu techniki „wstrzykiwania zależności” (DI) repozytoria mogą być wstrzykiwane do klasy kontrolera",
            "Kontroler stanowi odrębną warstwę i nie współpracuje z repozytoriami",
            "Kontroler współpracuje z repozytoriami w celu wczytywania i zachowywania modelu biznesowego aplikacji",
        ],
        correct: [0, 2]
    },
    {
        id: 67,
        question: "Wybierz wszystkie poprawne odpowiedzi:",
        options: [
            "Zastosowanie modelu programowania opartego na obiektach POJO",
            "rozwiązywanie problemów z krzyżowaniem się zagadnień za pomocą programowania aspektowego AOP (Aspect-Oriented Programming)",
            "obsługa ścisłych powiązań za pomocą wstrzykiwania zależności (DI Dependency Injection)",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 68,
        question: "W adresie URL można przekazać parametry do metody kontrolera za pomocą:",
        options: [
            "umieszczenia danych bezpośrednio w adresie url, np.: http://pollub.pl/przyklad/url/wartosc/123",
            "Query String, czyli w części adresu po znaku zapytania, np.: ?param=wartosc",
            "wstrzykiwania parametrów, np.: public String pobierzParametr(@PathVariable String id)",
        ],
        correct: [0, 1]
    },
    {
        id: 69,
        question: "W klasie encji można korzystać z różnych adnotacji do walidacji pól. Są to np.:",
        options: [
            "@DecimalMin, @DecimalMax",
            "@Min, @Max",
            "@Size, @Pattern",
        ],
        correct: [0, 1, 2]
    },
    {
        id: 70,
        question: "Głównym celem Springa jest. Wybierz wszystkie poprawne odpowiedzi:",
        options: [
            "zastosowanie modelu programowania opartego na obiektach",
            "rozwiązywanie problemów z krzyżowaniem się zagadnień za pomocą programowania aspektowego AOP (Aspect-Oriented Programming)",
            "obsługa ścisłych powiązań za pomocą wstrzykiwania zależności (DI Dependency Injection)",
        ],
        correct: [0, 1, 2]
    },
];
