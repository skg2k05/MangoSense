# 🥭 MangoSense — Mango Flower Bud & Yield Prediction System

**MangoSense** is a farmer-first smart agriculture application designed to predict mango yield at an early flowering stage by synthesizing multi-sample flower bud image classification, micro-climate parameters, 15-day weather forecasts, flower-drop risk analysis, and actionable farmer recommendations.

---

## 🌟 Key Product Features

- **Farmer Dashboard**: Real-time overview of expected yield (4.8–5.4 tonnes/acre), bud health (78% healthy), flower drop risk, and 15-day weather telemetry.
- **Multi-Sample Bud Capture**: Interactive wizard allowing farmers to capture or upload multiple panicle samples across orchard canopies (North, South, East, West).
- **AI Bud Classification**: Panicle health instance segmentation simulation (Healthy Buds, Mango Hopper pest risk, Powdery Mildew, and Desiccation drop risk).
- **15-Day Agronomic Weather Forecast**: Dual-axis temperature and rainfall chart identifying rain surge risk windows for early fungal prophylaxis.
- **Early Yield Prediction Model**: Multi-factor weight calculation, historical benchmarks, and interactive "What-If" sensitivity simulator.
- **Actionable Advisory**: Priority-ranked tasks with IPM chemical formulations and organic alternatives (*Neem oil, Trichoderma, Jeevamrutha*).
- **History & Comparison**: Historical logs timeline with side-by-side cycle comparison and CSV export.
- **Academic / Mentor ML Status**: Transparent roadmap detailing deep learning CNN and regression pipelines.

---

## 📱 Mobile-First Responsive Design

- Fully optimized for mobile viewports (320px, 360px, 375px, 390px, 430px, 768px, 1024px, and Desktop).
- Bottom navigation bar with safe-area support for mobile devices.
- Responsive chart scaling and touch-friendly targets.

---

## 🚀 Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4
- **Charts & Visualizations**: Recharts
- **Icons**: Lucide React
- **Architecture**: Decoupled mock services ready for FastAPI backend integration

---

## 🛠️ Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## ☁️ Deployment

The project is configured for one-click deployment on **Vercel** or **Netlify** with `vercel.json` included for SPA routing.

---

## 📄 Prototype Status

*This is a research/product prototype built with realistic demo data pending final field dataset collection and CNN model training.*
