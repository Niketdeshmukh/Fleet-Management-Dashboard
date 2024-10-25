# Fleet Management Dashboard

## Problem Statement
Build a fleet management dashboard for a company that manages electric vehicles (EVs). The dashboard should allow users (fleet managers) to monitor the status of multiple EVs, including their battery levels, charging schedules, and distance travelled. The goal is to create a real-time, interactive, and scalable application that provides insights into fleet performance.


<img src="https://github.com/user-attachments/assets/cd58895d-3294-40a0-95df-d1264ce506e1" alt="Descriptive Alt Text" width="300" height="200" />
<img src="https://github.com/user-attachments/assets/644a488c-e679-4ce7-9c88-d78ea0ba2b70" alt="Descriptive Alt Text" width="300" height="200" />
<img src="https://github.com/user-attachments/assets/a096aed8-3679-4202-8f16-ad7de2aacbbf" alt="Descriptive Alt Text" width="300" height="200" />
<img src="https://github.com/user-attachments/assets/aa729a99-64cb-466d-a153-51743e51331b" alt="Descriptive Alt Text" width="700" height="200" />



## Business Requirements

### 1. Vehicle Management:
- **CRUD Operations:** Users can add, edit, and remove vehicles in the fleet.
- **Vehicle Information:**
  - Unique vehicle ID
  - Battery percentage (0-100%)
  - Total distance travelled (in kilometres)
  - Last charge time
  - Vehicle Status: "In Transit," "Charging," "Idle"

### 2. Real-Time Status Updates :
- **In Transit:** Simulates battery consumption (e.g., 1% battery loss for every 3 km travelled).
- **Charging:** Simulates charging progress (e.g., 10% battery increase every 10 minutes).
- **Idle:** No battery changes while the vehicle is stationary.

### 3. Battery Alerts :
- **Low Battery Warning:** Alerts triggered if a vehicle's battery falls below 15%.
- **Highlight Critical Vehicles:** Visually highlights low-battery vehicles in red.

### 4. Fleet Overview Dashboard :
- **Key Metrics:**
  - Total number of vehicles in each status category (In Transit, Charging, Idle).
  - Fleet-wide battery health summary:
    - Average battery percentage
    - Number of vehicles with a battery below 20%
    - Estimated full charge time for charging vehicles.
- **Optional Bonus:** Additional insights, such as fuel savings, usage patterns, or environmental impact metrics.

### 5. Charging Schedule Management :
- **Scheduled Charging:** Allows users to set charging times for specific vehicles.
- **Automatic Status Updates:** Changes the vehicle's status to "Charging" automatically at the scheduled time, and the charging process begins in real time.

### 6. Bonus Points (10 Points):
- **Responsiveness:** A responsive design that works seamlessly on both desktop and mobile devices.
- **Data Visualisations:** Charts or graphs display fleet health trends over time.

## Technical Requirements
- **Frontend Framework:** Built using React.js.
- **Data Storage:** Utilizes JSON or local storage to manage data (no backend required).
- **Design:** Incorporates Bootstrap for UI design.
- **Deployment:** Hosted on [Vercel](https://vercel.com/) for deployment.

## Tech Stack
- **Frontend:** React.js
- **UI Library:** Bootstrap
- **Data Storage:** JSON
- **Charts:** Chart.js
- **JavaScript:** Vanilla JavaScript

## Deliverables
- Fully functional Fleet Management Dashboard with all features implemented.
- Live URL of the hosted application on Vercel.
- A GitHub repository link with your code.
