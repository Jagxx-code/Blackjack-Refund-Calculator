function calculateRefund() {
  const price = parseFloat(document.getElementById('price').value);
  const totalDays = parseFloat(document.getElementById('totalDays').value);
  const remainingDays = parseFloat(document.getElementById('remainingDays').value);
  const serviceFee = parseFloat(document.getElementById('serviceFee').value);

  if (isNaN(price) || isNaN(totalDays) || isNaN(remainingDays)) {
    document.getElementById('result').innerText = 'Please fill in all fields correctly.';
    return;
  }

  let refund;

  if (serviceFee === 0) {
    // 🔹 If "No Service Fee" is selected
    refund = (price / totalDays) * remainingDays; 
  } else {
    // 🔹 If Service Fee applies
    refund = ((price / totalDays) * remainingDays) * serviceFee;
  }

  document.getElementById('result').innerText = `Refund Amount: ₱${refund.toFixed(2)}`;
}
