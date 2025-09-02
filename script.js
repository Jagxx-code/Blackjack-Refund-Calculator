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
    function setRemainingDays() {
      const start = new Date(document.getElementById("startDate").value);
      const end = new Date(document.getElementById("endDate").value);

      if (start && end && end > start) {
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        document.getElementById("remainingDays").value = diffDays;
      } else {
        alert("Please select valid dates (End Date must be after Start Date).");
      }

      // Close popup after calculation
      document.getElementById("datePopup").style.display = "none";
    }

function closePopup() {
  document.getElementById("datePopup").style.display = "none";
}
