// Assuming item data is in an array
const items = [
  { name: "Paracetamol", quantity: 2, price: 100 },
  { name: "Ferobin plus", quantity: 1, price: 200 },
  // ... other items
];

const itemsTable = document.getElementById("items");

function populateItems() {
  let total = 0;
  items.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$${item.price}</td>
      <td>$${item.quantity * item.price}</td>
    `;
    itemsTable.appendChild(row);
    total += item.quantity * item.price;
  });
  document.getElementById("total").textContent = `$${total}`;
}

populateItems();
