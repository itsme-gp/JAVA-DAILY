package codes.dec11;

public class DefangingAnIPAddress {

}
class Solution {
    public String defangIPaddr(String address) {
         StringBuilder str = new StringBuilder();

        for(int i=0;i<address.length();i++)
        {
            if(address.charAt(i)=='.')
            {
                str.append("[.]");
            }
            else
                str.append(address.charAt(i));
        }
        return str.toString();
        //m2
       // return address.replace(".","[.]");
    }
}