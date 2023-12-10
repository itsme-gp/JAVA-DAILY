package codes.dec10;

public class ConcatenationOfArray {

}
class Solution {
    public int[] getConcatenation(int[] nums) {
        //int n=;
        int[] ans= new int[nums.length*2];
        for(int i=0;i<nums.length;i++)
        {
            ans[i]=ans[nums.length+i]=nums[i];
           // ans[n+i]=nums[i];
        }
        //System.gc();
        return ans;
    }
}
