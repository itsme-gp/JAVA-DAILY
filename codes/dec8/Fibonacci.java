package codes.dec8;

import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int count=sc.nextInt();
        int first=0;
        int second=1;
        int third;
        System.out.print(first+" " +second+" ");
        for(int i=2;i<=count;i++)
        {
            third=first+second;
            first=second;
            second=third;
            System.out.print(third+" ");
        }
        sc.close();
    }
}
