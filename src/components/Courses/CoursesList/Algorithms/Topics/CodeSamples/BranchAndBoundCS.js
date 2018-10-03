import React from "react";

export const Example1 = `

// C++ program to solve knapsack problem using 
// branch and bound 
#include <bits/stdc++.h> 
using namespace std; 
  
// Stucture for Item which store weight and corresponding 
// value of Item 
struct Item 
{ 
    float weight; 
    int value; 
}; 
  
// Node structure to store information of decision 
// tree 
struct Node 
{ 
    // level  --> Level of node in decision tree (or index 
    //             in arr[] 
    // profit --> Profit of nodes on path from root to this 
    //            node (including this node) 
    // bound ---> Upper bound of maximum profit in subtree 
    //            of this node/ 
    int level, profit, bound; 
    float weight; 
}; 
  
// Comparison function to sort Item according to 
// val/weight ratio 
bool cmp(Item a, Item b) 
{ 
    double r1 = (double)a.value / a.weight; 
    double r2 = (double)b.value / b.weight; 
    return r1 > r2; 
} 
  
// Returns bound of profit in subtree rooted with u. 
// This function mainly uses Greedy solution to find 
// an upper bound on maximum profit. 
int bound(Node u, int n, int W, Item arr[]) 
{ 
    // if weight overcomes the knapsack capacity, return 
    // 0 as expected bound 
    if (u.weight >= W) 
        return 0; 
  
    // initialize bound on profit by current profit 
    int profit_bound = u.profit; 
  
    // start including items from index 1 more to current 
    // item index 
    int j = u.level + 1; 
    int totweight = u.weight; 
  
    // checking index condition and knapsack capacity 
    // condition 
    while ((j < n) && (totweight + arr[j].weight <= W)) 
    { 
        totweight    += arr[j].weight; 
        profit_bound += arr[j].value; 
        j++; 
    } 
  
    // If k is not n, include last item partially for 
    // upper bound on profit 
    if (j < n) 
        profit_bound += (W - totweight) * arr[j].value / 
                                         arr[j].weight; 
  
    return profit_bound; 
} 
  
// Returns maximum profit we can get with capacity W 
int knapsack(int W, Item arr[], int n) 
{ 
    // sorting Item on basis of value per unit 
    // weight. 
    sort(arr, arr + n, cmp); 
  
    // make a queue for traversing the node 
    queue<Node> Q; 
    Node u, v; 
  
    // dummy node at starting 
    u.level = -1; 
    u.profit = u.weight = 0; 
    Q.push(u); 
  
    // One by one extract an item from decision tree 
    // compute profit of all children of extracted item 
    // and keep saving maxProfit 
    int maxProfit = 0; 
    while (!Q.empty()) 
    { 
        // Dequeue a node 
        u = Q.front(); 
        Q.pop(); 
  
        // If it is starting node, assign level 0 
        if (u.level == -1) 
            v.level = 0; 
  
        // If there is nothing on next level 
        if (u.level == n-1) 
            continue; 
  
        // Else if not last node, then increment level, 
        // and compute profit of children nodes. 
        v.level = u.level + 1; 
  
        // Taking current level's item add current 
        // level's weight and value to node u's 
        // weight and value 
        v.weight = u.weight + arr[v.level].weight; 
        v.profit = u.profit + arr[v.level].value; 
  
        // If cumulated weight is less than W and 
        // profit is greater than previous profit, 
        // update maxprofit 
        if (v.weight <= W && v.profit > maxProfit) 
            maxProfit = v.profit; 
  
        // Get the upper bound on profit to decide 
        // whether to add v to Q or not. 
        v.bound = bound(v, n, W, arr); 
  
        // If bound value is greater than profit, 
        // then only push into queue for further 
        // consideration 
        if (v.bound > maxProfit) 
            Q.push(v); 
  
        // Do the same thing,  but Without taking 
        // the item in knapsack 
        v.weight = u.weight; 
        v.profit = u.profit; 
        v.bound = bound(v, n, W, arr); 
        if (v.bound > maxProfit) 
            Q.push(v); 
    } 
  
    return maxProfit; 
} 
  
// driver program to test above function 
int main() 
{ 
    int W = 10;   // Weight of knapsack 
    Item arr[] = {{2, 40}, {3.14, 50}, {1.98, 100}, 
                  {5, 95}, {3, 30}}; 
    int n = sizeof(arr) / sizeof(arr[0]); 
  
    cout << "Maximum possible profit = "
         << knapsack(W, arr, n); 
  
    return 0; 
} 
`;

