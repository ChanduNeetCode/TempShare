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
        if(size < 1) return -1;
        int min = arr[0];
        arr[0] = arr[size - 1];
        size--;
        downHeap(0);
        return min;
    }
    
    public void swap(int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    public void upHeap(int i){
        int index = i;
        while(i > 0 && arr[parent(i)] > arr[i]){
            swap(i, parent(i));
            i = parent(i);
        }
    }
    public void downHeap(int i){
        int min = i;
        int l = left (i);
        int r = right(i);
        if(l < size && arr[l] < arr[i]){
            min = l;
        }
        if(r < size && arr[r] < arr[i]){
            min = r;
        }
        if(min != i){
            swap(i, min);
            downHeap(min);
        }
    }
    
    public void insertKey(int k){
        if(size == cap) return;
        arr[size] = k;
        upHeap(size);
        size++;
    }
    
    public void deleteKey(int i){
        if(i < 0 || i >= size) return;
        swap(i, size - 1);
        size--;
        if(i < size){
            if(i > 0 && arr[i] < arr[parent(i)]){
                upHeap(i);
            }
            else{
                downHeap(i);
            }
        }
    }
}
