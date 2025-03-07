// OLLAMA_HOST=0.0.0.0:11434 ollama serve

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const ollamaResponse = await fetch("https://nithin-ai-service-75363654922.us-central1.run.app/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "nithin-ai", // Ensure this model exists
        prompt: prompt,
        stream: false, // Ensure it's not streaming responses
      }),
    });

    if (!ollamaResponse.ok) {
      throw new Error(`Ollama API error: ${ollamaResponse.statusText}`);
    }

    const data = await ollamaResponse.json();
    return new Response(
      JSON.stringify({ response: data.response }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error. Check Ollama logs." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
