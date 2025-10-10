class MinHeap {
    int[] arr;
    int cap;
    int size;
    
    MinHeap(int capacity){
        cap = capacity;
        size = 0;
        arr = new int[capacity];
    }
    
    int parent (int i) { return (i-1)/2; }
    int left (int i) { return 2 * i + 1; }
    int right (int i) { return 2 * i + 2; }
    
    public int extractMin(){
        int min = arr[0];
        deleteKey(0);
        return min;
    }
    
    public void swap(int i, int j){
        int temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    
    public void upHeap(int i){
        int index = i;
        while(i >= 0 && arr[parent(i)] > arr[i]){
            swap(i, parent(i));
            i = parent(i);
        }
    }
    
    public void insertKey(int k){
        arr[size] = k;
        upHeap(size);
        size++;
    }
    
    public void deleteKey(int i){
        if(size-1 < 0){
            size = 0;
            return;
        }
        swap(i, size - 1);
        size--;
        upHeap(i);
    }
}
