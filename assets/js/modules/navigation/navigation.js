export default function navigation() {
    const navigation = document.getElementById("navigation");

    navigation.innerHTML = `
        <ul>
            <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">MDN</a></li>
            <li><a target="_blank" href="https://www.w3schools.com/js/js_modules.asp">W3Schools</a></li>
        </ul>
    `;
}
