// Заголовок сайта
const h1 = document.createElement('h1');
h1.textContent = "ФК Харків";
document.body.appendChild(h1);

// Навигация
const nav = document.createElement('div');
nav.id = 'nav';
nav.style.display = 'flex';
nav.style.alignItems = 'center';
nav.style.gap = '20px';
document.body.appendChild(nav);

// Контент
const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);
nav.style.position = 'relative';
// Footer
const footer = document.createElement('footer');
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
footer.style.gap = '25px';
footer.style.padding = '20px';
footer.style.marginTop = '40px';
footer.style.borderTop = '1px solid #444';

// Telegram
const tgLink = document.createElement('a');
tgLink.href = 'https://t.me/FCKharkiv_News';
tgLink.target = '_blank';
tgLink.style.display = 'flex';
tgLink.style.alignItems = 'center';
tgLink.style.gap = '8px';
tgLink.style.color = 'white';
tgLink.style.textDecoration = 'none';

const tgIcon = document.createElement('img');
tgIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg';
tgIcon.width = 22;

const tgText = document.createElement('span');
tgText.textContent = 'Telegram-канал';

tgLink.append(tgIcon, tgText);

// Почта
const mailLink = document.createElement('a');
mailLink.href = 'mailto:michaelstarshynov@gmail.com';
mailLink.textContent = 'Питання? Напишіть нам';
mailLink.style.color = 'white';
mailLink.style.textDecoration = 'none';

footer.append(tgLink, mailLink);

