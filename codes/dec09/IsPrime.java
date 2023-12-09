package codes.dec09;

//import java.util.Scanner;

public class IsPrime {
    public static void main(String[] args) {
        //Scanner sc= new Scanner(System.in);
        //int num=sc.nextInt();
        for(int i=3;i<100;i++)
        {
            if(isPrime(i))
            {
                System.out.print(i+" ");
            }
        }
        //System.out.println(isPrime(num));
        //sc.close();
    }

    private static boolean isPrime(int num) {
        for(int i=2;i<=num/2;i++)
        {
            if(num%i==0)
            {
                return false;
            }
        }
        return true;
    }

}
