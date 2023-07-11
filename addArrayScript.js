let items = [];

        function addItem1() {
            const input = document.getElementById("input");
            const value = input.value.trim();

            if (value !== "") {
                items.push(value);
                input.value = "";
                displayItems1();
            }
        }

        function removeItem1(index) {
            items.splice(index, 1);
            displayItems1();
        }

        function displayItems1() {
            const displayDiv = document.getElementById("array-display");
            displayDiv.innerHTML = "";

            for (let i = 0; i < items.length; i++) {
                const itemDiv = document.createElement("div");
                itemDiv.className = "item";

                const itemText = document.createElement("span");
                itemText.textContent = items[i];

                const removeButton = document.createElement("button");
                removeButton.textContent = "X";
                removeButton.onclick = () => removeItem1(i);

                itemDiv.appendChild(itemText);
                itemDiv.appendChild(removeButton);
                displayDiv.appendChild(itemDiv);
            }
            console.log(items);
        }   