// Добавляем в конец страницы
document.body.appendChild(footer);
// Страницы сайта
const pages = {
  Головна: {
    title: 'Вітаємо вас на сайті ФК Харків',
    text: ` <div style="text-align:center;">
      <h3 style="color:rgb(139, 0, 0);">🔥ФК Харків - це більше ніж футбол</h3>
      <p style="font-size:18px;">Це пристрасть, боротьба, перемоги та емоції. Ми - Харків, Ми - Сила!</p>
      <p><strong>Приєднуйтесь до нас, слідкуйте за матчамі, купуйте квитки та підтримуйте команду!</strong></p>
      <p>❗ Цей сайт не є офіційним сайтом ФК Харків.</p>
      <button onclick="showPage('Квитки')" class="shop-btn">🎟️ Купити квитки на матч!</button>
      <button onclick="showPage('Новини')" class="shop-btn">📰 Читайте новини</button>
      <button onclick="showPage('Команда')" class="shop-btn">👥 Команда</button>
      <img src="https://i.ytimg.com/vi/XR_UdcZ7Bos/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEyhHMA8=&rs=AOn4CLD-grdVtkHjakE1XgCiR3nxvyhCYw"
     style="max-width:100%; border-radius:10px; margin:20px auto; display:block;">
    </div>`
  },
  Новини: { title: `Новини ФК Харків` },
  Клуб: {
  title: `Клуб - ФК Харків`,
  text: `
  <h3>ФК «Харків» — амбітний український футбольний клуб, який стрімко розвивається та представляє місто Харків у вищому дивізіоні українського футболу.</h3>

  <p>Футбольний клуб «Харків» було засновано у 2016 році. Після зникненя легендарного Металіста з мапи україньского футболу, у 2016 році був заснований Металіст 1925 Харків</p>

  <h4>🏆 Досягнення:</h4>
  <ul>
    <li>5 місце в УПЛ - 2025/26</li>
    <li>Вихід до 1/2 фіналу кубка України - 2025/26</li>
    <li>2 разовий бронзовий призер першої ліги - 2020/21 та 2024/25</li>
  </ul>

  <h4>Клуб сьогодні:</h4>
  <ul>
    <li>Місто: Харків</li>
    <li>Стадіон: Металіст </li>
    <li>Головний тренер: Младен Бартулович</li>
    <li>Клуб активно розвиває інфраструктуру та академію</li>
    <li>Амбіція клубу — найвищі місця в УПЛ</li>
  </ul>
  `
},
Інфраструктура: {
  text: `
  <h2>Стадіон Металіст</h2>
  <p>Домашній стадіон ФК Харків - стадіон Металіст - був відкритий у 1926 році. У 2007-09 роках була реконструія. Наразі Харків грає свої домашні матчі на Арені Лівій Берег через війну.</p>
  <h4>Місткість та характеристики:</h4>
  <ul>
  <li>Місткість: 40 000 глядачів</li>
  <li>Тип поля: натуральне поле</li>
  <li>Розтошування: Харків, Україна</li>
  <li>Рік видкриття: 1926</li>
  </ul>

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTnHrscjj7F3GHX3D-IwSV6PsthEzjV2uCcSO-rOETXEsTq1Hn-yGcQ0&s=10" style="width:550px;">

  <br>

  <h2>Тренерувальна база</h2>
  <p>Тренерувальна база Високий - була із найсучасніших в України. Була відкрита в 2009 році. У 2022 році баз пострадала через обстріл.</p>
  <h4>Характеристики</h4>
  <ul>
  <li>Кількість полів: 4</li>
  <li>Тип полів (4): натуральне поле</li>
  <li>Розтошування: Харківскя область, Україна</li>
  <li>Рік видкриття: 2009</li>
  </ul>

  <img src="https://isport.ua/i/63/25/60/2/6325602/image_main/f0bfc8601d944722cd31629f197909e7-resize_crop_1Xquality_100Xallow_enlarge_0Xw_1200Xh_630.jpg" style="width^550px;">
  `
},
Історія: {
  title: `Історія ФК «Харків» `,
  text: `
    <br>
    <img src="https://images.football.ua/i/news/630x373/582/582288.jpg"
         style="max-width:100%; border-radius:10px; display:block; margin:20px auto;">
    <br>

    <p>ФК «Харків» — футбольний клуб із багатою історією, який представляє місто Харків та весь регіон Харківщіни. Команда пройшла шлях від аматорів до сучасної Української Прем'єр-ліги.</p>

    <h4>Сезон 2016/17</h4>
    <p>Футбольний клуб «Металіст 1925» було засновано у 2016 році. Вже у першому році існуванння клуб виходить до другої ліги з першого місця.</p>

    <h4>Сезон 2017/18</h4>
    <p>Металіст 1925 дебютує у другій лізі України. Клуб займає 2 місце та підимається до Першої ліги.</p>

    <h4>Сезон 2018/19</h4>
    <p>Клуб грає у першій лізі України. Команда займає 4 місе, до підвішення не хватило пару очок.</p>

    <h4>Сезон 2019/20</h4>
    <p>Команда займає 7 місце у першій лізі України. е був нестабильний сезон, без боротьби за підйом до найвищого турнира України</p>
    <img class="news-img"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Rx8esEgLASJaC_j_xZdW-fBEtDbZnvVDch9PIi0ETjes6LlBaGcYzbUb&s=10g"
         title="ФК «Металіст 1925» у сезоні 2020/21">
    <h4>Сезон 2020/21</h4>
    <p>Металіст 1925 займає 3 сходнику першої ліги та виходить до УПЛ.</p>

    <h4>Сезон 2021/22</h4>
    <p>Команда займала 10 сходинку УПЛ після 18 турів, але через війну з росією сезон було дострочно завершено.</p>

    <h4>Сезон 2022/23</h4>
    <p>Перший повний сезон УПЛ під час війни. Металіст 1925 зайняв 12 сходинку та остався в УПЛ.</p>

    <h4>Сезон 2023/24</h4>
    <p>Дуже важкий сезон. Металіст 1925 займає 16 сходинку УПЛ та вилітає з УПл до перщої ліги</p>

    <h4>Сезон 2024/25</h4>
    <p>Команда починає новий сезон з метою відновлення та підйому в класифікації. Клуб займає 3 сходинку першої лиги та в стиках перемагає лівій берег та підимается до УПЛ.</p>
<img class="news-img" src="https://football24.ua/resources/photos/news/202512/915782.jpg?v=202512122628&q=85&output=webp" title="Металіст 1925 у сезоні 25/26">
    <h4>Сезон 2025/26</h4>
    <p>Металіст 1925 займає 5 сходинку УПЛ, це рекорд. Клуб також дойшов до півфіналу Кубка України. </p>

    <h4>Сезон 2026/27</h4>
    <p>Металіст 1925 перетворюється на ФК Харків.</p>
  `,
},
  Команда: { title: `Team` },
  Матчі: { 
    title: `Матчі`, 
    text:  `<p>Місце в УПЛ: сезон не почався</p><p>Місце в Кубку України: сезон не почався</p>`
  },
   Тренери: { title: `Coaches` },
 
Таблиця: {
  title: 'Таблиця',
  text: `
  <h4>УПЛ</h4>
  <div class="table-wrapper">
    <table class="league-table">
      <thead>
        <tr>
          <th>М</th>
          <th>КОМАНДА</th>
          <th>И</th>
          <th>В</th>
          <th>Н</th>
          <th>П</th>
          <th>З</th>
          <th>П</th>
          <th>О</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>1</td>
          <td class="team">Шахтар Донецьк</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>

        
         <tr>
          <td>2</td>
          <td class="team">ЛНЗ Черкаси</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>


    <tr>
          <td>3</td>
          <td class="team">Полісся Житомир</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>


         <tr>
          <td>4</td>
          <td class="team">Динамо Київ</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>


         <tr>
          <td>5</td>
          <td class="team">Кривбас</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>


   <tr class="highlight-kharkiv">
          <td>6</td>
          <td class="team">ФК Харків</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>

     <tr>
          <td>7</td>
          <td class="team">Колос Ковалівка</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>


           <tr>
          <td>8</td>
          <td class="team">Зоря Луганьск</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td>9</td>
          <td class="team">Карпати Львів</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>

  <tr>
          <td>10</td>
          <td class="team">Верес Рівне</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        
         <tr>
          <td>11</td>
          <td class="team">Епіцентр</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>

        
         <tr>
          <td>12</td>
          <td class="team">Кудрівка</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>


<tr>
          <td>13</td>
          <td class="team">Оболонь Київ</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>


        <tr>
          <td>14</td>
          <td class="team">Лівій Берег</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>



         <tr>
          <td>15</td>
          <td class="team">Буковина</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>

         <tr>
          <td>16</td>
          <td class="team">Чорноморець</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>

      </tbody>
    </table>
    </div>
  `
},
  Квитки: {
    title: `Купити квітки`,
    text: `Квитки на матч можно купити <a href="https://fckharkiv.com/tickets" target="_blank">тут</a>.<br><img src="https://fckharkiv.com/uploads/content/mediaAlbums/183/004-d-2026-07-16-t-22-37-17.webp">`
  },
  Магазин: {
    title: `Магазин`,
    text: `Магазин ФК Харків можно знайти <a href="https://fckharkiv.com/shop" target="_blank">тут</a>.<img src="https://static.champion.com.ua/champion/images/doc/a/6/274021/a64c55c95de516157988581a1ab96ab1.jpeg?w=760&q=90">`
  },
  Менеджмент: {
    title: "Менеджмент",
  },
  Результати: {
    title: "Результати",
  },


  
};

