function getCardValue(card) {
  const rank = card.slice(0, -1);

  if (rank >= 2 && rank < 10) return Number(rank);
  if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") return 10;
  if (rank === "A") return 11;
  else return "Invalid card rank";
}

module.exports = getCardValue;
