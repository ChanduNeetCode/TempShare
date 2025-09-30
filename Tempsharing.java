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
    private int len;
    public MyLinkedList() {
        head = null;
        this.len = 0;
    }
    
    public int get(int index) {
        if(index < 0 && index >= this.len) return -1;
        Node temp = head;
        for(int i = 0;i<index;i++){
            temp = temp.next;
        }
        return temp.data;
    }
    
    public void addAtHead(int val) {
        Node newHead = new Node(val, head);
        head = newHead;
        this.len++;
    }
    
    public void addAtTail(int val) {
        if(head == null){
            addAtHead(val);
            return;
        }
        Node temp = head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = new Node(val);
        this.len++;
    }
    
    public void addAtIndex(int index, int val) {
        if(index < 0 || index > this.len) return;
        if(index == 0){
            addAtHead(val);
            return;
        }
        if(index == this.len){
            addAtTail(val);
            return;
        }
        Node temp = head;
        for(int i =0;i<index-1;i++){
            temp = temp.next;
        }
        Node newNode = new Node(val, temp.next);
        temp.next = newNode;
        this.len++;
    }
    
    public void deleteAtIndex(int index) {
        if(index < 0 || index >= this.len) return;
        if(index == 0){
            head = head.next;
            this.len--;
            return;
        }
        Node temp = head;
        for(int i = 0;i<index - 1;i++){
            temp = temp.next;
        }
        temp.next = temp.next.next;
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
