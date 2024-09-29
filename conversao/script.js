let steps = [];
let currentStep = 0;
let autoInterval;
const stepInterval = 2000;


document.getElementById("toggleTutorialBtn").addEventListener("click", function() {
    const tutorialContent = document.getElementById("tutorial-content");
    if (tutorialContent.style.display === "none") {
        tutorialContent.style.display = "block";
        this.innerText = "Esconder";
    } else {
        tutorialContent.style.display = "none";
        this.innerText = "Mostrar";
    }
});


document.getElementById("startBtn").addEventListener("click", function () {
    resetSteps(false);
    const conversionType = document.querySelector('input[name="conversionType"]:checked').value;
    const numberInput = parseInt(document.getElementById("numberInput").value, 10).toString();
    steps = [];
    currentStep = 0;

    if (conversionType === "binToDec") {
        if (/^[01]+$/.test(numberInput)) {
            let decimal = 0;
            const binArray = numberInput.split("").reverse();
            steps.push(`Número binário: ${numberInput}`);
            for (let i = 0; i < binArray.length; i++) {
                let bit = parseInt(binArray[i], 2);
                decimal += bit * Math.pow(2, i);
                steps.push(`Bit ${bit} na posição ${i}: ${bit} * 2^${i} = ${bit * Math.pow(2, i)}`);
            }
            steps.push(`Resultado decimal: ${decimal}`);
        } else {
            steps.push("Entrada inválida para binário!");
        }
    } else if (conversionType === "decToBin") {
        const decimalNumber = parseInt(numberInput, 10);
        if (!isNaN(decimalNumber)) {
            let binary = '';
            let remaining = decimalNumber;
            steps.push(`Número decimal: ${decimalNumber}`);

            while (remaining > 0) {
                let quotient = Math.floor(remaining / 2);
                let remainder = remaining % 2;
                steps.push(`${remaining} ÷ 2 = ${quotient}, resto = ${remainder}`);
                binary = remainder + binary;
                remaining = quotient;
            }
            steps.push(`Os restos formam o número binário: ${binary}`);
        } else {
            steps.push("Entrada inválida para decimal!");
        }
    }

    displayStep();
    autoStart();
});

function autoStart() {
    updatePlayPauseButtons(true);
    autoInterval = setInterval(function () {
        if (currentStep < steps.length - 1) {
            currentStep++;
            displayStep();
        } else {
            clearInterval(autoInterval);
            updatePlayPauseButtons(false);
        }
    }, stepInterval);
}

document.getElementById("prevStepBtn").addEventListener("click", function () {
    clearInterval(autoInterval);
    if (currentStep > 0) {
        currentStep--;
        removeLastStep();
    }
    updatePlayPauseButtons(false);
});

document.getElementById("pauseStepBtn").addEventListener("click", function () {
    clearInterval(autoInterval);
    updatePlayPauseButtons(false);
});

document.getElementById("playStepBtn").addEventListener("click", function () {
    autoStart();
});

document.getElementById("nextStepBtn").addEventListener("click", function () {
    clearInterval(autoInterval);
    if (currentStep < steps.length - 1) {
        currentStep++;
        displayStep();
    }
    updatePlayPauseButtons(false);
});

document.getElementById("finishStepBtn").addEventListener("click", function () {
    currentStep = steps.length - 1;
    displayAllSteps();
    clearInterval(autoInterval);
    updatePlayPauseButtons(false);
});

function displayStep() {
    const stepDiv = document.getElementById("steps");
    stepDiv.innerHTML += `<p>${steps[currentStep]}</p>`;
}

function removeLastStep() {
    const stepDiv = document.getElementById("steps");
    const lastStep = stepDiv.lastElementChild;
    if (lastStep) {
        stepDiv.removeChild(lastStep);
    }
}

function resetSteps(fullReset) {
    document.getElementById("steps").innerHTML = "";
    clearInterval(autoInterval);
    steps = fullReset ? [] : steps.slice(0, 1);
    currentStep = 0;
}

function displayAllSteps() {
    const stepDiv = document.getElementById("steps");
    stepDiv.innerHTML = steps.map(step => `<p>${step}</p>`).join('');
}

function updatePlayPauseButtons(isPlaying) {
    const playBtn = document.getElementById("playStepBtn");
    const pauseBtn = document.getElementById("pauseStepBtn");

    if (isPlaying) {
        playBtn.src = "icons/play-gray.png";
        pauseBtn.src = "icons/pause.png";
    } else {
        playBtn.src = "icons/play.png";
        pauseBtn.src = "icons/pause-gray.png";
    }
}
