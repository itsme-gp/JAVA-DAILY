package codes.dec09;

import java.util.Scanner;

public class TwoMethodMinMax {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int num1=sc.nextInt();
        int num2=sc.nextInt();
        int num3=sc.nextInt();
        max(num1,num2,num3);
        min(num1,num2,num3);
        sc.close();

    }

    private static void min(int num1, int num2, int num3) {
        int min=num1;
        if(num2<min)
            min=num2;
        if(num3<min)
            min=num3;
        System.out.println("Min is"+min);
    }

    private static void max(int num1, int num2, int num3) {
        int max=num1;
        if(num2>max)
            max=num2;
        if(num3>max)
            max=num3;
        System.out.println("Max is"+max);
    }
}
