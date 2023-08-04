# Cloud Ninja 

## CloudCamp Bangladesh Community Management Platform Application

## Project Document

### Document Outline

- [Authors](#authors)
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
    - [3.1.4. User Groups Management](#314-users-group-management)
  - [3.2. Event Management](#32-event-management)
  - [3.3. Professional Profile](#33-professional-profile)
  - [3.4. Communication and Collaboration (Similar to Slack)](#34-communication-and-collaboration-similar-to-slack)
  - [3.5. Learning Portal](#35-learning-portal)
  - [3.6. FAQ](#36-faq)
  - [3.7. Support Ticketing System](#37-support-ticketing-system)
  - [3.8. ChatBot: Towards Artificial General Intelligence (AGI)](#38-chatbot-towards-artificial-general-intelligence-agi)
  - [3.9. Push Notification](#39-push-notification)
  - [3.10 Email](#40-email)

- [4. Architecture and Technology Stack](#4-architecture-and-technology-stack)
  - [4.1. Systemwide Architecture Diagram](#41-systemwide-architecture-diagram)
  - [4.2. Microservices Design Architecture Diagram](#42-microservices-design-architecture-diagram)
  - [4.3. Frontend Technologies Architecture Diagram](#43-frontend-technologies-architecture-diagram)
  - [4.4. Backend Technologies Architecture Diagram](#44-backend-technologies-architecture-diagram)
  - [4.5. AI/ML, Generative AI Architecture Diagram](#45-aiml-generative-ai-architecture-diagram)
  - [4.6. Database Management Architecture Diagram](#46-database-management-architecture-diagram)
  - [4.7. Real Time Stream Data, Analytics and Data Visualizations Architecture Diagram](#47-real-time-stream-data-analytics-and-data-visualizations-architecture-diagram)
  - [4.8. Payment Processing Architecture Diagram](#48-payment-processing-architecture-diagram)
- [5. System Components](#5-system-components)
  - [5.1. Handling Authentication and Authorization](#51-handling-authentication-and-authorization)
  - [5.2. Store MetaData, Transaction Logs and System Logs](#52-store-metadata-transaction-logs-and-system-logs)
  - [5.3. Store Structured Sensitive Transaction Data](#53-store-structured-sensitive-transaction-data)
  - [5.4. Admin Module](#54-admin-module)
  - [5.5. User Module](#55-user-module)
  - [5.6. Event Management Module](#56-event-management-module)
  - [5.7. Communication and Collaboration Module (Similar to Slack)](#57-communication-and-collaboration-module-similar-to-slack)
- [6. Project Roadmap](#6-project-roadmap)
  - [6.1. Requirements Gathering and Planning](#61-requirements-gathering-and-planning)
  - [6.2. Frontend Development](#62-frontend-development)
  - [6.3. Backend Development](#63-backend-development)
  - [6.4. AI Development](#64-ai-development)
  - [6.5. Integration and Testing](#65-integration-and-testing)
  - [6.6. Deployment and Launch](#66-deployment-and-launch)
  - [6.7. Automate Everything!](#67-automate-everything)
    - [6.7.1. DevOps](#671-devops)
    - [6.7.2. DevSecOps](#672-devsecops)
    - [6.7.3. MLOps](#673-mlops)
    - [6.7.4. MLSecOps: Machine Learning Security and Operations](#674-mlsecops-machine-learning-security-and-operations)
  - [6.8. Ongoing Backup, Maintenance and Updates](#68-ongoing-backup-maintenance-and-updates)
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
  - [8.4. Project Management Tool](#84-project-management-tool)
- [9. Active Team Members](#9-active-team-members)
- [10. Leadership and Governance](#10-leadership-and-governance)

## Authors

| SL  | Name                         | Email                      | Contact Number      |
| --- | ---------------------------- | -------------------------- | ------------------- |
| 1   | Mohammad Zaman               | mohammad.zaman@gmail.com   | +1-917-648-0034     |
| 2   | Md. Mahamudur Rahman Sohag   | opensohag@gmail.com        | +8801711475567     |
| 3   | Sanjoy K Paul                | skpaul82@gmail.com         | +8801511927992     |
| 4   | Naim Hossen                  | naimhossenpro@gmail.com    | +8801750565053     |

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

### 3.1.4. User Groups Management
Organizing users into specific roles or groups streamlines permission and access management. Grouping users with similar responsibilities, such as Admin, developer, designer, manager, facilitates efficient control over their access rights.

### 3.2. Event Management
Effortlessly create and manage events, overseeing crucial aspects such as event budgets, vendor coordination, sponsorships, volunteer assignments, guest lists, and visitor registrations.

### 3.3. Professional Profile
Craft comprehensive professional profiles showcasing essential details: Name, Designation, Company, Expertise Module, Best Native Module, Experience. Additionally, provide contact information like Email, Contact Number, LinkedIn Profile. Include educational background details, such as Highest Degree, University, Field, or Major.

### 3.4. Communication and Collaboration (Similar to Slack)
Enable seamless communication within the community through an in-app communication feature. This feature encompasses chat functionality, video/audio meetings, and threaded discussions. The Cloud Ninja Platform will host its communication tools, fostering real-time interaction and collaboration.

### 3.5. Learning Portal
Empower continuous learning with an interactive learning portal. Features include engaging interactive lessons, Progress Tracking, Collaborative Learning, Multimedia Content support, Offline Mode accessibility, Cross-Platform Availability, Notifications/Reminders, and structured Learning Pathways.

### 3.6. FAQ
Curate a comprehensive repository of common and frequently asked questions to provide quick and convenient assistance to users.

### 3.7. Support Ticket System
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

### 4.8. Data Management, Analytics and Visualization Diagram
Data Architecture Diagram Version 1:

### 4.9. Payment Processing Architecture Diagram
Payment Processing Architecture Diagram Version 1:

