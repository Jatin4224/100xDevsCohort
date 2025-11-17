"use client";

import { RealtimeSession } from "@openai/agents-realtime";
import axios from "axios";
import Image from "next/image";
import { gfAgent } from "./agents/gf";

export default function Home() {
  async function handleStartAgent() {
    console.log("Making API call to /api to EK");
    const response = await axios.get("/api");
    console.log("got the response from /api", response.data);

    const tempKey = response.data.tempApiKey;

    const session = new RealtimeSession(gfAgent, {
      model: "gpt-4o-realtime-preview-2025-06-03",
      config: {
        inputAudioFormat: "pcm16",
        inputAudioNoiseReduction: { type: "near_field" },
        inputAudioTranscription: {
          language: "en",
          model: "gpt-4o-mini-transcribe",
        },
      },
    });
    await session.connect({ apiKey: tempKey }); //orignal key nahi use hoga frontend par leak nahi karna hain
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <button
          onClick={handleStartAgent}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Start Agent
        </button>
      </div>
    </div>
  );
}
