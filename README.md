# Cloud Ninja

## CloudCamp Bangladesh Community Management Application

## Authors

| SL  | Name                         | Email                           | Contact Number        |
| --- | ---------------------------- | --------------------------------| --------------------- |
| 1   | Mohammad Zaman               | mohammad.zaman@cloudcampbd.com  | +1-917-648-0034       |
| 2   | Md. Mahamudur Rahman Sohag   |mahamudur.rahman@cloudcampbd.com | +880-1711-475-567     |
| 3   | Sanjoy K Paul                | skpaul@DevsStation.com          | +880-1511-927-992     |
| 4   | Naim Hossen                  | naimhossenpro@gmail.com         | +880-1750-565-053     |
| 5   | Fahimul Hoque Jason          | fahimulhoquejason@gmail.com     | +880-1715-901-532     |
| 6   | Md. Mahmud Hasan             | hasansaikatt@gmail.com          | +880-1643-095-283     |
| 7   | Akil Mahmod Tipu             | akil.mahmod@cloudcampbd.com     | +880-1742-999-076     |
| 8   | Md Shyfur Rahman             | shyfurahman@gmail.com           | +880-1970-749-387     |
| 9   | Rais Uddin Md Rasel          | raisdhaka@gmail.com             | +880-1911-314-145     |
| 10  | Shovon Dhar                  | shovon.spring@gmail.com         | +880-1921-700-393     |
| 11  | S M Mahsanul Islam Nirjhor   | mahsanulnirjhor@gmail.com       | +880-1521-530-535     |
| 12  | Mim Ahmed                    | mimbubt58@gmail.com             | +880-1963-068-116     |
| 13  | Abdullah Al Reza             | reza.ict@gmail.com              | +880-1917-897-919     |
| 14  | Emam Hosain                  | engemamhosain@gmail.com         | +880-1750-841-137     |