const menuGroups = {
  'Головна': [],
  'Клуб': ['Історія', 'Інфраструктура', 'Менеджмент',],
  'Матчі': ['Таблиця', 'Результати'],
  'Магазин': ['Квитки'],
  'Команда': ['Тренери',],  
};


// Результати
function showResults() {
  content.innerHTML = '<h2>Результати матчів</h2>';

  const grid = document.createElement('div');
  grid.className = 'matches-grid';

  if (!window.results || window.results.length === 0) {
    grid.innerHTML = '<p>Результатів ще нема</p>';
    content.appendChild(grid);
    return;
  }

  window.results.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    card.innerHTML = `
      <p><strong>📅 Дата:</strong> ${match.date}</p>
      <p><strong>⚔️ Суперник:</strong> ${match.opponent}</p>
      <p><strong>🎯 Рахунок:</strong> ${match.score}</p>
      <p><strong>📍 Місце:</strong> ${match.place}</p>
      <p><strong>🏆 Турнір:</strong> ${match.competition}</p>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);
}



// Создаем кнопки навигации + dropdown
// всі підсторінки з dropdown
const subPages = Object.values(menuGroups).flat();

for (const key in pages) {

  // ❌ не створюємо кнопку, якщо це підсторінка
  if (subPages.includes(key)) continue;


  const navItem = document.createElement('div');
  navItem.className = 'nav-item';

  const btn = document.createElement('button');
  btn.textContent = key;
  btn.className = 'nav-btn';

  btn.onclick = () => {
    document.querySelectorAll('.nav-btn')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');
    showPage(key);
  };

  navItem.appendChild(btn);

  // 🔽 dropdown як у Металіста
  // 🔽 dropdown як у Металіста
if (menuGroups[key]) {
  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';

  // Додаємо головну кнопку в підменю
  const mainItem = document.createElement('div');
  mainItem.className = 'dropdown-item';
  mainItem.textContent = key;
  mainItem.onclick = () => showPage(key);
  dropdown.appendChild(mainItem); // або dropdown.prepend(mainItem) якщо хочеш першою

  menuGroups[key].forEach(subPage => {
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.textContent = subPage;

    item.onclick = () => showPage(subPage);

    dropdown.appendChild(item);
  });

  navItem.appendChild(dropdown);
  nav.appendChild(navItem);
}
}


// Показ страницы
function showPage(pageKey) {
  const page = pages[pageKey];
  if (!page) return;

  content.innerHTML = '';

  if (pageKey === 'Команда') {
    showTeam();
    return;
  }
  if (pageKey === 'Новини') {
    showNews();
    return;
  }
  if (pageKey === 'Матчі') {
    showMatches();
    return;
  }
 if (pageKey === 'Тренери') {
    showCoaches(); 
    return;
  }
   if (pageKey === 'Легенди') {
    showLegends(); 
    return;
  }
  if (pageKey === 'Менеджмент') {
    showManagment(); 
    return;
  }
  if (pageKey === 'Результати') {
  showResults();
  return;
}
  const titleElem = document.createElement('h2');
  titleElem.textContent = page.title;
  content.appendChild(titleElem);

  if (page.text) {
    const textElem = document.createElement('div');
    textElem.innerHTML = page.text;
    content.appendChild(textElem);
  }
}

// легенди
function showLegends() {
  content.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Легенди ФК Шахтар';
  content.appendChild(title);

  const container = document.createElement('div');
  container.className = 'legends-container';

  window.legends.forEach(legend => {
    const card = document.createElement("div");
    card.className = "legend-card";

    card.innerHTML = `
      <img src="${legend.photo}" alt="${legend.name}">
      <h3>${legend.name}</h3>

      <p><strong>Національність:</strong> ${legend.nationality}</p>
      <p><strong>Вік:</strong> ${legend.age}</p>
      <p><strong>Позиція:</strong> ${legend.position}</p>

      <div class="legend-stats">
        <span>🏟️ ${legend.matches}</span>
        <span>⚽ ${legend.goals}</span>
        <span>🎯 ${legend.assist}</span>
      </div>
    `;

    container.appendChild(card);
  });

  content.appendChild(container);
}
// менеджмент
function showManagment() {
  content.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Менеджмент ФК Харків';
  content.appendChild(title);

  const container = document.createElement('div');
  container.className = 'legends-container';

  window.managment.forEach(person => {
    const card = document.createElement('div');
    card.className = 'legend-card';

    card.innerHTML = `
      <img src="${person.photo}" alt="${person.name}">
      <h3>${person.name}</h3>
      <p><strong>Роль:</strong> ${person.role}</p>
      <p><strong>Національність:</strong> ${person.nationality}</p>
      <p><strong>Вік:</strong> ${person.age}</p>
    `;

    container.appendChild(card);
  });

  content.appendChild(container);
}


// Функція інформації гравців 

function showPlayerDetails(player) {
  content.innerHTML = ''; // очищаємо контент

  const backBtn = document.createElement('button');
  backBtn.textContent = '← Повернутися';
  backBtn.className = 'back-btn';
  backBtn.onclick = showTeam;
  content.appendChild(backBtn);

  const title = document.createElement('h2');
  title.textContent = `${player.name}`;
  content.appendChild(title);

  const img = document.createElement('img');
  img.src = player.photo;
  img.alt = player.name;
  img.className = 'player-photo-large';
  img.style.maxWidth = '250px';
  img.style.borderRadius = '15px';
  img.style.display = 'block';
  img.style.margin = '20px auto';
  content.appendChild(img);

  const info = document.createElement('div');
  info.className = 'player-info';
  info.innerHTML = `
    <p><strong>Номер:</strong> ${player.number}</p>
    <p><strong>Позіція:</strong> ${player.position}</p>
    <p><strong>Вік:</strong> ${player.age}</p>
    <p><strong>Національність:</strong> ${player.nationality}</p>
    <h4>Статистика:</h4>
    <p>⚽ <strong>Голи:</strong> ${player.goals || "0"}</p>
    <p>👟 <strong>Передачі:</strong> ${player.assist || "0"}</p>
    <p>🏟️ <strong>Матчі:</strong> ${player.matches || "0"}</p>
  `;
  content.appendChild(info);
}


// Показ команды с разделами по позициям + тренеры
function showTeam() {
  content.innerHTML = ''; // очищаем перед выводом

  const title = document.createElement('h2');
  title.textContent = 'Команда';
  content.appendChild(title);

  // Категории игроков
  const groups = {
    'Воротарі': ['GK', 'Воротар'],
    'Захистники': ['DF', 'Захистник',],
    'Півзахісники': ['MF', 'Півзахисник'],
    'Нападники': ['FW', 'Нападник',]
  };

  // Перебор категорий
  for (const groupName in groups) {
    const groupTitle = document.createElement('h3');
    groupTitle.textContent = groupName;
    content.appendChild(groupTitle);

    const groupList = document.createElement('div');
    groupList.className = 'players-list';

    window.team
      .filter(player => groups[groupName].some(pos => player.position.includes(pos)))
      .forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';

        card.innerHTML = `
          <img src="${player.photo}" alt="${player.name}" class="player-photo" />
          <p><strong>#${player.number} ${player.name}</strong></p>
          <p>${player.position}</p>
        `;

        card.onclick = () => showPlayerDetails(player);
groupList.appendChild(card);

      });

    if (groupList.children.length > 0) {
      content.appendChild(groupList);
    }
  }
}
  // ---- Тренеры ----
 function showCoaches () {

    const coachesList = document.createElement('div');
    coachesList.className = 'coaches-list';

    window.coaches.forEach(coach => {
      const card = document.createElement('div');
      card.className = 'coach-card';

      card.innerHTML = `
        <img src="${coach.photo}" alt="${coach.name}" class="coach-photo" />
        <p><strong>${coach.coach}</strong></p>
        <p>${coach.name}</p>
        <p>Вік: ${coach.age}</p>
        <p><strong>Національність:</strong> ${coach.nationality}</p>

      `;

      coachesList.appendChild(card);
    });

    content.appendChild(coachesList);
  }


 
function showMatches() {
  content.innerHTML = '<h2>Матчі</h2>';

  // берем текст из pages
  const info = document.createElement('div');
  info.innerHTML = pages['Матчі'].text;
  content.appendChild(info);

  const grid = document.createElement('div');
  grid.className = 'matches-grid';

  if (!window.matches || window.matches.length === 0) {
    grid.innerHTML = '<p>Матчів ще нема</p>';
    content.appendChild(grid);
    return;
  }

  window.matches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'match-card';

    card.innerHTML = `
      <p><strong>📅 Дата:</strong> ${match.date}</p>
      <p><strong>⚔️ Суперник:</strong> ${match.opponent}</p>
      <p><strong>🕒 Час (УКР):</strong> ${match.time || "Час ще не відомо"}</p>
      <p><strong>📍 Місце: </strong> ${match.place}</p>
      <p><strong>🏆 Турнір:</strong> ${match.competition}</p>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);
}

