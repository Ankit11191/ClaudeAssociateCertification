# Claude Certified Associate (Foundations) — 90-Day Study Roadmap

An interactive, visual 90-day (1 hour/day) study roadmap, checklist, domain milestone tracker, and exam preparation mentor for the **Claude Certified Associate (Foundations)** (CCAO-F) certification.

[![Deploy to GitHub Pages](https://github.com/ankit11191/ClaudeAssociateCertification/actions/workflows/deploy.yml/badge.svg)](https://github.com/ankit11191/ClaudeAssociateCertification/actions/workflows/deploy.yml)

## Exam Overview

- **Certification**: Claude Certified Associate (Foundations) — CCAO-F
- **Format**: 60 multiple-choice & multiple-response questions
- **Duration**: 120 minutes (2 minutes per question)
- **Passing Score**: Scaled 720 / 1,000 points
- **Target Audience**: Business professionals, consultants, analysts, product managers, and knowledge workers who leverage Claude in daily workflows.

---

## 7 Syllabus Domains & Weightings

1. **Output Evaluation & Validation (21%)**: Hallucination detection, citation/URL verification, atomic claim forensic rubrics, and mathematical reconciliation.
2. **Workflow Integration & Solution Design (16%)**: Process feasibility mapping, sequential vs parallel workflows, Human-in-the-Loop (HITL) checkpoints, and Critic-Refiner loops.
3. **Governance, Risk & Responsible Use (15%)**: Constitutional AI (Helpful, Harmless, Honest), enterprise data privacy, zero training on commercial inputs, PII redlining, and Acceptable Use Policy (AUP).
4. **Prompting & Task Execution (14%)**: XML tag hierarchy (`<instructions>`, `<context>`, `<example>`), System Prompts, few-shot demonstration framing, and Chain-of-Thought (`<thinking>`).
5. **Product & Model Selection (12%)**: Haiku 3.5 (high throughput/low cost) vs Sonnet 3.5/3.7 (enterprise workhorse & coding) vs Opus (deep philosophical synthesis), and Artifacts triggers.
6. **Configuration & Knowledge Management (12%)**: Claude Projects architecture, Project Knowledge curation, Custom Instructions, context window pollution prevention, and team privacy boundaries.
7. **Troubleshooting & Optimization (10%)**: Root-cause diagnostics, lazy output mitigation, instruction drift prevention, schema enforcement, and latency/token tuning.

---

## Features

- **90-Day Daily Roadmap**: Exactly 1 hour scheduled per day (25m Concept, 25m Hands-on Lab, 10m Self-Audit).
- **Interactive Daily Checklists**: Mark granular subtasks and full days complete.
- **Hands-on Prompt Labs**: Ready-to-copy enterprise prompt templates for every day.
- **60-Minute Focus Timer**: Circular countdown timer with quick 1-hour logging.
- **Timed Practice Exam Simulator**: Realistic scenario-based questions with instant scoring, passing bar validation, and comprehensive distractor analysis.
- **Mentor Knowledge Vault**: Rapid-reference cheat sheets on XML tags, model selection, hallucination detection, and Constitutional AI.
- **Milestone Medals & Certificate**: Earn badges at key checkpoints and preview your CCAO-F Certificate of Readiness.
- **Full Offline Persistence**: Client-side `localStorage` with JSON export and import options.

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/ankit11191/ClaudeAssociateCertification.git

# Enter project directory
cd ClaudeAssociateCertification

# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build production bundle
npm run build
```

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`). To enable GitHub Pages:
1. Navigate to **Settings > Pages** in your GitHub repository.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push to `main`, and your application will automatically build and publish to `https://ankit11191.github.io/ClaudeAssociateCertification/`.
