import axios from "axios";

export async function speakWithElevenLabs(text) {
  const voiceId = "g6xIsTj2HwM6VR4iXFCw";
  const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;

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
}
