package DSA.DataStructure.FEB08;

import java.util.Arrays;

public class ls {
    public static void main(String[] args) {
        int[][] arr={
            {1,2,3},
            {5,7,9}        };
        int target=3;
        int[] ans=search(arr, target);
        System.out.println(Arrays.toString(ans));
        
    }
    static int[] search (int[][] arr, int target){
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                if(arr[i][j]==target)
                {
                    return new int[]{i,j};
                }
            }
        }
        
        return null;
        
    }
}
