// package codes.dec13;

// public class KidsWithGreatestNumberOfCandies {

// }

// class Solution {
//     public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
//         int max=0;
//         for(int j=0;j<candies.length;j++)
//         {
//             if(candies[j]>max)
//             {
//                 max=candies[j];
//             }
//         }
//         List<Boolean> l1= new ArrayList<>();
//         for(int i=0;i<candies.length;i++)
//         {
//             if(candies[i] + extraCandies>=max)
//                 l1.add(true);
//             else
//                 l1.add(false);
//         }
//     return l1;
//     }
// }
