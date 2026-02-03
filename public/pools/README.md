# Biblioteka Pul Pytań

Aby Twoje zapisane pule pytań były na stałe dostępne w aplikacji (bez polegania na pamięci przeglądarki):

1. Wyeksportuj pulę z aplikacji jako plik `.json`.
2. Umieść ten plik w tym folderze (`public/pools/`).
3. Zaktualizuj plik `registry.json`, dodając wpis o nowym pliku:

```json
{
  "externalPools": [
    {
      "name": "Przykładowa Nazwa",
      "filename": "nazwa_pliku.json"
    }
  ]
}
```

Aplikacja automatycznie wczyta te pliki do menu Biblioteka przy następnym uruchomieniu.
