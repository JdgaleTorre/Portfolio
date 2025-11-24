import OpenAI from "openai";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function setup() {
    console.log("Creating assistant...");

    // 1. Upload your knowledge JSON file
    const file = await client.files.create({
        file: fs.createReadStream("src/data/jose-knowledge.json"),
        purpose: "assistants"
    });

    console.log("File uploaded:", file.id);

    // 2. Create assistant with persistent knowledge
    const assistant = await client.beta.assistants.create({
        name: "Jose Portfolio Assistant",
        model: "gpt-4-turbo",
        instructions: `
You are the AI chatbot of Jose Gale's portfolio website.
Use ONLY the uploaded knowledge file to answer questions about his experience, skills, projects, and background.
If you don’t know something, say so.
Respond clearly and helpfully.
    `,
        tools: [
            { type: "file_search" }
        ],
        tool_resources: {
            file_search: {
                vector_stores: [
                    {
                        file_ids: [file.id]
                    }
                ]
            }
        }
    });

    console.log("Assistant created:", assistant.id);

    fs.writeFileSync("assistant.json", JSON.stringify({
        assistantId: assistant.id
    }, null, 2));

    console.log("Saved assistant ID to assistant.json");
}

setup();
