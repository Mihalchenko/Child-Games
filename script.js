/* ----- spa init Game --- */
const mySPA = (function() {

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
            </ul>
          </nav>
          </section>
        `;
      }
    };

    const MemoryGameInfoComponent = {
      id: "memoryinfo",
      totle: "Введение MemoryGame",
      render: () => {
        return `
        <section class="gameinfo-page">
          <header>Игра "Memory Game"</header>
          <div>Основная задача игры "Мемори" - развитие памяти. Суть игры очень простая. Карточки выложены на стол "рубашкой" вверх. Нажимая на карточку, она переворачивается. Цель - найти соответствующую пару.</div>
          <div>Изначально у игрока есть 100 очков. Каждая неудачная попытка найти пару уменьшает количество очков на 5 единиц.</div>
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
          <div><b>Желаем удачи!</b></div>
          <ul>
            <li><a href="#clock">Перейти к игре</a></li>
          </ul>
        </section>
        `;
      }
    }

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

    const router = {
      main: HomeComponent,
      memoryinfo: MemoryGameInfoComponent,
      memory: MemoryGameComponent,
      seasonsinfo: FourSeasonsGameInfoComponent,
      seasons: FourSeasonsComponent,
      default: HomeComponent,
      error: ErrorComponent,
      clock: ClockComponent,
      clockinfo: ClockInfoComponent
    };

    this.init = function(container) {
      myGameContainer = container;
      menu = myGameContainer.querySelector("#mainmenu");
      contentContainer = myGameContainer.querySelector("#content");
    }

    this.renderContent = function(hashPageName) { // отрисовка страницы
      let routeName = "default";

      if (hashPageName.length > 0) {
        routeName = hashPageName in router ? hashPageName : "error";
      }

      window.document.title = router[routeName].title;
      contentContainer.innerHTML = router[routeName].render(`${routeName}-page`);

      if (document.querySelector(".game-finished")) {
        (document.querySelector(".game-finished")).remove();
        (document.querySelector(".overlay")).remove();
      }
    }
    // memory card game
    this.setRandomOrder = function (card, order) { // установка случайного порядка карточек
      card.style.order = order;
    }

    this.changeMemoryCard = function (card, score) { // анимация переворота карты + обновление счета
      card.classList.toggle("memory-card-active");
      card.classList.toggle("memory-card-flip");
      (document.querySelector(".memory-page-score")).innerHTML = "Счет текущей игры: " + score;
    }
    // seasons game
    this.dragStart = function(image) {
      image.style.opacity = "0.2";
    }

    this.dragEnd = function(image) {
      image.style = null;
    }

    this.dragEnter= function(image) {
      image.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
    }
    
    this.dragLeave = function(image) {
      image.style = null;
    }

    this.dropElement = function(event) {

    }

    this.dropSuccess = function(target) {
      target.style.backgroundColor = "green";
      target.draggable = false;
      target.replaceWith(target.cloneNode(true)); // удаление всех обработчиков с элемента
    }

    this.removeInlineStyle = function(target) {
      target.style = null;
    }

    this.swapImages = function(target, seasonsTarget) {
      let dragChild = seasonsTarget.cloneNode(true);
        
      target.replaceWith(dragChild);
      seasonsTarget.replaceWith(target);

      dragChild.draggable = false;
      dragChild.style.backgroundColor = "green";
    };

    this.dropFail = function(target, seasonsTarget, score) {
      target.style = null;
      target.classList.add("fail-animation");
      seasonsTarget.classList.add("fail-animation");
      setTimeout(() => target.classList.remove("fail-animation"), 300);
      setTimeout(() => (document.querySelector(".fail-animation")).classList.remove("fail-animation"), 300);
      window.navigator.vibrate(300);
      (document.querySelector(".seasons-page-score")).innerHTML = "Счет текущей игры: " + score;
    }

    this.completeCheck = function (GameScore) {
      (document.querySelectorAll("[draggable=false]").length) == 16 ? this.completeTrue(GameScore) : null;
      (document.querySelectorAll("[data-info=complete]").length) == 12 ? this.completeTrue(GameScore) : null;
     }
    // по окончанию игры
    this.completeTrue = function (score) {
      let overlay = document.createElement("div");
      overlay.classList.add("overlay");
      document.body.append(overlay);
      let scoreTable = document.createElement("div");
      scoreTable.classList.add("game-finished");
      scoreTable.innerHTML = `<h2>Поздравляем, Вы справились!<h2><p>Итоговый результат текущей игры: <b>${score}</b></p><ul><li><a href="#main">На главную</a></li></ul>`
      document.body.append(scoreTable);
    }
    // clock game
    this.createClockHand = function (hour, minute, clockGameScore, clockGameRound) {
      let hourHand = document.getElementById("hour");
      let minuteHand = document.getElementById("minute");

      hourHand.setAttribute("transform","rotate("+ hour.toString() +")");
      minuteHand.setAttribute("transform","rotate("+ minute.toString() +")");

      document.querySelector(".clock-page-score").innerHTML = `Счет текущей игры: ${clockGameScore}`;
      document.querySelector(".clock-page-round").innerHTML = `Раунд ${clockGameRound}/10`;

      document.querySelector(".input-hour").value = "";
      document.querySelector(".input-minute").value = "";
    }
  };
  /* -------- end view --------- */
  /* ------- begin model ------- */
  function GameModel () {
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

      this.init = function(view) {
        myGameView = view;
      }

      this.updateState = function(hashPageName) {
        myGameView.renderContent(hashPageName);
        hashPageName == "memory" ? memoryCardScore = 100 : null;
        hashPageName == "seasons" ? seasonsGameScore = 100 : null;
        hashPageName == "clock" ? clockGameScore = 0 : null;
        hashPageName == "clock" ? clockGameRound = 1 : null;
      }
      // memory card game
      this.setRandomOrder = function (cards) { // установка случайного порядка карточек
        cards.forEach(function(item) {
          let randomOrder = Math.floor(Math.random() * 12);
          myGameView.setRandomOrder(item, randomOrder);
        })
      }

      this.changeMemoryCard = function () { // переворот карты
        if (!this["dataset"].info) { // если карта не перевернута, переворачиваем и добавлем аттрибут
          this.setAttribute("data-info", "flipped");
          myGameView.changeMemoryCard(this, memoryCardScore);
        }

        flippedCards = document.querySelectorAll("[data-info=flipped]"); // поиск перевернутых карт, скорее всего это не должно быть в модели, но другого не придумал

        flippedCards.length == 2 ? myGameModel.hideCards(flippedCards) : null; // проверка 2 открытых карт

        myGameView.completeCheck(memoryCardScore);
      }

      this.hideCards = function (flippedCards) { // проверка карточек на совпадение
        if (flippedCards[0]["dataset"].name == flippedCards[1]["dataset"].name) { // если карты совпадают
          flippedCards.forEach(function(item) {
            item["dataset"].info = "complete";
            item.removeEventListener("click", myGameModel.changeMemoryCard); // наверное плохо для MVC убирать обработчик в этом месте, но вернуться в контроллер не могу
          });
        } else { // если карты не совпадают
          memoryCardScore !== 0 ? memoryCardScore -= 5 : memoryCardScore = 0; // ведение текущего счета
          flippedCards.forEach(function(item) {
            item.removeAttribute("data-info");
            setTimeout(function() {myGameView.changeMemoryCard(item, memoryCardScore)}, 800);
          });
        }
      }
      // seasons game
      this.dragStart = function () {
        seasonsTarget = this;
        myGameView.dragStart(seasonsTarget);
      }

      this.dragEnd = function () {
        let item = this;
        myGameView.dragEnd(item);
        seasonsTarget = null;
      }

      this.dragEnter = function () {
        let item = this;
        myGameView.dragEnter(item);
      }

      this.dragLeave = function () {
        let item = this;
        myGameView.dragLeave(item);
      }

      this.dragOver = function (event) {
        event.preventDefault();
      }

      this.dropElement = function (event) {
        event.preventDefault();
        if (event.target !== seasonsTarget) { // элемент не должен тянуться в его исходное место
          if (seasonsTarget["dataset"].name == (event.target).parentElement["dataset"].name) { // проверка соответствия перетягиваемого элемента разделу
            myGameView.swapImages(event.target, seasonsTarget);
            (event.target)["dataset"].name == (event.target).parentElement["dataset"].name ? myGameView.dropSuccess(event.target) : myGameView.removeInlineStyle(event.target); // если перетягиваемый элемент соответстует разделу, проверяем также второй элемент
            myGameView.completeCheck(seasonsGameScore);
          } else { // отработка неправильного соотношения
            seasonsGameScore -= 10;
            myGameView.dropFail(event.target, seasonsTarget, seasonsGameScore);
          }
        }
      }
      // clock game
      this.startClockGame = function () {
        h = Math.floor(Math.random() * 12);
        h == 0 ? h = 12 : null;
        m = Math.floor(Math.random() * 60);
        m == 60 ? m = 0 : null;

        console.log(h);
        console.log(m);

        let hour = (h+m/60)*30;
        let minute = m*6;

        myGameView.createClockHand(hour, minute, clockGameScore, clockGameRound);
      }

      this.checkDate = function (hour, minute, event) {
        event.preventDefault();
        if (hour >= 1 && hour <= 12 && minute >= 0 && minute <= 59) {
          clockGameRound += 1;
          if (hour == h && minute == m) {
            clockGameScore += 10;
          } else {
            console.log("ERROR");
          }
          clockGameRound == 11 ? myGameView.completeTrue(clockGameScore) : this.startClockGame();
        }
      }
  }

  /* -------- end model -------- */
  /* ----- begin controller ---- */
  function GameController () {
      let myGameContainer = null;
      let myGameModel = null;
      let myGameController = this;

      this.init = function(container, model) {
        myGameContainer = container;
        myGameModel = model;

        // вешаем слушателя на событие hashchange
        window.addEventListener("hashchange", this.updateState.bind(myGameController));

        this.updateState(); //первая отрисовка
      }

      this.updateState = function() {
        let hashPageName = location.hash.slice(1).toLowerCase();
        myGameModel.updateState(hashPageName);

        if (document.querySelector(".memory-card")) { // for memory card game
          this.changeMemoryCard();
        }
        
        if (document.querySelector(".seasons-pic")) { // for seasons game
          this.changeImagePos();
        }

        if (document.querySelector(".clock-page")) { // for clocks
          this.startClockGame();
        }
      }

      this.changeMemoryCard = function() { // for memory card game
        let cards = document.querySelectorAll(".memory-card");

        cards.forEach(item => item.addEventListener("click", myGameModel.changeMemoryCard)); // установка обработчиков для карточек
        
        myGameModel.setRandomOrder(cards); // установка случайного порядка карточек
      }
      this.changeImagePos = function() { // for seasons game
        let image = document.querySelectorAll("[draggable=true]");

        image.forEach(item => item.addEventListener("dragstart", myGameModel.dragStart));
        image.forEach(item => item.addEventListener("dragend", myGameModel.dragEnd));
        image.forEach(item => item.addEventListener("dragenter", myGameModel.dragEnter));
        image.forEach(item => item.addEventListener("dragleave", myGameModel.dragLeave));
        image.forEach(item => item.addEventListener("dragover", myGameModel.dragOver));
        image.forEach(item => item.addEventListener("drop", myGameModel.dropElement));
      };
      this.startClockGame = function() { // for clocks
        myGameModel.startClockGame();

        let buttonSubmit = document.querySelector(".clock-page-submit");
        let inputHours = document.querySelector(".input-hour");
        let inputMinutes = document.querySelector(".input-minute");

        buttonSubmit.addEventListener("click", () => myGameModel.checkDate(inputHours.value, inputMinutes.value, event));
      }
  };
  /* ------ end controller ----- */

  return {
      init: function(container) {
        this.main(container);

        const view = new GameView();
        const model = new GameModel();
        const controller = new GameController();

        //связываем части модуля
        view.init(document.getElementById(container));
        model.init(view);
        controller.init(document.getElementById(container), model);
      },

      main: function(container) {
        //предварительно что то можно сделать
        console.log(`Иницилизируем SPA для контейнера "${container}"`);
      },
  };

}());
/* ------ end app Game ----- */

/*** --- init Game --- ***/
document.addEventListener("DOMContentLoaded", mySPA.init("root")); // инициализируем модуль как только DOM готов.