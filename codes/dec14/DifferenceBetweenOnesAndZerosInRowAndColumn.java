package codes.dec14;

public class DifferenceBetweenOnesAndZerosInRowAndColumn {

}

class Solution {
    public int[][] onesMinusZeros(int[][] grid) {
        int m=grid.length;
        int n=grid[0].length;
        int[][] sol= new int[m][n];
        int[] Row= new int[m];
        int[] Col= new int[n];

        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                Row[i] += grid[i][j];
                Col[j] += grid[i][j];
            }
        }

        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                sol[i][j]=Row[i]+Col[j]-(m-Row[i])-(n-Col[j]);
            }
        }
        return sol;
    }
}


// class Solution {
//     public int[][] onesMinusZeros(int[][] grid) {
//         int sol[][]=new int[grid.length][grid[0].length];
//         for(int i=0;i<grid.length;i++)
//         {
//             int a= sumRow(grid,i);
//             for(int j=0;j<grid[0].length;j++)
//             {
//                 int b= sumCol(grid,j);
//                 sol[i][j]=a+b;
//             }
//         }
//         return sol;
//     }

//     public int sumRow(int[][] grid,int i)
//     {
//         int r0=0,r1=0;
//         for(int k=0;k<grid[0].length;k++)
//         {
//             if(grid[i][k]==0)
//                 r0++;
//             else
//                 r1++;
//         }
//         return r1-r0;
//     }

//     public int sumCol(int[][] grid,int j)
//     {
//         int c0=0,c1=0;
//         for(int k=0;k<grid.length;k++)
//         {
//             if(grid[k][j]==0)
//                 c0++;
//             else
//                 c1++;
//         }
//         return c1-c0;
//     }
// }