# Instagram-Feed

## Overview
The **Instagram-Feed** project is a microservice-based simulation of an Instagram-like feed page. This project is designed for practicing asynchronous programming, lazy loading, and building a scalable service-oriented architecture using Node.js and Express.

Each microservice in this repository focuses on different aspects of the feed, such as handling images, managing feed data, and dynamically loading content as users scroll.

## Features
- **Asynchronous Image Loading**: Images are loaded asynchronously using promises to improve page performance.
- **Lazy Loading**: Only images near the viewport are loaded, reducing initial load times and optimizing user experience.
- **Microservices Architecture**: Different parts of the feed (e.g., image service, feed service) are handled by separate microservices.
- **Node.js with Express**: The backend is built using Express, with different endpoints handling various tasks.
- **No Database (for now)**: The current version does not integrate with a database, as the focus is on practicing backend service architecture and asynchronous loading.

## Microservices

### 1. **Image Service**
   - Handles serving image metadata and image URLs.
   - Simulates image data using static resources.
   - Asynchronously serves images to the frontend.
   - URL: `/api/images`

### 2. **Feed Service**
   - Manages the Instagram-like feed, combining images and user data.
   - Dynamically loads content based on user interactions (e.g., scrolling).
   - URL: `/api/feed`

### 3. (Future Services)
   - **User Service** (optional): Can be added to handle user profiles and interactions.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Instagram-Feed.git
