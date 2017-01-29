const Node = require('./node');

class LinkedList {
    constructor() {}

    append(data) {

        
        this.addAtEnd = function (val) {
        if (this.tail === null) {  //If first node
            this.tail = new Node(val);
            this.head = this.tail;
        } else {
            var temp = new Node(val);
            temp.prev = this.tail;
            this.tail.next = temp;
            this.tail = temp;
        }
    };
    }

    head() {}

    tail() {}

    at(index) {

    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1-ый случай: неверная позиция 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: верная позиция 
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
    }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;

function LinkedList() {
    this.head = null;
    this.tail = null;