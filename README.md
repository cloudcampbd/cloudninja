# Cloud Ninja

## CloudCamp Bangladesh Community Management Application

## Authors

| SL  | Name                         | Email                      | Contact Number        |
| --- | ---------------------------- | -------------------------- | --------------------- |
| 1   | Mohammad Zaman               | mohammad.zaman@gmail.com   | +1-917-648-0034       |
| 2   | Md. Mahamudur Rahman Sohag   | opensohag@gmail.com        | +880-1711-475-567     |
| 3   | Sanjoy K Paul                | skpaul82@gmail.com         | +880-1511-927-992     |
| 4   | Naim Hossen                  | naimhossenpro@gmail.com    | +880-1750-565-053     |
|     |                              |                            |                       |

### Document Outline

- [1. Introduction](#1-introduction)
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
  - [3.2. Event Management](#32-event-management)
  - [3.3. Professional Profile](#33-professional-profile)
  - [3.4. Communication and Collaboration](#34-communication-and-collaboration)
  - [3.5. Learning Portal](#35-learning-portal)
  - [3.6. FAQ](#36-faq)
  - [3.7. Support Ticketing System](#37-support-ticketing-system)
  - [3.8. AI Powered ChatBot](#38-ai-powered-chatbot)
  - [3.9. Push Notification](#39-push-notification)
  - [3.10. Email](#310-email)

- [4. Architecture and Technology Stack](#4-architecture-and-technology-stack)
  - [4.1. Systemwide Architecture Diagram](#41-systemwide-architecture-diagram)
  - [4.2. UI/UX Design Mockup](#42-uiux-design-mockup)
  - [4.3. Frontend Technologies](#43-frontend-technologies)
  - [4.4. Microservices Design](#44-microservices-design)
  - [4.5. Backend Technologies](#45-backend-technologies)
  - [4.6. AI/ML and Generative AI](#46-aiml-and-generative-ai)
  - [4.7. Database Management](#47-database-management)
  - [4.8. Data Management and analytics](#48-data-management-and-analytics)
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
  - [8.1. GitHub Repository](#81-github-repository)
  - [8.2. Communication Channels](#82-communication-channels)
  - [8.3. Documentation Portal](#83-documentation-portal)
  - [8.4. Project Management Tools](#84-project-management-tools)
- [9. Active Team Members](#9-active-team-members)
- [10. Leadership and Governance](#10-leadership-and-governance)
    


## 1. Introduction

Welcome to the [CloudCamp Bangladesh](https://www.cloudcampbd.org/) **Cloud Ninja** Community Management Application Project! This comprehensive document outlines the essential steps required to develop a robust web application and mobile apps for both iOS and Android platforms. The central architecture of this platform will be built upon the powerful suite of AWS Serverless Services, ensuring a scalable and efficient infrastructure.

In addition to the core AWS Serverless Services, this project will harness the full capabilities of Amazon SageMaker, an all-in-one Machine Learning Service, along with AWS Generative AI applications like Amazon CodeWhisperer and Amazon Bedrock. These cutting-edge tools will empower the platform with advanced AI-driven functionalities. Furthermore, the development will be orchestrated through the utilization of AWS Serverless Application Model (SAM), AWS Python SDK boto3, AWS Cloud Development Kit (AWS CDK), and a host of other AWS services, each carefully chosen to enhance Data Management, Query, and Visualizations.

For crafting immersive and responsive user interfaces, the project will consider utilizing Vue.js or other suitable frontend technologies. The GraphQL API service will be seamlessly integrated using AWS AppSync, enhancing flexibility and adaptability. To ensure a superior user experience and optimal community management, React and React Native will be employed for the web application and mobile apps respectively. This choice not only guarantees a seamless and intuitive user interface but also optimizes availability, reliability, and data security.

With this approach, the Cloud Ninja Community Management Platform Application will not only realize its vision of seamless community collaboration but will also uphold cost-efficiency, data security, and reliability as paramount values throughout its development journey.

## 2. Application Overview
### 2.1. Background
In an increasingly interconnected world, the need for efficient and effective community management has never been greater. Communities, whether professional, social, or interest-based, thrive on seamless communication, collaborative efforts, and shared resources. The Cloud Ninja Community Management Application Platform emerges as a response to this need, aiming to revolutionize the way communities interact, organize events, and manage their activities.

### 2.2. Objective
The primary objective of the **Cloud Ninja** is to provide a comprehensive and user-friendly solution that empowers communities to thrive in the digital age. By integrating a suite of powerful features, the platform seeks to enhance communication, streamline event management, and foster meaningful connections among community members.

### 2.3. Scope

The scope of the project encompasses the development of a versatile web application and native mobile apps for iOS and Android platforms. These applications will seamlessly integrate a range of functions, including user authentication, event management, professional profiles, and communication tools similar to Slack. The project's open-source nature invites contributions from a global community of developers, ensuring continuous improvement and customization to meet diverse community needs. With a focus on scalability, security, and an intuitive user experience, the Cloud Ninja Community Management Platform is poised to become a cornerstone for communities seeking efficient collaboration and growth.

## 3. Features and Functions

We're excited to introduce a range of features that will shape the Cloud Ninja experience:

### 3.1. Enhanced User Access Management
This functionality encompasses user registration, profile modifications, and password management, providing a comprehensive approach to user authentication and authorization.

#### 3.1.1. New User Sign-Up
Users can register using email, password, or social credentials.

#### 3.1.2. User Sign-In
Secure sign-in options, including email and password, or alternate authentication methods.

#### 3.1.3. Password Recovery
One-click password reset and multi-factor authentication options.

#### 3.1.4. User Groups Management
Efficient control over access rights through role-based user groups.

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

Personalized Profiles: Users can create and customize their profiles, adding information about their professional background, interests, and skills. This helps foster meaningful connections within the community.

Activity Feeds: The User Module includes personalized activity feeds, displaying updates, events, and discussions relevant to the user's interests and interactions.

Notification Preferences: Users have control over their notification settings, allowing them to choose how they receive updates about events, discussions, and other community activities.

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


## 7. Contributor Guidelines

### 7.1. Code of Conduct
We follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

### 7.2. Getting Started for Contributors
Thank you for considering contributing to our project! To get started, please follow these steps:
1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Install the required dependencies using `npm install`.
4. Create a new branch for your feature/bugfix using `git checkout -b feature/your-feature-name`.
5. Make your changes and commit them with descriptive messages.
6. Push your changes to your forked repository.
7. Create a pull request to our `master` branch.

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

- Documentation Portal GitHub Repository : https://github.com/cloudcampbd/cloudninja.git
- Communication Channels :
-       **Cloud Ninja App WhatsApp Group:** https://chat.whatsapp.com/LsPfEwXYNgi56jLH5imtv6
-       **Join CloudCampBangladesh Slack: https://join.slack.com/t/cloudcampbangladesh/shared_invite/zt-20m40emh2-NmtdqSLSFmXqxliU84S0Qg
-       Navigate to cloud-ninja-app Channel : https://cloudcampbangladesh.slack.com/archives/C05LGS7BJD9
- Documentation Portal : https://github.com/cloudcampbd/cloudninja/blob/master/README.md
- **Documents and asset store:** https://drive.google.com/drive/folders/1Dfcai3ZQuLsGLl8iGGO2svhLHFoUaNkL?usp=sharing
- Project Management Tools: GitHub's Native Features and other tools if required.


## 9. Active Team Members

We embrace developers from various backgrounds and geographic locations, encouraging them to join our repository and contribute at any time. This section will comprehensively showcase all contributors and acknowledge their efforts like [here](https://www.postgresql.org/community/contributors/) facilitated by automated tools like the one in this GitHub [repository](href="https://github.com/icecrime/vossibility-stack)

### 9.1. List of Contributors

## 10. Leadership and Governance

While the project operates as an open-source endeavor, specific guidelines are imperative to oversee its functions. This is crucial due to the project's engagement with potent AI technologies, particularly the rapidly advancing Generative AI capabilities. These capabilities introduce significant risk factors that could potentially lead to damage on both personal and societal levels.

The formal structure of the project involves the following essential roles and responsibilities:

### Leadership and Governance Roles and Responsibilities:

### - Evangelist / Visionary Sponsor:
- Shapes and communicates project vision and direction.
- Advocates for support and resources.
- Provides high-level guidance and alignment.
- Inspires and motivates the team with impact-driven goals.

### - Project Coordinator / Director:
- Orchestrates project management.
- Develops project plan, timeline, milestones.
- Manages resources, budget, and risks.
- Facilitates communication among teams and stakeholders.

### - Technology Strategist:
- Evaluates and oversees tech landscape.
- Makes informed decisions about tools and frameworks.
- Identifies tech optimization opportunities.
- Provides technical guidance and mentorship.

### - Active Developer:
- Contributes code and technical expertise.
- Collaborates on feature implementation.
- Influences design and decisions.
- Takes ownership of tasks for completion.

### - Reviewer and Approver:
- Safeguards quality through code and design review.
- Ensures coding standards and practices.
- Provides constructive feedback.
- Approves contributions for integration.

### Roles collaborate for project success:
- Vision and strategy establishment.
- Technical execution and quality maintenance.
- Effective communication and collaboration.

