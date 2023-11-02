create database
add documents
show all collections
show database
del database 



1. find person who age greater than 35
2. find person gender female highest age
3. find person gender female highest age and name
4. find person who have favourite food banana and show only age and eye color
5. find tags size 3
6. highest male and female 
7. highest male and female name of that persons
8. find total count of douments
9. find highest age male and his name
10. find all documents count : 
11. find the countries count :
12. defferent eye color and age count the documents
13. age gt 25 ,different eye color count the documents
14. age gt 20  defferent eye color and age count the documents
15. find tags size 3 and age gt 20 count
16. list name and age only 
17. add new field and its show tags and name
18. count all documents after unwind of tags
19. find the count of same ages
20. seperate all tags and find the count anyone here match 

21. find avg age of same eyecolor
22. find a person name start with h 
23. find a person name end with r
24. find a person name 4th letter m
25. find a person name any include n
26. find the type of  all documents and create new field and give its type name here 
27. create a new collection by existing documents
28. create user details name and orderId and create order lookup the both collection get all users and their orders 
29. create a capped collection
30. salary increase 25%
31. create index and accept value
32. delete indexes
33. create primary key
34. merge


## create index and explain 
## what is transaction and how it working with example
## how to copy dcollections 
## how to caopy database
## how to use sharding
## how to use replication













..............................................................................................................................

unary operators
unary operations perform each documents using project stage and accumalators are perform a group of operation and acuumolate the values
$type
$lt
$and
$or
$gt
$multiply
$type
......
$out
q. create a new collections using existing collection data types is values that created collections

NB: mongodb all operation perform used in 100 mb ram if any error get i will ram exceeded so here will used {allowDiskUse: true}

$lookup
............db.books.aggregate([{$lookup:
                                          {from:"authors",
                                          localField:"authorId",
                                          foreignField:"_id",
                                          as :"authorsBooks"    }}])
[



   in was all show some example for this technique
   "$$ROOT"
   write a query starting W name


1. collection
group of documents
2. CRUD

3. Lookup
4. unwind

5. in was all

6. Capped Collection
db.createCollection("logCollection", { capped: true, size: 1048576 }) // 1 MB
db.createCollection("cappedCollection",{capped:true, size:1024})

Inserting Documents:
db.logCollection.insert(message:"hey hello")
db.logCollection.insert(message:"hey hello")

db.logCollection.insert({ message: "Log entry 1" })
db.logCollection.insert({ message: "Log entry 2" })
here only one is present latest value over write here

NB: Automatically Removing Old Documents:

// db.createCollection("recentData", { capped: true, size: 2097152, max: 1000 }) // 2 MB with a maximum of 1000 documents



7. alias

8. Mongo Utilities

9.mongoDump



 ◦ Collection
 ◦ CRUD
 ◦ Lookup
 ◦ Unwind
 ◦ In was all
 ◦ Capped collection
 ◦ Alias
 ◦ Mongo Utilities
 ◦ Mongo Dump
 ◦ Indexing
 ◦ Logical operator
 ◦ Comparison operator
 ◦ Namespace
 ◦ addtoSet()
 ◦ Sharing
 ◦ Insert vs save
 ◦ BSON
 ◦ Mongo export
 ◦ Data type
 ◦ Mongo Server
 ◦ Update operators - set unset inc
 ◦ Distinct - unique
 ◦ Accumulators
 ◦ Count
 ◦ Out
 ◦ Express
 ◦ Find one and update
 ◦ Indexing
 ◦ Replication
 ◦ Aggregation
 ◦ Normalisation
 ◦ Aggregation Pipeline
 ◦ Replica set
 ◦ Different types of indexing

 Ad-hoc Queries
Schema-Less Database
Document-Oriented
Indexing
Replication
Aggregation
GridFS
Sharding
High Performance


components of sharding 
what is MongoDB features alternatives 
object id structured 
how many nodes can be beset in the replica set 
object id size 
relational data modeling 
embedded data modeling 
MongoDB backup and restore 
replica set 
primary and secondary replica set 
storage engine type of storage engine 
alternatives of MongoDB
types of indexing  
cursor
collection 
SQL vs NoSQL 
why does MongoDB use bson
sharding vs replication 
insert vs save 
update vs updateOne 
type of aggregation 
decrement 
what is data redundancy 
Queries
Engine
Advantages
Difference between SQL and nosql
How to add media
Covered query
Profiler
Indexing
4)Atomicity example other than bank transactions 

7)why is mongo non relational
8)
9) 
10)
11)write a query to find the name starting with ‘W’

db.sales.aggregate([{$match:{date: {$gte: ISODate("2023-01-01T00:00:00Z"),$lt: ISODate("2024-01-01T00:00:00Z")}}},{$group:{_id: "$product",totalRevenue: { $sum: "$total" }}},{$sort:{totalRevenue: -1}},{$limit: 3}])
db.sales.aggregate([{$match:{date:{$gte:ISODate("2023-01-01T00:00:00Z")},{$lt:ISODate("2023-01-01T00:00:00Z")}}},{$group:{_id:"$products",highestProducts:{$max:"$products"}}},{$sort:{_id:-1}},{$limit:3}])