// Все игры скрыты. Включайте нужные через enabled: true.
window.GAMES = [
  {
    name: "Geometry Dash", // Название игры
    icon: "images/icons/geometry-dash.svg", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Звёзды", value: "" }, // Впиши число или текст
      { label: "Луны", value: "" }, // Впиши число или текст
      { label: "Демоны", value: "" }, // Впиши число или текст
      { label: "Секретные монеты", value: "" }, // Впиши число или текст
      { label: "Пользовательские монеты", value: "" }, // Впиши число или текст
      { label: "Алмазы", value: "" }, // Впиши число или текст
      { label: "Создательские очки", value: "" }, // Впиши число или текст
      { label: "Глобальный рейтинг", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Minecraft", // Название игры
    icon: "images/icons/minecraft.svg", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Дни в мире", value: "" }, // Впиши число или текст
      { label: "Версия", value: "" }, // Впиши число или текст
      { label: "Режим", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "MooMoo.io", // Название игры
    icon: "images/icons/moomooio.svg", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Убийства", value: "" }, // Впиши число или текст
      { label: "Смерти", value: "" }, // Впиши число или текст
      { label: "K/D", value: "" }, // Впиши число или текст
      { label: "Рекорд", value: "" }, // Впиши число или текст
      { label: "Часы игры", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    "name": "Brawl Stars",
    "icon": "images/icons/brawl-stars.svg",
    "enabled": true,
    "image": "",
    "nickname": "toolgool:YouTub",
    "playerId": "#YRJ9RYOYU",
    "supercellId": "Toolgool2023",
    "identifiers": [
      {
        "label": "Тип аккаунта",
        "value": "Твинк"
      }
    ],
    "platform": "Android",
    "status": "occasionally",
    "statusDescription": "Сейчас играю редко из-за сильных лагов. Производительность моего телефона не позволяет комфортно играть.",
    "description": "Раньше у меня был основной аккаунт с примерно 100 000 кубков. К сожалению, мой Supercell ID взломали, из-за чего я потерял доступ к аккаунту. После этого я создал дополнительный аккаунт, который сейчас представлен на сайте.",
    "stats": [
      {
        "icon": "🏆",
        "label": "Кубки",
        "value": 8638
      },
      {
        "icon": "🎮",
        "label": "Бойцы",
        "value": "51/108"
      },
      {
        "icon": "⚔️",
        "label": "Текущий рейтинг",
        "value": 750
      },
      {
        "icon": "👑",
        "label": "Максимальный рейтинг",
        "value": 2043
      },
      {
        "icon": "💎",
        "label": "Прайм",
        "value": 2
      }
    ],
    "buttons": [],
    "accounts": []
  },
  {
    name: "Clash Royale", // Название игры
    icon: "images/icons/clash-royale.svg", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Кубки", value: "" }, // Впиши число или текст
      { label: "Максимум кубков", value: "" }, // Впиши число или текст
      { label: "Арена", value: "" }, // Впиши число или текст
      { label: "Лига", value: "" }, // Впиши число или текст
      { label: "Уровень короля", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Clash of Clans", // Название игры
    icon: "images/icons/clash-of-clans.svg", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Кубки", value: "" }, // Впиши число или текст
      { label: "Максимум кубков", value: "" }, // Впиши число или текст
      { label: "Ратуша", value: "" }, // Впиши число или текст
      { label: "Лига", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Roblox", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Terraria", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Stardew Valley", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Among Us", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Genshin Impact", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Honkai: Star Rail", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Zenless Zone Zero", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "PUBG Mobile", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Call of Duty: Mobile", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Standoff 2", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Critical Ops", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Free Fire", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Mobile Legends", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "League of Legends", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Dota 2", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Counter-Strike 2", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Valorant", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Fortnite", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Rocket League", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Overwatch 2", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Team Fortress 2", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Apex Legends", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "GTA V", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "GTA San Andreas", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Red Dead Redemption 2", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Need for Speed", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Forza Horizon 5", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Euro Truck Simulator 2", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "The Sims 4", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Portal 2", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Half-Life 2", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Left 4 Dead 2", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Subnautica", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Don't Starve Together", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Hollow Knight", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Celeste", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Undertale", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Deltarune", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Cuphead", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Plants vs. Zombies", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Bloons TD 6", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "osu!", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Chess.com", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг блиц", value: "" }, // Впиши число или текст
      { label: "Рейтинг рапид", value: "" }, // Впиши число или текст
      { label: "Рейтинг пуля", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Lichess", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг блиц", value: "" }, // Впиши число или текст
      { label: "Рейтинг рапид", value: "" }, // Впиши число или текст
      { label: "Рейтинг пуля", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Krunker.io", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Shell Shockers", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Diep.io", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Agar.io", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Slither.io", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Surviv.io", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "ZombsRoyale.io", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Skribbl.io", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Fall Guys", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    name: "Trackmania", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Рейтинг", value: "" }, // Впиши число или текст
      { label: "Уровень", value: "" }, // Впиши число или текст
      { label: "Победы", value: "" }, // Впиши число или текст
      { label: "Монеты", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ],
    accounts: [ // Дополнительные аккаунты, добавляй сколько нужно
      {
        enabled: false, // true = показать твинк
        name: "", // Название аккаунта, например Твинк №1
        nickname: "", // Ник твинка
        playerId: "", // Игровой ID
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
        image: "", // Скриншот профиля
        status: "", // playing / paused / dropped / occasionally
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  }
];

// ПРИМЕРЫ (не публикуются автоматически; данные вымышленные)
// Brawl Stars: playerId: "#EXAMPLE", supercellId: "ExamplePlayer",
// identifiers: [{ label: "Клуб", value: "Example Club" }],
// buttons: [{ label: "Добавить в друзья", url: "" }], // Вставь свою ссылку из игры
// stats: [{ icon: "🏆", label: "Кубки", value: 25000 }]
// Geometry Dash: nickname: "ExamplePlayer", image: "images/profiles/geometry-dash.svg",
// stats: [{ icon: "😈", label: "Демоны", value: 120 }, { icon: "⭐", label: "Звёзды", value: 5000 }]
// Minecraft: identifiers: [{ label: "Xbox Gamertag", value: "ExamplePlayer" }]
