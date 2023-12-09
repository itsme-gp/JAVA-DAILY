package codes.dec09;

import java.util.Arrays;
import java.util.Scanner;

public class PythagoreanTriplet {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int num1=sc.nextInt();
        int num2=sc.nextInt();
        int num3=sc.nextInt();
        isPyTriplet(num1,num2,num3);
        

        sc.close();
    }

    private static void isPyTriplet(int num1, int num2, int num3) {
        // int max=Math.max(num1,Math.max(num2, num3));
        int[] arr=new int[]{num1,num2,num3};
        Arrays.sort(arr);
        // for(int i=0;i<3;i++)
        // {
        //     // for(int j=0;j<3;j++)
        //     // {
        //         arr[i]*arr[i] == arr[i+1]*arr[i+1]+arr[i-1]*arr[i-1];
        //    // }
        // }
        if(arr[2]*arr[2]==arr[0]*arr[0] + arr[1]*arr[1])
        {
            System.out.println("It is Pythagorean Triplet");
            return;
        }
        System.out.println("It is not Pythagorean Triplet");
    }
}
