---
title: Jobr Extension
order: 0
img: /assets/jobr-extension/jobr-extension-1.gif
img_alt: Jobr extension for auto form filling image
images:
  [
    {
      src: /assets/jobr-extension/jobr-extension-1.gif,
      alt: Jobr extension for auto form filling image,
    },
    {
      src: /assets/jobr-extension/jobr-extension-2.gif,
      alt: Jobr extension for auto form filling image,
    },
  ]
description: |
  Built a browser extension to automate job application form filling, integrating with job boards and handling complex DOM structures, bot detection, and dynamic field types.
tags:
  - Automation
  - Browser Extension
  - Backend
---

The **Jobr Extension** is a targeted tool I developed to streamline job application processes for our internal agents on major job boards, including **Greenhouse**, **Workable**, **SmartRecruiters**, **Lever**, and **AshbyHQ**. By automating form filling and submission, it significantly reduced the time required per application, enabling agents to work more efficiently.

## Key Features

- **Form Filling**: Automatically detects and populates fields (text, dropdowns, checkboxes) using recursive DOM scanning and AI-driven field mapping tailored to supported job boards.
- **Bot Detection Evasion**: Employs stealth plugins and randomized delays to mimic human behavior, ensuring reliable automation on platforms with anti-bot measures.
- **Shadow DOM Support**: Handles complex DOM structures, including iframes and shadow DOMs, to access hidden fields common in modern job boards.
- **Real-Time Field Handling**: Notifies developers of unrecognized field types for deferred updates, maintaining functionality without immediate code changes.
- **Node.js Backend**: Powers the extension with a scalable **Node.js** and **Express** backend for processing form data and integrating with external APIs.

### Impact

The Jobr Extension transformed how our agents approached job applications. While exact metrics are not available, the tool drastically reduced the time required for each application, allowing agents to focus on higher-value tasks and increasing overall productivity.

### Technologies

- **Frontend**: React, Tailwind
- **Backend**: Node.js, Express
- **Automation**: Puppeteer, chrome debugger api
- **Other**: Firebase (for user data), Stealth Plugins
