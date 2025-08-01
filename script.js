function calculateRefund() {
      const price = parseFloat(document.getElementById('price').value);
      const totalDays = parseFloat(document.getElementById('totalDays').value);
      const remainingDays = parseFloat(document.getElementById('remainingDays').value);
      const serviceFee = parseFloat(document.getElementById('serviceFee').value);

      if (isNaN(price) || isNaN(totalDays) || isNaN(remainingDays)) {
        document.getElementById('result').innerText = 'Please fill in all fields correctly.';
        return;
      }

      const refund = ((price / totalDays) * remainingDays) * serviceFee;
      document.getElementById('result').innerText = `Refund Amount: ₱${refund.toFixed(2)}`;
    }

    function calculateCommission() {
      alert("Commission Calculator coming soon!");
    }

    // Replace this with your actual Google Apps Script Web App URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbxC8uWUwt4lIZwEGBKGkPahfbiR6utHpGdwNRGrRJxH3IsRW4ZkVb8jRDa9FCJoojpqww/exec';

const form = document.getElementById('refundForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    price: form.price.value,
    totalDays: form.totalDays.value,
    remainingDays: form.remainingDays.value,
    serviceFee: form.serviceFee.value,
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(response => {
    alert('Submitted to Google Sheet!');
    form.reset();
  })
  .catch(error => alert('Error submitting: ' + error.message));
});
