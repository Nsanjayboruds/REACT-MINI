import React, { useState } from "react";
import axios from "axios";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { transcript, resetTranscript } = useSpeechRecognition();

    const handleSend = async (input) => {
        if (!input.trim() || isLoading) return;
        setIsLoading(true);
        setMessages((prev) => [...prev, { text: input, sender: "user" }]);

        const aiResponse = await getAIResponse(input);
        setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
        await speak(aiResponse);
        setIsLoading(false);
    };

    const getAIResponse = async (userInput) => {
        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            const response = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent",
                {
                    contents: [{ parts: [{ text: userInput }] }],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-goog-api-key": apiKey,
                    },
                }
            );

            return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "I don't know.";
        } catch (error) {
            return "Error fetching AI response.";
        }
    };

    const speak = async (text) => {
        const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
        const voiceId = "g6xIsTj2HwM6VR4iXFCw"; 
        const response = await axios.post(
            `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
            {
                text,
                model_id: "eleven_multilingual_v2",
                voice_settings: { stability: 0.5, similarity_boost: 0.75 },
            },
            {
                responseType: "arraybuffer",
                headers: {
                    "xi-api-key": apiKey,
                    "Content-Type": "application/json",
                },
            }
        );

        const blob = new Blob([response.data], { type: "audio/mpeg" });
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.play();
    };

    const startListening = () => {
        resetTranscript();
        SpeechRecognition.startListening({ continuous: false });
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        handleSend(transcript);
        resetTranscript();
    };

    return (
        <div className="p-4">
            <div className="h-80 overflow-y-auto border rounded p-2 mb-2 bg-white">
                {messages.map((msg, idx) => (
                    <div key={idx} className={msg.sender === "user" ? "text-right" : "text-left"}>
                        <p className={msg.sender === "user" ? "text-blue-500" : "text-green-500"}>
                            {msg.sender === "user" ? "You" : "AI"}: {msg.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <button onClick={startListening} className="p-2 bg-green-500 text-white rounded">🎙️ Start Talking</button>
                <button onClick={stopListening} className="p-2 bg-red-500 text-white rounded">⏹️ Stop & Ask</button>
            </div>

            <p className="mt-2 text-gray-500">Heard: {transcript}</p>
            {isLoading && <p className="mt-2 text-gray-400">Thinking...</p>}
        </div>
    );
}
