package DSA.DataStructure.FEB09;

public class RBA {
    public static void main(String[] args) {
        int[] arr={5,5,5,1,3};
        //System.out.println(PeakIn(arr,  0, arr.length-1));
        System.out.println(search(arr,1));

    }

    static int search(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        int peak = PeakIn(nums, start, end);
        int sol = SearchIn(nums, target, start, peak);
        if (sol != -1) {
            return sol;
        }
        return SearchIn(nums, target, peak + 1, end);
    }

    static int SearchIn(int[] nums, int target, int start, int end) {
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }

    static int PeakIn(int[] nums, int start, int end) {

        while (start < end) {
            int mid = start + (end - start) / 2;
            if(nums[start]>nums[mid])
            {
                end=mid-1;
            }
            else if (nums[mid] < nums[mid + 1]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start;
    }

}
