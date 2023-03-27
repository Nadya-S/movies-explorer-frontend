const filterCards = (cardsList, searchText, isShort) => {
  let filteredCards = cardsList.filter((card) =>
    card.nameRU.toLowerCase().includes(searchText.toLowerCase())
  );

  if (isShort) {
    filteredCards = filteredCards.filter((card) => card.duration <= 40);
  }
  return filteredCards;
};

export default filterCards;
