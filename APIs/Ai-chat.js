import { Mistral } from "@mistralai/mistralai";

const client = new Mistral({
    apiKey: import.meta.env.VITE_MISTRAL_API_KEY
});

export async function AI_Chat(message) {
    try {
        console.log("ai chat message passed:", message);

        const response = await client.agents.complete({
            agentId: import.meta.env.VITE_MISTRAL_AI_ID,
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        return response.choices[0].message.content;

    } catch (error) {
        console.error("Mistral error:", error);
        return "Sorry, I couldn't process that request.";
    }
}