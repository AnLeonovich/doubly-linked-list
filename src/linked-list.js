const Node = require('./node');

class LinkedList {
    
    constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
    }

   append(data) {
    let node = NewNode(data);

    if (this._head != null) {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    } else {   
      this._tail = node;
      this._head = node;
    }

    this._length++;

    return this;
    }

   head() {
    return this._head.data;
    }

   tail() {
    return this._tail.data;
    }

   at(index) {
      if (index >= 0 && index < this._length) {
      let node = this._head;
      while (index--) {
      node = node.next;
      }
      return node.data;
    }

    };

   insertAt(index, data) {
    let node = new Node(data),
        currentNode = this.head,
        count = 0;
    if (!currentNode) {
        this.head = node;
        this._length++;

        return this;
    } else {

    while (count < index) {
        currentNode = currentNode.next;
        count++; }
    node.prev = currentNode.prev;
    node.next = currentNode;
    currentNode.prev = node;
    }
    this._length++;

    return this;

   }

   isEmpty() {
    if (this._length==0) {
    return true;
    } else {
    return false;
  }

    }

    clear() {
         while (!this.isEmpty()) {
                this.remove();
            }
    }

   deleteAt(index) {
    
    var currentNode = this.head
    var count = 0;

    while (count < index) {
            currentNode = currentNode.next;
            count++; }

        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;

    this._length++;

    return this;

}
   reverse() {}

   indexOf(data) {
    var currentNode = this._head,
            count = 0;

        while (count < this.length) {
            if (currentNode.data == data) {
                return count;
            }
            currentNode = currentNode.next;
            count++;
        }
        return -1;
    }
   
}

module.exports = LinkedList;
