// User function Template for Java

class Solution {
    public static boolean helper(int i, int sum, int[] arr, int n, int k, boolean[] dp){
        if(sum == k) return dp[i] = true;
        if(i == n) return false;
        
        return dp[i] = helper(i +1, sum + arr[i], arr, n, k,dp) || helper(i + 1,sum, arr, n, k, dp);
    }
    public static boolean checkSubsequenceSum(int N, int[] arr, int K) {
        // code here
        boolean[] dp = new boolean[N + 1];
        helper(0 ,0 ,arr, N, K, dp);
        return dp[N];
    }
}
