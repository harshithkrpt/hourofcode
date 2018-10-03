import React from "react";

export const Example1 = `
// Dynamic Programming Java implementation of Matrix 
// Chain Multiplication. 
// See the Cormen book for details of the following algorithm 
class MatrixChainMultiplication 
{ 
    // Matrix Ai has dimension p[i-1] x p[i] for i = 1..n 
    static int MatrixChainOrder(int p[], int n) 
    { 
        /* For simplicity of the program, one extra row and one 
        extra column are allocated in m[][].  0th row and 0th 
        column of m[][] are not used */
        int m[][] = new int[n][n]; 
  
        int i, j, k, L, q; 
  
        /* m[i,j] = Minimum number of scalar multiplications needed 
        to compute the matrix A[i]A[i+1]...A[j] = A[i..j] where 
        dimension of A[i] is p[i-1] x p[i] */
  
        // cost is zero when multiplying one matrix. 
        for (i = 1; i < n; i++) 
            m[i][i] = 0; 
  
        // L is chain length. 
        for (L=2; L<n; L++) 
        { 
            for (i=1; i<n-L+1; i++) 
            { 
                j = i+L-1; 
                if(j == n) continue; 
                m[i][j] = Integer.MAX_VALUE; 
                for (k=i; k<=j-1; k++) 
                { 
                    // q = cost/scalar multiplications 
                    q = m[i][k] + m[k+1][j] + p[i-1]*p[k]*p[j]; 
                    if (q < m[i][j]) 
                        m[i][j] = q; 
                } 
            } 
        } 
  
        return m[1][n-1]; 
    } 
  
    // Driver program to test above function 
    public static void main(String args[]) 
    { 
        int arr[] = new int[] {1, 2, 3, 4}; 
        int size = arr.length; 
  
        System.out.println("Minimum number of multiplications is "+ 
                           MatrixChainOrder(arr, size)); 
    } 
} 
`;

export const Example2 = `
// A recursive solution for subset sum 
// problem 
class GFG { 
      
    // Returns true if there is a subset 
    // of set[] with sum equal to given sum 
    static boolean isSubsetSum(int set[], 
                            int n, int sum) 
    { 
        // Base Cases 
        if (sum == 0) 
            return true; 
        if (n == 0 && sum != 0) 
            return false; 
          
        // If last element is greater than  
        // sum, then ignore it 
        if (set[n-1] > sum) 
            return isSubsetSum(set, n-1, sum); 
          
        /* else, check if sum can be obtained  
        by any of the following 
            (a) including the last element 
            (b) excluding the last element */
        return isSubsetSum(set, n-1, sum) ||  
            isSubsetSum(set, n-1, sum-set[n-1]); 
    } 
      
    /* Driver program to test above function */
    public static void main (String args[]) 
    { 
        int set[] = {3, 34, 4, 12, 5, 2}; 
        int sum = 9; 
        int n = set.length; 
        if (isSubsetSum(set, n, sum) == true) 
            System.out.println("Found a subset"
                          + " with given sum"); 
        else
            System.out.println("No subset with"
                               + " given sum"); 
    } 
}
`;

export const Example3 = `

// A Dynamic Programming based solution for 0-1 Knapsack problem 
class Knapsack 
{ 
  
    // A utility function that returns maximum of two integers 
    static int max(int a, int b) { return (a > b)? a : b; } 
       
   // Returns the maximum value that can be put in a knapsack of capacity W 
    static int knapSack(int W, int wt[], int val[], int n) 
    { 
         int i, w; 
     int K[][] = new int[n+1][W+1]; 
       
     // Build table K[][] in bottom up manner 
     for (i = 0; i <= n; i++) 
     { 
         for (w = 0; w <= W; w++) 
         { 
             if (i==0 || w==0) 
                  K[i][w] = 0; 
             else if (wt[i-1] <= w) 
                   K[i][w] = max(val[i-1] + K[i-1][w-wt[i-1]],  K[i-1][w]); 
             else
                   K[i][w] = K[i-1][w]; 
         } 
      } 
       
      return K[n][W]; 
    } 
  
    
    // Driver program to test above function 
    public static void main(String args[]) 
    { 
        int val[] = new int[]{60, 100, 120}; 
    int wt[] = new int[]{10, 20, 30}; 
    int  W = 50; 
    int n = val.length; 
    System.out.println(knapSack(W, wt, val, n)); 
    } 
} 
`;

export const Example3Output = <pre>220</pre>;

export const Example2Output = <pre>Found a subset with given sum</pre>;
export const Example1Output = (
  <pre>Minimum number of multiplications is 18</pre>
);
