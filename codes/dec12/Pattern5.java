package codes.dec12;

public class Pattern5 {
    public static void main(String[] args) {
        int n=5;
        for(int rows=1; rows<=n*2-1; rows++)
        {
            int c=0;
            if(rows<n)
            {
                c=rows;
            }
            else
                c=n*2-rows;
            for(int col=1; col<=c; col++)
            {
                System.out.print("*");              
            }
            System.out.println();
        }
    }
}
