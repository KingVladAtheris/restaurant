export const menuItems = document.createElement("div");
menuItems.classList.add("innerContent");

const menuTitle = document.createElement("h2");
menuTitle.textContent = "Our Delicious Menu";
menuItems.appendChild(menuTitle);

// Create a list of menu items
const menuList = document.createElement("ul");

const menuItem1 = document.createElement("li");
const itemTitle1 = document.createElement("h3");
itemTitle1.textContent = "Pizza";
const itemDescription1 = document.createElement("p");
itemDescription1.textContent = "A delicious pizza with fresh ingredients!";
const itemButton1 = document.createElement("button");
itemButton1.textContent = "Order Now";
itemButton1.addEventListener("click", () => {
    alert("Pizza added to your order!");
});

menuItem1.appendChild(itemTitle1);
menuItem1.appendChild(itemDescription1);
menuItem1.appendChild(itemButton1);
menuList.appendChild(menuItem1);

// Repeat for more menu items
const menuItem2 = document.createElement("li");
const itemTitle2 = document.createElement("h3");
itemTitle2.textContent = "Pasta";
const itemDescription2 = document.createElement("p");
itemDescription2.textContent = "Freshly made pasta with a creamy sauce!";
const itemButton2 = document.createElement("button");
itemButton2.textContent = "Order Now";
itemButton2.addEventListener("click", () => {
    alert("Pasta added to your order!");
});

menuItem2.appendChild(itemTitle2);
menuItem2.appendChild(itemDescription2);
menuItem2.appendChild(itemButton2);
menuList.appendChild(menuItem2);

// Append the menu list to the menu container
menuItems.appendChild(menuList);
