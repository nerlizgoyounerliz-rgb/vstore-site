/**
 * Vstore — прайс-лист
 *
 * brand  — строка в preview (Fortnite, Discord…)
 * title  — название тарифа (Crew, Nitro Basic…)
 * name   — полное имя для Telegram-заказа
 */
const VOLTIX_PRICES = {
  groups: [
    {
      id: "gaming",
      name: "Gaming Services",
      tagline: "Fortnite · Steam · Xbox · PlayStation",
      description: "Игровые подписки и сервисы",
      defaultMethod: "Telegram",
      defaultGuarantee: "Замена",
      products: [
        {
          brand: "Fortnite",
          title: "Crew",
          name: "Fortnite Crew",
          price: "279 ₽",
          note: "1 месяц",
          delivery: "5–15 мин",
        },
      ],
    },
    {
      id: "subscriptions",
      name: "Subscriptions",
      tagline: "Discord · ChatGPT · Spotify · и другие",
      description: "Подписки на сервисы",
      defaultMethod: "Telegram",
      defaultGuarantee: "Замена",
      products: [
        { brand: "Discord", title: "Nitro Basic", name: "Discord Nitro Basic", price: "179 ₽", note: "1 месяц", delivery: "5–15 мин" },
        { brand: "Discord", title: "Nitro Basic", name: "Discord Nitro Basic", price: "1249 ₽", note: "12 месяцев", delivery: "5–15 мин" },
        { brand: "Discord", title: "Nitro Full", name: "Discord Nitro Full", price: "299 ₽", note: "1 месяц", delivery: "5–15 мин" },
        { brand: "Discord", title: "Nitro Full", name: "Discord Nitro Full", price: "2849 ₽", note: "12 месяцев", delivery: "5–15 мин" },
        { brand: "ChatGPT", title: "Plus", name: "ChatGPT Plus", price: "2099 ₽", note: "1 месяц", delivery: "до 30 минут" },
        { brand: "ChatGPT", title: "Go", name: "ChatGPT Go", price: "649 ₽", note: "1 месяц", delivery: "до 30 минут" },
      ],
    },
  ],
};
