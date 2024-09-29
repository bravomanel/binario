document.getElementById("calculateBtn").addEventListener("click", function() {
    const inputType = document.querySelector('input[name="inputType"]:checked').value;
    const numberInput = document.getElementById("numberInput").value;
    const shiftType = document.querySelector('input[name="shiftType"]:checked').value;
    const shiftAmount = parseInt(document.getElementById("shiftAmount").value, 10);
    const outputType = document.querySelector('input[name="outputType"]:checked').value;
    let number;

    number = inputType === "binary" ? parseInt(numberInput, 2) : parseInt(numberInput, 10);

    if (isNaN(number)) {
        document.getElementById("result").innerText = "Entrada inválida!";
        return;
    }

    const shiftedNumber = shiftType === "left" ? number << shiftAmount : number >> shiftAmount;

    const result = outputType === "binary" ? shiftedNumber.toString(2) : shiftedNumber;
    document.getElementById("result").innerText = `Resultado: ${result}`;
});


document.getElementById("toggleTutorialBtn").addEventListener("click", function() {
    const tutorialContent = document.getElementById("tutorialContent");
    if (tutorialContent.style.display === "none") {
        tutorialContent.style.display = "block";
        this.innerText = "Esconder";
    } else {
        tutorialContent.style.display = "none";
        this.innerText = "Mostrar";
    }
});
