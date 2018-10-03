import React from "react";

export const Example1 = `
//JAVA code to find the element 
//that occur only once 
  
class GFG 
{ 
    // Method to find the element that occur only once 
    static int getSingle(int arr[], int n) 
    { 
        int ones = 0, twos = 0; 
        int common_bit_mask; 
          
        for(int i=0; i<n; i++ ) 
        { 
            /*"one & arr[i]" gives the bits that are there in 
            both 'ones' and new element from arr[]. We 
            add these bits to 'twos' using bitwise OR*/
            twos = twos | (ones & arr[i]); 
  
            /*"one & arr[i]" gives the bits that are 
            there in both 'ones' and new element from arr[]. 
            We add these bits to 'twos' using bitwise OR*/
            ones = ones ^ arr[i]; 
  
            /* The common bits are those bits which appear third time 
            So these bits should not be there in both 'ones' and 'twos'. 
            common_bit_mask contains all these bits as 0, so that the bits can  
            be removed from 'ones' and 'twos'*/
            common_bit_mask = ~(ones & twos); 
                          
            /*Remove common bits (the bits that appear third time) from 'ones'*/
            ones &= common_bit_mask; 
                          
            /*Remove common bits (the bits that appear third time) from 'twos'*/
            twos &= common_bit_mask; 
        } 
        return ones; 
    } 
      
    //  Driver method 
    public static void main(String args[]) 
    { 
        int arr[] = {3, 3, 2, 3}; 
        int n = arr.length; 
        System.out.println("The element with single occurrence is " + getSingle(arr, n)); 
    } 
} 
`;

export const Example2 = `
  
//Java Program to swap bits  
// in a given number 
  
class GFG { 
      
    static int swapBits(int x, int p1, int p2, int n) 
    { 
        // Move all bits of first set 
        // to rightmost side  
        int set1 = (x >> p1) & ((1 << n) - 1); 
      
        // Move all bits of second set  
        //to rightmost side  
        int set2 = (x >> p2) & ((1 << n) - 1); 
      
        // XOR the two sets  
        int xor = (set1 ^ set2); 
      
        // Put the xor bits back to  
        // their original positions  
        xor = (xor << p1) | (xor << p2); 
      
        // XOR the 'xor' with the original number  
        // so that the  two sets are swapped  
        int result = x ^ xor; 
      
        return result; 
    } 
      
    // Driver program  
    public static void main(String[] args) 
    { 
        int res = swapBits(28, 0, 3, 2); 
        System.out.println("Result = " + res); 
    } 
} 
`;

export const Example3 = `
// Java code to rotate bits  
// of number 
class GFG  
{ 
static final int INT_BITS = 32; 
  
/*Function to left rotate n by d bits*/
static int leftRotate(int n, int d) { 
      
    /* In n<<d, last d bits are 0.  
       To put first 3 bits of n at 
       last, do bitwise or of n<<d with 
       n >>(INT_BITS - d) */
    return (n << d) | (n >> (INT_BITS - d)); 
} 
  
/*Function to right rotate n by d bits*/
static int rightRotate(int n, int d) { 
      
    /* In n>>d, first d bits are 0.  
       To put last 3 bits of at 
       first, do bitwise or of n>>d  
       with n <<(INT_BITS - d) */
    return (n >> d) | (n << (INT_BITS - d)); 
} 
  
// Driver code 
public static void main(String arg[])  
{ 
    int n = 16; 
    int d = 2; 
    System.out.print("Left Rotation of " + n + 
                          " by " + d + " is "); 
    System.out.print(leftRotate(n, d)); 
      
    System.out.print("\nRight Rotation of " + n + 
                             " by " + d + " is "); 
    System.out.print(rightRotate(n, d)); 
} 
} 
`;

export const Example3Output = (
  <pre>Left Rotation of 16 by 2 is 64 Right Rotation of 16 by 2 is 4</pre>
);

export const Example2Output = <pre>Result = 7</pre>;
export const Example1Output = (
  <pre>The element with single occurrence is 2</pre>
);
