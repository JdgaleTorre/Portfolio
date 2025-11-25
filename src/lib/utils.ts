import type { UIMessage } from "ai";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


const mockMessages = [
    {
        id: 'welcome', role: 'assistant', parts: [{
            type: 'text', text: `Hey there! I'm the portfolio chatbot.`
        }]
    },
    {
        id: 'welcome1', role: 'assistant', parts: [{
            type: 'text', text: `Want to know about my developer’s experience, tech stack, or project history? Just ask—I’ve got all the details ready!`
        }]
    },
    {
        id: 'user1', role: 'user', parts: [{
            type: 'text', text: `What are your skills?`
        }]
    },
    {
        id: 'assistant1', role: 'assistant', parts: [{
            type: 'text', text: `## Jose Gale – Professional Experience

### Summary of Experience
Jose is a Dublin-based **Senior Full Stack Engineer** with 10+ years of experience building cloud-native applications using **React, Node.js, TypeScript, AWS, and GraphQL**. He has led teams, mentored engineers, and delivered high-performance systems. He is currently aiming for a **Senior Full Stack or Senior Frontend role** and is available to start immediately.

---

### Code Exitos (Full Stack Developer, Mar 2021 – Jan 2022)
**Key Achievements:**
- Built **Jobbox**, a Django REST + React Native rental platform scaling to 1,000+ users.
- Added secure media uploads and cloud storage integration to **Quotient App**.
- Improved **Clink** survey visualization with Tailwind-based UI and CI pipelines.
- Reduced post-deployment bugs by 15% using **Jest** and **Cypress**.

**Technologies Used:** React Native, Django REST, NestJS, AWS, Jest, Cypress, Tailwind

---

### Farsiman Group (Full Stack Developer / Scrum Master, Nov 2011 – Oct 2020)
**Key Achievements:**
- Led a team of 7 developers with Agile practices, improving team efficiency.
- Integrated banking payment processing into custom POS systems.
- Implemented authentication and data protection aligned with GDPR.
- Developed a **Logistics Monitor** system that tracks 100+ parcels daily.

**Technologies Used:** Jira, Git, Custom POS, API development, Role-Based Access Control (RBAC)

---

### Subway (Floor Staff, Oct 2022 – Present)
- Part-time role while pursuing **MSc in Data Analytics**.
`
        }]
    },
    {
        id: 'user2', role: 'user', parts: [{
            type: 'text', text: 'What are your skills?'
        }]
    },
    {
        id: 'assistant2', role: 'assistant', parts: [{
            type: 'text', text: 'Here’s Jose’s contact information: - Email: josedavidgale@gmail.com - Website: https://www.josegale.com - GitHub: https://github.com/JdgaleTorre - LinkedIn: https://www.linkedin.com/in/josedavidgale - Phone: +353832094639 - Location: Dublin, Ireland Source: Jose Gale profile data.'
        }]
    }
] as UIMessage[]