export const Example2 = `
// Program to print path from root node to destination node 
// for N*N -1 puzzle algorithm using Branch and Bound 
// The solution assumes that instance of puzzle is solvable 
#include <bits/stdc++.h> 
using namespace std; 
#define N 3 
  
// state space tree nodes 
struct Node 
{ 
    // stores parent node of current node 
    // helps in tracing path when answer is found 
    Node* parent; 
  
    // stores matrix 
    int mat[N][N]; 
  
    // stores blank tile cordinates 
    int x, y; 
  
    // stores the number of misplaced tiles 
    int cost; 
  
    // stores the number of moves so far 
    int level; 
}; 
  
// Function to print N x N matrix 
int printMatrix(int mat[N][N]) 
{ 
    for (int i = 0; i < N; i++) 
    { 
        for (int j = 0; j < N; j++) 
            printf("%d ", mat[i][j]); 
        printf("\n"); 
    } 
} 
  
// Function to allocate a new node 
Node* newNode(int mat[N][N], int x, int y, int newX, 
              int newY, int level, Node* parent) 
{ 
    Node* node = new Node; 
  
    // set pointer for path to root 
    node->parent = parent; 
  
    // copy data from parent node to current node 
    memcpy(node->mat, mat, sizeof node->mat); 
  
    // move tile by 1 postion 
    swap(node->mat[x][y], node->mat[newX][newY]); 
  
    // set number of misplaced tiles 
    node->cost = INT_MAX; 
  
    // set number of moves so far 
    node->level = level; 
  
    // update new blank tile cordinates 
    node->x = newX; 
    node->y = newY; 
  
    return node; 
} 
  
// botton, left, top, right 
int row[] = { 1, 0, -1, 0 }; 
int col[] = { 0, -1, 0, 1 }; 
  
// Function to calculate the the number of misplaced tiles 
// ie. number of non-blank tiles not in their goal position 
int calculateCost(int initial[N][N], int final[N][N]) 
{ 
    int count = 0; 
    for (int i = 0; i < N; i++) 
      for (int j = 0; j < N; j++) 
        if (initial[i][j] && initial[i][j] != final[i][j]) 
           count++; 
    return count; 
} 
  
// Function to check if (x, y) is a valid matrix cordinate 
int isSafe(int x, int y) 
{ 
    return (x >= 0 && x < N && y >= 0 && y < N); 
} 
  
// print path from root node to destination node 
void printPath(Node* root) 
{ 
    if (root == NULL) 
        return; 
    printPath(root->parent); 
    printMatrix(root->mat); 
  
    printf("\n"); 
} 
  
// Comparison object to be used to order the heap 
struct comp 
{ 
    bool operator()(const Node* lhs, const Node* rhs) const
    { 
        return (lhs->cost + lhs->level) > (rhs->cost + rhs->level); 
    } 
}; 
  
// Function to solve N*N - 1 puzzle algorithm using 
// Branch and Bound. x and y are blank tile coordinates 
// in initial state 
void solve(int initial[N][N], int x, int y, 
           int final[N][N]) 
{ 
    // Create a priority queue to store live nodes of 
    // search tree; 
    priority_queue<Node*, std::vector<Node*>, comp> pq; 
  
    // create a root node and calculate its cost 
    Node* root = newNode(initial, x, y, x, y, 0, NULL); 
    root->cost = calculateCost(initial, final); 
  
    // Add root to list of live nodes; 
    pq.push(root); 
  
    // Finds a live node with least cost, 
    // add its childrens to list of live nodes and 
    // finally deletes it from the list. 
    while (!pq.empty()) 
    { 
        // Find a live node with least estimated cost 
        Node* min = pq.top(); 
  
        // The found node is deleted from the list of 
        // live nodes 
        pq.pop(); 
  
        // if min is an answer node 
        if (min->cost == 0) 
        { 
            // print the path from root to destination; 
            printPath(min); 
            return; 
        } 
  
        // do for each child of min 
        // max 4 children for a node 
        for (int i = 0; i < 4; i++) 
        { 
            if (isSafe(min->x + row[i], min->y + col[i])) 
            { 
                // create a child node and calculate 
                // its cost 
                Node* child = newNode(min->mat, min->x, 
                              min->y, min->x + row[i], 
                              min->y + col[i], 
                              min->level + 1, min); 
                child->cost = calculateCost(child->mat, final); 
  
                // Add child to list of live nodes 
                pq.push(child); 
            } 
        } 
    } 
} 
  
// Driver code 
int main() 
{ 
    // Initial configuration 
    // Value 0 is used for empty space 
    int initial[N][N] = 
    { 
        {1, 2, 3}, 
        {5, 6, 0}, 
        {7, 8, 4} 
    }; 
  
    // Solvable Final configuration 
    // Value 0 is used for empty space 
    int final[N][N] = 
    { 
        {1, 2, 3}, 
        {5, 8, 6}, 
        {0, 7, 4} 
    }; 
  
    // Blank tile coordinates in initial 
    // configuration 
    int x = 1, y = 2; 
  
    solve(initial, x, y, final); 
  
    return 0; 
} 
`;

