document.addEventListener("DOMContentLoaded", function() {
  var roomNameElement = document.getElementById("room-name");
  var cardSelectionElement = document.getElementById("card-selection");
  var resetButton = document.getElementById("reset-btn");

  var selectedCards = JSON.parse(localStorage.getItem("selectedCards"));
  var roomName = localStorage.getItem("roomName");

  roomNameElement.textContent = roomName;

  selectedCards.forEach(function(cardValue) {
    var cardButton = document.createElement("button");
    cardButton.textContent = cardValue;
    cardSelectionElement.appendChild(cardButton);
  });

  resetButton.addEventListener("click", function() {
    // Сбрасываем выбор карт
    cardSelectionElement.innerHTML = "";

    // Удаляем сохраненные значения из localStorage
    localStorage.removeItem("selectedCards");
    localStorage.removeItem("roomName");

    // Перенаправляем на страницу "index.html"
    window.location.href = "index.html";
  });

  // ...
});
