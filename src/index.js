import { menuItems } from "./menu.js";
import { homeItems } from "./home.js";
import { aboutItems } from "./about.js";
import "./styles.css";

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById("content");
    
    // Populate the content with menuItems by default
    content.appendChild(homeItems);

    const menuButton = document.getElementById("menuButton");

    menuButton.addEventListener("click", () => {
        // Optionally, you can clear the content before adding the menu items
        content.innerHTML = '';  // Clear previous content
        content.appendChild(menuItems);
    });

    const homeButton = document.getElementById("homeButton");

    homeButton.addEventListener("click", () => {
        // Optionally, you can clear the content before adding the menu items
        content.innerHTML = '';  // Clear previous content
        content.appendChild(homeItems);
    });

    const aboutButton = document.getElementById("aboutButton");

    aboutButton.addEventListener("click", () => {
        // Optionally, you can clear the content before adding the menu items
        content.innerHTML = '';  // Clear previous content
        content.appendChild(aboutItems);
    });
});
