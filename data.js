// Все игры скрыты. Включайте нужные через enabled: true.
window.GAMES = [
  {
    "name": "Geometry Dash",
    "icon": "",
    "enabled": true,
    "image": "",
    "nickname": "TOOLGOOL2023",
    "playerId": "",
    "platform": "",
    "status": "occasionally",
    "statusDescription": "Сейчас захожу значительно реже.",
    "description": "Играю в Geometry Dash уже около 10 лет. Основная специализация: триггеры, создание игровых механик, сложных систем и интерактивных уровней. Занимаюсь разработкой боссфайтов, платформеров, мини-игр и оптимизацией конструкций в редакторе.",
    "stats": [
      {
        "icon": "📅",
        "label": "Стаж",
        "value": "≈ 10 лет"
      },
      {
        "icon": "⭐",
        "label": "Звёзды",
        "value": 2837
      },
      {
        "icon": "🌙",
        "label": "Луны",
        "value": 0
      },
      {
        "icon": "🟡",
        "label": "Секретные монеты",
        "value": 104
      },
      {
        "icon": "⚪",
        "label": "Пользовательские монеты",
        "value": 155
      },
      {
        "icon": "😈",
        "label": "Демоны",
        "value": 122
      }
    ],
    "buttons": [],
    "accounts": []
  },
  {
    "name": "Minecraft",
    "icon": "",
    "enabled": true,
    "image": "",
    "nickname": "Toolgool",
    "platform": "Android · Java Edition",
    "status": "playing",
    "statusDescription": "Играю на телефоне через Zalith Launcher. Можем поиграть вместе по сети.",
    "description": "Играю в Minecraft уже около 10 лет. Предпочитаю версию 1.12.2, использую OptiFine, Forge и Vanilla.",
    "stats": [
      {
        "label": "Стаж",
        "value": "≈ 10 лет"
      },
      {
        "label": "Версия",
        "value": "1.12.2"
      },
      {
        "label": "FPS",
        "value": "40-150"
      },
      {
        "label": "Лаунчер",
        "value": "Zalith Launcher"
      },
      {
        "label": "Тип аккаунта",
        "value": "Локальный"
      },
      {
        "label": "Клиенты",
        "value": "OptiFine / Forge / Vanilla"
      },
      {
        "label": "Устройство",
        "value": "Redmi 12C"
      },
      {
        "label": "Мультиплеер",
        "value": "Доступен"
      }
    ],
    "buttons": [],
    "accounts": []
  },
  {
    name: "MooMoo.io", // Название игры
    icon: "", // Путь к иконке: images/icons/название.svg
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
        supercellId: "", // Публичный Supercell ID, НЕ email
        identifiers: [], // Дополнительные ID: [{ label: "Steam ID", value: "" }]
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    "name": "Brawl Stars",
    "icon": "",
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
    "status": "paused",
    "statusDescription": "Сейчас не играю из-за сильных лагов. Производительность моего телефона не позволяет комфортно играть.",
    "description": "Играю с 2017 года. Ранее у меня был основной аккаунт с примерно 100 000 кубков. После взлома Supercell ID я потерял к нему доступ и создал дополнительный аккаунт, который сейчас представлен на сайте.",
    "stats": [
      { "icon": "📅", "label": "Играю с", "value": "2017 года" },
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
    "name": "Clash Royale",
    "icon": "",
    "enabled": true,
    "image": "",
    "nickname": "TL I TOOLGOOL",
    "playerId": "#VRC92CCVG",
    "supercellId": "",
    "identifiers": [
      {
        "label": "Клан",
        "value": "TL I Prime"
      },
      {
        "label": "Должность",
        "value": "Глава"
      }
    ],
    "platform": "Android",
    "status": "playing",
    "statusDescription": "Активно играю в Clash Royale.",
    "description": "",
    "stats": [
      {
        "icon": "🏆",
        "label": "Кубки",
        "value": 5371
      },
      {
        "label": "Арена",
        "value": 15
      },
      {
        "label": "Победы",
        "value": 340
      },
      {
        "icon": "🔥",
        "label": "Серия побед",
        "value": 6
      },
      {
        "label": "Рейтинговая лига",
        "value": "Мастер I"
      },
      {
        "label": "Тактическое объединение",
        "value": "Бронзовая I"
      },
      {
        "label": "Тактический рейтинг",
        "value": 73
      }
    ],
    "buttons": [],
    "accounts": []
  },
  {
    "name": "Clash of Clans",
    "icon": "",
    "enabled": true,
    "image": "",
    "nickname": "『TL』 Минджун",
    "playerId": "#CLYG9V90U",
    "supercellId": "",
    "identifiers": [
      {
        "label": "Клан",
        "value": "HEROES"
      },
      {
        "label": "Должность",
        "value": "Соруководитель"
      }
    ],
    "platform": "Android",
    "status": "paused",
    "statusDescription": "Перестал играть совсем недавно. После масштабных обновлений производительность игры значительно ухудшилась. На моём Redmi 12C частота кадров практически не превышает 2–4 FPS, из-за чего комфортно играть стало невозможно.",
    "description": "Играю с 2020 года. Изначально этот аккаунт я развивал для другого человека, поэтому в нике указано имя Минджун. Позже выяснилось, что аккаунт ему больше не нужен, поскольку он создал новый. В итоге я оставил этот аккаунт себе.",
    "stats": [
      { "icon": "📅", "label": "Играю с", "value": "2020 года" },
      {
        "icon": "⭐",
        "label": "Уровень",
        "value": 140
      },
      {
        "icon": "🛡️",
        "label": "Уровень клана",
        "value": 14
      },
      {
        "icon": "⚔️",
        "label": "Боевые звёзды",
        "value": 314
      },
      {
        "icon": "🏆",
        "label": "Текущая лига",
        "value": "П.Е.К.К.А."
      },
      {
        "label": "Уровень лиги",
        "value": 23
      },
      {
        "label": "Лучший итог",
        "value": "22-е место"
      },
      {
        "label": "Пожертвовано войск",
        "value": 231
      }
    ],
    "buttons": [],
    "accounts": []
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
        statusDescription: "", // Описание активности
        description: "", // Информация об аккаунте
        stats: [{ label: "Кубки / рейтинг", value: "" }], // Любая статистика
        buttons: [{ label: "Добавить в друзья", url: "" }] // Ссылка
      }
    ]
  },
  {
    "name": "Chess.com",
    "icon": "",
    "enabled": true,
    "image": "",
    "nickname": "TL-Toolgool 🇰🇬 ‼️",
    "playerId": "@Toolgool",
    "platform": "Android",
    "status": "playing",
    "statusDescription": "Часто захожу и играю по настроению, преимущественно для удовольствия.",
    "description": "Качество моей игры сильно зависит от настроения, концентрации и желания играть. Когда действительно увлечён партией, играю значительно лучше, а в остальных случаях могу допускать много ошибок и зевков. Не гонюсь за рейтингом Эло и чаще играю по фану.",
    "stats": [
      {
        "icon": "⏱️",
        "label": "Рапид",
        "value": 873
      },
      {
        "icon": "⚡",
        "label": "Блиц",
        "value": 702
      },
      {
        "icon": "🔥",
        "label": "Серия активности",
        "value": "12 дней"
      },
      {
        "label": "Регистрация",
        "value": "09.11.2026"
      },
      {
        "label": "Лига",
        "value": "Stone"
      }
    ],
    "buttons": [
      {
        "label": "Мой профиль",
        "url": "https://www.chess.com/member/toolgool"
      }
    ],
    "accounts": []
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
    status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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
        status: "", // playing = играю; occasionally = могу поиграть с близкими; paused = не играю (причину укажи ниже)
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

// Мой телефон: характеристики модели, память уточни для своей версии
window.GAMING_DEVICE={name:"Redmi 12C",specs:[{label:"Модель",value:"Xiaomi Redmi 12C"},{label:"Чипсет",value:"MediaTek Helio G85 · 12 нм"},{label:"Процессор",value:"8 ядер · 2× Cortex-A75 2.0 ГГц + 6× Cortex-A55 1.8 ГГц"},{label:"Графика",value:"Mali-G52 MC2"},{label:"Экран",value:"6.71″ IPS LCD"},{label:"Разрешение",value:"1650 × 720 · HD+"},{label:"Частота обновления",value:"60 Гц"},{label:"Соотношение сторон",value:"20.6:9"},{label:"Плотность",value:"≈268 ppi"},{label:"Аккумулятор",value:"5000 мА·ч"},{label:"Зарядка",value:"10 Вт · micro-USB"},{label:"Основная камера",value:"50 Мп + вспомогательный сенсор"},{label:"Фронтальная камера",value:"5 Мп"},{label:"Видеосъёмка",value:"1080p · 30 кадров/с"},{label:"Связь",value:"4G LTE · Wi-Fi 2.4 ГГц · Bluetooth 5.1"},{label:"Навигация",value:"GPS / GLONASS / Galileo / BDS"},{label:"Разъёмы",value:"3.5 мм · micro-USB"},{label:"Сканер отпечатка",value:"На задней панели"},{label:"Карта памяти",value:"microSD, отдельный слот"},{label:"Размеры",value:"168.76 × 76.41 × 8.77 мм"},{label:"Вес",value:"≈192 г"},{label:"Оперативная память",value:"Конфигурация не указана"},{label:"Накопитель",value:"Конфигурация не указана"}]};

// Реальные изображения из папок images/icons и images/profiles.
{ const game=window.GAMES.find(g=>g.name==="Geometry Dash"); if(game){ game.icon="images/icons/GeometryDash_icon.jpg"; game.image="images/profiles/GeometryDash.jpg"; } }
{ const game=window.GAMES.find(g=>g.name==="Minecraft"); if(game){ game.icon="images/icons/Minecraft_icon.jpg"; game.image="images/profiles/ZalithLauncher.jpg"; } }
{ const game=window.GAMES.find(g=>g.name==="Brawl Stars"); if(game){ game.icon="images/icons/BrawlStart_icon.jpg";  } }
{ const game=window.GAMES.find(g=>g.name==="Clash Royale"); if(game){ game.icon="images/icons/ClashRoyale_icon.jpg"; game.image="images/profiles/ClashRoyale.jpg"; } }
{ const game=window.GAMES.find(g=>g.name==="Clash of Clans"); if(game){ game.icon="images/icons/ClashOfClans_logo.jpg";  } }
{ const game=window.GAMES.find(g=>g.name==="Chess.com"); if(game){  game.image="images/profiles/Chess.com.jpg"; } }
{ const game=window.GAMES.find(g=>g.name==="Hay Day"); if(game){ game.icon="images/icons/HayDay_logo.jpg";  } }

{const chess=window.GAMES.find(g=>g.name==="Chess.com");if(chess)chess.icon="images/icons/Chess.com_icon.jpg";}
