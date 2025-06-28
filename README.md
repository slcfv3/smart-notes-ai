# 🧠 Smart Notes AI

Smart Notes AI is a full-stack web app that allows users to submit long-form notes and receive **automatic AI-generated summaries, keywords**, and **to-do items** using the OpenAI API. It is designed for students, professionals, or anyone who wants to turn raw notes into actionable insights.

---

## 🚀 Features

- ✍️ Submit long notes or meeting content
- 🧠 Get instant:
  - AI-generated summary
  - Extracted keywords
  - Suggested to-dos
- 🗃️ Notes stored in MongoDB
- ⚛️ Modern React + Tailwind frontend
- 🔧 Express + Node.js backend
- 🔌 Uses OpenAI's GPT-4o API for processing

---

## 🖼️ Demo Screenshot

*(You can add a screenshot here once deployed)*

---

## 📦 Tech Stack

| Layer       | Technology                  |
|-------------|-----------------------------|
| Frontend    | React + Vite + Tailwind CSS |
| Backend     | Express.js + Node.js        |
| AI Service  | OpenAI GPT-4o API           |
| Database    | MongoDB (via Mongoose)      |

---

## 🛠️ Local Development Setup

1. Clone the repo

```bash
git clone https://github.com/yourusername/smart-notes-ai.git
cd smart-notes-ai

2. Set Up the Backend
cd backend
npm install

Create a .env file with the following content:
MONGO_URI=mongodb://localhost:27017/smart-notes-ai
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx

Then run:
node index.js

Server runs on http://localhost:3001

3. Set Up the Frontend

cd ../frontend
npm install
npm run dev

Frontend runs on http://localhost:3000
