package codes.dec12;

public class Pattern4 {
    public static void main(String[] args) {
        int n=5;
        for(int rows=1; rows<=n; rows++)
        {
            for(int col=1; col<=rows; col++)
            {
                System.out.print(col+" ");              
            }
            System.out.println();
        }
    }
}
