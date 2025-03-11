document.getElementById("inventoryForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    const itemName = document.getElementById("itemName").value.trim();
    const itemQuantity = document.getElementById("itemQuantity").value.trim();

    if (itemName && itemQuantity) {
        addItemToList(itemName, itemQuantity);
        document.getElementById("inventoryForm").reset(); // Reset form fields
    }
});

function addItemToList(name, quantity) {
    const itemList = document.getElementById("itemList");
    const li = document.createElement("li");
    li.innerHTML = `${name} - Quantity: ${quantity} <button class="remove-btn" onclick="removeItem(this)">Remove</button>`;
    itemList.appendChild(li);
}

function removeItem(button) {
    const li = button.parentElement;
    li.remove();
} 