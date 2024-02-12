package DSA.DataStructure.FEB09;

import java.util.Arrays;

public class MatrixBinary {
    public static void main(String[] args) {
        int mat[][]= {
            {1,2,3},
            {4,5,6},
            {7,8,9}
        };
        int target=17;
        System.out.println(Arrays.toString(searchIn(mat, target)));
        
    }

    static int[] searchIn(int[][] mat, int target)
    {
        int r=0;
        int c=mat.length-1;
        while(r<mat.length && c>=0)
        {
            if(mat[r][c]==target)
            {
                return new int[]{r,c};
            }
            if(mat[r][c]<target)
            {
                r++;
            }
            else{
                c--;
            }

        }
        return new int[]{-1,-1};
    }
}
