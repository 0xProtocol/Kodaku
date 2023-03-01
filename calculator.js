const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");
const historyList = document.getElementById("history");

function add() {
    const sum = parseFloat(input1.value) + parseFloat(input2.value);
    result.value = sum;
    addToHistory(`${input1.value} + ${input2.value} = ${sum}`);
}

function subtract() {
    const difference = parseFloat(input1.value) - parseFloat(input2.value);
    result.value = difference;
    addToHistory(`${input1.value} - ${input2.value} = ${difference}`);
}

function multiply() {
    const product = parseFloat(input1.value) * parseFloat(input2.value);
    result.value = product;
    addToHistory(`${input1.value} * ${input2.value} = ${product}`);
}

function divide() {
    const quotient = parseFloat(input1.value) / parseFloat(input2.value);
    result.value = quotient;
    addToHistory(`${input1.value} / ${input2.value} = ${quotient}`);
}

function addToHistory(calculation) {
    const li = document.createElement("li");
    li.innerText = calculation;
    historyList.appendChild(li);
}

const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);