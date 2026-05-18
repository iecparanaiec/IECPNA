/**
 * IEC Conexus IA Agent Integration
 */

export const WEBHOOK_URL = "https://hook.us1.make.com/your-webhook-id"; // Placeholder, users should change this

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export async function sendToWebhook(message: string, history: ChatMessage[]) {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history,
        context: "IEC Conexus Website Agent",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Webhook error');
    }

    const data = await response.json();
    return data.reply || data.message || "Entendido. ¿En qué más puedo ayudarte?";
  } catch (error) {
    console.error("Agent Error:", error);
    return "Lo siento, tuve un problema al procesar tu solicitud. Por favor intenta de nuevo en unos momentos.";
  }
}
