package codes.dec12;

public class Pattern1 {
    public static void main(String[] args) {
        int n=5;
        for(int rows=0; rows<n; rows++)
        {
            for(int col=0; col<n; col++)
            {
                System.out.print("*");              
            }
            System.out.println();
        }
    }
}
