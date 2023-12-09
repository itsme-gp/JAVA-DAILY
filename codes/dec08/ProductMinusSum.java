package codes.dec08;

import java.util.Scanner;

public class ProductMinusSum {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int number= sc.nextInt();
        int sum=0;
        int product=1;
        while(number!=0)
        {
            int temp=number % 10;
            number=number/10;
            sum=sum+temp;
            product=product*temp;

        }
        System.out.println("Sum is "+sum+". Product is "+product);
        System.out.println("Difference is "+ (product-sum));
        sc.close();
    }
}
