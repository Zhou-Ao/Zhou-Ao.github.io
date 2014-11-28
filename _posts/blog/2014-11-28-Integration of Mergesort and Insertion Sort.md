---
layout: blog
title: Integration of Mergesort and Insertion Sort
description: Mergesort is faster than insertion sort, while whens the size of sub-arrays are small, the overhead of many recursive calls makes the algorithm inefficient. Integration of mergesort and insertion sort is a good way to develop advanced sort algorithm.
category: blog
---
##Introduction to Mergesort and Insertion Sort##

###Insertion Sort###

Insertion sort is a intuitive, primitive sorting method. Given a Given an unordered set of objects, the algorithm repeatedly removes an entry from the set and insert it into a new ordered list.

```java
void InsertionSort(ALIST slot[ ], int n)
{   // input slot is an array of n records;
    // assume n > 1;
    for (int i=1; i < n; i++) {
        for (int j=i; j > 0; j--) {
            if (slot[j].key < slot[j-1].key)
                swap(slot[j], slot[j-1]);
            else break;
        }
    }
}
```
The time complexity of insertion sort is in the order of *$n^2$*. Since sorting is performed directly on original array without any working storage, swapping and shifting which are time consuming are essential. So insertion sort is slow when a large size of array is going to be sorted. While for small-size arrays, insertion sort is still a simple and reliable algorithm.

###Mergesort###

Mergesort is a useful sorting algorithm based on the idea of **divide-and-conquer**. For each iteration, the unsorted array is divided into two sub-arrays, and they are separately sorted. Then the two sorted sub-arrays merge together.

```java
void mergesort(int n, int m)
{
    int mid = (n+m)/2;
    if (m-n <= 0)
        return;
    else if (m-n > 1) {
        mergesort(n, mid);
        mergesort(mid+1, m);
    }
    merge(n, m);
}
```

The key point of mergesort is how *merge()* merges two sub-arrays of elements between index n and mid, and between mid+1 and m.

```java
void merge(int n, int m)
{
    if (m-n <= 0) return;
        divide the list into 2 halves; // both halves are sorted
        while (both halves are not empty) {
                compare the 1 st elements of the 2 halves; // 1 comparison
            if (1 st element of 1st half is smaller)
                1 st element of 1st half joins the end of the merged list;
            else if (1 st element of 2nd half is smaller)
                move the 1 st element of 2nd half to the end of the
                merged list;
            else { // the 1 st elements of the 2 halves are equal
                if (they are the last elements) break;
                1 st element of 1st half joins end of the merged list;
                move the 1 st element of 2nd half to the end of the
                merged list;
            }
        } // end of while loop;
} // end of merge
```

The time complexity of mergesort is in the order of *$nlog(n)$*. But when the size of the array to be sorted is small, the the overhead of many recursive calls will make the algorithm inefficient.

##Integration of Mergesort and Insertion Sort##

###Modified Mergesort###

In oder to overcome the disadvantages of both mergesort and insertion sort, we can develop modified mergesort on the basis of integration of mergesort and insertion sort. This new algorithm can be achieved by choosing a small value of *fac* as a **threshold** for the size of sub-arrays. When the size of a
sub-array in a recursive call is less than or equal to the value of *fac*, the algorithm will switch to insertion sort, which is efficient for small input. A pseudocode of the modified mergesort is given below:

```java
void mergeSort(Element E[], int first, int last, int fac)
{
    if (last – first > S) {
        int mid = (first + last)/2;
        mergeSort(E, first, mid, S);
        mergeSort(E, mid + 1, last, S);
        merge(E, first, mid, last);
    } else {
        insertionSort(E, first, last);
    }
}
```
###Implement of Modified Mergesort###

>*Array.java*   <br />
A class which consists of constructors, and methods such as InsertionSort( ), Merge( ), MergeSort( ), Sort( ) (which uses InsertionSort( ) to sort the sub-arrays with size < factor).    <br />
The number of comparisons are returned using the GetCounter( ) method, and the randomly generated data of array are returned using GetArray( ) method.

