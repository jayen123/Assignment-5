document
  .getElementById("donate-for-quota")
  .addEventListener("click", function () {
    const donateForQuota = getInputValueById("donate-input-for-quota");

    const myBalance = getTextValueById("my-wallet");
    const quotaDonateWallet = getTextValueById("quota-donate-wallet");

    if (typeof donateForQuota === "undefined") {
      return;
    }

    if (myBalance < donateForQuota) {
      alert("You don't have enough money");
      document.getElementById("donate-input-for-quota").value = "";
      return;
    }

    document.getElementById("my_modal_5").showModal();

    const myNewBalance = myBalance - donateForQuota;

    document.getElementById("my-wallet").innerText = myNewBalance;
    document.getElementById("quota-donate-wallet").innerText =
      quotaDonateWallet + donateForQuota;

    document.getElementById("donate-input-for-quota").value = "";

    const donationCardTitleQuota = document.getElementById(
      "donation-card-title-quota"
    ).innerText;

    const date = new Date();
    const localTime = date.toString();

    const div = transactionDiv(
      donateForQuota,
      donationCardTitleQuota,
      localTime
    );

    addTransactionHistory(div);
  });
