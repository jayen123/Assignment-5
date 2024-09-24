function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;

  if (inputValue.trim() === "") {
    alert("Failed to Donation! please try again later");
    return;
  }

  for (let i = 0; i < inputValue.length; i++) {
    if (isNaN(inputValue[i])) {
      alert("please input a valid number");
      document.getElementById(id).value = "";
      return;
    }
  }

  const inputValueNumber = parseFloat(inputValue);

  return inputValueNumber;
}

function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

function addTransactionHistory(transaction) {
  document.getElementById("transaction-Container").appendChild(transaction);
}

function transactionDiv(donationAmount, donationFor, localTime) {
  const div = document.createElement("div");
  div.innerHTML = `
        <h2 class="font-bold text-xl mb-4 text-[#111111]">${donationAmount} tk is ${donationFor}</h2>
        <p class="text-[#111111b3]">${localTime}</p>
    `;
  div.classList.add("mb-5", "border", "p-5", "rounded-md");

  return div;
}

function showSectionById(id) {
  document.getElementById("donate-card-container").classList.add("hidden");
  document.getElementById("transaction-Container").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
