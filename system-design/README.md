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