// package codes.dec11;

// public interface ShuffleString {

// }
// // class Solution {
// //     public String restoreString(String s, int[] indices) {
// //         char[] ans= new char[indices.length];
// //         for(int i=0;i<indices.length;i++)
// //         {
// //             ans[indices[i]]=s.charAt(i);
// //         }
// //         return new String(ans);
// //     }
// // }
// class Solution {
//     public String restoreString(String s, int[] indices) {
        
//         int length=s.length();
//         StringBuilder sb=new StringBuilder("");
//          char c[]=new char[length];
       
//         for(int i=0;i<length;i++){
//             c[indices[i]]=s.charAt(i);
//         }
//         sb.append(c);
//         return sb.toString();
//     }
// }