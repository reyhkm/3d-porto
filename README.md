# Creative 3D Portfolio

This is a creative portfolio website built with React, Vite, and React Three Fiber. It features a dynamic 3D background with scroll-based animations.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd creative-3d-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Add your 3D Model:**
    - Find a 3D model in `.glb` or `.gltf` format. You can find free models on sites like Sketchfab.
    - Place the model file inside the `public/` directory.
    - Rename it to `avatar.glb` or update the path in `src/components/3D/Avatar.jsx`.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

This will generate a `dist` folder with the optimized static assets.

## Technologies Used

- **Vite:** Next-generation front-end tooling.
- **React:** A JavaScript library for building user interfaces.
- **Three.js:** A 3D graphics library for JavaScript.
- **React Three Fiber:** A React renderer for Three.js.
- **Drei:** A collection of useful helpers for React Three Fiber.
- **Leva:** A GUI for changing properties in real-time (for development).
