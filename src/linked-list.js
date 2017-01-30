const Node = require('./node');

class LinkedList {
    
    function constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;

    }

    function append(data) {
var node = this._createNewNode(data);

    if (this._head === null) {

      // we are empty, so this is the first node
      // use the same logic as append
      return this.append(data);
    } else {

      // place before head
      this._head.prev = node;
      node.next = this._head;
      this._head = node;
    }

    // update count
    this._length++;

    return node;
  };
    }

   function head() {
    return this._head;
    }

   function tail() {
    return this._tail;
    }

   function at(index) {
      if (index >= 0 && index < this._length) {
      var node = this._head;
      while (index--) {
      node = node.next;
      }
      return node;
    }

    };

    function insertAt(index, data) {}

   function isEmpty() {
        if (this._length=0) {
      return true;
    } else {
      return false;
  }

    }

    function clear() {
         while (!this.isEmpty()) {
                this.remove();
            }
    }

    function deleteAt(index) {

    }

   function  reverse() {}

    function indexOf(data) {}
}

module.exports = LinkedList;
