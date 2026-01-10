exchange_rates = {
        'USD': {'RUB': 75.5, 'EUR': 0.85},
        'EUR': {'RUB': 88.2, 'USD': 1.18},
        'RUB': {'USD': 0.013, 'EUR': 0.011}
    }

balanc = int(input ("Введите колличество "))
from_currency = input("Выберите из какой валюты хотите перевести валюту(usd, eur или rub) ").upper()
to_currency = input("Выберите в какую валюту хотите перевести ").upper()

if from_currency == to_currency:
    print(f"Результат: {balanc} {to_currency}")
elif from_currency in exchange_rates and to_currency in exchange_rates:
    rate = exchange_rates[from_currency][to_currency]
    result = rate * balanc
    print(f"Результат: {result} {to_currency}")
else:
    print("Введите допустимые значения")