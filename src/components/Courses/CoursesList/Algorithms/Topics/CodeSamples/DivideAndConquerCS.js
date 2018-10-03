import React from "react";

export const Example1 = `
// A Simple Merge based O(n) solution  
// to find median of two sorted arrays 
  
class Main 
{ 
    // function to calculate median 
    static int getMedian(int ar1[], int ar2[], int n) 
    {    
        int i = 0;   
        int j = 0;  
        int count; 
        int m1 = -1, m2 = -1; 
       
        /* Since there are 2n elements, median will  
           be average of elements at index n-1 and  
           n in the array obtained after merging ar1  
           and ar2 */
        for (count = 0; count <= n; count++) 
        { 
            /* Below is to handle case where all  
              elements of ar1[] are smaller than  
              smallest(or first) element of ar2[] */
            if (i == n) 
            { 
                m1 = m2; 
                m2 = ar2[0]; 
                break; 
            } 
       
            /* Below is to handle case where all  
               elements of ar2[] are smaller than  
               smallest(or first) element of ar1[] */
            else if (j == n) 
            { 
                m1 = m2; 
                m2 = ar1[0]; 
                break; 
            } 
       
            if (ar1[i] < ar2[j]) 
            {    
                /* Store the prev median */
                m1 = m2;   
                m2 = ar1[i]; 
                i++; 
            } 
            else
            { 
                /* Store the prev median */
                m1 = m2;   
                m2 = ar2[j]; 
                j++; 
            } 
        } 
       
        return (m1 + m2)/2; 
    } 
       
    /* Driver program to test above function */
    public static void main (String[] args) 
    { 
        int ar1[] = {1, 12, 15, 26, 38}; 
        int ar2[] = {2, 13, 17, 30, 45}; 
       
        int n1 = ar1.length; 
        int n2 = ar2.length; 
        if (n1 == n2) 
            System.out.println("Median is " + 
                        getMedian(ar1, ar2, n1)); 
        else
            System.out.println("arrays are of unequal size"); 
    }     
}
`;

export const Example2 = `
/* Java program for Merge Sort */
class MergeSort 
{ 
    // Merges two subarrays of arr[]. 
    // First subarray is arr[l..m] 
    // Second subarray is arr[m+1..r] 
    void merge(int arr[], int l, int m, int r) 
    { 
        // Find sizes of two subarrays to be merged 
        int n1 = m - l + 1; 
        int n2 = r - m; 
  
        /* Create temp arrays */
        int L[] = new int [n1]; 
        int R[] = new int [n2]; 
  
        /*Copy data to temp arrays*/
        for (int i=0; i<n1; ++i) 
            L[i] = arr[l + i]; 
        for (int j=0; j<n2; ++j) 
            R[j] = arr[m + 1+ j]; 
  
  
        /* Merge the temp arrays */
  
        // Initial indexes of first and second subarrays 
        int i = 0, j = 0; 
  
        // Initial index of merged subarry array 
        int k = l; 
        while (i < n1 && j < n2) 
        { 
            if (L[i] <= R[j]) 
            { 
                arr[k] = L[i]; 
                i++; 
            } 
            else
            { 
                arr[k] = R[j]; 
                j++; 
            } 
            k++; 
        } 
  
        /* Copy remaining elements of L[] if any */
        while (i < n1) 
        { 
            arr[k] = L[i]; 
            i++; 
            k++; 
        } 
  
        /* Copy remaining elements of R[] if any */
        while (j < n2) 
        { 
            arr[k] = R[j]; 
            j++; 
            k++; 
        } 
    } 
  
    // Main function that sorts arr[l..r] using 
    // merge() 
    void sort(int arr[], int l, int r) 
    { 
        if (l < r) 
        { 
            // Find the middle point 
            int m = (l+r)/2; 
  
            // Sort first and second halves 
            sort(arr, l, m); 
            sort(arr , m+1, r); 
  
            // Merge the sorted halves 
            merge(arr, l, m, r); 
        } 
    } 
  
    /* A utility function to print array of size n */
    static void printArray(int arr[]) 
    { 
        int n = arr.length; 
        for (int i=0; i<n; ++i) 
            System.out.print(arr[i] + " "); 
        System.out.println(); 
    } 
  
    // Driver method 
    public static void main(String args[]) 
    { 
        int arr[] = {12, 11, 13, 5, 6, 7}; 
  
        System.out.println("Given Array"); 
        printArray(arr); 
  
        MergeSort ob = new MergeSort(); 
        ob.sort(arr, 0, arr.length-1); 
  
        System.out.println("\nSorted array"); 
        printArray(arr); 
    } 
} 
`;

export const Example3 = `
// Java program for implementation of QuickSort 
class QuickSort 
{ 
    /* This function takes last element as pivot, 
       places the pivot element at its correct 
       position in sorted array, and places all 
       smaller (smaller than pivot) to left of 
       pivot and all greater elements to right 
       of pivot */
    int partition(int arr[], int low, int high) 
    { 
        int pivot = arr[high];  
        int i = (low-1); // index of smaller element 
        for (int j=low; j<high; j++) 
        { 
            // If current element is smaller than or 
            // equal to pivot 
            if (arr[j] <= pivot) 
            { 
                i++; 
  
                // swap arr[i] and arr[j] 
                int temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
            } 
        } 
  
        // swap arr[i+1] and arr[high] (or pivot) 
        int temp = arr[i+1]; 
        arr[i+1] = arr[high]; 
        arr[high] = temp; 
  
        return i+1; 
    } 
  
  
    /* The main function that implements QuickSort() 
      arr[] --> Array to be sorted, 
      low  --> Starting index, 
      high  --> Ending index */
    void sort(int arr[], int low, int high) 
    { 
        if (low < high) 
        { 
            /* pi is partitioning index, arr[pi] is  
              now at right place */
            int pi = partition(arr, low, high); 
  
            // Recursively sort elements before 
            // partition and after partition 
            sort(arr, low, pi-1); 
            sort(arr, pi+1, high); 
        } 
    } 
  
    /* A utility function to print array of size n */
    static void printArray(int arr[]) 
    { 
        int n = arr.length; 
        for (int i=0; i<n; ++i) 
            System.out.print(arr[i]+" "); 
        System.out.println(); 
    } 
  
    // Driver program 
    public static void main(String args[]) 
    { 
        int arr[] = {10, 7, 8, 9, 1, 5}; 
        int n = arr.length; 
  
        QuickSort ob = new QuickSort(); 
        ob.sort(arr, 0, n-1); 
  
        System.out.println("sorted array"); 
        printArray(arr); 
    } 
} 
`;

export const Example3Output = (
  <pre>
    Sorted array: <br />1 5 7 8 9 10
  </pre>
);

export const Example2Output = (
  <pre>
    Given array is <br />
    12 11 13 5 6 7 <br />
    <br />
    Sorted array is <br />5 6 7 11 12 13
  </pre>
);
export const Example1Output = <pre>Median is 16</pre>;
