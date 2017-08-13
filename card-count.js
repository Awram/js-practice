let count = 0;

const cardCount = function(card) {
  if (card <= 6) {
    count += 1;
  } else if (card === 7 || card == 8 || card == 9) {
    count = count;
  } else {
    count -= 1;
  }
  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

cardCount(3);
