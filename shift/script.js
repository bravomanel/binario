document.getElementById("calculateBtn").addEventListener("click", function() {
    const inputType = document.getElementById("inputType").value;
    const numberInput = document.getElementById("numberInput").value;
    const shiftType = document.getElementById("shiftType").value;
    const shiftAmount = parseInt(document.getElementById("shiftAmount").value, 10);
    const outputType = document.getElementById("outputType").value;
    let number;

    // Converte a entrada para decimal se for binária
    if (inputType === "binary") {
        number = parseInt(numberInput, 2);
    } else {
        number = parseInt(numberInput, 10);
    }

    if (isNaN(number)) {
        document.getElementById("result").innerText = "Entrada inválida!";
        return;
    }

    // Realiza o shift binário
    let shiftedNumber;
    if (shiftType === "left") {
        shiftedNumber = number << shiftAmount;
    } else {
        shiftedNumber = number >> shiftAmount;
    }

    // Converte o resultado de volta para o formato desejado
    let result;
    if (outputType === "binary") {
        result = shiftedNumber.toString(2);
    } else {
        result = shiftedNumber;
    }

    document.getElementById("result").innerText = `Resultado: ${result}`;
});
