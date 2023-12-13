package codes.dec12;

public class Pattern8 {
    public static void main(String[] args) {
        int n=5;
        for(int rows=1; rows<=n; rows++)
        {
            for(int col=1; col<=rows+n-1; col++)
            {
                if(col<=n-rows)
                    System.out.print(" ");
                else
                    System.out.print("*");
            }
            System.out.println();
        }
    }
}


