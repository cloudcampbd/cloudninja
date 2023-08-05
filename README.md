# Cloud Ninja

## CloudCamp Bangladesh Community Management Platform Application

## Project Document





## Authors

| SL  | Name                         | Email                      | Contact Number      |
| --- | ---------------------------- | -------------------------- | ------------------- |
| 1   | Mohammad Zaman               | mohammad.zaman@gmail.com   | +1-917-648-0034     |
| 2   | Md. Mahamudur Rahman Sohag   | opensohag@gmail.com        | +8801711475567      |
| 3   | Sanjoy K Paul                | skpaul82@gmail.com         | +8801511927992      |
| 4   | Naim Hossen                  | naimhossenpro@gmail.com    | +8801750565053      |
|     |                              |                            |                     |

### Document Outline

- [1. Introduction](#1-introduction)
- [2. Application Overview](#2-application-overview)
  - [2.1. Background](#21-background)
  - [2.2. Objective](#22-objective)
  - [2.3. Scope](#23-scope)
- [3. Features and Functions](#3-features-and-functions)
  - [3.1. Enhanned User Access Management](#31-enhanced-user-access-management)
    - [3.1.1. New User Registration](#311-new-user-registration)
    - [3.1.2. User Log In](#312-user-log-in)
    - [3.1.3. Password Recovery](#313-password-recovery)
    - [3.1.4. User Groups Management](#314-user-groups-management)
  - [3.2. Event Management](#32-event-management)
  - [3.3. Professional Profile](#33-professional-profile)
  - [3.4. Communication and Collaboration](#34-communication-and-collaboration)
  - [3.5. Learning Portal](#35-learning-portal)
  - [3.6. FAQ](#36-faq)
  - [3.7. Support Ticketing System](#37-support-ticketing-system)
  - [3.8. ChatBot: Towards Artificial General Intelligence (AGI)](#38-chatbot--towards-artificial-general-intelligence-agi)
  - [3.9. Push Notification](#39-push-notification)
  - [3.10. Email](#310-email)

- [4. Architecture and Technology Stack](#4-architecture-and-technology-stack)
  - [4.1. Systemwide Architecture Diagram](#41-systemwide-architecture-diagram)
  - [4.2. UI/UX Design Mockup](#42-ui-ux-design-mockup)
  - [4.3. Frontend Technologies Architecture Diagram](#43-frontend-technologies-architecture-diagram)
  - [4.4. Microservices Design Architecture Diagram](#44-microservices-design-architecture-diagram)
  - [4.5. Backend Technologies Architecture Diagram](#45-backend-technologies-architecture-diagram)
  - [4.6. AI/ML, Generative AI Architecture Diagram](#46-aiml-generative-ai-architecture-diagram)
  - [4.7. Database Management Architecture Diagram](#47-database-management-architecture-diagram)
  - [4.8. Data Management, Analytics and Visualizations Architecure Diagram](#48-data-managememt,-analytics-and-visualizations-architecture-diagram)
  - [4.9. Payment Processing Architecture Diagram](#49-payment-processing-architecture-diagram)
- [5. System Components](#5-system-components)
  - [5.1. Handling Authentication and Authorization](#51-handling-authentication-and-authorization)
  - [5.2. Storing MetaData, Transaction Logs and System Logs](#52-storing-metadata-transaction-logs-and-system-logs)
  - [5.3. Storing Structured Sensitive Transaction Data](#53-storing-structured-sensitive-transaction-data)
  - [5.4. Admin Module](#54-admin-module)
  - [5.5. User Module](#55-user-module)
  - [5.6. Event Management Module](#56-event-management-module)
  - [5.7. Communication and Collaboration Module](#57-communication-and-collaboration-module)
- [6. Project Roadmap](#6-project-roadmap)
  - [6.1. Development Phases](#61-development-phases)
  - [6.2. DevOps and Automation](#62-devops-and-automation)
  - [6.3. Ongoing Backup, Maintenance, and Updates](#63-ongoing-backup-maintenance-and-updates)
- [7. Contributor Guidelines](#7-contributor-guidelines)
  - [7.1. Code of Conduct](#71-code-of-conduct)
  - [7.2. Getting Started for Contributors](#72-getting-started-for-contributors)
  - [7.3. Coding Standards](#73-coding-standards)
  - [7.4. Pull Request Process](#74-pull-request-process)
  - [7.5. Issue Tracking and Bug Reporting](#75-issue-tracking-and-bug-reporting)
- [8. Collaborative Tools](#8-collaborative-tools)
  - [8.1. GitHub Repository](#81-github-repository)
  - [8.2. Communication Channels](#82-communication-channels)
  - [8.3. Documentation Portal](#83-documentation-portal)
  - [8.4. Project Management Tools](#84-project-management-tools)
- [9. Active Team Members](#9-active-team-members)
  - [9.1. List of Contributors](#91-list-of-contributos)
- [10. Leadership and Governance](#10-leadership-and-governance)
  - [10.1. Roles and Responsibilities](#101-roles-and-responsibilities)
    


## 1. Introduction

Welcome to the CloudCamp Bangladesh’s Cloud Ninja Community Management Platform Application Project! This comprehensive document outlines the essential steps required to develop a robust web application and mobile apps for both iOS and Android platforms. The central architecture of this platform will be built upon the powerful suite of AWS Serverless Services, ensuring a scalable and efficient infrastructure.

In addition to the core AWS Serverless Services, this project will harness the full capabilities of Amazon SageMaker, an all-in-one Machine Learning Service, along with AWS Generative AI applications like Amazon CodeWhisperer and Amazon Bedrock. These cutting-edge tools will empower the platform with advanced AI-driven functionalities. Furthermore, the development will be orchestrated through the utilization of AWS Serverless Application Model (SAM), AWS Python SDK boto3, AWS Cloud Development Kit (AWS CDK), and a host of other AWS services, each carefully chosen to enhance Data Management, Query, and Visualizations.

For crafting immersive and responsive user interfaces, the project will consider utilizing Vue.js or other suitable frontend technologies. The GraphQL API service will be seamlessly integrated using AWS AppSync, enhancing flexibility and adaptability. To ensure a superior user experience and optimal community management, React and React Native will be employed for the web application and mobile apps respectively. This choice not only guarantees a seamless and intuitive user interface but also optimizes availability, reliability, and data security.

With this approach, the Cloud Ninja Community Management Platform Application will not only realize its vision of seamless community collaboration but will also uphold cost-efficiency, data security, and reliability as paramount values throughout its development journey.

## 2. Application Overview
### 2.1. Background
In an increasingly interconnected world, the need for efficient and effective community management has never been greater. Communities, whether professional, social, or interest-based, thrive on seamless communication, collaborative efforts, and shared resources. The Cloud Ninja Community Management Application Platform emerges as a response to this need, aiming to revolutionize the way communities interact, organize events, and manage their activities.

### 2.2. Objective
The primary objective of the “Cloud Ninja” is to provide a comprehensive and user-friendly solution that empowers communities to thrive in the digital age. By integrating a suite of powerful features, the platform seeks to enhance communication, streamline event management, and foster meaningful connections among community members.

### 2.3. Scope

The scope of the project encompasses the development of a versatile web application and native mobile apps for iOS and Android platforms. These applications will seamlessly integrate a range of functions, including user authentication, event management, professional profiles, and communication tools similar to Slack. The project's open-source nature invites contributions from a global community of developers, ensuring continuous improvement and customization to meet diverse community needs. With a focus on scalability, security, and an intuitive user experience, the Cloud Ninja Community Management Platform is poised to become a cornerstone for communities seeking efficient collaboration and growth.

## 3. Features and Functions

### 3.1. Enhanced User Access Management
This functionality encompasses user registration, profile modifications, and password management, providing a comprehensive approach to user authentication and authorization.

#### 3.1.1. New User Registration
Fresh users will have the option to register utilizing their email and password combination, or they can choose to employ OAuth and Social Credentials for a streamlined sign-up process.

#### 3.1.2. User Log-In
For users with registered accounts, the default method of access involves using their email and password credentials. However, alternate authentication pathways will also be available to cater to diverse preferences.

#### 3.1.3. Password Recovery
A convenient one-click password reset link will be dispatched to the registered email address, ensuring a straightforward recovery process. Additionally, users will have the ability to change their passwords at any time via the User Profile Menu. Moreover, users will be empowered to implement supplementary security measures such as Multi-Factor Authentication (MFA) or Two-Factor Authentication (2FA), integrate Backup Codes, and adopt other strategic mechanisms to bolster the defense against potential attack vectors.

#### 3.1.4. User Groups Management
Organizing users into specific roles or groups streamlines permission and access management. Grouping users with similar responsibilities, such as Admin, developer, designer, manager, facilitates efficient control over their access rights.

### 3.2. Event Management
Effortlessly create and manage events, overseeing crucial aspects such as event budgets, vendor coordination, sponsorships, volunteer assignments, guest lists, and visitor registrations.

### 3.3. Professional Profile
Craft comprehensive professional profiles showcasing essential details: Name, Designation, Company, Expertise Module, Best Native Module, Experience. Additionally, provide contact information like Email, Contact Number, LinkedIn Profile. Include educational background details, such as Highest Degree, University, Field, or Major.

### 3.4. Communication and Collaboration
Enable seamless communication within the community through an in-app communication feature. This feature encompasses chat functionality, video/audio meetings, and threaded discussions. The Cloud Ninja Platform will host its communication tools, fostering real-time interaction and collaboration.

### 3.5. Learning Portal
Empower continuous learning with an interactive learning portal. Features include engaging interactive lessons, Progress Tracking, Collaborative Learning, Multimedia Content support, Offline Mode accessibility, Cross-Platform Availability, Notifications/Reminders, and structured Learning Pathways.

### 3.6. FAQ
Curate a comprehensive repository of common and frequently asked questions to provide quick and convenient assistance to users.

### 3.7. Support Ticketing System
Implement an organized support ticketing system, streamlining user inquiries and ensuring efficient handling of support-related activities.

### 3.8. ChatBot : Towards Artificial General Intelligence (AGI)
This module represents a visionary component within the system, exemplifying our commitment to cutting-edge innovation. Anchored by a Foundation Model (LLM), our ChatBot stands as an emblem of refined craftsmanship through its meticulous tuning using popular frameworks. With its expansive capabilities, this ChatBot transcends traditional boundaries, offering an omniscient virtual companion for learners.

Harnessing a multimodal framework, this ChatBot transforms into a virtual assistant capable of comprehending and responding to user inputs in various formats, including text, audio, and video. Although the road to realizing true Artificial General Intelligence (AGI) remains a formidable journey, this module signifies an exploratory foray within our application, paving the way for potential future advancements and breakthroughs.


### 3.9. Push Notification
Push notifications can be sent automatically or manually from the system to all Android and web users. Single notifications can also be sent. These notifications may include event-related news, time-sensitive information, meeting updates, and more.

### 3.10. Email
The system has the capability to send emails to either all users or specific users. These emails can contain updates about news, links, meeting information, campaigns, and other relevant details. The notifications can be scheduled or sent manually.


## 4. Architecture and Technology Stack

### 4.1. Systemwide Architecture Diagram
Overall Architecture Diagram Version 1 Link:
https://app.diagrams.net/#G1YEN4bdtK-qzEjNZu6zI3n4FlZgUnd1f5

### 4.2. UI/UX Design Mockup
Figma Design Mockup Version 1 Link:

### 4.3. Frontend Technologies Architecture Diagram
List of frontend technologies used. Architecture diagram depicts how our frontend communicates with the backend.
Frontend Architecture Diagram Version 1 Link:

### 4.4. Microservices Design Architecture Diagram
MicroServices Architecture Diagram Version 1 Link:

### 4.5. Backend Technologies Architecture Diagram
Here we see how our overall backend system works in the diagram.
Backend Architecture Diagram Version 1 Link:

### 4.6. AI/ML, Generative AI Architecture Diagram
We explore the AI/ML and Generative AI services for our application here. Diagram shows the Machine Learning Pipelines in detail.

AI/ML Architecture Diagram Version 1 Link:

### 4.7. Database Management Architecture Diagram

Database Architecture Diagram Version 1 Link:

### 4.8. Data Management, Analytics and Visualizations Architecture Diagram
Data Architecture Diagram Version 1:

### 4.9. Payment Processing Architecture Diagram
Payment Processing Architecture Diagram Version 1:

## 5. System Components

### 5.1. Handling Authentication and Authorization
Amazon Cognito

### 5.2. Storing MetaData, Transaction Logs and System Logs

Amazon DynamoDB and Amazon Simple Storage Service (S3) are key components of our technology stack for several reasons:

Amazon DynamoDB:

**1. High Throughput and Low Latency:** DynamoDB can handle millions of requests per second with sub-millisecond latency, making it ideal for rapid data processing.

**2. Scalability:** DynamoDB is horizontally scalable, allowing easy capacity increases as your application grows without sacrificing performance.

**3. Durability and Availability:** With a 99.999% availability SLA, DynamoDB ensures exceptional data durability and accessibility.

**4. Security:** DynamoDB offers robust security features, including encryption at rest and in transit, protecting data from unauthorized access.

**5. Key-Value Data Model:** DynamoDB's simple key-value data model enables straightforward data storage and retrieval.

**6. Consistent Reads and Writes:** DynamoDB ensures consistent and reliable reads and writes for accurate and up-to-date data.

**7. Automatic Scaling:** DynamoDB adjusts capacity based on demand, optimizing performance and reducing manual intervention.

**8. In-Memory Caching:** In-memory caching improves performance and reduces latency for frequently accessed data.

**9. Global Distribution:** DynamoDB's global distribution allows data replication across regions, enhancing availability and reducing access latency.

**10. Flexible Schema:** DynamoDB accommodates evolving data models, allowing modification of data structures over time.

**11. Backup and Restore:** DynamoDB supports on-demand backups for data recovery or migration.

**12. Time-to-Live (TTL):** DynamoDB's TTL feature simplifies data cleanup and management by defining data expiration.

**13. Stream Data:** DynamoDB Streams capture data changes, enabling real-time processing and triggers for actions like Lambda functions.

**14. Global Tables:** DynamoDB Global Tables replicate data across regions for high availability and low-latency access.

**15. Data Types:** DynamoDB supports diverse data types, catering to various storage needs.

**16. Atomic Counters:** DynamoDB offers atomic counters for efficient numeric attribute operations.

**17. Secondary Indexes:** Secondary indexes provide enhanced query flexibility by allowing data retrieval based on attributes other than the primary key.

**18. Data Consistency Models:** DynamoDB offers strong and eventual consistency models, tailored to application needs.

Amazon DynamoDB provides a powerful NoSQL database solution, ensuring scalability, performance, and data integrity to meet modern application demands.

Amazon S3:

**1. Scalability:** S3 scales limitlessly to accommodate any data volume and supports concurrent access.

**2. Durability and Availability:** S3 ensures data durability and availability by replicating across geographically distinct Availability Zones.

**3. Data Protection:** S3 supports encryption at rest and fine-grained access controls for secure data storage.

**4 Data Transfer Acceleration:** S3's Transfer Acceleration speeds up data uploads and downloads using Amazon CloudFront's edge locations.

**5. Versioning:** S3 enables versioning, preserving data iterations and simplifying recovery from accidental changes.

**6. Data Lifecycle Management:** S3 automates object transitions between storage classes and deletion based on policies.

**7. Cross-Region Replication:** S3 replicates data across AWS regions, enhancing resilience and reducing latency.

**8. Data Retrieval Options:** S3 offers retrieval options like Standard, Intelligent-Tiering, and Glacier to balance cost and performance.

**9. Event Notifications:** S3 triggers AWS Lambda functions or actions in response to object creation or modification.

**10. Data Access Auditing:** S3's access logs capture requests, facilitating detailed audit trails and compliance monitoring.

**11. Multipart Upload:** S3 efficiently uploads large objects in parallel by breaking them into smaller parts.

**12. Object Tagging:** S3 supports metadata assignment through tags for better data organization.

**13. Object Locking:** S3's object locking enhances data immutability by preventing deletion or modification for a defined period.

**14. Presigned URLs:** S3 generates presigned URLs for temporary, secure data access, useful for sharing with third parties.

**15. Data Replication:** S3 replicates data to other AWS accounts for collaboration or disaster recovery.

**16. Object Expiry and Lifecycle Policies:** S3 automates data retention and archiving through object expiry and lifecycle policies.

Amazon S3 provides a versatile storage solution, catering to a wide range of storage and data management needs.


### 5.3. Storing Structured Sensitive Transaction Data

We opt for Amazon Aurora PostgreSQL Serverless for storing sensitive transaction data due to its unique capabilities that align perfectly with our data security requirements:

**1. Security and Encryption:** Amazon Aurora PostgreSQL Serverless provides robust security features, including encryption at rest and in transit. This ensures that sensitive transaction data remains protected from unauthorized access and potential breaches.

**2. Fine-Grained Access Control:** With Amazon Aurora PostgreSQL's advanced access control mechanisms, we can implement granular permission settings, allowing us to restrict data access to authorized personnel only.

**3. Scalability:** The serverless nature of Amazon Aurora PostgreSQL allows the database to automatically scale its capacity based on demand. This ensures that our application can handle varying workloads while maintaining optimal performance for sensitive transaction data operations.

**4. Data Integrity:** Amazon Aurora offers data integrity features, such as crash recovery and self-healing storage, which contribute to the reliability and accuracy of sensitive transaction data.

**5. High Availability:** Amazon Aurora PostgreSQL provides automated failover, data replication, and backups, ensuring that sensitive transaction data remains available even in the event of hardware failures or other disruptions.

**6. Pay-as-You-Go Model:** The serverless pricing model of Amazon Aurora PostgreSQL means we only pay for the actual resources consumed. This cost-efficiency is particularly beneficial for managing sensitive transaction data, as it allows us to allocate resources as needed without unnecessary expenses.

**7. Automatic Backups:** Amazon Aurora PostgreSQL Serverless offers automated backups, enabling us to create consistent snapshots of sensitive transaction data. This supports data recovery and minimizes potential data loss in case of any unforeseen issues.

**8. Data Auditing and Monitoring:** Amazon Aurora PostgreSQL's auditing and monitoring capabilities allow us to track and analyze access patterns and changes to sensitive transaction data, enhancing overall data security and compliance.

**9. Replication and Read Scalability:** With Amazon Aurora's replication capabilities, we can set up read replicas to offload read traffic and further enhance performance, all while maintaining the security of sensitive transaction data.

**10. Managed Service:** Amazon Aurora PostgreSQL Serverless is fully managed by AWS, reducing our administrative overhead and ensuring that we can focus on utilizing its features to secure and manage our sensitive transaction data effectively.

Incorporating Amazon Aurora PostgreSQL Serverless as our data storage solution for sensitive transaction data aligns with our commitment to data security, scalability, and efficiency, while also offering the flexibility to adapt to changing workload demands.


### 5.4. Admin Module

### 5.5. User Module

### 5.6. Event Management Module

### 5.7. Communicatin and Collaboration Module


## 6. Project Roadmap

### 6.1. Development Phases

### 6.2. DevOps and Automation

### 6.3. Ongoing Backup, Maintenance and Updates


## 7. Contributor Guidelines

### 7.1. Code of Conduct

### 7.2. Getting Started for Contributors

### 7.3. Coding Standards

### 7.4. Pull Request Process

### 7.5. Issue Tracking and Bug Reporting


## 8. Collaborative Tools

### 8.1. GitHub Repository
### 8.2. Communication Channels
### 8.3. Documentation Portal
### 8.4. Project Management Tools


## 9. Active Team Members

We embrace developers from various backgrounds and geographic locations, encouraging them to join our repository and contribute at any time. This section will comprehensively showcase all contributors and acknowledge their efforts like [Link here](https://www.postgresql.org/community/contributors/), facilitated by automated tools like the one in this github [Link repo](https://github.com/icecrime/vossibility-stack).

### 9.1. List of Contributors

## 10. Leadership and Governance

While the project operates as an open-source endeavor, specific guidelines are imperative to oversee its functions. This is crucial due to the project's engagement with potent AI technologies, particularly the rapidly advancing Generative AI capabilities. These capabilities introduce significant risk factors that could potentially lead to damage on both personal and societal levels.

The formal structure of the project involves the following essential roles and responsibilities:

### 10.1. Roles and Responsibilities

**Evangelist / Visionary Sponsor:**

Shapes and communicates the project's overarching vision and strategic direction.
Advocates for the project, garnering support and resources from stakeholders.
Provides high-level guidance and ensures alignment with organizational goals.
Inspires and motivates the team by outlining the project's long-term impact.

**Project Coordinator / Director:**

Orchestrates project management activities, ensuring that all tasks are coordinated.
Develops and communicates the project plan, timeline, and milestones.
Manages resources, budget, and potential risks to keep the project on track.
Facilitates communication among team members, stakeholders, and leadership.

**Technology Strategist:**

Evaluates and oversees the technological landscape, making informed decisions about tools, frameworks, and architecture.
Identifies opportunities to leverage new technologies for project optimization.
Ensures that the project's technical direction aligns with the organization's overall technology strategy.
Provides technical guidance and mentorship to the development team.

**Active Developer:**

Actively participates in project development by contributing code and technical expertise.
Collaborates with other developers, testers, and stakeholders to implement features and resolve issues.
Helps make design and implementation decisions based on their in-depth understanding of the project's codebase.
Takes ownership of specific tasks and ensures their successful completion.

**Reviewer and Approver:**

Safeguards the quality and integrity of contributions by reviewing code, documentation, and design proposals.
Ensures that coding standards, best practices, and guidelines are followed.
Provides constructive feedback to developers and contributors to improve the overall quality of the project.
Approves contributions for integration into the project's codebase after thorough review.

These roles work in harmony to drive the project's success, from establishing a clear vision and strategy to executing the technical development and maintaining the quality of the project. Effective collaboration and communication among these roles are crucial for delivering a high-quality project that meets its objectives and aligns with the organization's goals.

