function high(x) {
  function getScore(word, alphabet) {
    let score = 0;

    word.split("").forEach(letter => {
      let value =
        alphabet.indexOf(letter) > 0 ? alphabet.indexOf(letter) + 1 : 0;
      score += value;
    });

    return score;
  }

  const wordsArray = x.split(" ");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let highScore = getScore(wordsArray[0], alphabet);
  let highScoreWord = wordsArray[0];

  wordsArray.forEach(word => {
    let score = getScore(word, alphabet);

    if (score > highScore) {
      highScore = score;
      highScoreWord = word;
    }
  });

  return highScoreWord;
}
