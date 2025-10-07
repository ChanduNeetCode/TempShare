// User function Template for Java

class Solution {
    public void helper(int i, int k, int[] arr, int n, List<List<Integer>> res, List<Integer> carry){
        if(k == 0){
            res.add(new ArrayList<>(carry));
            return;
        }

        for(int j = i;j < n;j++){
            if(j > i && arr[j] == arr[j-1]) continue;
            if(arr[j] > k) break;

            carry.add(arr[j]);
            helper(j + 1 ,k - arr[j], arr, n, res,carry);
            carry.remove(carry.size() - 1);
        }
    }
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<>();
        helper(0 ,target, candidates, candidates.length, res, new ArrayList<Integer>());
        return res;
    }
}
