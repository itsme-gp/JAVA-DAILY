package DSA.DataStructure.FEB07;

public class linearSearchC {
    public static void main(String[] args) {
        int[] nums={1,5,7,8,9,45,12};
        int target=12;
        int ans=linearSearch2(nums, target);
        System.out.println(ans);
    }

    // search in array

    static int linearSearch(int[] arr, int target) {
        if (arr.length == 0) {
            return -1;
        }
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }

    static int linearSearch2(int[] arr, int target) {
        if (arr.length == 0) {
            return -1;
        }
        for (int element:arr) {
            if (element == target) {
                return element;
            }
        }
        return -1;
    }
}
