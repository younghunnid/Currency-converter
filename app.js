
async function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;

  if (isNaN(amount)) {
    alert("Please enter a valid number.");
    return;
  }

  const response = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}`);
  const data = await response.json();

  const rate = data.info.rate;
  const converted = amount * rate;

  document.getElementById('result').innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
  const converted = amount * rate;

  document.getElementById('result').innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
