const Node = require('./node'); 

class LinkedList { 

constructor() { 
this.length = 0; 
this._head = null; 
this._tail = null; 
} 

append(data) { 
this.insert(this.length - 1, data, this.linkAfter); 
if (this._tail.next != null) { 
this._tail = this._tail.next; 
} 
return this; 
} 

head() { 
return this._head == null ? null : this._head.data; 
} 

tail() { 
return this._tail == null ? null : this._tail.data; 
} 

nodeAt(index) { 
if (index >= 0 && index < this.length) { 
let node, iterate; 
if (index > this.length / 2) { 
node = this._tail; 
iterate = function (node) { 
return node.prev; 
}; 
index = this.length - 1 - index; 
} else { 
node = this._head; 
iterate = function (node) { 
return node.next; 
}; 
} 
while (index--) { 
node = iterate(node); 
} 
return node; 
} 
} 

at(index) { 
let node = this.nodeAt(index); 
return node == null ? null : node.data; 
} 

insertAt(index, data) { 
this.insert(index, data, this.linkBefore); 
return this; 
} 

linkBefore(node, newNode) { 
if (newNode == null) { 
this._head = node; 
return this; 
} else { 
newNode.prev = node.prev; 
newNode.next = node; 
} 
if (node.prev != null) { 
node.prev.next = newNode; 
} 
node.prev = newNode; 
} 

linkAfter(node, newNode) { 
if (newNode == null) { 
this._tail = node; 
return this; 
} else { 
newNode.prev = node; 
newNode.next = node.next; 
} 
if (node.next != null) { 
node.next.prev = newNode; 
} 
node.next = newNode; 
} 

insert(index, data, linkingFuncion) { 
let node = new Node(data); 
if (this.isEmpty()) { 
this._tail = this._head = node; 
} else { 
let currentNode = this.nodeAt(index); 
if (currentNode != null) { 
linkingFuncion(currentNode, node); 
} 
} 
this.length++; 
return this; 
} 

isEmpty() { 
return this.length == 0; 
} 

clear() { 
this._head = this._tail = null; 
this.length = 0; 
return this; 
} 

deleteAt(index) { 
let deletedNode = this.nodeAt(index); 
if (deletedNode != null) { 
if (index > 0 && index < this.length - 1 ){ 
deletedNode.prev.next = deletedNode.next; 
deletedNode.next.prev = deletedNode.prev; 
deletedNode.next = null; 
deletedNode.prev = null; 
this.length--; 
return this; 
} 
if (index == 0) { 
this.linkBefore(this._head.next, null); 

} 
if (index == this.length - 1) { 
this.linkAfter(this._tail.prev, null); 
} 
this.length--; 
} 
return this; 
} 

reverse() { 
let reverseList = new LinkedList(); 
for (let i = this.length - 1; i >=0 ; i--) { 
reverseList.append(this.at(i)); 
} 
this._head = reverseList._head; 
this._tail = reverseList._tail; 
return this; 
} 

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