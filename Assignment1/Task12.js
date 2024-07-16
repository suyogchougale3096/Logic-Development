class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtBeg(element){
        let node = new Node(element);
        if(this.head == null){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node
        }
    }

    display(){
        let driver = this.head;
        while(driver != null){
            console.log(driver.data);
            driver = driver.next;
        }
    }

    reverse(){
        let prev = null;
        let current = this.head;
        let next1;
        while(current != null){
            next1 = current.next;
            current.next = prev;
            prev = current;
            current = next1
        }
        this.head = prev
    }
}


let l1 = new LinkedList();
l1.insertAtBeg(10);
l1.insertAtBeg(20);
l1.insertAtBeg(30);

l1.display()

l1.reverse()

l1.display()