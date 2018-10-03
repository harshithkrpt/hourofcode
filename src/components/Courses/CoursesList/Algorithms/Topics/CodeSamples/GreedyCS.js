import React from "react";

export const Example1 = `
// Java program for Kruskal's algorithm to find Minimum 
// Spanning Tree of a given connected, undirected and  
// weighted graph 
import java.util.*; 
import java.lang.*; 
import java.io.*; 
  
class Graph 
{ 
    // A class to represent a graph edge 
    class Edge implements Comparable<Edge> 
    { 
        int src, dest, weight; 
  
        // Comparator function used for sorting edges  
        // based on their weight 
        public int compareTo(Edge compareEdge) 
        { 
            return this.weight-compareEdge.weight; 
        } 
    }; 
  
    // A class to represent a subset for union-find 
    class subset 
    { 
        int parent, rank; 
    }; 
  
    int V, E;    // V-> no. of vertices & E->no.of edges 
    Edge edge[]; // collection of all edges 
  
    // Creates a graph with V vertices and E edges 
    Graph(int v, int e) 
    { 
        V = v; 
        E = e; 
        edge = new Edge[E]; 
        for (int i=0; i<e; ++i) 
            edge[i] = new Edge(); 
    } 
  
    // A utility function to find set of an element i 
    // (uses path compression technique) 
    int find(subset subsets[], int i) 
    { 
        // find root and make root as parent of i (path compression) 
        if (subsets[i].parent != i) 
            subsets[i].parent = find(subsets, subsets[i].parent); 
  
        return subsets[i].parent; 
    } 
  
    // A function that does union of two sets of x and y 
    // (uses union by rank) 
    void Union(subset subsets[], int x, int y) 
    { 
        int xroot = find(subsets, x); 
        int yroot = find(subsets, y); 
  
        // Attach smaller rank tree under root of high rank tree 
        // (Union by Rank) 
        if (subsets[xroot].rank < subsets[yroot].rank) 
            subsets[xroot].parent = yroot; 
        else if (subsets[xroot].rank > subsets[yroot].rank) 
            subsets[yroot].parent = xroot; 
  
        // If ranks are same, then make one as root and increment 
        // its rank by one 
        else
        { 
            subsets[yroot].parent = xroot; 
            subsets[xroot].rank++; 
        } 
    } 
  
    // The main function to construct MST using Kruskal's algorithm 
    void KruskalMST() 
    { 
        Edge result[] = new Edge[V];  // Tnis will store the resultant MST 
        int e = 0;  // An index variable, used for result[] 
        int i = 0;  // An index variable, used for sorted edges 
        for (i=0; i<V; ++i) 
            result[i] = new Edge(); 
  
        // Step 1:  Sort all the edges in non-decreasing order of their 
        // weight.  If we are not allowed to change the given graph, we 
        // can create a copy of array of edges 
        Arrays.sort(edge); 
  
        // Allocate memory for creating V ssubsets 
        subset subsets[] = new subset[V]; 
        for(i=0; i<V; ++i) 
            subsets[i]=new subset(); 
  
        // Create V subsets with single elements 
        for (int v = 0; v < V; ++v) 
        { 
            subsets[v].parent = v; 
            subsets[v].rank = 0; 
        } 
  
        i = 0;  // Index used to pick next edge 
  
        // Number of edges to be taken is equal to V-1 
        while (e < V - 1) 
        { 
            // Step 2: Pick the smallest edge. And increment  
            // the index for next iteration 
            Edge next_edge = new Edge(); 
            next_edge = edge[i++]; 
  
            int x = find(subsets, next_edge.src); 
            int y = find(subsets, next_edge.dest); 
  
            // If including this edge does't cause cycle, 
            // include it in result and increment the index  
            // of result for next edge 
            if (x != y) 
            { 
                result[e++] = next_edge; 
                Union(subsets, x, y); 
            } 
            // Else discard the next_edge 
        } 
  
        // print the contents of result[] to display 
        // the built MST 
        System.out.println("Following are the edges in " +  
                                     "the constructed MST"); 
        for (i = 0; i < e; ++i) 
            System.out.println(result[i].src+" -- " +  
                   result[i].dest+" == " + result[i].weight); 
    } 
  
    // Driver Program 
    public static void main (String[] args)
    { 
        int V = 4;  // Number of vertices in graph 
        int E = 5;  // Number of edges in graph 
        Graph graph = new Graph(V, E); 
  
        // add edge 0-1 
        graph.edge[0].src = 0; 
        graph.edge[0].dest = 1; 
        graph.edge[0].weight = 10; 
  
        // add edge 0-2 
        graph.edge[1].src = 0; 
        graph.edge[1].dest = 2; 
        graph.edge[1].weight = 6; 
  
        // add edge 0-3 
        graph.edge[2].src = 0; 
        graph.edge[2].dest = 3; 
        graph.edge[2].weight = 5; 
  
        // add edge 1-3 
        graph.edge[3].src = 1; 
        graph.edge[3].dest = 3; 
        graph.edge[3].weight = 15; 
  
        // add edge 2-3 
        graph.edge[4].src = 2; 
        graph.edge[4].dest = 3; 
        graph.edge[4].weight = 4; 
  
        graph.KruskalMST(); 
    } 
}  
`;

