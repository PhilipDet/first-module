export const headerText = "Philip";

export default function moduleOne() {
    const header = document.getElementById("header");

    header.innerHTML = `<h1>${headerText}</h1>`;
}
