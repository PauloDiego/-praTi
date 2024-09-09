class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data){
        let newNode = new Node(data)

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head
            while(current.next !== null){
                current = current.next;
            }
            
            this.size++
        }
    }
}
console.log(node);
