import datetime

# Sample data (replace with actual data)
items = [
    {"name": "Paracetamol", "quantity": 2, "price": 100},
    {"name": "Ferobin plus", "quantity": 1, "price": 200},
    {"name": "Amoxyllin", "quantity": 2, "price": 50},
    {"name": "Sanitary pad", "quantity": 4, "price": 100}
]

# Generate HTML content for items
html_items = ""
for item in items:
    html_items += f"<tr><td>{item['name']}</td><td>{item['quantity']}</td><td>${item['price']}</td><td>${item['quantity'] * item['price']}</td></tr>"

# Write HTML content to a file
with open("index.html", "r+") as f:
    content = f.read()
    new_content = content.replace("", html_items)
    f.seek(0)
    f.write(new_content)
    f.truncate()
