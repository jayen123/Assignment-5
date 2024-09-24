document
  .getElementById("donation-card-open-button")
  .addEventListener("click", function (event) {
    showSectionById("donate-card-container");
    event.target.classList.add("bg-[#B4F461]");
    document.getElementById("history-button").classList.remove("bg-[#B4F461]");
  });
document
  .getElementById("history-button")
  .addEventListener("click", function (event) {
    showSectionById("transaction-Container");
    event.target.classList.add("bg-[#B4F461]");
    document.getElementById("donation-card-open-button").classList.remove("bg-[#B4F461]");
  });
