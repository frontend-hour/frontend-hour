# System Design Fundamentals – Complete Topic Index

Based on *System Design Fundamentals* by Ashish Pratap Singh

---

# 📘 1. System Design Fundamentals

## Core Concepts

- Scalability
- Availability
- Latency vs Throughput
- CAP Theorem

## Load Balancing

- Load Balancers
  - Round Robin
  - Weighted Round Robin
  - Least Connections
  - Least Response Time
  - IP Hash

## Databases

- Database Types:
  - Relational Databases (RDBMS)
  - NoSQL Databases
  - In-Memory Databases
  - Graph Databases
  - Time Series Databases
  - Spatial Databases

- Database Indexes
- Database Sharding

## Performance & Optimization

- Caching
  - Read-Through Cache
  - Write-Through Cache
  - Write-Back Cache
  - Cache-Aside
  - Eviction Policies:
    - LRU (Least Recently Used)
    - LFU (Least Frequently Used)
    - FIFO (First In First Out)
    - TTL (Time To Live)

- Content Delivery Network (CDN)
- Rate Limiting
  - Token Bucket
  - Leaky Bucket
  - Fixed Window Counter
  - Sliding Window Log
  - Sliding Window Counter

## Distributed Systems Concepts

- Consistent Hashing
- Consensus Algorithms
  - Paxos
  - Raft
- Heartbeats
- Checksums
- Service Discovery
- Bloom Filters
- Gossip Protocol

## Communication & Infrastructure

- Message Queues
- Proxy Servers
  - Forward Proxy
  - Reverse Proxy

---

# ⚖️ 2. System Design Trade-offs

- Vertical vs Horizontal Scaling
- Strong vs Eventual Consistency
- Stateful vs Stateless Design
- Read-Through vs Write-Through Cache
- SQL vs NoSQL
- REST vs RPC
- Synchronous vs Asynchronous
- Batch vs Stream Processing
- Long Polling vs WebSockets
- Normalization vs Denormalization
- TCP vs UDP

---

# 🏗 3. Architectural Patterns

- Client-Server Architecture
- Microservices Architecture
- Serverless Architecture
- Event-Driven Architecture
- Peer-to-Peer (P2P) Architecture

---

# 🎯 4. System Design Interview Framework

## Step 1: Clarify Requirements

### Functional Requirements
- Core features
- User types
- Interaction methods (Web, Mobile, API)
- Data types handled
- Third-party integrations

### Non-Functional Requirements
- Read vs Write ratio
- Availability expectations
- Latency requirements
- Consistency requirements
- Rate limiting needs

---

## Step 2: Capacity Estimation

- Daily active users
- Monthly active users
- Peak concurrent users
- Requests per second (RPS)
- Storage requirements
- Cache memory needs
- Network bandwidth estimation

---

## Step 3: High-Level Design

- Clients (Web, Mobile)
- Application Servers
- Load Balancers
- Services
- Databases
- Storage
- Caching
- Message Queues
- External Services

---

## Step 4: Database Design

### Data Modeling
- Identify entities
- Define relationships
- Define attributes
- Define primary keys
- Apply normalization

### Choose the Right Storage
- SQL (structured data, ACID)
- NoSQL (scalability, flexibility)
- Hybrid database approach

---

## Step 5: API Design

- HTTPS
- WebSockets
- gRPC
- Messaging Protocols (AMQP, MQTT)

API Styles:
- REST
- GraphQL
- RPC

---

## Step 6: Deep Dive

- Sharding
- Replication
- Caching strategy
- Load balancing
- Real-time communication
- Failure handling

---

## Step 7: Address Key Concerns

### Scalability & Performance
- Vertical scaling
- Horizontal scaling
- Caching
- Indexing
- Denormalization
- Partitioning
- Asynchronous processing

### Reliability
- Remove single points of failure
- Redundancy
- Data replication
- Circuit breakers
- Retry with exponential backoff
- Monitoring & alerting

---

# 🧠 5. System Design Interview Tips

- Understand requirements first
- Define use cases clearly
- Accept trade-offs
- Design for failure
- Keep it simple
- Prefer horizontal scaling
- Use load balancers
- Choose correct database type
- Use sharding for scaling
- Use indexing for read optimization
- Apply rate limiting
- Use WebSockets for real-time systems
- Use message queues for async workflows
- Use Bloom filters for large datasets
- Use CDN for global latency reduction
- Implement autoscaling
- Make operations idempotent
- Implement logging & monitoring
- Use failover mechanisms
- Apply TTL for cache expiration

---

# 🧩 6. 10 Most Common System Design Questions

1. Design a URL Shortener (TinyURL)
2. Design a Chat Application (WhatsApp)
3. Design a Social Media Platform (Instagram)
4. Design a Video Streaming Service (YouTube)
5. Design an E-commerce Platform (Amazon)
6. Design a Ride-Sharing Service (Uber)
7. Design a File Storage Service (Google Drive)
8. Design a Web Crawler
9. Design a Notification System
10. Design a Logging & Monitoring System

---

# ✅ How to Use This Document

- Use as an interview revision checklist
- Convert into flashcards
- Turn each section into deep-dive notes
- Practice answering the 10 design problems