```java
public class Array{                                                 //Array Class
    private int n;                                                  //Class member size of Array
    private int [] S;                                               //Class member data of Array
    private long counter;                                           //Class member count comparisons
    private int factor;
    
    public Array(){                                                 //Default constructor
        n = 0;
        S = new int [n];
        counter = 0;
        factor = 0;
    }
    
    public Array(int size){                                         //Constructor with Initialization
        n = size;
        if(n <= 0)
            System.err.println("The input Array size is incorrect.");
        else{
            S = new int [n];
            Random ran = new Random();
            for(int i = 0; i < n; i++){ 
                S[i] = Math.abs(ran.nextInt());                     //Set random data to Array
            }
        }
        counter = 0;
        factor = 10;
    }
    
    public Array(int size, int fac){                                            //Constructor with Initialization
        n = size;
        if(n <= 0)
            System.err.println("The input Array size is incorrect.");
        else{
            S = new int [n];
            Random ran = new Random();
            for(int i = 0; i < n; i++){ 
                S[i] = Math.abs(ran.nextInt());                     //Set random data to Array
            }
        }
        counter = 0;
        factor = fac;
    }
    
    public Array(Array aArray){                                     //Copy constructor
        this.n = aArray.n;
        this.counter = aArray.counter;
        this.factor = aArray.factor;
        S = new int[aArray.n];
        for(int i = 0; i < aArray.n; i++){
            this.S[i] = aArray.S[i];
        }   
    }
    
    public void InsertionSort(int start, int last){                                     //Class methods
        for (int i = start; i <= last; i++){
            for (int j = i; j > start; j--) {
                if (S[j] < S[j-1]){
                    counter++;
                    int tmp = S[j];
                    S[j] = S[j-1];
                    S[j-1] = tmp;
                    }
                else break;
            }
        }
    }
    private void Merge(int start, int end){                         //Class methods, used in MergeSort
        int mid = (start + end) / 2;
        int a = start, b = mid + 1, index = 0;
        int[] tmpArray = new int[end - start + 1];
        
        while(a <= mid && b <= end){
            if(S[a] <= S[b]){
                tmpArray[index++] = S[a];
                a++;
            }
            else{
                tmpArray[index++] = S[b];
                b++;
            }
            counter++;
        }
        while(a <= mid){
            tmpArray[index++] = S[a++];
        }
        while(b <= end){
            tmpArray[index++] = S[b++];
        }
        for(int i = start; i <= end; i++){
            S[i] = tmpArray[i - start];
        }
    }
    public void MergeSort(int start, int end){                      //Class methods MergeSort
        if(end - start <= 0)
            return;
        else if(end - start > 1){
            int mid=(start+end)/2;
            MergeSort(start,mid);
            MergeSort(mid+1,end);
        }
        Merge(start,end);
    }
    
    public void Sort(int first, int last){                                              //Class methods Sort
        if(last - first > factor){
            int mid = (first + last)/ 2;
            Sort(first, mid);
            Sort(mid + 1, last);
            Merge(first, last);
        }
        else{
            InsertionSort(first, last);
        }
    }
    
    public long GetCounter(){                                       //Class methods, get number of comparisons
        return(counter);
    }
    
    public int[] GetArray(){                                            //Class methods, get data of Array
        int[] tmp = new int[n];
        for(int i = 0; i < n; i++){
            tmp[i] = S[i];
        }
        return(tmp);
    }
}
```

###Experiment on Modified Mergesort###

I did series of experiments to explore how modified mergesort improves on the basis of mergesort by generating input data sets of various sizes, randomly ranging from 1,000 to 1,000,000 integers to see the number of key comparisons and CPU times taken by modified mergesort compared with origin mergesort. And I also studied how how the different values of S would affect the performance of the modified algorithm.

####1. Compare the number of key comparisons taken by modified mergesort and origin mergesort####

![Curve of Modified Mergeort Key Comparisons vs. Array Size](/images/modified_mergesort_comparisons.png "Figure 1: Curve of Modified Mergesort Key Comparisons vs. Array Size")
<center>Figure 1: Curve of Modified Mergesort Key Comparisons vs. Array Size</center>

From Figure 1, we can obtain the relationship between the number of key
comparisons and array size in modified mergesort. By curve fitting tool of
Matlab, we find that the relationship function is mostly like $nlog(n)$.

![Curve of Mergesort Key Comparisons vs. Array Size](/images/mergesort_comparisons.png "Figure 2: Curve of Mergesort Key Comparisons vs. Array Size")
<center>Figure 2: Curve of Mergesort Key Comparisons vs. Array Size</center>

From Figure 2, we can obtain the relationship between the number of key
comparisons and array size in mergesort. By curve fitting tool of Matlab, we find that the relationship function is mostly like $nlog(n)$.

