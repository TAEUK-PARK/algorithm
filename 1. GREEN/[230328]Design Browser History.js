/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/design-browser-history/
 *
 * @param {string} homepage
 */
const BrowserHistory = function (homepage) {
  this.history = [homepage];
  this.index = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  const newIndex = this.index + 1;
  this.history.splice(newIndex, this.history.length - newIndex, url);
  this.index = newIndex;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  const newIndex = this.index - steps;
  this.index = newIndex >= 0 ? newIndex : 0;
  return this.history[this.index];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  const newIndex = this.index + steps;
  const pivot = this.history.length - 1;
  this.index = newIndex <= pivot ? newIndex : pivot;
  return this.history[this.index];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
