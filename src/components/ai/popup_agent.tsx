"use client"
import type React from "react"
import { useEffect, useState } from "react";
import { useChat, type UIMessage } from "@ai-sdk/react";


import { Loader2, Send, Sparkles, X } from "lucide-react";
import Button from "../ui/button";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { cn } from "../../lib/utils";
import { DefaultChatTransport } from "ai";
import { marked } from "marked";


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

export function AIAgentPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const firstMessages = [{
        id: 'welcome', role: 'assistant', parts: [{
            type: 'text', text: `Hey there! I'm the portfolio chatbot.`
        }]
    },
    {
        id: 'welcome1', role: 'assistant', parts: [{
            type: 'text', text: `Want to know about my developer’s experience, tech stack, or project history? Just ask—I’ve got all the details ready!`
        }]
    }] as UIMessage[];

    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({
            api: '/api/chat',
        }),
        messages: [...mockMessages]
    });
    const [input, setInput] = useState('');


    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (input.trim()) {
                sendMessage({ text: input });
                setInput('');
            }
        }
    };

    return (
        <>
            <Button
                size="lg"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-14 text-white right-6 z-50 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:opacity-90 shadow-lg shadow-blue-500/50",
                )}
            >
                <Sparkles className="w-5 h-5 mr-2" />
                AI Agent
            </Button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <Card className="w-full max-w-3xl h-[600px] flex flex-col bg-card shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-foreground">AI Project Assistant</h2>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Chat history */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-2 rounded-lg ${message.role === 'user'
                                            ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white'
                                            : 'bg-muted text-foreground'
                                            }`}
                                    >
                                        {message.role === 'user' ?
                                            message.parts.map((part, index) =>
                                                part.type === 'text' ? <span>{part.text}</span> : null,
                                            )
                                            : message.parts.map((part, index) =>
                                                part.type === 'text' ? <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: marked(part.text) }}></div> : null,
                                            )}
                                    </div>
                                </div>
                            ))}

                            {status !== 'ready' && messages[messages.length - 1]?.role === 'user' && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Thinking...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input area */}
                        <div className="p-4 border-t border-slate-200">
                            <form onSubmit={e => {
                                e.preventDefault();
                                if (input.trim()) {
                                    sendMessage({ text: input });
                                    setInput('');
                                }
                            }} className="flex gap-2">
                                <Textarea
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Describe your project... (e.g., 'Build a recipe sharing app with user profiles and favorites')"
                                    className="resize-none"
                                    rows={3}
                                    disabled={status !== 'ready'}
                                />
                                <Button
                                    type="submit"
                                    disabled={typeof (input) === "string" && !input.trim() || status !== 'ready'}
                                    size="sm"
                                    className="h-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                                >
                                    {status !== 'ready' ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <Send className="w-5 h-5" />
                                    )}
                                </Button>
                            </form>
                            <p className="text-xs text-slate-500 mt-2">
                                Press Enter to send, Shift+Enter for new line
                            </p>
                        </div>
                    </Card >
                </div >
            )
            }
        </>
    )
}