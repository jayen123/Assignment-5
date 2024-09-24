document
  .getElementById("donate-for-noakhali")
  .addEventListener("click", function () {
    const donateAmountForNoakhali = getInputValueById(
      "donate-input-for-noakhali"
    );

    console.log(donateAmountForNoakhali);

    const myBalance = getTextValueById("my-wallet");
    const noakhaliDonateWallet = getTextValueById("noakhali-donate-wallet");

    if (typeof donateAmountForNoakhali === "undefined") {
      return;
    }

    if (myBalance < donateAmountForNoakhali) {
      alert("You don't have enough money");
      document.getElementById("donate-input-for-noakhali").value = "";
      return;
    }

    document.getElementById("my_modal_5").showModal();

    const myNewBalance = myBalance - donateAmountForNoakhali;

    document.getElementById("my-wallet").innerText = myNewBalance;
    document.getElementById("noakhali-donate-wallet").innerText =
      noakhaliDonateWallet + donateAmountForNoakhali;

    document.getElementById("donate-input-for-noakhali").value = "";

    const donationCardTitleNoakhali = document.getElementById(
      "donation-card-title-noakhali"
    ).innerText;
    console.log(donationCardTitleNoakhali);

    const date = new Date();

    const localTime = date.toString();

    const div = transactionDiv(
      donateAmountForNoakhali,
      donationCardTitleNoakhali,
      localTime
    );

    addTransactionHistory(div);
  });
