# TheBestFit

## About the App

TheBestFit is a React Native mobile application that generates a personalized 3D human avatar from a user's body measurements. Users provide measurements such as height, weight, and body dimensions through the mobile interface, which are then sent to the Meshcapade API to generate a realistic SMPL-based 3D body model. The project consists of a React Native front end for user interaction and an Express.js back end that securely communicates with the Meshcapade API using Axios.

---

## Project Structure

```
TheBestFit/
├── mobile/        # React Native (Expo) front-end
├── backend/       # Express.js server and Meshcapade API integration
└── README.md
```

### Mobile Module

The `mobile` module contains the React Native (Expo) application responsible for:

- Rendering the user interface using JSX/TSX components
- Collecting user body measurements and profile information
- Managing onboarding flow and local application state
- Sending requests to the back-end service
- Displaying generated avatar information

### Back-end Module

The `backend` module is built with **Express.js** and uses **Axios** to communicate with the Meshcapade API. It is responsible for:

- Receiving requests from the mobile application
- Authenticating requests with the Meshcapade API
- Forwarding measurement data to the API
- Returning avatar generation results to the mobile application
- Keeping API credentials secure by preventing direct client-side access

---

## Project Progress

**Current Phase:** Phase 1 – 3D Model Generation

### Total Project Phases

| Phase | Description | Status |
|--------|-------------|--------|
| Phase 1 | Generate a personalized 3D avatar from body measurements using the Meshcapade API | 🟢 Current |
| Phase 2 | Avatar customization, profile management, and enhanced user interaction | ⏳ Planned |
| Phase 3 | Outfit fitting, visualization, and recommendation features | ⏳ Planned |