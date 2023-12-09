package codes.dec09;

import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int number=sc.nextInt();
        System.out.println(factorial(number));
        sc.close();
    }

    private static int factorial(int number) {
        int ans=1;
        for(int i=1;i<=number;i++)
        {
            ans=i*ans;
        }
        return ans;
    }

}
