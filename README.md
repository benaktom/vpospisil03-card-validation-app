# Card Validation Service

## Požadavky

- Nainstalovaný Node.js
- API klíč pro autentizaci

## Nastavení

1. Naklonujte si repozitář:
    ```bash
    git clone https://github.com/vpospisil03/card-validation-app.git
    cd card-app
    ```

2. Nainstalujte závislosti:
    ```bash
    npm install
    ```

3. Vytvořte soubor `.env` v kořenovém adresáři a přidejte svůj API klíč:
    ```bash
    API_KEY=your-secret-api-key
    ```

4. Spusťte server:
    ```bash
    npm start
    ```

5. Endpointy:
    - `/status`: Vrátí "OK".
    - `/card/:cardNumber/details`: Vrátí platnost a stav karty.

## Spuštění testů

### Testovací framework:
Tento projekt používá **Jest** pro spouštění jednotkových a integračních testů spolu s **Supertest**, který testuje HTTP endpointy.

### Jak spustit testy:

1. **Spuštění celé sady testů:**
   Po nastavení projektu můžete spustit všechny testy pomocí následujícího příkazu:
   ```bash
   npm test
   ```

2. **Podrobnosti testů:**
   - Testy pokrývají klíčové části aplikace:
     - `GET /status`: Ověří, že server běží a vrací očekávaný stav.
     - `GET /card/:cardNumber/details`: Testuje autorizovaný i neautorizovaný přístup k endpointu pro detaily karty a kontroluje formát odpovědi a statusové kódy.