export const Example2 = `
 
// A Java program for Prim's Minimum Spanning Tree (MST) algorithm. 
// The program is for adjacency matrix representation of the graph 
  
import java.util.*; 
import java.lang.*; 
import java.io.*; 
  
class MST 
{ 
    // Number of vertices in the graph 
    private static final int V=5; 
  
    // A utility function to find the vertex with minimum key 
    // value, from the set of vertices not yet included in MST 
    int minKey(int key[], Boolean mstSet[]) 
    { 
        // Initialize min value 
        int min = Integer.MAX_VALUE, min_index=-1; 
  
        for (int v = 0; v < V; v++) 
            if (mstSet[v] == false && key[v] < min) 
            { 
                min = key[v]; 
                min_index = v; 
            } 
  
        return min_index; 
    } 
  
    // A utility function to print the constructed MST stored in 
    // parent[] 
    void printMST(int parent[], int n, int graph[][]) 
    { 
        System.out.println("Edge \tWeight"); 
        for (int i = 1; i < V; i++) 
            System.out.println(parent[i]+" - "+ i+"\t"+ 
                            graph[i][parent[i]]); 
    } 
  
    // Function to construct and print MST for a graph represented 
    // using adjacency matrix representation 
    void primMST(int graph[][]) 
    { 
        // Array to store constructed MST 
        int parent[] = new int[V]; 
  
        // Key values used to pick minimum weight edge in cut 
        int key[] = new int [V]; 
  
        // To represent set of vertices not yet included in MST 
        Boolean mstSet[] = new Boolean[V]; 
  
        // Initialize all keys as INFINITE 
        for (int i = 0; i < V; i++) 
        { 
            key[i] = Integer.MAX_VALUE; 
            mstSet[i] = false; 
        } 
  
        // Always include first 1st vertex in MST. 
        key[0] = 0;     // Make key 0 so that this vertex is 
                        // picked as first vertex 
        parent[0] = -1; // First node is always root of MST 
  
        // The MST will have V vertices 
        for (int count = 0; count < V-1; count++) 
        { 
            // Pick thd minimum key vertex from the set of vertices 
            // not yet included in MST 
            int u = minKey(key, mstSet); 
  
            // Add the picked vertex to the MST Set 
            mstSet[u] = true; 
  
            // Update key value and parent index of the adjacent 
            // vertices of the picked vertex. Consider only those 
            // vertices which are not yet included in MST 
            for (int v = 0; v < V; v++) 
  
                // graph[u][v] is non zero only for adjacent vertices of m 
                // mstSet[v] is false for vertices not yet included in MST 
                // Update the key only if graph[u][v] is smaller than key[v] 
                if (graph[u][v]!=0 && mstSet[v] == false && 
                    graph[u][v] < key[v]) 
                { 
                    parent[v] = u; 
                    key[v] = graph[u][v]; 
                } 
        } 
  
        // print the constructed MST 
        printMST(parent, V, graph); 
    } 
  
    public static void main (String[] args) 
    { 
        
        MST t = new MST(); 
        int graph[][] = new int[][] {{0, 2, 0, 6, 0}, 
                                    {2, 0, 3, 8, 5}, 
                                    {0, 3, 0, 0, 7}, 
                                    {6, 8, 0, 0, 9}, 
                                    {0, 5, 7, 9, 0}}; 
  
        // Print the solution 
        t.primMST(graph); 
    } 
} 
`;