### Document Outline
- [CloudNinja Application Overview](#cloud-ninja-application-overview)
- [1. Introduction](#1-introduction)
  - [1.1. Technology Stack](#11-technology-stack)
- [2. Application Overview](#2-application-overview)
  - [2.1. Background](#21-background)
  - [2.2. Objective](#22-objective)
  - [2.3. Scope](#23-scope)
- [3. Features and Functions](#3-features-and-functions)
  - [3.1. Enhanned User Access Management](#31-enhanced-user-access-management)
    - [3.1.1. New User Sign-Up](#311-new-user-sign-up)
    - [3.1.2. User Sign-In](#312-user-sign-in)
    - [3.1.3. Password Recovery](#313-password-recovery)
    - [3.1.4. User Groups Management](#314-user-groups-management)
    - [3.1.5. Sign-Out](#315-sign-out)
  - [3.2. Event Management](#32-event-management)
  - [3.3. Professional Profile](#33-professional-profile)
  - [3.4. Communication and Collaboration](#34-communication-and-collaboration)
  - [3.5. Learning Portal](#35-learning-portal)
  - [3.6. FAQ](#36-faq)
  - [3.7. Support Ticketing System](#37-support-ticketing-system)
  - [3.8. AI Powered ChatBot](#38-ai-powered-chatbot)
  - [3.9. Push Notification](#39-push-notification)
  - [3.10. Email](#310-email)
  - [3.11. Subscription](#311-subscription)

- [4. Architecture and Technology Stack](#4-architecture-and-technology-stack)
  - [4.1. Systemwide Architecture Diagram](#41-systemwide-architecture-diagram)
  - [4.2. UI/UX Design Mockup](#42-uiux-design-mockup)
  - [4.3. Frontend Technologies](#43-frontend-technologies)
  - [4.4. Microservices Design](#44-microservices-design)
  - [4.5. Backend Technologies](#45-backend-technologies)
  - [4.6. AI/ML and Generative AI](#46-aiml-and-generative-ai)
  - [4.7. Database Management](#47-database-management)
  - [4.8. Data Management and Analytics](#48-data-management-and-analytics)
  - [4.9. Payment Processing](#49-payment-processing)
- [5. System Components](#5-system-components)
  - [5.1. Handling Authentication and Authorization](#51-handling-authentication-and-authorization)
  - [5.2. Storing MetaData and Logs](#52-storing-metadata-and-logs)
  - [5.3. Storing Sensitive Transaction Data](#53-storing-sensitive-transaction-data)
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
- [9. Active Team Members](#9-active-team-members)
- [10. Leadership and Governance](#10-leadership-and-governance)
    
# Cloud Ninja Application Overview

## 1. Introduction

Welcome to the [CloudCamp Bangladesh](https://www.cloudcampbd.org/) **Cloud Ninja** Community Management Application Project! This document outlines the steps to develop a robust web application and mobile apps for both iOS and Android. Our project leverages AWS Serverless Services, Amazon SageMaker, and AWS Generative AI tools like CodeWhisperer and Bedrock for advanced AI-driven features. We utilize AWS SAM, Python SDK boto3, AWS CDK, and other AWS services for data management, queries, and visualizations.

To create immersive user interfaces, we consider Vue.js, React, and seamless GraphQL API integration via AWS AppSync. For mobile apps, we use Kotlin/Java for Android and Objective-C/Swift for iOS, ensuring a seamless and secure user experience.

Our approach aims to realize seamless community collaboration while prioritizing cost-efficiency, data security, and reliability, following the principles of the [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

### 1.1. Technology Stack

## 1.1.1. Frontend
- [Vue.js](https://vuejs.org/) or other suitable frontend technologies like [React](https://react.dev/).
- [AWS Amplify](https://aws.amazon.com/amplify/) for frontend development and hosting.

## 1.1.2. Backend Services

### Authentication and Authorization
- [Amazon Cognito](https://aws.amazon.com/cognito/) for user authentication and authorization.

### Container Orchestration and Management
- [Amazon EKS](https://aws.amazon.com/eks/) for container orchestration and management.

### Serverless Computing
- [AWS Lambda](https://aws.amazon.com/lambda/) for Event-Driven Functions.
- [AWS Fargate](https://aws.amazon.com/fargate/) containerized compute for long-running services or functions that need more control over resource allocation and can run within Docker containers. This might include web applications, microservices, or background services that run continuously.
- [Amazon API Gateway](https://aws.amazon.com/api-gateway/) for building and managing APIs.
- [AWS AppSync](https://aws.amazon.com/appsync/) for GraphQL API.

### Object Storage
- [Amazon S3 (Simple Storage Service)](https://aws.amazon.com/s3/) for object storage.

### Databases
- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) for NoSQL database.
- [AWS Aurora PostgreSQL Serverless](https://aws.amazon.com/rds/aurora/serverless/) for SQL database.

### Data Warehousing
- [Amazon Redshift](https://aws.amazon.com/redshift/) for data warehousing and analytics.

### Data Archiving
- [Amazon Glacier](https://aws.amazon.com/glacier/) for long-term data archival and retrieval.
  
### Data Processing
- [AWS Glue](https://aws.amazon.com/glue/) for ETL (Extract, Transform, Load) and data integration.

### Media Services

#### Video Processing and Delivery
- [AWS Elemental Media Services](https://aws.amazon.com/media-services/) for video processing and delivery.
- [Amazon Kinesis Video Streams](https://aws.amazon.com/kinesis/video-streams/) for capturing, processing, and storing media streams for playback, analytics, and machine learning.

#### Video Processing and Delivery
- [AWS Elemental Media Services](https://aws.amazon.com/media-services/) for video processing and delivery.
- [Amazon Kinesis Video Streams](https://aws.amazon.com/kinesis/video-streams/) for capturing, processing, and storing media streams for playback, analytics, and machine learning.

### AI and Machine Learning

#### AI Model Development and Deployment
- [Amazon SageMaker](https://aws.amazon.com/sagemaker/) for end-to-end machine learning model development, training, evaluation, fine-tuning, and deployment.

#### AI Frameworks and Tools
- [Amazon OpenSearch (formerly Elasticsearch)](https://aws.amazon.com/opensearch/) for full-text search and analytics.
- [Amazon CodeWhisperer](https://aws.amazon.com/code-whisperer/) for automated code review and suggestions.
- [Amazon Bedrock](https://aws.amazon.com/bedrock/) foundation models (FMs) API service will be utilized during the project lifecycle.
  - Pre-training: Depending on our use case, we will choose from foundation models (FMs) that are pre-trained with vast corpora of data. If required, we will pre-train selected FMs with domain training data.
  - Prompt tuning and fine-tuning: Tuning them further for specific tasks and adding domain-specific data.
  - Reinforcement Learning / Human Feedback: Training with separate reward models (e.g., helpful, honest, harmless) and updating LLM model or adapter weights.
  - Compression / Optimization / Deployment: Reducing model size through model pruning, weight quantization, distillation for smaller model size and faster inference.
  - Interacting with external data sources and applications: Integrations that allow the app to process return requests end-to-end (e.g., from a live database or an event management function).
  - Chain-of-thought reasoning: Training models with chain-of-thought reasoning similar to what humans do for complex tasks.
  - Program-aided language models (PAL) framework: Helping LLM perform mathematics and programming tasks with the help of an interpreter (e.g., Python interpreter).
  - ReAct: Synergizing Reasoning and Acting in Language Models: This framework is for Reasoning and Action.
  - Agents and Hubs: SageMaker Jumpstart and HuggingFace ModelHubs can be used for multimodal response generation.
  - Langchain Framework: This framework can be used to perform PAL, ReAct, and Chain of Thought reasoning.

### Development Tools
- [AWS Serverless Application Model (AWS SAM)](https://aws.amazon.com/serverless/sam/) for serverless application development.
- [AWS Python SDK (boto3)](https://aws.amazon.com/sdk-for-python/) for AWS integration.
- [AWS Cloud9](https://aws.amazon.com/cloud9/) for integrated development environment (IDE).
- [AWS CDK (Cloud Development Kit)](https://aws.amazon.com/cdk/) for infrastructure as code.

### Workflow Automation
- [Amazon Step Functions](https://aws.amazon.com/step-functions/) for orchestrating serverless workflows.
- [Amazon EventBridge](https://aws.amazon.com/eventbridge/) for event-driven architecture.

### Messaging
- [Amazon SQS (Simple Queue Service)](https://aws.amazon.com/sqs/) for message queuing.

### Email and Notifications
- [Amazon SES (Simple Email Service)](https://aws.amazon.com/ses/) for sending emails.
- [Amazon SNS (Simple Notification Service)](https://aws.amazon.com/sns/) for event-driven notifications.

### Content Delivery
- [Amazon CloudFront](https://aws.amazon.com/cloudfront/) for content delivery and caching.

### Database Query and Analysis
- [Amazon Athena](https://aws.amazon.com/athena/) for querying data stored in Amazon S3.
- [Amazon OpenSearch](https://aws.amazon.com/opensearch-service/) for real-time search and analytics.

### Machine Learning and AI
- [Amazon SageMaker](https://aws.amazon.com/sagemaker/) for machine learning model development, training, evaluation, fine-tuning, and deployment.

### Infrastructure Management
- [AWS CloudFormation](https://aws.amazon.com/cloudformation/) for infrastructure as code (IAC) utilized by both AWS SAM and AWS CDK framework.

### Continuous Integration and Continuous Deployment (CI/CD)
- [AWS CodePipeline](https://aws.amazon.com/codepipeline/) for building and deploying code.
- [AWS CodeBuild](https://aws.amazon.com/codebuild/) for building and testing code.

### Code Reuse
- [AWS Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/chapter-layers.html) for code reuse.

### Tracing and Debugging
- [AWS X-Ray](https://aws.amazon.com/xray/) for application tracing and debugging.

### Monitoring and Logging
- [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) for monitoring and logging.
- [AWS CloudTrail](https://aws.amazon.com/cloudtrail/) for audit and monitoring of AWS resources.

### Secrets Management
- [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) for managing sensitive information.

### Security
- [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) for SSL/TLS certificates.
- [AWS WAF (Web Application Firewall)](https://aws.amazon.com/waf/) for security.

### Communication Platform
- [Amazon Chime SDK](https://aws.amazon.com/chime/chime-sdk/) for building communication and collaboration features.

### Customer Service
- [Amazon Connect](https://aws.amazon.com/connect/) provides superior customer service at a lower cost with an easy-to-use cloud contact center.


### 1.2. Benefits:
- Ensures immersive and responsive user interfaces.
- Empowers the platform with advanced AI-driven functionalities.
- Enhances flexibility and adaptability through seamless GraphQL API integration using AWS AppSync.
- Guarantees a seamless and intuitive user interface for mobile users.

### 1.3. Values:

#### 1.3.1. Operational Excellence
- **Design Principles:**
  1. Perform operations as code
  2. Make frequent, small, reversible changes
  3. Refine operations procedures frequently
  4. Anticipate failure
  5. Learn from all operational failures
- **Best Practices:**
  - Understand business and customer needs.
  - Create and use procedures to respond to operational events.
  - Collect metrics to measure the achievement of desired business outcomes.
  - Design operations to support evolution over time.
  - Incorporate lessons learned through performance.

#### 1.3.2. Security
- **Design Principles:**
  1. Implement a strong identity foundation
  2. Enable traceability
  3. Apply security at all layers
  4. Automate security best practices
  5. Protect data in transit and at rest
  6. Keep people away from data
  7. Prepare for security events
- **Best Practices:**
  - Control who can do what.
  - Identify security incidents.
  - Protect systems and services.
  - Maintain the confidentiality and integrity of data.
  - Have a process for responding to security incidents.
  - Leverage the AWS Shared Responsibility Model.

#### 1.3.3. Reliability
- **Design Principles:**
  1. Automatically recover from failure
  2. Test recovery procedures
  3. Scale horizontally to increase aggregate workload availability
  4. Stop guessing capacity
  5. Manage change in automation
- **Best Practices:**
  - Ensure foundational requirements are in place.
  - Design with reliability in mind, including loosely coupled dependencies and graceful degradation.
  - Anticipate and accommodate changes in workload or environment.
  - Implement resiliency with fault isolation, automated failover, and disaster recovery strategies.

#### 1.3.4. Performance Efficiency
- **Design Principles:**
  1. Democratize advanced technologies
  2. Go global in minutes
  3. Use serverless architectures
  4. Experiment more often
  5. Consider mechanical sympathy
- **Best Practices:**
  - Take a data-driven approach to high-performance architecture.
  - Review and monitor architecture choices.
  - Make trade-offs in architecture to improve performance.
  - Use multiple solutions and features to improve performance.

#### 1.3.5. Cost Optimization
- **Design Principles:**
  1. Implement cloud financial management
  2. Adopt a consumption model
  3. Measure overall efficiency
  4. Stop spending money on undifferentiated heavy lifting
  5. Analyze and attribute expenditure
- **Best Practices:**
  - Consider trade-offs between speed to market and cost optimization.
  - Design with optimization in mind.
  - Use appropriate services, resources, and configurations.
  - Regularly review and monitor to take advantage of evolving AWS services.

#### 1.3.6. Sustainability
- **Design Principles:**
  1. Understand your impact
  2. Establish sustainability goals
  3. Maximize utilization
  4. Anticipate and adopt new, more efficient hardware and software offerings
  5. Use managed services
  6. Reduce the downstream impact of your cloud workloads
- **Best Practices:**
  - Choose AWS Regions based on sustainability goals.
  - Use user behavior patterns for sustainability improvements.
  - Implement software and architecture patterns for load smoothing and resource efficiency.
  - Analyze data and hardware patterns for sustainability improvements.
  - Identify opportunities to reduce sustainability impact in development and deployment.
 
#### 1.3.7. Machine Learning and AI

Our AI and ML journey is guided by the AWS Cloud Adoption Framework for Artificial Intelligence, Machine Learning, and Generative AI (CAF-AI). CAF-AI is our dynamic resource, helping us shape our strategy, assess maturity, and drive AI success.

This framework enables us to explore key AI considerations, foster discussions within our team and with partners, and adapt to various stages of our AI journey. It's more than just a guide; it aligns with our ambitions for successful enterprise-level AI implementation.

Our goal is to provide the same prescriptive guidance as AWS CAF but tailored for AI and ML, leveraging CAF's proven organizational capabilities while addressing the unique demands of AI. AWS CAF has accelerated cloud transformations globally, and CAF-AI extends this impact into the realm of AI.

#### 1.3.8. AWS Serverless Application Lens

The AWS Serverless Application Lens is a valuable addition to our project. This lens provides guidance and best practices specifically tailored to serverless architectures. It offers insights into optimizing serverless applications for improved performance, cost efficiency, and reliability.

This lens encompasses key considerations such as:

- Designing serverless applications for event-driven, scalable, and cost-effective execution.
- Leveraging AWS Lambda, Amazon API Gateway, and other serverless services effectively.
- Implementing security measures to protect serverless applications and their data.
- Monitoring, troubleshooting, and optimizing serverless workloads.

By integrating the AWS Serverless Application Lens into our architecture, we ensure that our serverless components align with AWS best practices for building robust and efficient serverless applications.

For detailed information on this lens, you can refer to the [AWS Serverless Application Lens documentation](https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/welcome.html?).

We will incorporate the insights and recommendations from this lens to enhance the serverless aspects of our Cloud Ninja Community Management Application Project.


## 2. Application Overview

### 2.1. Background
In an increasingly interconnected world, the need for efficient and effective community management has never been greater. Communities, whether professional, social, or interest-based, thrive on seamless communication, collaborative efforts, and shared resources. The Cloud Ninja Community Management Application Platform emerges as a response to this need, aiming to revolutionize the way communities interact, organize events, and manage their activities.

### 2.2. Objective
The primary objective of the **Cloud Ninja** is to provide a comprehensive and user-friendly solution that empowers communities to thrive in the digital age. By integrating a suite of powerful features, the platform seeks to enhance communication, streamline event management, and foster meaningful connections among community members.

### 2.3. Scope

The scope of the project encompasses the development of a versatile web application and native mobile apps for iOS and Android platforms. These applications will seamlessly integrate a range of functions, including user authentication, event management, professional profiles, and communication tools from the best features of Slack and Discord. The project's open-source nature invites contributions from a global community of developers, ensuring continuous improvement and customization to meet diverse community needs. With a focus on scalability, security, and an intuitive user experience, the Cloud Ninja Community Management Platform is poised to become a cornerstone for communities seeking efficient collaboration and growth.

## 3. Features and Functions

We're excited to introduce a range of features that will shape the Cloud Ninja experience:

### 3.1. Enhanced User Access Management
This feature set offers an all-encompassing solution for managing user access, including registration, profile adjustments, password management, and secure sign-out options, ensuring robust user authentication and authorization processes.

#### 3.1.1. New User Sign-Up

Users can initiate their journey within the platform by signing up using various methods:

A. **Email and Password**: Users can register with their email and a secure password.
B. **Social Network Integration**: Registration can also be simplified by leveraging popular social media credentials, including options like Google, Facebook, LinkedIn, Twitter, and Instagram

#### 3.1.2. User Sign-In
The sign-in process is designed with security in mind, offering multiple authentication pathways. Users can securely access their accounts using:

- Email and Password
- Alternative authentication methods for added security.

#### 3.1.3. Password Recovery
In the event of a forgotten password, users can effortlessly regain access to their accounts through a streamlined password recovery process. This includes one-click password reset and multi-factor authentication options for enhanced security.

#### 3.1.4. User Groups Management
Efficiently manage user access rights through the establishment of role-based user groups. This feature empowers Super Admins and Main Admins to organize users logically, simplifying access control and permissions.

### Key Functions:

- **Creating and Removing User Groups**: Super Admins or Main Admins have the authority to create and remove user groups. User groups serve as logical containers, facilitating the organization of users based on their roles, responsibilities, or permissions.

- **Adding Users to Groups**: Within this feature, Super Admins or Main Admins can seamlessly add users to specific user groups. Membership in a group automatically grants users the associated permissions, streamlining access control.

- **Assigning Permissions**: An integral facet of our User Groups Management feature is the capability to assign permissions to user groups. These permissions dictate the actions or resources accessible to group members, offering precise control over user capabilities within our application.

#### 3.1.5. Sign-Out
Users can securely sign-out of their accounts when they've completed their session or need to log out for any reason. This ensures that their access to the application is terminated, enhancing account security.

### 3.2. Event Management
Effortlessly create and manage events, overseeing crucial aspects such as event budgets, vendor coordination, sponsorships, volunteer assignments, guest lists, and visitor registrations.

### 3.3. Professional Profile
Users can showcase their expertise and experience through comprehensive professional profiles, enhancing networking opportunities.

### 3.4. Communication and Collaboration
Enable seamless communication within the community through in-app chat, video/audio meetings, and threaded discussions.

### 3.5. Learning Portal
Empower continuous learning with an interactive learning portal. Features include engaging interactive lessons, Progress Tracking, Collaborative Learning, Multimedia Content support, Offline Mode accessibility, Cross-Platform Availability, Notifications/Reminders, and structured Learning Pathways.

### 3.6. FAQ
Curate a comprehensive repository of common and frequently asked questions to provide quick and convenient assistance to users.

### 3.7. Support Ticketing System
Implement an organized support ticketing system, streamlining user inquiries and ensuring efficient handling of support-related activities.

### 3.8. AI-Powered ChatBot
An innovative ChatBot provides an omniscient virtual companion for learners, transcending traditional boundaries.

### 3.9. Push Notification
Push notifications can be sent automatically or manually from the system to all mobile and web users. Single notifications can also be sent. These notifications may include event-related news, time-sensitive information, meeting updates, and more.

### 3.10. Email
The system has the capability to send emails to either all users or specific users. These emails can contain updates about news, links, meeting information, campaigns, and other relevant details. The notifications can be scheduled or sent manually.

### 3.11. Subscription

Within the application, users will enjoy the flexibility to subscribe to a range of modules, tailoring their experience to suit their preferences and needs.

These subscription options encompass:

**Group Subscription**
Users can opt for group subscriptions, enabling them to receive timely notification updates related to their selected modules. This feature ensures that users stay informed about crucial developments within their chosen areas.

**Project Subscription**
Project-centric subscriptions allow users to receive updates and notifications specifically relevant to the projects they are involved in. By subscribing to specific projects, users can stay closely connected to project-related activities and updates.

**Premium Subscription**
The premium subscription offers an enhanced level of engagement. To access this subscription tier, users will need invitation codes. Once subscribed, users gain access to an elevated set of features, augmenting their overall experience within the application.

These subscription choices empower users to curate their interaction with the application's content, updates, and offerings based on their individual preferences and priorities.

## 4. Architecture and Technology Stack
Our architecture leverages the power of AWS services and cutting-edge technologies to ensure a scalable and efficient platform.

### 4.1. Systemwide Architecture Diagram
View our overall architecture diagram here:
https://app.diagrams.net/#G1YEN4bdtK-qzEjNZu6zI3n4FlZgUnd1f5

### 4.2. UI/UX Design Mockup
Explore the Figma Design Mockup here.

### 4.3. Frontend Technologies
Our frontend communicates seamlessly with the backend. View the frontend architecture diagram here.

### 4.4. Microservices Design
Discover our microservices design architecture here.

### 4.5. Backend Technologies
Learn how our backend system works here.

### 4.6. AI/ML and Generative AI
Explore our AI/ML and Generative AI architecture here.

### 4.7. Database Management

Understand our database management architecture here.

### 4.8. Data Management and Analytics
Explore our data management and analytics architecture here.

### 4.9. Payment Processing
Learn about our payment processing architecture here.

## 5. System Components
Our platform is built on several key components, ensuring a seamless user experience and efficient operations.

### 5.1. Handling Authentication and Authorization

We've chosen [Amazon Cognito](https://aws.amazon.com/cognito/) for secure user authentication and authorization. Its scalability, security features, and seamless integration with AWS services make it the perfect choice.

### 5.2. Storing MetaData and Logs
For storing metadata and logs, we rely on [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) and [Amazon Simple Storage Service (S3)](https://aws.amazon.com/s3/) for their scalability, durability, and data protection.


### 5.3. Storing Sensitive Transaction Data

Sensitive transaction data finds a secure home in [Amazon Aurora PostgreSQL Serverless](https://aws.amazon.com/rds/aurora/serverless/), ensuring data security, scalability, and efficiency.


### 5.4. Admin Module
The Admin Module plays a pivotal role in overseeing the overall functionality and management of the Cloud Ninja Community Management Application. It provides administrators with comprehensive tools to manage user roles, permissions, and system settings. Some key features and responsibilities of the Admin Module include:

- **User Role Management:** Admins can define and assign different user roles based on their responsibilities within the community. This helps ensure proper access control and data security.

- **Content Moderation:** The Admin Module includes content moderation capabilities, allowing administrators to review and moderate user-generated content to maintain a positive and respectful community environment.

- **Analytics and Insights:** Administrators can access detailed analytics and insights about user engagement, event participation, and overall community growth. This data assists in making informed decisions to enhance the platform's effectiveness.

### 5.5. User Module
The User Module focuses on providing a seamless and personalized experience for every user of the Cloud Ninja Community Management Application. This module enhances user engagement and satisfaction through various features:

**Personalized Profiles:** Users can create and customize their profiles, adding information about their professional background, interests, and skills. This helps foster meaningful connections within the community.

**Activity Feeds:** The User Module includes personalized activity feeds, displaying updates, events, and discussions relevant to the user's interests and interactions.

**Notification Preferences:** Users have control over their notification settings, allowing them to choose how they receive updates about events, discussions, and other community activities.

### 5.6. Event Management Module
The Event Management Module empowers community organizers to create, manage, and promote events seamlessly. This module streamlines event coordination and enhances the overall event experience:

**Event Creation:** Organizers can easily create and publish new events, providing details such as date, time, location, and event description.

**RSVP and Registration:** Users can RSVP and register for events directly through the platform, facilitating accurate attendance tracking and communication.

**Event Communication:** The module enables event-specific communication channels, allowing organizers to share updates, agendas, and important announcements with registered participants.

### 5.7. Communication and Collaboration Module
The Communication and Collaboration Module serves as the heart of the Cloud Ninja Community Management Application, enabling real-time interaction and knowledge sharing among community members:

**Real-time Chat:** Users can engage in real-time text, audio, and video conversations, both one-on-one and in group settings, fostering instant communication and collaboration.

**Discussion Threads:** The module supports threaded discussions on various topics, enabling users to engage in in-depth conversations and share insights.

**Document Sharing:** Users can share documents, presentations, and files within the platform, facilitating seamless collaboration on projects and initiatives.


## 6. Project Roadmap

Our project roadmap outlines the key phases and activities for the successful development, deployment, and maintenance of the Cloud Ninja Community Management Application.

### 6.1. Development Phases

1. **Phase 1 - Planning and Design**:
   - Define project scope, objectives, and requirements.
   - Create UI/UX design mockups and wireframes.
   - Finalize architectural and technology stack decisions.

2. **Phase 2 - Frontend and Backend Development**:
   - Develop frontend components and user interfaces.
   - Implement backend services and API endpoints.
   - Integrate user authentication and access control.

3. **Phase 3 - Feature Implementation**:
   - Implement core features like user profiles, event management, and communication tools.
   - Develop learning portal and AI-powered chatbot functionalities.

4. **Phase 4 - Testing and QA**:
   - Conduct comprehensive testing of all features and components.
   - Perform usability testing and gather user feedback for improvements.

### 6.2. DevOps and Automation

1. **Phase 5 - DevOps Implementation**:
   - Set up continuous integration and continuous deployment (CI/CD) pipelines.
   - Automate deployment processes for web and mobile applications.

2. **Phase 6 - Monitoring and Scaling**:
   - Implement monitoring tools for performance, security, and reliability.
   - Ensure the platform scales efficiently to handle increased usage.

### 6.3. Ongoing Backup, Maintenance, and Updates

1. **Phase 7 - Backup and Disaster Recovery**:
   - Set up regular data backups and establish disaster recovery procedures.
   - Test backup and recovery processes to ensure data integrity.

2. **Phase 8 - Maintenance and Updates**:
   - Continuously monitor and maintain serverless components and microservices.
   - Regularly release updates and improvements based on user feedback.

Throughout the project roadmap, we will collaborate closely with our development team and engage with the open-source community to ensure the Cloud Ninja Community Management Application evolves into a robust and feature-rich platform that meets the needs of diverse communities.

## 7. Contributor Guidelines

### 7.1. Code of Conduct
We follow the [Amazon Open Source Code of Conduct](CODE_OF_CONDUCT.md)

### 7.2. Getting Started for Contributors
Thank you for considering contributing to our project! To get started, please follow these steps:
1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Install the required dependencies using `npm install`.
4. Create a new branch for your feature/bugfix using `git checkout -b feature/your-feature-name`.
5. Make your changes and commit them with descriptive messages.
6. Push your changes to your forked repository.
7. Create a pull request to our `develop` branch.

### 7.3. Coding Standards
We adhere to the [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/) for our Python code. Please make sure to format your code accordingly before submitting a pull request.

### 7.4. Pull Request Process
1. Ensure that your code follows our coding standards.
2. Test your changes thoroughly.
3. Make a pull request to the `develop` branch.
4. Provide a clear description of your changes and the problem they solve.

### 7.5. Issue Tracking and Bug Reporting
If you encounter a bug or have a feature request, please follow these steps:
1. Search the [existing issues](https://github.com/cloudcampbd/cloudninja/issues) to see if it's already reported.
2. If not, create a new issue with a descriptive title and detailed explanation.
3. Provide steps to reproduce the issue if it's a bug.
4. Use labels to categorize the issue (e.g., bug, enhancement, documentation).

We appreciate your contributions and look forward to your involvement and innovation!

## 8. Collaborative Tools

- [GitHub Repository](https://github.com/cloudcampbd/cloudninja.git)
  
### Communication Channels:
- [Cloud Ninja App WhatsApp Group](https://chat.whatsapp.com/LsPfEwXYNgi56jLH5imtv6)
- [CloudCampBangladesh Slack Workspace](https://join.slack.com/t/cloudcampbangladesh/shared_invite/zt-20m40emh2-NmtdqSLSFmXqxliU84S0Qg)
- [#cloud-ninja-app Channel](https://cloudcampbangladesh.slack.com/archives/C05LGS7BJD9)
- [Documentation Portal](https://github.com/cloudcampbd/cloudninja/blob/master/README.md)
- [Documents and asset store](https://drive.google.com/drive/folders/1Dfcai3ZQuLsGLl8iGGO2svhLHFoUaNkL?usp=sharing)
- [Project Management Tool](https://github.com/orgs/cloudcampbd/projects/2)


## 9. Active Team Members

We embrace developers from various backgrounds and geographic locations, encouraging them to join our repository and contribute at any time. This section will comprehensively showcase all contributors and acknowledge their efforts like [here](https://www.postgresql.org/community/contributors/) facilitated by automated tools like the one in this GitHub [Repository.](https://github.com/icecrime/vossibility-stack)

**List of Contributors**

## 10. Leadership and Governance

While the project operates as an open-source endeavor, specific guidelines are imperative to oversee its functions. This is crucial due to the project's engagement with potent AI technologies, particularly the rapidly advancing Generative AI capabilities. These capabilities introduce significant risk factors that could potentially lead to damage on both personal and societal levels.

The formal structure of the project involves the following essential roles and responsibilities:

### Leadership and Governance Roles and Responsibilities:

        Evangelist / Visionary Sponsor:
        - Shapes and communicates project vision and direction.
        - Advocates for support and resources.
        - Provides high-level guidance and alignment.
        - Inspires and motivates the team with impact-driven goals.
        
        Project Coordinator / Director:
        - Orchestrates project management.
        - Develops project plan, timeline, milestones.
        - Manages resources, budget, and risks.
        - Facilitates communication among teams and stakeholders.
        
        Technology Strategist:
        - Evaluates and oversees tech landscape.
        - Makes informed decisions about tools and frameworks.
        - Identifies tech optimization opportunities.
        - Provides technical guidance and mentorship.
        
        Active Developer:
        - Contributes code and technical expertise.
        - Collaborates on feature implementation.
        - Influences design and decisions.
        - Takes ownership of tasks for completion.
        
        Reviewer and Approver:
        - Safeguards quality through code and design review.
        - Ensures coding standards and practices.
        - Provides constructive feedback.
        - Approves contributions for integration.
        
  ### Roles collaborate for project success:
  - Vision and strategy establishment.
  - Technical execution and quality maintenance.
  - Effective communication and collaboration.

