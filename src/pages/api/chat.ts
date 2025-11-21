import { consumeStream, convertToModelMessages, streamText, type UIMessage } from "ai"
import { openai } from '@ai-sdk/openai';


export const maxDuration = 30

export async function POST(context: any) {
    const { messages }: { messages: UIMessage[] } = await context.request.json()

    const prompt = convertToModelMessages(messages)

    const result = streamText({
        model: openai('gpt-4o'),
        prompt,
        abortSignal: context.request.signal,
    })

    return result.toUIMessageStreamResponse({
        onFinish: async ({ isAborted }) => {
            if (isAborted) {
                console.log("Chat request aborted")
            }
        },
        consumeSseStream: consumeStream,
    })
}
