## System Design
>A - Ask good questions

>B - Don't use buzzwords

>C - Clear and organized thinking

>D - Drive discussions with 80-20 rule

## Things to consider
1. Features
2. API
3. Availability
4. Latency
5. Scalability
6. Durability
7. Class Diagram
8. Security and Privacy
9. Cost-effective

## Concepts to know
1. Vertical vs horizontal scaling
2. CAP theorem
3. ACID vs BASE
4. Partitioning/Sharding 
5. Consistent Hashing
6. Optimistic vs pessimistic locking
7. Strong vs eventual consistency
8. RelationalDB vs NoSQL
9. Types of NoSQL
     * Key value
     * Wide column
     * Document-based
     * Graph-based
10. Caching
11. Data center/racks/hosts
12. CPU/memory/Hard drives/Network bandwidth
13. Random vs sequential read/writes to disk
14. HTTP vs http2 vs WebSocket
15. TCP/IP model
16. ipv4 vs ipv6
17. TCP vs UDP
18. DNS lookup
19. Http & TLS
20. Public key infrastructure and certificate 
21. authority(CA)
22. Symmetric vs asymmetric encryption
23. Load Balancer
24. CDNs & Edges
25. Bloom filters and Count-Min sketch
26. Paxos 
27. Leader election
28. Design patterns and Object-oriented design
29. Virtual machines and containers
30. Pub-sub architecture 
31. MapReduce
32. Multithreading, locks, synchronization, CAS(compare and set)

## Tools
1. Cassandra
2. MongoDB/Couchbase
3. Mysql
4. Memcached
5. Redis
6. Zookeeper
7. Kafka
8. NGINX
9. HAProxy
8. Solr, Elastic search
9. Amazon S3
10. Docker, Kubernetes, Mesos
11. Hadoop/Spark and HDFS

## CAP theorem
>The CAP theorem (also called Brewer’s theorem) states that a distributed database system can only guarantee two out of these three characteristics: Consistency, Availability, and Partition Tolerance.

### Consistency
> A system is said to be consistent if all nodes see the same data at the same time.

> Simply, if we perform a read operation on a consistent system, it should return the value of the most recent write operation. This means that, the read should cause all nodes to return the same data, i.e., the value of the most recent write.

### Availability

> Availability in a distributed system ensures that the system remains operational 100% of the time. Every request gets a (non-error) response regardless of the individual state of a node.

>Note: this does not guarantee that the response contains the most recent write.


### Partition Tolerance

> This condition states that the system does not fail, regardless of if messages are dropped or delayed between nodes in a system.

> Partition tolerance has become more of a necessity than an option in distributed systems. It is made possible by sufficiently replicating records across combinations of nodes and networks.

## Vertical Scaling Vertical Horizontal Scaling 
> Horizontal scaling means that you scale by adding more machines into your pool of resources whereas Vertical scaling means that you scale by adding more power (CPU, RAM) to an existing machine.

An easy way to remember this is to think of a machine on a server rack, we add more machines across the horizontal direction and add more resources to a machine in the vertical direction.

## Sharding

> Sharding is the practice of optimizing database management systems by separating the rows or columns of a larger database table into multiple smaller tables. The new tables are called “shards” (or partitions), and each new table either has the same schema but unique rows (as is the case for “horizontal sharding”) or has a schema that is a proper subset of the original table’s schema (as is the case for “vertical sharding”).

## Why Is Sharding Used?

> Sharding is a common concept in scalable database architectures. By sharding a larger table, you can store the new chunks of data, called logical shards, across multiple nodes to achieve horizontal scalability and improved performance. Once the logical shard is stored on another node, it is referred to as a physical shard.

> When running a database on a single machine, you will eventually reach the limit of the amount of computing resources you can apply to any queries, and you will obviously reach a maximum amount of data with which you can efficiently work. By horizontally scaling out, you can enable a flexible database design that increases performance in two key ways:

> With massively parallel processing, you can take advantage of all the compute resources across your cluster for every query.
Because the individual shards are smaller than the logical table as a whole, each machine has to scan fewer rows when responding to a query.
Horizontal sharding is effective when queries tend to return a subset of rows that are often grouped together. For example, queries that filter data based on short date ranges are ideal for horizontal sharding since the date range will necessarily limit querying to only a subset of the servers.

> Vertical sharding is effective when queries tend to return only a subset of columns of the data. For example, if some queries request only names, and others request only addresses, then the names and addresses can be sharded onto separate servers.

> Also, sharded databases can offer higher levels of availability. In the event of an outage on an unsharded database, the entire application is unusable. With a sharded database, only the portions of the application that relied on the missing chunks of data are unusable. In practice, sharded databases often further mitigate the impact of such outages by replicating backup shards on additional nodes.

## What Is the Difference between Sharding and Partitioning?
> Sharding and partitioning are both about breaking up a large data set into smaller subsets. The difference is that sharding implies the data is spread across multiple computers while partitioning does not. Partitioning is about grouping subsets of data within a single database instance. In many cases, the terms sharding and partitioning are even used synonymously, especially when preceded by the terms “horizontal” and “vertical.” Thus, “horizontal sharding” and “horizontal partitioning” can mean the same thing.

### How does a CDN work?

To minimize the distance between the visitors and your website's server, a CDN stores a cached version of its content in multiple geographical locations (a.k.a., points of presence, or PoPs). ... In essence, CDN puts your content in many places at once, providing superior coverage to your users.