export const Example3 = `
/* C++ program to solve N Queen Problem using Branch 
   and Bound */
#include<stdio.h> 
#include<string.h> 
#define N 8 
  
/* A utility function to print solution */
void printSolution(int board[N][N]) 
{ 
    for (int i = 0; i < N; i++) 
    { 
        for (int j = 0; j < N; j++) 
            printf("%2d ", board[i][j]); 
        printf("\n"); 
    } 
} 
  
/* A Optimized function to check if a queen can 
be placed on board[row][col] */
bool isSafe(int row, int col, int slashCode[N][N], 
            int backslashCode[N][N], bool rowLookup[], 
            bool slashCodeLookup[], bool backslashCodeLookup[] ) 
{ 
    if (slashCodeLookup[slashCode[row][col]] || 
        backslashCodeLookup[backslashCode[row][col]] || 
        rowLookup[row]) 
    return false; 
  
    return true; 
} 
  
/* A recursive utility function to solve N Queen problem */
bool solveNQueensUtil(int board[N][N], int col, 
    int slashCode[N][N], int backslashCode[N][N], bool rowLookup[N], 
    bool slashCodeLookup[], bool backslashCodeLookup[] ) 
{ 
    /* base case: If all queens are placed 
    then return true */
    if (col >= N) 
        return true; 
  
    /* Consider this column and try placing 
       this queen in all rows one by one */
    for (int i = 0; i < N; i++) 
    { 
        /* Check if queen can be placed on 
           board[i][col] */
        if ( isSafe(i, col, slashCode, backslashCode, rowLookup, 
                    slashCodeLookup, backslashCodeLookup) ) 
        { 
            /* Place this queen in board[i][col] */
            board[i][col] = 1; 
            rowLookup[i] = true; 
            slashCodeLookup[slashCode[i][col]] = true; 
            backslashCodeLookup[backslashCode[i][col]] = true; 
  
            /* recur to place rest of the queens */
            if ( solveNQueensUtil(board, col + 1, slashCode, backslashCode, 
                    rowLookup, slashCodeLookup, backslashCodeLookup) ) 
                return true; 
  
            /* If placing queen in board[i][col] 
            doesn't lead to a solution, then backtrack */
  
            /* Remove queen from board[i][col] */
            board[i][col] = 0; 
            rowLookup[i] = false; 
            slashCodeLookup[slashCode[i][col]] = false; 
            backslashCodeLookup[backslashCode[i][col]] = false; 
        } 
    } 
  
    /* If queen can not be place in any row in 
        this colum col then return false */
    return false; 
} 
  
/* This function solves the N Queen problem using 
Branch and Bound. It mainly uses solveNQueensUtil() to 
solve the problem. It returns false if queens 
cannot be placed, otherwise return true and 
prints placement of queens in the form of 1s. 
Please note that there may be more than one 
solutions, this function prints one of the 
feasible solutions.*/
bool solveNQueens() 
{ 
    int board[N][N]; 
    memset(board, 0, sizeof board); 
  
    // helper matrices 
    int slashCode[N][N]; 
    int backslashCode[N][N]; 
  
    // arrays to tell us which rows are occupied 
    bool rowLookup[N] = {false}; 
  
    //keep two arrays to tell us which diagonals are occupied 
    bool slashCodeLookup[2*N - 1] = {false}; 
    bool backslashCodeLookup[2*N - 1] = {false}; 
  
    // initalize helper matrices 
    for (int r = 0; r < N; r++) 
        for (int c = 0; c < N; c++) 
            slashCode[r] = r + c, 
            backslashCode[r] = r - c + 7; 
  
    if (solveNQueensUtil(board, 0, slashCode, backslashCode, 
      rowLookup, slashCodeLookup, backslashCodeLookup) == false ) 
    { 
        printf("Solution does not exist"); 
        return false; 
    } 
  
    // solution found 
    printSolution(board); 
    return true; 
} 
  
// driver program to test above function 
int main() 
{ 
    solveNQueens(); 
  
    return 0; 
} 
`;

export const Example3Output = (
  <pre>
    1 0 0 0 0 0 0 0 <br />0 0 0 0 0 0 1 0 <br />0 0 0 0 1 0 0 0 <br />0 0 0 0 0
    0 0 1 <br />0 1 0 0 0 0 0 0 <br />0 0 0 1 0 0 0 0 <br />0 0 0 0 0 1 0 0{" "}
    <br />0 0 1 0 0 0 0 0 <br />
  </pre>
);
export const Example2Output = (
  <pre>
    1 2 3 <br />5 6 0 <br />7 8 4 <br />1 2 3 <br />5 0 6 <br />7 8 4 <br />1 2
    3 <br />5 8 6 <br />7 0 4 <br />1 2 3 <br />5 8 6 <br />0 7 4{" "}
  </pre>
);
export const Example1Output = <pre>Maximum possible profit = 235</pre>;
