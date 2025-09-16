class Solution {

    public int findGCD(int a, int b){

        while(b != 0){

            int temp = b;

            b = a % b;

            a = temp;

        }

        return a;

    }

    public List<Integer> replaceNonCoprimes(int[] nums) {

        int n = nums.length;

        List<Integer> ans = new ArrayList<>();

        if(n == 1){

            return new ArrayList<>(Arrays.asList(nums[0]));

        }

        Stack<Integer> st = new Stack<>();

        st.push(nums[0]);

        st.push(nums[1]);

        int i = 2;

        while(i < n){

            if(st.size() < 2){

                st.push(nums[i++]);

            }

            int a = st.pop();

            int b = st.pop();

            int gcd = findGCD(a, b);

            if(gcd > 1){

                st.push((a * b)/ gcd);

            }

            else{

                st.push(a);

                st.push(b);

                st.push(nums[i]);

                i++;

            }

        }

        while(st.size() != 0){

            ans.add(st.pop());

        }

        return ans;

    }

}
