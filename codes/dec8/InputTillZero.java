package codes.dec8;

import java.util.Scanner;

public class InputTillZero {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int sum=0, number=1;
        while(number!=0)
        {
            number= sc.nextInt();
            sum=sum+number;
        }
        System.out.println(sum);
        sc.close();
    }
}
