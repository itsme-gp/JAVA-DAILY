package codes.dec08;

import java.util.Scanner;

public class ReverseString {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        String line=sc.nextLine();
        //m1
        // String reverse="";
        // for(int i=0;i<line.length();i++)
        // {
        //     reverse=line.charAt(i)+reverse;
        // }
        // System.out.println(reverse);

        //m2
        char[] linechr=line.toCharArray();
        String reverse="";
        for(int i=0;i<linechr.length;i++)
        {
            reverse=reverse+linechr[linechr.length-i-1];
        }
        System.out.println(reverse);
        sc.close();
    }
}
