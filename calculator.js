let history = [];

function add() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 + num2;
    document.getElementById("result").value = result;
    history.push(num1 + " + " + num2 + " = " + result);
    updateHistory();
}

function subtract() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 - num2;
    document.getElementById("result").value = result;
    history.push(num1 + " - " + num2 + " = " + result);
    updateHistory();
}

function multiply() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 * num2;
    document.getElementById("result").value = result;
    history.push(num1 + " * " + num2 + " = " + result);
    updateHistory();
}

function divide() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 / num2;
    document.getElementById("result").value = result;
    history.push(num1 + " / " + num2 + " = " + result);
    updateHistory();
}

function updateHistory() {
    let historyList = document.getElementById("history");
    historyList.innerHTML = "";
    for (let i = 0; i < history.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = history[i];
        historyList.appendChild(listItem);
    }
}
