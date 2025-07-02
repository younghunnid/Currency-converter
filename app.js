// Currency conversion using live API
async function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;

  if (isNaN(amount)) {
    alert("Please enter a valid number.");
    return;
  }

  try {
    const response = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}`);
    const data = await response.json();

    const rate = data.info.rate;
    const converted = amount * rate;

    document.getElementById('result').innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
  } catch (error) {
    alert("Error fetching exchange rates.");
    console.error(error);
  }
}

// Dark mode toggle
function toggleDarkMode() {
  const body = document.getElementById('body');

  if (body.classList.contains('dark')) {
    body.classList.remove('dark', 'bg-gray-900', 'text-white');
    body.classList.add('bg-blue-50', 'text-black');
  } else {
    body.classList.add('dark', 'bg-gray-900', 'text-white');
    body.classList.remove('bg-blue-50', 'text-black');
  }
}