export const Example3 = `

import java.util.PriorityQueue; 
import java.util.Scanner; 
import java.util.Comparator; 
  
// node class is the basic structure 
// of each node present in the huffman - tree. 
class HuffmanNode { 
  
    int data; 
    char c; 
  
    HuffmanNode left; 
    HuffmanNode right; 
} 
  
// comparator class helps to compare the node 
// on the basis of one of its attribute. 
// Here we will be compared 
// on the basis of data values of the nodes. 
class MyComparator implements Comparator<HuffmanNode> { 
    public int compare(HuffmanNode x, HuffmanNode y) 
    { 
  
        return x.data - y.data; 
    } 
} 
  
public class Huffman { 
  
    // recursive function to print the 
    // huffman-code through the tree traversal. 
    // Here s is the huffman - code generated. 
    public static void printCode(HuffmanNode root, String s) 
    { 
  
        // base case; if the left and right are null 
        // then its a leaf node and we print 
        // the code s generated by traversing the tree. 
        if (root.left 
                == null
            && root.right 
                   == null
            && Character.isLetter(root.c)) { 
  
            // c is the character in the node 
            System.out.println(root.c + ":" + s); 
  
            return; 
        } 
  
        // if we go to left then add "0" to the code. 
        // if we go to the right add"1" to the code. 
  
        // recursive calls for left and 
        // right sub-tree of the generated tree. 
        printCode(root.left, s + "0"); 
        printCode(root.right, s + "1"); 
    } 
  
    // main function 
    public static void main(String[] args) 
    { 
  
        Scanner s = new Scanner(System.in); 
  
        // number of characters. 
        int n = 6; 
        char[] charArray = { 'a', 'b', 'c', 'd', 'e', 'f' }; 
        int[] charfreq = { 5, 9, 12, 13, 16, 45 }; 
  
        // creating a priority queue q. 
        // makes a min-priority queue(min-heap). 
        PriorityQueue<HuffmanNode> q 
            = new PriorityQueue<HuffmanNode>(n, new MyComparator()); 
  
        for (int i = 0; i < n; i++) { 
  
            // creating a huffman node object 
            // and adding it to the priority-queue. 
            HuffmanNode hn = new HuffmanNode(); 
  
            hn.c = charArray[i]; 
            hn.data = charfreq[i]; 
  
            hn.left = null; 
            hn.right = null; 
  
            // add functions adds 
            // the huffman node to the queue. 
            q.add(hn); 
        } 
  
        // create a root node 
        HuffmanNode root = null; 
  
        // Here we will extract the two minimum value 
        // from the heap each time until 
        // its size reduces to 1, extract until 
        // all the nodes are extracted. 
        while (q.size() > 1) { 
  
            // first min extract. 
            HuffmanNode x = q.peek(); 
            q.poll(); 
  
            // second min extarct. 
            HuffmanNode y = q.peek(); 
            q.poll(); 
  
            // new node f which is equal 
            HuffmanNode f = new HuffmanNode(); 
  
            // to the sum of the frequency of the two nodes 
            // assigning values to the f node. 
            f.data = x.data + y.data; 
            f.c = '-'; 
  
            // first extracted node as left child. 
            f.left = x; 
  
            // second extracted node as the right child. 
            f.right = y; 
  
            // marking the f node as the root node. 
            root = f; 
  
            // add this node to the priority-queue. 
            q.add(f); 
        } 
  
        // print the codes by traversing the tree 
        printCode(root, ""); 
    } 
} 
`;

export const Example3Output = (
  <pre>
    f: 0 <br />
    c: 100 <br />
    d: 101 <br />
    a: 1100 <br />
    b: 1101 <br />
    e: 111 <br />
  </pre>
);

export const Example2Output = (
  <pre>
    Edge Weight <br />0 - 1 2 <br />1 - 2 3 <br />0 - 3 6 <br />1 - 4 5 <br />
  </pre>
);
export const Example1Output = (
  <pre>
    Following are the edges in the constructed MST <br />2 -- 3 == 4 <br />0 --
    3 == 5 <br />0 -- 1 == 10
  </pre>
);
