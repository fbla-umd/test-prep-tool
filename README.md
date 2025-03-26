# FBLA AI Practice Question Generator

## Overview
FBLA AI Practice Question Generator is an AI-powered tool designed to generate high-quality practice questions for Future Business Leaders of America (FBLA) competition preparation. It supports both open-ended and multiple-choice questions across various topics, helping students and educators create effective study materials.

## Features
- Generate open-ended and multiple-choice questions based on a given topic.
- AI-powered question generation with different difficulty levels.
- Supports user authentication with NextAuth.
- Built using Next.js, TypeScript, and OpenAI API.

## Tech Stack
- **Frontend:** Next.js 13, TypeScript, TailwindCSS
- **Backend:** Node.js, OpenAI API
- **Authentication:** NextAuth.js
- **Validation:** Zod

## Installation

### Prerequisites
- Node.js (>= 16)
- NPM or Yarn

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/mahinkat/fbla-ai.git
   cd fbla-ai
   ```
2. **Install dependencies:**
   ```sh
   npm install  # or yarn install
   ```
3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the following variables:
   ```env
   NEXTAUTH_URL=<your-deployment-url>
   OPENAI_API_KEY=<your-openai-api-key>
   ```
4. **Run the development server:**
   ```sh
   npm run dev  # or yarn dev
   ```
   The app will be available at `http://localhost:3000`.

## API Endpoints

### `POST /api/questions`
Generate questions based on the input criteria.

#### Request Body (JSON):
```json
{
  "amount": 5,
  "topic": "Business Management",
  "type": "mcq"
}
```

#### Response (JSON):
```json
{
  "questions": [
    {
      "question": "What is the primary function of management?",
      "answer": "Planning, organizing, leading, and controlling",
      "option1": "Only organizing",
      "option2": "Only planning",
      "option3": "Only leading"
    }
  ]
}
```

## Deployment

### Deploying to Vercel
1. **Install Vercel CLI (if not already installed):**
   ```sh
   npm install -g vercel
   ```
2. **Login to Vercel:**
   ```sh
   vercel login
   ```
3. **Deploy the project:**
   ```sh
   vercel
   ```

## Contribution Guidelines
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make changes and commit: `git commit -m "Added new feature"`.
4. Push the branch: `git push origin feature-branch`.
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, feel free to reach out via GitHub. 

