"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h1 className="p-12 font-mono text-3xl">product generator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="p-12 font-mono text-lg"
          rows={4}
          placeholder="Write your prompt here..."
        />
        <button type="submit">Generate</button>
      </form>

      <div>
        <h2 className="p-12 font-mono text-xl">Generated Output</h2>
        <p>{result}</p>
      </div>
      {/** - UI elements - */}
    </div>
  );
}
