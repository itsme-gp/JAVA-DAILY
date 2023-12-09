package codes.dec08;

import java.util.Scanner;

public class Palindrome {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int number=sc.nextInt();
        int reverse=0,number1=number;
        
        //M1
        while(number!=0)
        {
            reverse=reverse*10+(number%10);
            number=number/10;
        }
        if(number1==reverse)
            System.out.println("Is Palindrome!");
        else
            System.out.println("Is Not Palindrome!");
        sc.close();

        

    }
}
