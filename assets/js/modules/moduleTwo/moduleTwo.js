export default function moduleTwo() {
    const nav = document.getElementById("navigation");

    nav.innerHTML = `
        <h1 id="moduleTwoValue">Module Two</h1>
        <input id="navInput" type="text" placeholder="Write here..." />
        <button id="updateButton">Update</button>
    `;

    const updateButton = document.getElementById("updateButton");
    updateButton.addEventListener("click", updateNav);
}

function updateNav() {
    const navInput = document.getElementById("navInput");
    const moduleTwoValue = document.getElementById("moduleTwoValue");

    moduleTwoValue.textContent = navInput.value;
}
