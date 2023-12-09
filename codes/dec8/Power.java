package codes.dec8;

import java.util.Scanner;

public class Power {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int base=sc.nextInt();
        int power= sc.nextInt();
        int answer=1;
        for(int i=1;i<=power;i++)
        {
            answer=answer*base;
        }
        System.out.println("Answer is "+answer);
        sc.close();
    }
}
