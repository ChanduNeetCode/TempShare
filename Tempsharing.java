class Solution {
    public static boolean checkSubsequenceSum(int N, int[] arr, int K) {
        // code here
        int l = 0, r = 0;
        int sum = 0;
        while(r < N){
            sum += arr[r];
            while(sum > K && l <=r){
                sum -= arr[l];
                l++;
            }
            if(sum == K) return true;
            r++;
        }
        return false;
    }
}