Through analysis, the relationship between key comparisons and array size in
modified mergesort is $nlog(n)$. Although it is the same in Merge Sort, when
compare the exact number of key comparisons with same array size in Advanced
Merge Sort and Merge Sort, Advanced Merge Sort conducts fewer comparisons.
By curve fitting, we obtain the mathematical relationship function between
key comparisons and array size is $f(n) = 1.333nlog(n)$.

####1. Compare the CPU time taken by modified mergesort and origin mergesort####

![Curve of Modified Mergesort Time vs. Array Size](/images/modified_mergesort_time.png "Figure 3: Curve of Modified Mergesort Time vs. Array Size")
<center>Figure 3: Curve of Modified Mergesort Time vs. Array Size</center>

From Figure 3, we can obtain the relationship between CPU time and array
size in modified mergesort. By curve fitting tool of Matlab, we find that the
relationship function is mostly like $n$.

![Curve of Mergesort Time vs. Array Size](/images/mergesort_time.png "Figure 4: Curve of Mergesort Time vs. Array Size")
<center>Figure 4: Curve of Mergesort Time vs. Array Size</center>

From Figure 4, we can obtain the relationship between CPU time and array
size in mergesort. By curve fitting tool of Matlab, we find that the
relationship function is mostly like $n$.

Through analysis, the relationship between key comparisons and array size in
modified mergesort is $n^2$ . Although it is the same as mergesort, when comparing the exact number of key comparisons with same array size in modified mergesort and mergesort, modified mergesort conducts fewer comparisons.
By curve fitting, we obtain the mathematical relationship function between
CPU time and array size is $f(t) = 0.0001928*t + -5.342$.

####2. Number of key comparisons and CPU time taken by Advanced Merge Sort on the data sets with different factors####

![CPU Time and Key Comparisons of Modified Mergesort with Different Factor (ArraySize = 10000)](/images/table_comparisons_and_time.png "Table 1: CPU Time and Key Comparisons of Modified Mergesort with Different Factor (ArraySize = 10000)")
<center>Table 1: CPU Time and Key Comparisons of Modified Mergesort with Different Factor (ArraySize = 10000)</center>

![Curve of Modified Mergesort Key Comparisons vs. Factor (ArraySize = 10000)](/images/modified_mergesort_comparisons_fac.png "Figure 5: Curve of Modified Mergesort Key Comparisons vs. Factor (ArraySize = 10000)")
<center>Figure 5: Curve of Modified Mergesort Key Comparisons vs. Factor (ArraySize = 10000)</center>

From Figure 5, we can obtain the relationship between key comparisons and
factor in modified mergesort. With factor increasing, we find it is difficult to gain the exact relationship function and the relationship is mostly like random distribution. For this result, two points can be taken into consideration. One is that we initialize the same-size array with random integers for each time conducting modified mergesort, so if the factor does not effect the number of comparisons, the number of comparisons would range in a small section. The other is that the performance of CPU is usually unstable. The speed of CPU is sometimes fast but at other times slow, so if the factor does not effect the number of comparisons, the number of comparisons would also range in a small section.

![Curve of Modified Mergesort Time vs. Factor (ArraySize = 10000)](/images/modified_mergesort_time_fac.png "Figure 6: Curve of Modified Mergesort Time vs. Factor (ArraySize = 10000)")
<center>Figure 6: Curve of Modified Mergesort Time vs. Factor (ArraySize = 10000)</center>

From Figure 6, we can obtain the relationship between CPU time and factor
in modified mergesort. With factor increasing, the CPU time dramatically
deceases, but when factor increasing to 10, the CPU time stay in a small range.

It is remarkable to find there is a huge difference between the relationship of
key comparison number and factor and the relationship of CPU time and factor.
We consider that although with different factors the number of comparisons is
almost the same, the operation time may not be the same when the time of other
operations such as swap and assignment is taken into consideration, due to the
different procedure of mergesort and insertion Sort.

###Conclusions###

####1. The improvement of Modified MergeSort####

As for key comparisons, the improvement of the modified mergesort is

$$ {1.35-1.333 \over 1.35} = 0.0126 $$

, which is not very significant.

But as for CPU time, the improvement of the modified mergesort is

$$ {0.000245-0.0001928 \over 0.000245} = 0.213 $$

, which is very impressive.

####2. The effect of different values of factor####

From the results, the factor have little effect on the number of key
comparison conducted in modified mergesort, but it does reduce the CPU time
especially when the factor is over 10.


