import OpenAI from "openai";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();


const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function uploadResource() {
    const file = await client.files.create({
        file: fs.createReadStream("src/data/jose-knowledge.json"),
        purpose: "assistants", // still works for Resources API
    });

    console.log("Uploaded file ID:", file.id);
}

uploadResource();