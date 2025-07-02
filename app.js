
const rates = {
  USD: { USD: 1, EUR: 0.85, GBP: 0.76, NGN: 770, LRD: 190 },
  EUR: { USD: 1.18, EUR: 1, GBP: 0.89, NGN: 900, LRD: 220 },
  GBP: { USD: 1.31, EUR: 1.12, GBP: 1, NGN: 980, LRD: 240 },
  NGN: { USD: 0.0013, EUR: 0.0011, GBP: 0.0010, NGN: 1, LRD: 0.25 },
  LRD: { USD: 0.0053, EUR: 0.0045, GBP: 0.0042, NGN: 4, LRD: 1 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;

  if (isNaN(amount)) {
    alert("Please enter a valid number.");
    return;
  }

  const rate = rates[from][to];
  const converted = amount * rate;

  document.getElementById('result').innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