// Новости
function showNews() {
  content.innerHTML = '<h2>Новини</h2>';

  const grid = document.createElement('div');
  grid.className = 'news-grid';

  // Сортируем новости: сначала закрепленные, потом остальные, внутри по дате
  const sortedNews = [...window.news].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date) - new Date(a.date); // по дате внутри групп
  });

  sortedNews.forEach(item => {
    const preview = document.createElement('div');
    preview.className = 'news-card';
    preview.onclick = () => showFullNews(item.id);

    preview.innerHTML = `
      <h3>${item.title}</h3>
      <p style="color: white;">${item.datum}</p>
      ${item.pinned ? '<p style="color: rgb(255, 215, 0)  ;">📌 Закріплено</p>' : ''}
    `;

    grid.appendChild(preview);
  });

  content.appendChild(grid);
}

function showFullNews(id) {
  const item = window.news.find(n => n.id === id);
  content.innerHTML = '';

  if (!item) {
    content.innerHTML = '<p>There is no news</p>';
    return;
  }

  const backBtn = document.createElement('button');
  backBtn.textContent = '← Назад';
  backBtn.className = 'back-btn';
  backBtn.onclick = showNews;
  content.appendChild(backBtn);

  const title = document.createElement('h2');
  title.textContent = item.title;
  content.appendChild(title);

  if (item.image) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.style.maxWidth = '100%';
    img.style.borderRadius = '10px';
    img.style.margin = '20px auto';
    img.style.display = 'block';
    content.appendChild(img);
  }

  const fullText = document.createElement('div');
  fullText.innerHTML = item.text;
  content.appendChild(fullText);
}




// Запуск - показываем главную страницу
showPage('Головна');
