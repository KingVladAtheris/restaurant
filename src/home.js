export const homeItems = document.createElement("div");
homeItems.classList.add("innerContent");

const homeTitle = document.createElement("h2");
homeTitle.textContent = "Mangia Mangia";
homeItems.appendChild(homeTitle);

const homeContent = document.createElement("div");
homeContent.classList.add("story");
homeContent.textContent = "We were born out of a desire to bring high quality Italian cuisine to the alpine slopes of what ever. Our chef Trevor is the problem because he thinks he's a god";
homeItems.appendChild(homeContent);