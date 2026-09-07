# Zeyad's Portfolio

Personal software engineering portfolio of **Zeyad Essam (Zeyad Elmr3shly)**. The site presents full-stack and backend work, data analysis, selected projects, education, experience, and ways to get in touch.

**Live site:** [https://zeyadfolio.vercel.app/](https://zeyadfolio.vercel.app/)

## Overview

This React application is Zeyad’s public professional profile. It highlights practical software engineering skills across web applications, APIs, databases, and data-driven solutions, with a custom space-themed visual identity.

## Features

- Greeting and professional summary
- Skills and proficiency overview
- Education and work experience
- Featured full-stack projects with GitHub and demo links
- Resume download
- Contact details and social links
- Light and dark theme toggle
- Responsive layout for desktop and mobile

## Technologies Used

- React
- Sass
- JavaScript
- Lottie animations
- GitHub Pages (deployment)

## Project Structure

```
src/
  portfolio.js          Site content (profile, skills, projects, experience)
  components/           Reusable UI pieces (header, cards, social links)
  containers/           Page sections (greeting, skills, education, projects)
  assets/               Images, fonts, and animations
  contexts/             Theme state
public/                 Static files and HTML metadata
```

## Running Locally

Prerequisites: Node.js 18 or later, and npm.

From the project root:

```bash
npm install
npm start
```

The development server runs at `http://localhost:3000`.

Optional GitHub profile fetching uses a local `.env` file. Copy `.env.example` to `.env` and set the listed variables only if that integration is needed.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm start` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm test` | Runs tests |
| `npm run deploy` | Builds and publishes to GitHub Pages |

