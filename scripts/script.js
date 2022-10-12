/* ----- spa init Game --- */
const mySPA = (function () {

  /* ------- begin view -------- */
  function GameView() {
    let myGameContainer = null;
    let contentContainer = null;

    const HomeComponent = { // главная страница
      id: "main",
      title: "Главная страница",
      render: (className = "container") => {
        return `
          <section class="${className}">
            <h1>Мини-игры для детей</h1>
            <nav class="mainmenu" id="mainmenu">
            <ul class="mainmenu__list">
              <li><a class="mainmenu__link" href="#memoryinfo">Мемори</a></li>
              <li><a class="mainmenu__link" href="#seasonsinfo">4 сезона</a></li>
              <li><a class="mainmenu__link" href="#clockinfo">Который час</a></li>
              <li><a class="mainmenu__link shop__link" href="#shop">Магазин</a></li>
            </ul>
          </nav>
          </section>
        `;
      }
    };

    const MemoryGameInfoComponent = {
      id: "memoryinfo",
      title: "Введение MemoryGame",
      render: () => {
        return `
        <section class="gameinfo-page">
          <header>Игра "Memory Game"</header>
          <div>Основная задача игры "Мемори" - развитие памяти. Суть игры очень простая. Карточки выложены на стол "рубашкой" вверх. Нажимая на карточку, она переворачивается. Цель - найти соответствующую пару.</div>
          <div>Изначально у игрока есть 100 очков. Каждая неудачная попытка найти пару уменьшает количество очков на 5 единиц.</div>
          <div>Итоговое количество очков за игру увеличивает Ваш баланс для внутриигровых покупок.</div>
          <div><b>Желаем удачи!</b></div>
          <ul>
            <li><a href="#memory">Перейти к игре</a></li>
          </ul>
        </section>
        `;
      }
    };

    const MemoryGameComponent = { // игра Memory game
      id: "memory",
      title: "Memory Game",
      render: (className = "container") => {
        return `
        <section class="${className}">
          <div class="${className}-score">Счет текущей игры: 100</div>
          <div class="memory-game">
            <div class="memory-card" data-name="Apple">
              <img class="front-face" src="images/memory/apple.png" alt="Apple">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Apple">
              <img class="front-face" src="images/memory/apple.png" alt="Apple">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Banana">
              <img class="front-face" src="images/memory/banana.png" alt="Banana">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Banana">
              <img class="front-face" src="images/memory/banana.png" alt="Banana">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Avocado">
              <img class="front-face" src="images/memory/avocado.png" alt="Avocado">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Avocado">
              <img class="front-face" src="images/memory/avocado.png" alt="Avocado">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Blueberry">
              <img class="front-face" src="images/memory/blueberry.png" alt="Blueberry">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Blueberry">
              <img class="front-face" src="images/memory/blueberry.png" alt="Blueberry">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Pear">
              <img class="front-face" src="images/memory/pear.png" alt="Pear">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Pear">
              <img class="front-face" src="images/memory/pear.png" alt="Pear">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Pomegranate">
              <img class="front-face" src="images/memory/pomegranate.png" alt="Pomegranate">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          
            <div class="memory-card" data-name="Pomegranate">
              <img class="front-face" src="images/memory/pomegranate.png" alt="Pomegranate">
              <img class="back-face" src="images/memory/backside.png" alt="Memory Card">
            </div>
          </div>
        </section>
        `;
      }
    };

    const FourSeasonsGameInfoComponent = {
      id: "seasonsinfo",
      title: "Введение 4Seasons Game",
      render: () => {
        return `
        <section class="gameinfo-page">
          <header>Игра "4 сезона"</header>
          <div>Основная задача игры "4 сезона" - изучение фруктов/овощей/ягод. Суть игры - правильно соотнести картинки по разделам. Нажимая на картинку её необходимо перенести в соответствующий раздел.</div>
          <div>Изначально у игрока есть 100 очков. Каждая неудачная попытка соотнести картинку уменьшает количество очков на 10 единиц.</div>
          <div>Итоговое количество очков за игру увеличивает Ваш баланс для внутриигровых покупок.</div>
          <div><b>Желаем удачи!</b></div>
          <ul>
            <li><a href="#seasons">Перейти к игре</a></li>
          </ul>
        </section>
        `;
      }
    };

    const FourSeasonsComponent = {
      id: "seasons",
      title: "4Seasons game",
      render: (className = "container") => {
        return `
        <section class="${className}">
          <div class="${className}-score">Счет текущей игры: 100</div>
          <div class="seasons-game">
            <div class="seasons-field" data-name="fruits">
              <div class="seasons-field-info">Фрукты</div>
              <img class="seasons-pic" src="images/seasons/veg-1.png" alt="Капуста" data-name="vegetables" draggable="true">
              <img class="seasons-pic" src="images/seasons/berr-1.png" alt="Вишня" data-name="berries" draggable="true">
              <img class="seasons-pic" src="images/seasons/nut-1.png" alt="Орех" data-name="nuts" draggable="true">
              <img class="seasons-pic" src="images/seasons/fruit-1.png" alt="Яблоко" data-name="fruits" draggable="false" style="background-color: green">
            </div>
          
            <div class="seasons-field" data-name="vegetables">
              <div class="seasons-field-info">Овощи</div>
              <img class="seasons-pic" src="images/seasons/nut-2.png" alt="Орех" data-name="nuts" draggable="true">
              <img class="seasons-pic" src="images/seasons/fruit-2.png" alt="Абрикос" data-name="fruits" draggable="true">
              <img class="seasons-pic" src="images/seasons/veg-2.png" alt="Морковка" data-name="vegetables" draggable="false" style="background-color: green">
              <img class="seasons-pic" src="images/seasons/berr-2.png" alt="Облепиха" data-name="berries" draggable="true">
            </div>
          
            <div class="seasons-field" data-name="berries">
              <div class="seasons-field-info">Ягоды</div>
              <img class="seasons-pic" src="images/seasons/nut-3.png" alt="Орех" data-name="nuts" draggable="true">
              <img class="seasons-pic" src="images/seasons/berr-3.png" alt="Черника" data-name="berries" draggable="false" style="background-color: green">
              <img class="seasons-pic" src="images/seasons/fruit-3.png" alt="Апельсин" data-name="fruits" draggable="true">
              <img class="seasons-pic" src="images/seasons/veg-3.png" alt="Тыква" data-name="vegetables" draggable="true">
            </div>
          
            <div class="seasons-field" data-name="nuts">
              <div class="seasons-field-info">Орехи</div>
              <img class="seasons-pic" src="images/seasons/nut-4.png" alt="Орех" data-name="nuts" draggable="false" style="background-color: green">
              <img class="seasons-pic" src="images/seasons/fruit-4.png" alt="Манго" data-name="fruits" draggable="true">
              <img class="seasons-pic" src="images/seasons/veg-4.png" alt="Помидор" data-name="vegetables" draggable="true">
              <img class="seasons-pic" src="images/seasons/berr-4.png" alt="Малина" data-name="berries" draggable="true">
            </div>
          </div>
        </section>
        `;
      }
    };

    const ErrorComponent = {
      id: "error",
      title: "Страница не найдена",
      render: (className = "container") => {
        return `
          <section class="${className}">
            <h1>Ошибка 404</h1>
            <p>Страница не найдена, попробуйте вернуться на <a href="#main">главную</a>.</p>
          </section>
        `;
      }
    };

    const ClockInfoComponent = {
      id: "clockinfo",
      title: "Введение в время",
      render: () => {
        return `
        <section class="gameinfo-page">
          <header>Игра "Который час"</header>
          <div>Основная задача игры "Который час" - научить определять время по часам со стрелками. Суть игры - ввести время (в часах и минутах), указанное на циферблате.</div>
          <div>Изначально у игрока есть 0 очков. Каждая удачная попытка определить время на часах увеличивает количество очков на 10 единиц.</div>
          <div>Итоговое количество очков за игру увеличивает Ваш баланс для внутриигровых покупок.</div>
          <div><b>Желаем удачи!</b></div>
          <ul>
            <li><a href="#clock">Перейти к игре</a></li>
          </ul>
        </section>
        `;
      }
    };

    const ClockComponent = {
      id: "clock",
      title: "Learn Clock",
      render: (className = "container") => {
        return `
        <section class="${className}">
          <div class="${className}-score">Счет текущей игры: 0</div>
          <div class="${className}-round">Раунд 1/10</div>
            <svg style="width:270px; height:270px;">
            <g transform="translate(135,135)">
              <g>
                <circle r="108" fill="lightgreen" stroke-width="4" stroke="orange"></circle>
                <circle r="97" fill="none" stroke-width="11" stroke="black" stroke-dasharray="4,46.789082" transform="rotate(-1.5)"></circle>
                <circle r="100" fill="none" stroke-width="5" stroke="black" stroke-dasharray="2,8.471976" transform="rotate(-.873)"></circle>
              </g>
              <g id="hands" transform="rotate(180)">
                <g id="hour">
                  <line stroke-width="4" y2="75" stroke-linecap="round" stroke="black"></line>
                  <circle r="5"></circle>
                </g>
                <g id="minute">
                  <line stroke-width="3" y2="93" stroke-linecap="round" stroke="black"></line>
                  <circle r="4" fill="orange"></circle>
                </g>
              </g>
            </g>
            </svg>
            <div class="clock-game-result"></div>
            <form class="clock-page-inputs">
              <input type="number" class="input-hour" placeholder="Введите час (от 1 до 12)" min="1" max="12" required></input>
              <input type="number" class="input-minute" placeholder="Введите минуту (от 0 до 59)" min="0" max="59" required></input>
              <button type="submit" class="clock-page-submit">Готово</button>
            </form>
          </div>
        </section>
        `;
      }
    };

    const loginFormComponent = {
      id: "login",
      title: "Login Form",
      render: (className = "container") => {
        return `
        <div class="overlay"></div>
        <section class="${className}">
          <div class="${className}-content"">
            <h1>Здравствуй, дорогой гость!</h1>
            <p>Пожалуйста, войдите, используя свой логин и пароль.</p>
            <form class="login-form">
              <input type="email" placeholder="Email" class="email-info" required></input>
              <input type="password" placeholder="Пароль" class="input-password" required></input>
              <button type="submit" class="login-button">Войти</button>
              <div class="login-form-error"></div>
              <button type="submit" class="register-button">Зарегистрироваться</button>
            </form>
          </div>
        </section>
        `;
      }
    };

    const shopComponent = {
      id: "shop",
      title: "Магазин",
      render: (className = "container", money) => {
        return `
        <section class="${className}">
          <div class="${className}-content"">
            <h1>Внутриигровой магазин</h1>
            <div class="user-money">Ваш баланс: ${money} очков.</div>
            <div class="shop-page-info">Бейджи для приобретения за игровую валюту</div>
            <div class="sold-bages"></div>
            <div class="shop-page-info">Ваши бейджи</div>
            <div class="my-bages"></div>
          </div>
        </section>
        `;
      }
    };

    const router = {
      main: HomeComponent,
      memoryinfo: MemoryGameInfoComponent,
      memory: MemoryGameComponent,
      seasonsinfo: FourSeasonsGameInfoComponent,
      seasons: FourSeasonsComponent,
      default: HomeComponent,
      error: ErrorComponent,
      clock: ClockComponent,
      clockinfo: ClockInfoComponent,
      login: loginFormComponent,
      shop: shopComponent
    };

    this.init = function (container) {
      myGameContainer = container;
      menu = myGameContainer.querySelector("#mainmenu");
      contentContainer = myGameContainer.querySelector("#content");
    };

    this.renderContent = function (hashPageName, money) { // отрисовка страницы
      let routeName = "default";

      if (hashPageName.length > 0) {
        routeName = hashPageName in router ? hashPageName : "error";
      };

      window.document.title = router[routeName].title;
      contentContainer.innerHTML = router[routeName].render(`${routeName}-page`, money);

      if (document.querySelector(".game-finished")) {
        (document.querySelector(".game-finished")).remove();
        (document.querySelector(".overlay")).remove();
      };
    };
    // memory card game
    this.setRandomOrder = function (card, order) { // установка случайного порядка карточек
      card.style.order = order;
    };

    this.startMemoryGame = function (card, score) { // анимация переворота карты + обновление счета
      card.classList.toggle("memory-card-active");
      card.classList.toggle("memory-card-flip");
      (document.querySelector(".memory-page-score")).innerHTML = "Счет текущей игры: " + score;
    };
    // seasons game
    this.seasonsDragStart = function (image) {
      image.style.opacity = "0.2";
    };

    this.seasonsDragEnd = function (image) {
      image.style = null;
    };

    this.seasonsDragEnter = function (image) {
      image.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
    };

    this.seasonsDragLeave = function (image) {
      image.style = null;
    };

    this.seasonsDropElement = function (target) {
      target.style.backgroundColor = "green";
      target.draggable = false;
      target.replaceWith(target.cloneNode(true)); // удаление всех обработчиков с элемента
    };

    this.removeInlineStyle = function (target) {
      target.style = null;
    };

    this.seasonsSwapImages = function (target, seasonsTarget) {
      let dragChild = seasonsTarget.cloneNode(true);

      target.replaceWith(dragChild);
      seasonsTarget.replaceWith(target);

      dragChild.draggable = false;
      dragChild.style.backgroundColor = "green";
    };

    this.seasonsDropFail = function (target, seasonsTarget, score) {
      target.style = null;
      target.classList.add("fail-animation");
      seasonsTarget.classList.add("fail-animation");
      setTimeout(() => target.classList.remove("fail-animation"), 300);
      setTimeout(() => (document.querySelector(".fail-animation")).classList.remove("fail-animation"), 300);
      window.navigator.vibrate(300);
      (document.querySelector(".seasons-page-score")).innerHTML = "Счет текущей игры: " + score;
    };

    // по окончанию игры
    this.showGameResult = function (score, bestScore) {
      if (score > bestScore) {
        bestresult = `<p>Вы побили свой предыдущий рекорд! Предыдущий рекорд данной игры: ${bestScore}</p>`;
      } else {
        bestresult = `<p>Ваш рекорд в данной игре: ${bestScore}</p>`;
      };

      let overlay = document.createElement("div");
      overlay.classList.add("overlay");
      document.body.append(overlay);
      let scoreTable = document.createElement("div");
      scoreTable.classList.add("game-finished");
      scoreTable.innerHTML = `<h2>Поздравляем, Вы справились!<h2><p>Итоговый результат текущей игры: <b>${score}</b></p>${bestresult}<ul><li><a href="#main">На главную</a></li></ul>`;
      document.body.append(scoreTable);
    };
    // clock game
    this.updateClockHands = function (hour, minute, clockGameScore, clockGameRound) {
      document.querySelector(".clock-game-result").className = "clock-game-result";

      let hourHand = document.getElementById("hour");
      let minuteHand = document.getElementById("minute");

      hourHand.setAttribute("transform", "rotate(" + hour.toString() + ")");
      minuteHand.setAttribute("transform", "rotate(" + minute.toString() + ")");

      document.querySelector(".clock-page-score").innerHTML = `Счет текущей игры: ${clockGameScore}`;
      document.querySelector(".clock-page-round").innerHTML = `Раунд ${clockGameRound}/10`;

      document.querySelector(".input-hour").value = "";
      document.querySelector(".input-minute").value = "";

      document.querySelector(".clock-page-submit").disabled = false;
    };

    this.clockResultView = function (clockResult) {
      let clockResultBlock = document.querySelector(".clock-game-result");
      clockResult ? clockResultBlock.classList.add("icon-checkmark") : clockResultBlock.classList.add("icon-cross");
    };

    this.loginError = function (errorText) {
      let errorBlock = document.querySelector(".login-form-error");
      errorBlock.innerHTML = errorText;
    };

    this.showRegisterButton = function () {
      document.querySelector(".register-button").style.display = "block";
    };
    // добавление имени пользователя сверху справа
    this.addUserName = function (userName) {
      document.querySelector(".user-name").innerHTML = `Игрок:<p>${userName}</p>`;
    };

    this.fillSoldBages = function (bageName) {
      let bage = document.createElement("div");
      bage.classList.add(bageName);
      bage.classList.add("sold-bages-item");
      document.querySelector(".sold-bages").append(bage);
    };

    this.fillMyBages = function (bageName) {
      let bage = document.createElement("div");
      bage.classList.add(bageName);
      bage.classList.add("my-bages-item");
      document.querySelector(".my-bages").append(bage);
    };

    this.bagePurchase = function (target) {
      let shopBlock = document.querySelector(".shop-page");
      let overlay = document.createElement("div");
      overlay.classList.add("overlay");
      shopBlock.append(overlay);
      let acceptPurchaseBlock = document.createElement("div");
      acceptPurchaseBlock.classList.add("sold-bages-confirm");
      acceptPurchaseBlock.innerHTML = `<h2>Вы точно хотите купить данный значок?<h2>${target.outerHTML}<p>Стоимость покупки составляет 150 очков</p><button class="accept-purchase">Купить</button><button class="decline-purchase">Отмена</button>`;
      shopBlock.append(acceptPurchaseBlock);
      let errorBlock = document.createElement("div");
      errorBlock.classList.add("purchase-error");
      acceptPurchaseBlock.append(errorBlock);
    };

    this.hidePurchaseConfirmation = function (money) {
      document.querySelector(".overlay").remove();
      document.querySelector(".sold-bages-confirm").remove();

      document.querySelector(".user-money").innerHTML = `Ваш баланс: ${money} очков.`;
    };

    this.showPurchaseResult = function (item) {
      let soldBagesBlock = document.querySelector(".sold-bages");
      let myBagesBlock = document.querySelector(".my-bages");
      let currentBage = (soldBagesBlock.querySelector("." + item));
      let newBage = currentBage.cloneNode(true);
      myBagesBlock.append(newBage);
      newBage.classList.remove("sold-bages-item");
      newBage.classList.add("my-bages-item");
      currentBage.remove();
    };

    this.showPurchaseError = function (money) {
      document.querySelector(".purchase-error").innerHTML = `Не хватает очков для покупки! Количество Ваших очков: ${money}.`;
    };

    this.buttonDisable = function () {
      document.querySelector(".clock-page-submit").disabled = true;
    };

    this.playAudio = function () {
      let soundButton = document.querySelector(".sound-button > button");

      soundButton.classList.toggle("icon-volume-mute2");
      soundButton.classList.toggle("icon-volume-high");
    };
  };
  /* -------- end view --------- */
  /* ------- begin model ------- */
  function GameModel() {
    let myGameView = null;
    let myGameModel = this;
    let flippedCards = null;
    let memoryCardScore = null;
    let seasonsGameScore = null;
    let seasonsTarget = null;
    let clockGameScore = null;
    let clockGameRound = null;
    let h = null;
    let m = null;
    let clockResult = null;
    let userInfo = null;
    let userName = null;
    let bagesList = null;

    this.init = function (view) {
      myGameView = view;
    };

    this.updateState = function (hashPageName) {
      userInfo ? myGameView.renderContent(hashPageName, userInfo.money) : myGameView.renderContent("login");

      hashPageName == "memory" ? memoryCardScore = 100 : null;
      hashPageName == "seasons" ? seasonsGameScore = 100 : null;
      hashPageName == "clock" ? clockGameScore = 0 : null;
      hashPageName == "clock" ? clockGameRound = 1 : null;
    };
    // memory card game
    this.setRandomOrder = function (cards) { // установка случайного порядка карточек
      cards.forEach(function (item) {
        let randomOrder = Math.floor(Math.random() * 12);
        myGameView.setRandomOrder(item, randomOrder);
      });
    };

    this.startMemoryGame = function () { // переворот карты
      if (!this["dataset"].info) { // если карта не перевернута, переворачиваем и добавлем аттрибут
        this.setAttribute("data-info", "flipped");
        myGameView.startMemoryGame(this, memoryCardScore);
      };


      flippedCards = document.querySelectorAll("[data-info=flipped]"); // поиск перевернутых карт, скорее всего это не должно быть в модели, но другого не придумал

      flippedCards.length == 2 ? myGameModel.hideCards(flippedCards) : null; // проверка 2 открытых карт

      if ((document.querySelectorAll("[data-info=complete]").length) == 12) {
        myGameView.showGameResult(memoryCardScore, userInfo.memoryScore);

        userInfo.memoryScore < memoryCardScore ? userInfo.memoryScore = memoryCardScore : null; // обновляем рекорд

        userInfo.money += memoryCardScore; // добавляем количество набранных очков к деньгам
        myGameModel.updateGameResultInDatabase(); // обновляем информацию в хранилище
      };
    };

    this.hideCards = function (flippedCards) { // проверка карточек на совпадение
      if (flippedCards[0]["dataset"].name == flippedCards[1]["dataset"].name) { // если карты совпадают
        flippedCards.forEach(function (item) {
          item["dataset"].info = "complete";
          item.removeEventListener("click", myGameModel.startMemoryGame); // наверное плохо для MVC убирать обработчик в этом месте, но вернуться в контроллер не могу
        });
      } else { // если карты не совпадают
        memoryCardScore !== 0 ? memoryCardScore -= 5 : memoryCardScore = 0; // ведение текущего счета
        flippedCards.forEach(function (item) {
          item.removeAttribute("data-info");
          setTimeout(function () { myGameView.startMemoryGame(item, memoryCardScore) }, 800);
        });
      };
    };
    // seasons game
    this.seasonsDragStart = function () {
      seasonsTarget = this;
      myGameView.seasonsDragStart(seasonsTarget);
    };

    this.seasonsDragEnd = function () {
      let item = this;
      myGameView.seasonsDragEnd(item);
      seasonsTarget = null;
    };

    this.seasonsDragEnter = function () {
      let item = this;
      myGameView.seasonsDragEnter(item);
    };

    this.seasonsDragLeave = function () {
      let item = this;
      myGameView.seasonsDragLeave(item);
    };

    this.seasonsDragOver = function (event) {
      event.preventDefault();
    };

    this.seasonsDropElement = function (event) {
      event.preventDefault();
      if (event.target !== seasonsTarget) { // элемент не должен тянуться в его исходное место
        if (seasonsTarget["dataset"].name == (event.target).parentElement["dataset"].name) { // проверка соответствия перетягиваемого элемента разделу
          myGameView.seasonsSwapImages(event.target, seasonsTarget);
          (event.target)["dataset"].name == (event.target).parentElement["dataset"].name ? myGameView.seasonsDropElement(event.target) : myGameView.removeInlineStyle(event.target); // если перетягиваемый элемент соответстует разделу, проверяем также второй элемент

          if ((document.querySelectorAll("[draggable=false]").length) == 16) {
            myGameView.showGameResult(seasonsGameScore, userInfo.seasonsScore);

            userInfo.seasonsScore < seasonsGameScore ? userInfo.seasonsScore = seasonsGameScore : null; // обновляем рекорд
            userInfo.money += seasonsGameScore; // добавляем количество набранных очков к деньгам
            myGameModel.updateGameResultInDatabase(); // обновляем информацию в хранилище
          };
        } else { // отработка неправильного соотношения
          seasonsGameScore -= 10;
          myGameView.seasonsDropFail(event.target, seasonsTarget, seasonsGameScore);
        };
      };
    };
    // clock game
    this.startClockGame = function () {
      h = Math.floor(Math.random() * 12);
      h == 0 ? h = 12 : null;
      m = Math.floor(Math.random() * 60);
      m == 60 ? m = 0 : null;

      let hour = (h + m / 60) * 30;
      let minute = m * 6;

      myGameView.updateClockHands(hour, minute, clockGameScore, clockGameRound);
    }

    this.checkClockResult = function (hour, minute, event) {
      event.preventDefault();
      if (hour >= 1 && hour <= 12 && minute >= 0 && minute <= 59 && hour !== "" && minute !== "") {
        clockGameRound += 1;
        if (hour == h && minute == m) {
          clockGameScore += 10;
          clockResult = true;
        } else {
          clockResult = false;
        };
        myGameView.clockResultView(clockResult);

        if (clockGameRound == 11) {
          myGameView.showGameResult(clockGameScore, userInfo.clockScore);

          userInfo.clockScore < clockGameScore ? userInfo.clockScore = clockGameScore : null; // обновляем рекорд
          userInfo.money += clockGameScore; // добавляем количество набранных очков к деньгам
          this.updateGameResultInDatabase(); // обновляем информацию в хранилище
        } else {
          myGameView.buttonDisable();
          setTimeout(myGameModel.startClockGame, 1200);
        };
      };
    };
    // user info
    this.checkUserLogin = function (email, password, event) {
      event.preventDefault();

      if (email && password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;

            if (user) {
              userName = user._delegate.email.split("@")[0];
              myGameModel.getUserInfo();
            };
          })
          .catch(function (error) {
            console.log("Error: " + error.message);
            if (error.code == "auth/user-not-found") {
              myGameView.loginError("Пользователь не найден. Создать нового пользователя с введенными данными?");
              myGameView.showRegisterButton();
            } else {
              myGameView.loginError("Неверный email или пароль. Введите корректные данные.");
            }
          });
      } else {
        myGameView.loginError("Пустое поле Email или Пароль. Введите данные повторно.");
      };
    };

    this.createNewUser = function (email, password, event) {
      event.preventDefault();

      if (email && password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;

            if (user) {
              let userMail = user._delegate.email;
              userName = userMail.split("@")[0];
              this.addUserToDatabase(userMail);
            };
          })
          .catch(function (error) {
            console.log("Error: " + error.message);
            if (error.code == "auth/email-already-in-use") {
              myGameView.loginError("Пользователь с заданным Email уже существует. Попробуйте войти или зарегистрироваться с помощью другого Email.");
            } else if (error.code = "auth/weak-password") {
              myGameView.loginError("Пароль должен состоять не менее чем из 6 символов.");
            }
          })
      } else {
        myGameView.loginError("Пустое поле Email или Пароль. Введите данные повторно.");
      };
    };

    this.addUserToDatabase = function (userMail) {
      bagesList = {
        "icon-smile": false,
        "icon-tongue": false,
        "icon-wink": false,
        "icon-grin": false,
        "icon-cool": false,
        "icon-evil": false,
        "icon-shocked": false,
        "icon-baffled": false,
        "icon-hipster": false,
        "icon-sleepy": false,
      };

      myAppDB
        .ref("users/" + userName)
        .set({
          username: `${userName}`,
          email: `${userMail}`,
          memoryScore: 0,
          seasonsScore: 0,
          clockScore: 0,
          money: 0,
          bages: `${JSON.stringify(bagesList)}`,
        })
        .then(function () {
          console.log(`Пользователь с именем ${userName} успешно зарегистрирован!`);

          myGameModel.getUserInfo();
        })
        .catch(function (error) {
          console.log("Error: " + error.message);
          myGameView.loginError(`Ошибка ${error.message}. Попробуйте повторить позже.`);
        });
    };

    this.getUserInfo = function () {
      myAppDB
        .ref("users/" + userName)
        .once("value")
        .then(function (snapshot) {
          userInfo = snapshot.val();

          window.location.hash = "main";
          myGameView.renderContent("main");

          myGameView.addUserName(userName);
        })
        .catch(function (error) {
          console.log("Error: " + error.message);
        });
    };

    this.updateGameResultInDatabase = function () {
      myAppDB
        .ref("users/" + userName)
        .set(userInfo)
        .then(function () {
          console.log("Данные обновлены!");
        })
        .catch(function (error) {
          console.log("Данные не обновлены. Ошибка: " + error.message);
        });
    };

    this.bagePurchase = function (target) {
      myGameView.bagePurchase(target);
    };

    this.createBages = function () {
      bagesList = JSON.parse(userInfo.bages);

      let bagesListArray = Object.entries(bagesList);

      for (let i = 0; i <= bagesListArray.length - 1; i++) {
        !bagesListArray[i][1] ? myGameView.fillSoldBages(bagesListArray[i][0]) : myGameView.fillMyBages(bagesListArray[i][0]);
      };
    };

    this.hidePurchaseConfirmation = function () {
      myGameView.hidePurchaseConfirmation(userInfo.money);
    };

    this.newBagePurchase = function () {
      if (userInfo.money >= 150) {
        userInfo.money -= 150;

        let purchaseItem = (document.querySelector(".sold-bages-confirm")).querySelector(".sold-bages-item");

        purchaseItem.classList.remove("sold-bages-item");
        bagesList[purchaseItem.className] = true;

        userInfo.bages = JSON.stringify(bagesList);
        this.updateGameResultInDatabase();

        myGameView.showPurchaseResult(purchaseItem.className);
        this.hidePurchaseConfirmation(userInfo.money);
      } else {
        myGameView.showPurchaseError(userInfo.money);
      };
    };

    this.playAudio = function (sound) {
      sound.volume = 0.2;
      if (sound.paused) {
        sound.play();
      } else {
        sound.pause();
      };
      myGameView.playAudio();
    };
  }
  /* -------- end model -------- */
  /* ----- begin controller ---- */
  function GameController() {
    let myGameModel = null;
    let myGameController = this;

    this.init = function (container, model) {
      myGameContainer = container;
      myGameModel = model;

      // вешаем слушателя на событие hashchange
      window.addEventListener("hashchange", this.updateState.bind(myGameController));

      this.updateState(); //первая отрисовка

      window.addEventListener("beforeunload", function (event) {
        event.preventDefault();
        event.returnValue = "Вы точно хотите обновить страницу? Возможно, Ваши данные не сохранятся.";
      });

      let sound = new Audio("audio/child-music.mp3");

      document.querySelector(".sound-button").addEventListener("click", () => myGameModel.playAudio(sound));
    };

    this.updateState = function () {
      let hashPageName = location.hash.slice(1).toLowerCase();
      myGameModel.updateState(hashPageName);

      if (document.querySelector(".memory-page")) { // for memory card game
        this.startMemoryGame();
      };

      if (document.querySelector(".seasons-page")) { // for seasons game
        this.startSeasonsGame();
      };

      if (document.querySelector(".clock-page")) { // for clocks
        this.startClockGame();
      };

      if (document.querySelector(".login-page")) { // for login form
        this.checkUserLogin();
      };

      if (document.querySelector(".shop-page")) { // for shop
        this.createShopItems();
      };
    };

    this.startMemoryGame = function () { // for memory card game
      let cards = document.querySelectorAll(".memory-card");

      cards.forEach(item => item.addEventListener("click", myGameModel.startMemoryGame)); // установка обработчиков для карточек

      myGameModel.setRandomOrder(cards); // установка случайного порядка карточек
    };

    this.startSeasonsGame = function () { // for seasons game
      let image = document.querySelectorAll("[draggable=true]");

      image.forEach(item => item.addEventListener("dragstart", myGameModel.seasonsDragStart));
      image.forEach(item => item.addEventListener("dragend", myGameModel.seasonsDragEnd));
      image.forEach(item => item.addEventListener("dragenter", myGameModel.seasonsDragEnter));
      image.forEach(item => item.addEventListener("dragleave", myGameModel.seasonsDragLeave));
      image.forEach(item => item.addEventListener("dragover", myGameModel.seasonsDragOver));
      image.forEach(item => item.addEventListener("drop", myGameModel.seasonsDropElement));
    };

    this.startClockGame = function () { // for clocks
      myGameModel.startClockGame();

      let buttonSubmit = document.querySelector(".clock-page-submit");
      let inputHours = document.querySelector(".input-hour");
      let inputMinutes = document.querySelector(".input-minute");

      buttonSubmit.addEventListener("click", (event) => myGameModel.checkClockResult(inputHours.value, inputMinutes.value, event));
    };

    this.checkUserLogin = function () {
      let email = document.querySelector(".email-info");
      let password = document.querySelector(".input-password");
      let buttonLogin = document.querySelector(".login-button");
      let buttonRegister = document.querySelector(".register-button");

      buttonLogin.addEventListener("click", (event) => myGameModel.checkUserLogin(email.value, password.value, event));
      buttonRegister.addEventListener("click", (event) => myGameModel.createNewUser(email.value, password.value, event));
    };

    this.createShopItems = function () {
      let shopBlock = document.querySelector(".shop-page");
      shopBlock.addEventListener("click", function (event) {
        if (event.target && event.target.classList.contains("sold-bages-item")) {
          event.preventDefault();
          event.stopPropagation();

          myGameModel.bagePurchase(event.target);
        };

        if (event.target && event.target.classList.contains("decline-purchase")) {
          event.preventDefault();
          event.stopPropagation();

          myGameModel.hidePurchaseConfirmation();
        };

        if (event.target && event.target.classList.contains("accept-purchase")) {
          event.preventDefault();
          event.stopPropagation();

          myGameModel.newBagePurchase();
        };
      });

      myGameModel.createBages();
    };
  };
  /* ------ end controller ----- */

  return {
    init: function (container) {
      const view = new GameView();
      const model = new GameModel();
      const controller = new GameController();

      //связываем части модуля
      view.init(document.getElementById(container));
      model.init(view);
      controller.init(document.getElementById(container), model);
    },
  };

}());
/* ------ end app Game ----- */

/*** --- init Game --- ***/
document.addEventListener("DOMContentLoaded", mySPA.init("root")); // инициализируем модуль как только DOM готов.