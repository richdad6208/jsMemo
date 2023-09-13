const memo = require("./memo.json");

const list = () => {
  console.log(memo[0].content);
};

module.exports = list;

list();
