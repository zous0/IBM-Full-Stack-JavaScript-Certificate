# Module 04: Software Architecture & Design

## 1. Fundamentals of Software Architecture
* **Software Architecture:** The high-level structural organization of a system, defining its core components, their relationships, and how they interact.
* **Software Design Document (SDD):** A formal technical document outlining software specifications, non-functional requirements (performance, security, scaling), and architectural decisions prior to coding.
* **Architectural Diagram:** A visual representation mapping system components (e.g., Frontend $\rightarrow$ Backend $\rightarrow$ Database) and data communication paths.

---

## 2. Structured Design & System Attributes
* **Structured Design:** Conceptualizes complex problems into smaller, organized solution elements (modules and sub-modules).
* **Cohesion vs. Coupling:**
  * **High Cohesion (Good):** Elements within a single module are closely related and focus on a single task.
  * **Loose Coupling (Good):** Modules are weakly dependent on one another. Changes in one module do not break connected modules.

---

## 3. Object-Oriented Analysis and Design (OOAD)
* **Objects:** Real-world entities containing both **Attributes (Data)** and **Methods (Behaviors)**.
* **Classes:** Blueprints/templates used to create individual object instances.
  * *Example:* `Plane` class defines attributes (`color`, `weight`, `tires`) and methods (`fly()`).
* **UML (Unified Modeling Language):** Standardized, programming-language-agnostic visual language for modeling software structure and behavior.

### Key UML Diagrams
1. **Class Diagram (Structural):** Displays system classes, attributes, methods, and relationships.
2. **State Transition Diagram (Behavioral):** Illustrates system states and the events that trigger state transitions.
3. **Sequence / Interaction Diagram (Behavioral):** Shows step-by-step object interactions over time.

---

## 4. Multi-Tier & Architectural Patterns
* **Two-Tier Architecture:** Direct client-to-database connection. Simple, but suffers from low security and scalability issues.
* **Three-Tier Architecture:** Inserts an Application Server between Client and Database.
  * **Presentation Tier:** User Interface (Frontend).
  * **Application Tier:** Business logic and authorization (Backend).
  * **Data Tier:** Persistent data storage (Database).
* **Event-Driven Architecture:** Asynchronous communication where **Producers** emit events to a **Broker**, and **Consumers** react independently.
* **Microservices:** Breaking monolithic systems into small, independently deployable services that communicate via APIs. Trade-off includes increased network latency ("network hops").
* **Peer-to-Peer (P2P):** Decentralized network where every node acts as both client and server without a central authority.
