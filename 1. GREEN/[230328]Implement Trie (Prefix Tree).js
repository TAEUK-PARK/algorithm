/**
 * 난이도:MEDIUM
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 *
 */
const Trie = function () {
  this.wordsSet = new Set();
  this.prefixSet = new Set();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (this.wordsSet.has(word)) return;
  this.wordsSet.add(word);

  if (!this.prefixSet.has(word[0])) {
    for (let i = 0; i < word.length; i++) {
      this.prefixSet.add(word.slice(0, i + 1));
    }
    return;
  }

  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    const prefix = word.slice(0, mid + 1);

    if (this.prefixSet.has(prefix)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  for (let i = left; i < word.length; i++) {
    this.prefixSet.add(word.slice(0, i + 1));
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return this.wordsSet.has(word);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.prefixSet.has(prefix);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
