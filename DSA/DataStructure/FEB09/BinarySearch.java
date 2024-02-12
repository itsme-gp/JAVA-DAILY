package DSA.DataStructure.FEB09;

public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 5, 7, 9, 11, 14, 18 };
        int target = 19;
        int ans = binarySearch(arr, target);
        System.out.println(ans);
    }

    // return index
    static int binarySearch(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }

}
