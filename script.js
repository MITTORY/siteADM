document.addEventListener("DOMContentLoaded", function() {
  var roomNameElement = document.getElementById("room-name");
  var cardSelectionElement = document.getElementById("card-selection");
  var resultButton = document.getElementById("result-btn");
  var resultModal = document.getElementById("result-modal");
  var resultContent = document.getElementById("result");

  var selectedCards = JSON.parse(localStorage.getItem("selectedCards"));
  var roomName = localStorage.getItem("roomName");
  var participantsCount = 0;
  var votesCastCount = 0;

  var createButton = document.getElementById("create-btn");
  createButton.addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значение введенное в поле "Room Name"
    var roomNameValue = document.getElementById("room-name").value;

    // Дополнительные действия, которые нужно выполнить при клике на кнопку "Create"
    // ...

    // Пример: Перенаправляем пользователя на страницу "index2.html"
    window.location.href = "index2.html";
  });
  
  createButton.addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
  
    // Получаем значение введенное в поле "Room Name"
    var roomNameValue = document.getElementById("room-name").value;
  
    // Получаем выбранные значения карт
    var selectedCards = Array.from(document.querySelectorAll("#card-values input[type='checkbox']:checked")).map(function(checkbox) {
      return checkbox.value;
    });
  
    // Сохраняем значения в localStorage
    localStorage.setItem("roomName", roomNameValue);
    localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
  
    // Перенаправляем пользователя на страницу "index2.html"
    window.location.href = "index2.html";
  });

  selectedCards.forEach(function(cardValue) {
    var cardButton = document.createElement("button");
    cardButton.textContent = cardValue;
    cardSelectionElement.appendChild(cardButton);
  });

  // Обработчик события клика на кнопку голосования
  resultButton.addEventListener("click", function() {
    // Считаем количество участников и количество проголосовавших
    participantsCount++; // Увеличиваем количество участников
    votesCastCount++; // Увеличиваем количество проголосовавших

    // Обновляем информацию о количестве участников и количестве проголосовавших
    var participantCountElement = document.getElementById("participant-count");
    participantCountElement.textContent = participantsCount;

    var votesCastCountElement = document.getElementById("votes-cast-count");
    votesCastCountElement.textContent = votesCastCount;

    // Получаем выбранную карту
    var selectedCard = this.textContent;

    // Отображаем результат голосования
    var resultText = "Vote: " + selectedCard;
    var resultItem = document.createElement("p");
    resultItem.textContent = resultText;
    resultContent.appendChild(resultItem);

    // Открываем модальное окно с результатом
    resultModal.style.display = "block";
  });

  // Закрытие модального окна с результатом
  var closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", function() {
    resultModal.style.display = "none";
  });
});