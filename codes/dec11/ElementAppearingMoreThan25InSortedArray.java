package codes.dec11;

public class ElementAppearingMoreThan25InSortedArray {

}
// class Solution {
//     public int findSpecialInteger(int[] arr) {
//         int ans=0,max=0;
//         if(arr.length==1)
//         {
//             return arr[0];
//         }
//         for(int i=0;i<arr.length;i++)
//         {
//             int count=0;
//             for(int j=i+1;j<arr.length;j++)
//             {
//                 if(arr[i]==arr[j]){
//                     count++;
//                 }
//             }
//             if(count>max)
//             {
//                 max=count;
//                 ans=arr[i];
//             }
//         }
//         return ans;
//     }
// }
class Solution {
    public int findSpecialInteger(int[] arr) {
        int size = arr.length;
        int qtr = size / 4;
        int cnt = 1;
        int p = arr[0];
        for (int i = 1 ; i < arr.length ; i++) {

            if ( p == arr[i]) cnt++;
            else cnt = 1;
            
            if (cnt > qtr) return arr[i];
            
            p = arr[i];
        }

        return p;
    }
}