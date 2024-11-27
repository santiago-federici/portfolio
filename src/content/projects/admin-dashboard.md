---
title: Admin dashboard
description: A tool for babery shops to manage their incomes, outcomes, staff, appointments and more. Built in colaboration with 2 more collegues.
thumbnail: /admin-dashboard-main.webp
stack: [Nextjs, Tailwind]
---

# App Description

This app is a **Barbershop Management System** designed to streamline the day-to-day operations of barbershops and enhance the customer experience. The application is built as a modern, scalable web platform that leverages a combination of cutting-edge technologies for both frontend and backend development. Its core functionality revolves around managing branches, services, schedules, clients, and appointments in an efficient and user-friendly manner.

## Key Features

#### Client Management

Create, View, and Update Clients: Allows barbershop staff to add new clients, update client information, and manage the client database.
Real-Time Updates: Client-related data updates in real-time using WebSockets, ensuring that multiple users see the latest information simultaneously.
Validation: Uses react-hook-form and Zod for seamless data validation during client creation and editing.

#### Appointment Scheduling

Time Slots Management: Dynamically generated time slots based on branch schedules and customizable time slot durations.
Availability Checking: Ensures that time slots respect the branch's schedule and capacity limits.
Rescheduling and Canceling Appointments: Empowers users to modify or cancel appointments, updating availability in real-time.

#### Branch Management

Branch Schedules: Each branch can have unique schedules and time slots that can be enabled/disabled as needed.
Location Information: Stores and displays branch locations to assist clients in finding the nearest barbershop.

#### Services and Pricing

Service Management: Allows admin users to add, update, and delete services offered by the barbershop.
Pricing Updates: Flexible pricing model to adjust rates based on demand or promotions.

#### Admin Dashboard

Centralized Management: Staff can view and manage appointments, clients, and schedules in one place.
Role-Based Access Control (RBAC): Ensures branch-specific roles using Kinde Authentication, so staff only access data relevant to their branch.

#### Real-Time Updates via WebSockets

Notifications: Keeps users informed about changes (e.g., new clients, updated appointments).
Seamless Syncing: Updates schedules, clients, and appointments for all connected users in real time.
