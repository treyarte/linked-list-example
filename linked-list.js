/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node = new Node(val);
    if(this.head === null) this.head = node
    if(this.tail !== null)this.tail.next = node
    
    this.tail = node;

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val);
    if(this.tail === null) this.tail = node
    if(this.head !== null) node.next = this.head
    this.head = node;
    this.length ++
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head.next === null){
      const removedHead = this.head;
      this.head = null
      this.tail = null
      this.length --;
      return removedHead.val

    } 
    
    let removedNode = this.head;
    let prevNode = null
    while(removedNode.next !== null){
      prevNode = removedNode
      removedNode = removedNode.next
    }

    this.tail = prevNode;

    prevNode.next = null;

    this.length --;

    return removedNode.val



  }

  /** shift(): return & remove first item. */

  shift() {

    if(this.head.next === null){
      const removedHead = this.head;
      this.head = null;
      this.tail = null;
      this.length --;
      return removedHead.val;
    }

    let nextNode = this.head.next;
    let preNode = this.head;

    preNode.next = null;
    this.head = nextNode;

    this.length --;

    return preNode.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) throw new Error("Invalid Index")
    let getNode = this.head;
    if(getNode.next === null) return getNode.val
    for(let i = 0; i < idx; i++){
      getNode = getNode.next;
    }

    return getNode.val
  }


  getNode(idx){
    if (idx > this.length || idx < 0) throw new Error("Invalid Index")
    let getNode = this.head;
    if(getNode === null) return null
    if(getNode.next === null) return getNode
    for(let i = 0; i < idx; i++){
      getNode = getNode.next;
    }

    return getNode
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length || idx < 0) throw new Error("Invalid Index")
    const newNode = new Node(val)
    if(this.length === 0) {
      this.head = newNode
      this.tail = newNode
      return 
    }

    if (idx === 0) {
      this.head = newNode 
      return
    }

    let currentNode = this.head
    let preNode = currentNode
    for(let i  = 0; i < idx; i++){
      preNode = currentNode
      currentNode = currentNode.next;
    }

    preNode.next = newNode;
    
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val)

    if(idx === this.length) return this.push(val)

    const currentNode = this.getNode(idx -1)
    if(!currentNode){
      this.push(newNode);
      return
    }
    newNode.next = currentNode.next
    currentNode.next = newNode;
    
    
 
    this.length++;
  }

  

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx === 0) return this.shift();
    if(idx === this.length - 1) return this.pop();

    let currentNode = this.getNode(idx);
    let prevNode = this.getNode(idx);

    prevNode.next = currentNode.next;
    currentNode.next = null;
    this.length --;
    return currentNode.val
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0;
    let average = 0;
    let sum = 0;
    let currentNode = this.head
    for(let i = 0; i < this.length; i++){
      
      sum += currentNode.val
      currentNode = currentNode.next
    }

    average = sum/this.length
    return average;
  }
}

module.exports = LinkedList;
