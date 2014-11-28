---
layout: blog
title: "Binary Search Time Complexity: Average Number of Comparisons"
description: "Introduce binary search, and calculate the average number of comparisons in the algorithm."
category: blog
---
##Introduction to Binary Search##
Binary search is a classic and basic search algorithm which is applicable when the array is ordered. This method using the the divide and conquer approach takes advantage of the information of the order of the elements and tries to do less work. Undoubtedly, binary search is very efficient.

##Java Code Implementation##
```java
int binarySearch (int [ ] E, int first, int last, int k)
    {
    	if (last < first
    		return -1;
    	else {
    		int mid = (first + last) / 2;
    		if (k == E[mid]) return mid;
    		else if (k < E[mid])
    			return binarySearch (E, first, mid − 1, k);
    		else
    			return binarySearch (E, mid + 1, last, k);
    	}
    }
```

##Time Complexity Analysis##

###1. Worst-case###
The implementation of binary search is a recursive function, so recursive equation should be established for time complexity analysis.

Look back to the code, if we assume the total time of binary search is $T(n)$, for each recursive invocation, the time is $T({n \over 2})$. So it is not difficult to find the recursive equation.
$$T(n)=T({n\over 2})+c$$
Assume $n=2^k$,

$$T(n)=T({n\over 4})+2c=T({n\over 8})+3c=...=T({n\over 2^k})+kc=T(1)+kc$$.

Notice that $k=log_2(n)$ and $T(1)=c$,

so $T(n)=(k+1)c=(log_2(n)+1)c=O(log(n))$.

###2. Average-case###
Assume $ q $ is the probability that a search is successful and $ n=2^k-1 $.

If $A_s(n)$ is the average number of comparisons that a successful search and $A_f(n)$ is the number of comparisons in an unsuccessful search. Then by the law of expectation,
$$A_q(n)=qA_s(n)+(1-q)A_f(n).$$
Next, we should calculate $A_s(n)$ and $A_f(n)$ respectively.

For $A_f(n)$, we can use the result of the worst-case analysis, because for unsuccessful search we have to conduct the search until ```last < first ```.That is to say, the average case for unsuccessful search is $\lfloor log_2(n) \rfloor +1=log_2(n+1)$, taking $c=1$.

For $As(n)$, the thing is a little bit more complex. We have to find the number of comparisons for every possible case. It is easy to see that if the key is at the position of $n \over 2$, only 1 comparison is necessary to find the key. Also if the key is at the position of $n\over4$ or $3n \over 4$, with 2 comparisons we can find the key. And so on, if the key is located at $(2i-1){n \over 2^m}$ for $i=1,2...2^{m-1}$, m comparisons are needed.

![Figure 1: Deduction of the Average Number of Comparisons in Successful Binary Search](/images/binary_search.png "Figure 1: Deduction of the Average Number of Comparisons in Successful Binary Search")
<center>Figure 1: Deduction of the Average Number of Comparisons in Successful Binary Search</center>

For all the cases, the sum of the elements $1+2+3+...+2^{m-1}$ should be $n$. That is to say, ${1+2+4+...+2^{m-1}}={(1-2^{m})\over 1-2}=2^{m}-1=n=2^k-1$.

So $$m=k.$$

Assume the possibility of all the cases is equal to $1\over n$, so the average number of comparisons in successful binary search is
$$\sum_{i=1}^{k}{1\over n}*i*2^{i-1}.$$

By the formula
$$\sum_{i=1}^{k}i*2^{i-1}=2^kk-2^k+1,$$

we can get that
$$A_s(n)=log_2(n+1)+{log_2(n+1)\over n} -1.$$

So after all,
$$A_q(n)=q{log_2(n+1) \over n}-q+log_2(n+1).$$

Through the analysis, we can draw the conclusion that the average case of binary search is $qO({log(n) \over n})-q+O(log(n)).$
