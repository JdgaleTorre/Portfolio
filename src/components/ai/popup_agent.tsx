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


export function AIAgentPopup() {
    const [isOpen, setIsOpen] = useState(false);

    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({
            api: '/api/chat',
        }),
        messages: [{
            id: 'welcome', role: 'assistant', parts: [{
                type: 'text', text: `Hey there! I'm the portfolio chatbot.`
            }]
        },
        {
            id: 'welcome1', role: 'assistant', parts: [{
                type: 'text', text: `Want to know about my developer’s experience, tech stack, or project history? Just ask—I’ve got all the details ready!`
            }]
        }]
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
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-muted text-foreground'
                                            }`}
                                    >
                                        {message.parts.map((part, index) =>
                                            part.type === 'text' ? <span key={index}>{part.text}</span> : null,
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