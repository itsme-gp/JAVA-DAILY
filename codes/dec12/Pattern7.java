package codes.dec12;

public class Pattern7 {
    public static void main(String[] args) {
        int n=5;
        for(int rows=1; rows<=n; rows++)
        {
            for(int col=1; col<=n; col++)
            {
                if(col >= n-rows+2)
                {
                    System.out.print(" ");
                }           
                else    
                    System.out.print("*");   
            }
            System.out.println();
        }
    }
}
