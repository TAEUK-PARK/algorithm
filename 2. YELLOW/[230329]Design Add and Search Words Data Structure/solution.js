/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 *
 */

const WordDictionary = function () {
  this.wordsMap = new Map();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  const length = word.length;

  if (!this.wordsMap.has(length)) {
    this.wordsMap.set(length, new Set());
  }

  this.wordsMap.get(length).add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const length = word.length;
  const set = this.wordsMap.get(length);

  if (!set) return false;

  if (word.indexOf(".") === -1) {
    return set.has(word);
  }

  for (const w of set) {
    let match = true;
    for (let i = 0; i < length; i++) {
      if (w[i] !== word[i] && word[i] !== ".") {
        match = false;
        break;
      }
    }
    if (match) return true;
  }

  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
