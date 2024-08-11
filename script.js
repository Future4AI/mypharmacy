function calculateChange() {
  const cashPaid = parseFloat(document.getElementById("cashPaid").value);
  const total = parseFloat(document.getElementById("total").textContent.replace("$", ""));
  const change = cashPaid - total;
  document.getElementById("change").textContent = "$" + change.toFixed(2);
}

function submitFeedback() {
  const review = document.getElementById("review").value;
  // Add logic to send feedback to a server or store it locally
  alert("Feedback submitted successfully!");
}
