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
     * Consistency 
     * Availability 
     * Partition Tolerance.
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
1. Cassandra - wide colomn & highly scallable database. Cassandra can provide both eventual and strong consistency. Under the hood cassandra uses consistance hashing to Shard the data.
2. MongoDB/Couchbase - 
3. Mysql
4. Memcached
5. Redis
     * Two things to remember when using distributed Caching - 1. They should never be the source of truth & they can only hold limited amount of data which is limited by the amount of memory limited by Host. 
6. Zookeeper - Scales well for reads, not for writes
7. Kafka - 
8. NGINX
9. HAProxy -
     * NGINX, HAProxy both are Load balancers and are very efficient.
8. Solr, Elastic search
9. Amazon S3
10. Docker, Kubernetes, Mesos
     * Docker provides you a container inside which you can develop and run your distributed applications. This containers can run anywhere. Kubernetes, Mesos are the software tools used to manage and co-ordinate these containers. 
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

> To minimize the distance between the visitors and your website's server, a CDN stores a cached version of its content in multiple geographical locations (a.k.a., points of presence, or PoPs). ... In essence, CDN puts your content in many places at once, providing superior coverage to your users.

## Load Balancer 

> A load balancer's job is to sit between the client and server (but there are other places it can be inserted) and work out how to distribute incoming request loads across multiple servers, so that the end user (client's) experience is consistently fast, smooth and reliable.

> So load balancers are like traffic managers who direct traffic.  And they do this to maintain availability and throughput.

### Optimistic Locking

> Optimistic Locking is a strategy where you read a record, take note of a version number (other methods to do this involve dates, timestamps or checksums/hashes) and check that the version hasn't changed before you write the record back. When you write the record back you filter the update on the version to make sure it's atomic. (i.e. hasn't been updated between when you check the version and write the record to the disk) and update the version in one hit.

> If the record is dirty (i.e. different version to yours) you abort the transaction and the user can re-start it.

> This strategy is most applicable to high-volume systems and three-tier architectures where you do not necessarily maintain a connection to the database for your session. In this situation the client cannot actually maintain database locks as the connections are taken from a pool and you may not be using the same connection from one access to the next.

### Pessimistic Locking

> Pessimistic Locking is when you lock the record for your exclusive use until you have finished with it. It has much better integrity than optimistic locking but requires you to be careful with your application design to avoid Deadlocks. To use pessimistic locking you need either a direct connection to the database (as would typically be the case in a two tier client server application) or an externally available transaction ID that can be used independently of the connection.

> In the latter case you open the transaction with the TxID and then reconnect using that ID. The DBMS maintains the locks and allows you to pick the session back up through the TxID. This is how distributed transactions using two-phase commit protocols (such as XA or COM+ Transactions) work.

### Useful Resources 

- https://betterprogramming.pub/frontend-architecture-for-scale-c4acc44a214e 

- https://www.youtube.com/watch?v=Gg318hR5JY0 

- https://www.freecodecamp.org/news/systems-design-for-interviews - Great article - System Design Interview Questions – Concepts You Should Know 
## Eventual vs Strong Consistency in Distributed Databases
