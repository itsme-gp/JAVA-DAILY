package DSA.DataStructure.FEB07;

public class stringSearch {
    public static void main(String[] args) {
        String name="Praitk";
        char target='a';
        System.out.println(search(name, target));
    }

    static boolean search(String word,char target)
    {
        if(word.length()==0)
        {
            return false;
        }
        for(int i=0;i<word.length();i++)
        {
            if(target==word.charAt(i))
            {
                return true;
            }
        }
        return false;
    }
    
}
