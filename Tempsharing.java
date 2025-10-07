class Solution {
    public void helper(int num,int sum,List<Integer> carry ,List<List<Integer>> res , int k, int n){
        if(sum > n) return;
        if(carry.size() == k){
            if(sum == n){
                res.add(new ArrayList<>(carry));
            }
            return;
        }

        //take
        carry.add(num);
        helper(num + 1, sum + num, carry, res, k, n);
        carry.remove(carry.size() - 1);

        
        helper(num + 1, sum, carry, res, k, n);
    }
    public List<List<Integer>> combinationSum3(int k, int n) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> carry = new ArrayList<>();
        helper(1, 0, carry, res, k, n);
        return res;
    }
}
