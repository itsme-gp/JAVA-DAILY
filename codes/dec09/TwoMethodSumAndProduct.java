package codes.dec09;

import java.util.Scanner;

public class TwoMethodSumAndProduct {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int num1=sc.nextInt();
        int num2=sc.nextInt();
        System.out.println("sum is"+sum(num1,num2));
        System.out.println("Product is"+product(num1,num2));
        sc.close();
    }

    private static int sum(int num1, int num2) {
        return num1+num2;
    }

    private static int product(int num1, int num2) {
        return num1*num2;
    }
    

}
