class Solution {
    public int triangularSum(int[] nums) {
        Queue<Integer> q = new LinkedList<>();
        for(int num :nums){
            q.add(num);
        }
        q.add(-1);
        while(q.size() != 2){
            int a = q.poll();
            int b = q.peek();
            if(a == -1) continue;
            if(b == -1){
                q.add(-1);
                continue;
            }

            q.add((a + b) % 10);
        }
        return q.peek();
    }
}
