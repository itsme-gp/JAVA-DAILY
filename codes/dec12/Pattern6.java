package codes.dec12;

public class Pattern6 {
    public static void main(String[] args) {
        int n=5;
        for(int rows=1; rows<=n; rows++)
        {
            for(int col=1; col<=n; col++)
            {
                if(col >= n-rows+1)
                {
                    System.out.print("*");
                }           
                else    
                    System.out.print(" ");   
            }
            System.out.println();
        }
    }
}
