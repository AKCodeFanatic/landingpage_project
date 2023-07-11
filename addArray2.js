let items2 = [];

function addItem() {
    const input = document.getElementById("input2");
    const value = input.value.trim();

    if (value !== "") {
        items2.push(value);
        input.value = "";
        displayItems();
    }
}

function removeItem(index) {
    items2.splice(index, 1);
    displayItems();
}

function displayItems() {
    const displayDiv = document.getElementById("array-display2");
    displayDiv.innerHTML = "";

    for (let i = 0; i < items2.length; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";

        const itemText = document.createElement("span");
        itemText.textContent = items2[i];

        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.onclick = () => removeItem(i);

        itemDiv.appendChild(itemText);
        itemDiv.appendChild(removeButton);
        displayDiv.appendChild(itemDiv);
    }
    console.log(items2);
}