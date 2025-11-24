import { consumeStream, convertToModelMessages, streamText, type UIMessage } from "ai"
import { createOpenAI } from '@ai-sdk/openai';

export const maxDuration = 30

export async function POST(context: any) {
    const apiKey = import.meta.env.OPENAI_API_KEY;
    const { messages }: { messages: UIMessage[] } = await context.request.json();

    if (!apiKey) {
        console.error("OPENAI_API_KEY not loaded");
        throw new Error("OPENAI_API_KEY is missing");
    }

    const openai = createOpenAI({ apiKey });

    const prompt = convertToModelMessages(messages);

    const result = streamText({
        model: openai("gpt-5-nano"),
        prompt,
        system: "You are the portfolio chatbot for Jose Gale. Use ONLY the uploaded knowledge file to answer questions about his experience, skills, projects, and background. Respond in markdown format.",
        abortSignal: context.request.signal,
        tools: {
            file_search: openai.tools.fileSearch({
                vectorStoreIds: ['vs_692475e524848191afcc3adb23769a79'],
            })
        },
    });

    return result.toUIMessageStreamResponse({
        onFinish: async ({ isAborted }) => {
            if (isAborted) {
                console.log("Chat request aborted");
            }
        },
        consumeSseStream: consumeStream,
    });
}
