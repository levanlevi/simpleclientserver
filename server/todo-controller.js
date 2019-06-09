function TodoController() {
  function get(dateTo) {

    const items = [{
      id: 1, text: "Wash"
    }, {
      id: 2, text: "Go out"
    }, {
      id: 3, text: "Have breakfast"
    }, {
      id: 4, text: "Count numbers"
    }, {
      id: 5, text: "Play freesbee"
    }];

    console.log(dateTo);

    return items;
  }

  function add(item) {

  }

  return {
    get: get,
    add: add
  };
};

module.exports = TodoController;