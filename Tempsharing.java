class Node{
    int data;
    Node next;

    Node(int data, Node next){
        this.data = data;
        this.next = next;
    }

    Node(int data){
        this.data = data;
        this.next = null;
    }
}
class MyLinkedList {
    private Node head;
    private int len = 0;
    public MyLinkedList() {
        
    }
    
    public int get(int index) {
        if(index > this.len) return -1;
        int ind = 0;
        Node temp = head;
        while(ind != index){
            ind++;
            temp = temp.next;
        }
        if(temp.next == null) return -1;
        return temp.next.data;
    }
    
    public void addAtHead(int val) {
        if(head == null){
            head = new Node(val);
            return;
        }
        Node newHead = new Node(val, head);
        head = newHead;
        this.len++;
    }
    
    public void addAtTail(int val) {
        Node temp = head;
        while(temp.next != null){
            temp = temp.next;
        }
        Node newNode = new Node(val);
        temp.next = newNode;
        this.len++;
    }
    
    public void addAtIndex(int index, int val) {
        if(index > this.len) return;
        int ind = 0;
        Node temp = head;
        while(ind != index){
            ind++;
            temp = temp.next;
        }
        Node newNode = new Node(val);
        Node nextNode = temp.next;
        temp.next = newNode;
        newNode.next = nextNode;

        this.len++;
    }
    
    public void deleteAtIndex(int index) {
        if(index > this.len) return;
        int ind = 0;
        Node temp = head;
        while(ind != index){
            ind++;
            temp = temp.next;
        }
        Node nextNode = temp.next.next;
        temp.next = nextNode;
        nextNode = null;

        this.len--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
