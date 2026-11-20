// Все игры скрыты. Включайте нужные через enabled: true.
window.GAMES = [
  {
    name: "Geometry Dash", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Minecraft", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "MooMoo.io", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Brawl Stars", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
    platform: "", // Android, PC, PS3 и т.д.
    status: "", // playing = играю; paused = пауза; dropped = забросил; completed = прошёл; occasionally = иногда; planned = в планах
    statusDescription: "", // Почему играю или перестал играть
    description: "", // История, достижения, описание
    stats: [ // Статистика: пустые значения скрыты; можно добавлять любые показатели
      { label: "Кубки", value: "" }, // Впиши число или текст
      { label: "Максимум кубков", value: "" }, // Впиши число или текст
      { label: "Ранг", value: "" }, // Впиши число или текст
      { label: "Рейтинговая лига", value: "" }, // Впиши число или текст
      { label: "Победы 3 на 3", value: "" }, // Впиши число или текст
      { label: "Бойцы", value: "" }, // Впиши число или текст
    ],
    buttons: [
      // { label: "Мой профиль", url: "" },
      // { label: "Добавить в друзья", url: "" }
    ]
  },
  {
    name: "Clash Royale", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Clash of Clans", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Roblox", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Terraria", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Stardew Valley", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Among Us", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Genshin Impact", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Honkai: Star Rail", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Zenless Zone Zero", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "PUBG Mobile", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Call of Duty: Mobile", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Standoff 2", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Critical Ops", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Free Fire", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Mobile Legends", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "League of Legends", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Dota 2", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Counter-Strike 2", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Valorant", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Fortnite", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Rocket League", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Overwatch 2", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Team Fortress 2", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Apex Legends", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "GTA V", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "GTA San Andreas", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Red Dead Redemption 2", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Need for Speed", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Forza Horizon 5", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Euro Truck Simulator 2", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "The Sims 4", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Portal 2", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Half-Life 2", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Left 4 Dead 2", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Subnautica", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Don't Starve Together", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Hollow Knight", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Celeste", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Undertale", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Deltarune", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Cuphead", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Plants vs. Zombies", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Bloons TD 6", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "osu!", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Chess.com", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Lichess", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Krunker.io", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Shell Shockers", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Diep.io", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Agar.io", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Slither.io", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Surviv.io", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "ZombsRoyale.io", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Skribbl.io", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Fall Guys", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  },
  {
    name: "Trackmania", // Название игры
    enabled: false, // true = показать, false = скрыть
    image: "", // Фото: images/game.jpg или https://...
    nickname: "", // Игровой ник
    playerId: "", // Игровой тег или ID (например #FJHBSU363), пустое поле скрыто
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
    ]
  }
];
