# TheBestFit

## About the App

TheBestFit is a React Native mobile application that generates a personalised 3D human avatar from a user's body measurements. Users enter measurements such as height, weight, chest, waist, and hip dimensions through the mobile application. These measurements are then sent to the Meshcapade API, which generates a realistic SMPL-based 3D body model.

The project follows a client-server architecture, consisting of a React Native (Expo) front end for user interaction and an Express.js back end that securely communicates with the Meshcapade API using Axios.

---

## Project Structure

```text
TheBestFit/
├── mobile/
│   ├── app/
│   │   └── index.tsx
│   └── components/
│       ├── measurements.tsx
│       ├── gender_selection.tsx
│       └── profile.tsx
├── backend/
│   ├── index.js
│   ├── package.json
│   └── node_modules/
└── README.md
```

### 📁 `mobile/`

The `mobile` module contains the React Native (Expo) front end responsible for collecting user information and rendering the application's user interface.

#### 📁 `app/`

- **`index.tsx`** – Main entry point of the application. It manages the onboarding flow and renders the three user input screens.

#### 📁 `components/`

- **`measurements.tsx`** – Collects body measurements such as height, weight, chest, waist, and hip dimensions.
- **`gender_selection.tsx`** – Allows the user to select their gender.
- **`profile.tsx`** – Allows the user to optionally upload or capture a profile photo.

---

### 📁 `backend/`

The `backend` module is implemented using **Express.js** and **Axios**. It acts as an intermediary between the mobile application and the Meshcapade API by handling HTTP requests and securely managing API authentication.

#### 📄 `index.js`

- Configures the Express server.
- Receives requests from the mobile application.
- Uses Axios to forward requests to the Meshcapade API.
- Returns the generated avatar data to the mobile application.

#### 📦 Dependencies

- **Express.js** – Provides the REST API endpoints used by the mobile application.
- **Axios** – Handles HTTP communication with the Meshcapade API.

---


## Project Progress

**Current Phase:** Phase 1 – 3D Model Generation

### Total Project Phases

| Phase | Description | Documentation | Status    |
|--------|-------------|---------------|-----------|
| Phase 1 | Generate a personalised 3D avatar from body measurements using the Meshcapade API. |   📖 [Phase 1 Guide](../../wiki/Phase-1)    | 🟢 Current    |
| Phase 2 | Avatar customisation, profile management, and enhanced user interaction. | Coming soon   | ⏳ Planned     |
| Phase 3 | Outfit fitting, visualisation, and recommendation features. | Coming soon   | ⏳ Planned     |