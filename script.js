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