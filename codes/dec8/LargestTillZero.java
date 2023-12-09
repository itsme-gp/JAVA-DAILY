package codes.dec8;

import java.util.Scanner;

public class LargestTillZero {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int number=1,largest=0;
        while(number!=0)
        {
            number=sc.nextInt();
            if(number>largest)
            {
                largest=number;
            }
        }
        System.out.println("Largest number is "+largest);
        sc.close();
    }

}
