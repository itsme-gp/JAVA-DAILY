package codes.dec12;

public class Pattern3 {
    public static void main(String[] args) {
        int n=5;
        for(int rows=1; rows<=n; rows++)
        {
            for(int col=1; col<=n-rows+1; col++)
            {
                System.out.print("*");              
            }
            System.out.println();
        }
    }
}
