package codes.dec12;

public class MaximumProductOfTwoElementsInArray {

}
// class Solution {
//     public int maxProduct(int[] nums) {
//         Arrays.sort(nums);
//         return ((nums[nums.length-1]-1)*(nums[nums.length-2]-1));
//     }
// }
// class Solution {
//     public int maxProduct(int[] nums) {
//         Arrays.sort(nums);
//         int n=nums.length;
//         return (nums[n-1]-1)*(nums[n-2]-1);
//     }
// }

class Solution {
    public int maxProduct(int[] nums) {
        int max1 = Integer.MIN_VALUE;
        int max2 = Integer.MIN_VALUE;

        for (int num : nums) {
            if (num >= max1) {
                max2 = max1;
                max1 = num;
            } else if (num > max2) {
                max2 = num;
            }
        }

        return (max1 - 1) * (max2 - 1);
    }
}