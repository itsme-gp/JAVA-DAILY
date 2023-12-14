package codes.dec13;

public class SpecialPositionsInBinaryMatrix {

}
class Solution {
    public int numSpecial(int[][] mat) {
        int sp=0;
        for(int i=0;i<mat.length;i++)
        {
            int index=checkRow(mat,i);
            if(index>=0 && checkCol(mat,index,i))
                sp++;
        }
        return sp;
    }

    public int checkRow(int[][] mat,int row) {
        int index=-1;
        for(int i=0;i<mat[0].length;i++)
        {
            if(mat[row][i]==1)
            {
                if(index>=0)
                    return -1;
                else
                    index=i;
            }
        }
        return index;
    }
    public boolean checkCol(int[][] mat,int index,int row){
        for(int i=0;i<mat.length;i++)
        {
            if(mat[i][index]==1 && i!=row)
                return false;
        }
        return true;
    }


}