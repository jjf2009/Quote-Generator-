export const Color = () => {
    return (
    fetch(`https://www.thecolorapi.com/random?format=json`)
    .then(response => response.json())
    .then(data => {
        console.log(`HSL: ${data.hsl.value}`);
    });
    );
}
