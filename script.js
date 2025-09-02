function calculateRefund() {
  const price = parseFloat(document.getElementById('price').value);
  const totalDays = parseFloat(document.getElementById('totalDays').value);
  const remainingDays = parseFloat(document.getElementById('remainingDays').value);
  const serviceFeeValue = document.getElementById('serviceFee').value; // keep as string

  if (isNaN(price) || isNaN(totalDays) || isNaN(remainingDays)) {
    document.getElementById('result').innerText = 'Please fill in all fields correctly.';
    return;
  }

  let refund;

  if (serviceFeeValue === "0") {
    // 🔹 If "No Service Fee" is selected
    refund = (price / totalDays) * remainingDays;
  } else {
    // 🔹 If Service Fee applies
    const serviceFee = parseFloat(serviceFeeValue);
    refund = ((price / totalDays) * remainingDays) * serviceFee;
  }

  document.getElementById('result').innerText = `Refund Amount: ₱${refund.toFixed(2)}`;
}

document.getElementById("calendarIcon").addEventListener("click", function() {
      document.getElementById("datePopup").style.display = "block";
    });

    // Calculate remaining days from start and end date
    // Calculate remaining days from start and end date
function setRemainingDays() {
  const start = new Date(document.getElementById("startDate").value);
  const end = new Date(document.getElementById("endDate").value);
  const totalDays = parseFloat(document.getElementById("totalDays").value);

  if (start && end && end > start && !isNaN(totalDays)) {
    const diffTime = Math.abs(end - start);
    const usedDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Remaining days = totalDays - usedDays
    const remaining = totalDays - usedDays;

    if (remaining >= 0) {
      document.getElementById("remainingDays").value = remaining;
    } else {
      alert("Used days exceed the total days!");
      document.getElementById("remainingDays").value = 0;
    }
  } else {
    alert("Please select valid dates (End Date must be after Start Date) and enter Total Days.");
  }

  // Close popup after calculation
  document.getElementById("datePopup").style.display = "none";
}
