---
title: Why non-tech users struggle with logical operators and how can that be solved?
date: 2021-11-09T04:30:00-08:00
description: |-
  Many of us would have come across logical operators in one way or the other. Commonly used operators are these 3 - AND/OR/NOT

  All these operators are used to perform a specific function. Now you may ask whats the big deal here? Let me tell you.

---
## Problem Statement:

Many of us would have come across logical operators in one way or the other. Commonly used operators are these 3 - AND/OR/NOT

All these operators are used to perform a specific function. Now you may ask whats the big deal here? Let me tell you.

***

## Where AND/OR is frequently used?

There are several CDPs, CRMs, Marketing Automation and other tools in the global market, makes use of a feature called Segmentation which will group the users.

  
## What is Segmentation?

Segmentation is nothing but a process of grouping a set of users from the total list of data. The list will then be used when sending marketing campaigns and other purposes. In these cases, conditions are mandatory for grouping the users based on the requirement.

And many times either the marketers or any non-tech users find it difficult in segmenting part using the traditional AND/OR.

## Why AND/OR is confusing for some?

Let us take a simple real time example,

- Condition using **AND** - Need to retrieve customers whose "Age is 25" AND "Age is 35" from a list. 
	Actual result – Will be invalid. (As the same person cannot have 2 different ages)
	But, non-tech users might assume - Customers whose “Age is 25” and also Customers whose “Age is 35" will be displayed. (Which is wrong)

- Condition using **OR** - "City is Bangalore" OR "Age is 40".
	Actual result – Condition should retrieve Number of records having “City as Bangalore”, along with the customers whose age is 40. It will display the records which satisfies both the conditions.
	But, non-tech users might assume - Either the record with "City is Bangalore" or the "Age is 40", any one will be displayed. (Which is wrong)

_Now it is quite evident that, grammatical AND/OR is different from logical AND/OR. So what can be done in order to avoid the above confusion?_

Replacing **AND/OR/NOT with Match ALL, ANY, NONE** helps to a great extent. Introducing terms which are more conversational, reduces the complexity for the users who use it. This would be beneficial especially for the non-tech users, who are finding it difficult in understanding the logic behind AND/OR/NOT.

In simpler terms,

- Match **ALL** is going to fetch you the details when all the conditions match.

- Match **ANY** is going to fetch you the details when any of the conditions gets matched.

Taking the same example as above,

- Condition using Match **ALL -** Need to retrieve customers whose "Age is 25", "Age is 35" from a list.
	Result – This will retrieve all the customers from the list whose age is 25 and 35.

- Condition using Match **ANY** - Need to retrieve customers "City is Bangalore", "Age is 40".
	Result – This will retrieve the users whose “City is Bangalore” or whose “Age is 40”.

## Conclusion

The advancement of technology and its tools is massive in today’s world. We cannot expect a non-tech user to think from a techie’s perspective. So, it’s always better to design a module that not only satisfies all the desired functionalities, most importantly that can be understood by both types of users.