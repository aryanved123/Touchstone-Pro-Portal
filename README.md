# Portal Flagging System – Summer Student Assignment

This project is a prototype of a candidate flagging system for Touchstone Institute's PRO Portal. It was developed as part of the Summer Student Assignment and demonstrates both frontend and backend development skills using AngularJS, PrimeNG, Node.js, TypeScript, and Express.

---

## Project Features

- Submit candidate data via a web form
- Automatically flag candidates based on eligibility rules
- Review flags with severity levels (High, Medium, None)
- Manually override or acknowledge each flag
- PrimeNG used for UI components (form inputs, badge indicators, table)
- Backend flagging logic based on rules from Excel document

---

## Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | AngularJS 1.x + PrimeNG  |
| Backend     | Node.js + TypeScript + Express |
| UI Styling  | PrimeNG + CSS            |

---

## How to Run the Project

### Backend Setup:
cd backend
npm install
npm run dev

### Frontend Setup:
cd frontend
http-server -p 8000

### Prerequisites

- Node.js installed: [https://nodejs.org](https://nodejs.org)
- Optional: `http-server` globally installed for frontend:
  ```bash
  npm install -g http-server
