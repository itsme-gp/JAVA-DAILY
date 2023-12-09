package codes.dec08;

import java.util.Scanner;

public class ArmstrongNumber {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int number= sc.nextInt();
        int count=0,solution=0,number1=number,number2=number;
        while(number1!=0)
        {
            number1=number1/10;
            count++;
        }
        //System.out.println(count);
        while(number2!=0)
        {
            int answer=1;
            int num1=number2%10;
            for(int i=0;i<count;i++)
            {
                answer=answer*num1;
            }
            //System.out.println(answer);
            solution=solution+answer;
            number2=number2/10;
        }
        //System.out.println(solution);
        if(number==solution)
            System.out.println(number+" is Armstrong");
        else
            System.out.println(number+" is not Armstrong");
        sc.close();
    }
}
