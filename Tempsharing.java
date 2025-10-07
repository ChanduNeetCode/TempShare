
class Solution {
    public static boolean checkSubsequenceSum(int N, int[] arr, int K) {
        // code here
        Arrays.sort(arr);
        int l = 0, r = 0;
        int sum = 0;
        while(r < N){
            sum += arr[r];
            while(sum > K){
                sum -= arr[l];
                l++;
            }
            if(sum == K) return true;
            r++;
        }
        return false;
    }
}
