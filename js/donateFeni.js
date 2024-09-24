document
  .getElementById("donate-for-feni")
  .addEventListener("click", function () {
    const donateForFeni = getInputValueById("donate-input-for-feni");

    const myBalance = getTextValueById("my-wallet");
    const feniDonateWallet = getTextValueById("feni-donate-wallet");

    if (typeof donateForFeni === "undefined") {
      return;
    }

    if (myBalance < donateForFeni) {
      alert("You don't have enough money");
      document.getElementById("donate-input-for-feni").value = "";
      return;
    }

    document.getElementById("my_modal_5").showModal();

    const myNewBalance = myBalance - donateForFeni;

    document.getElementById("my-wallet").innerText = myNewBalance;
    document.getElementById("feni-donate-wallet").innerText =
      feniDonateWallet + donateForFeni;

    document.getElementById("donate-input-for-feni").value = "";

    const donationCardTitleFeni = document.getElementById(
      "donation-card-title-feni"
    ).innerText;
    console.log(donationCardTitleFeni);

    const date = new Date();

    const localTime = date.toString();

    const div = transactionDiv(donateForFeni, donationCardTitleFeni, localTime);

    addTransactionHistory(div);
  });
