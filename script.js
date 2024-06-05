const quotes = [
  "Ты не пройдёшь... мимо этого Кольца",
  "Братство Сердец",
  "Мой хоббит, моё Сокровище",
  "Властелин...моего Сердца",
  "Сэм, я нашла Кольцо...для тебя!",
  "Не все Кольца ведут в Мордор, некоторые - к Алтарю",
  "Фродо, я думаю, нам нужно оставить это Кольцо здесь",
  "Твоя прелесть: Кольцо, которое не захочется бросать в вулкан",
  "Легенда о кольце: Как выбрать украшение, чтобы даже Сэм был доволен",
];

function displayRandomQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

window.addEventListener("load", displayRandomQuote);