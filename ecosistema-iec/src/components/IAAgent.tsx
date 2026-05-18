import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Minus, Maximize2, Bot, Sparkles } from 'lucide-react';
import { sendToWebhook, ChatMessage } from '../services/webhookService';

export default function IAAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hola, soy el asistente inteligente de Ecosistema IEC. ¿Cómo puedo ayudarte a transformar tu empresa hoy?',
      timestamp: Date.now(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const botReply = await sendToWebhook(text, messages);

    const assistantMessage: ChatMessage = {
      role: 'assistant',
      content: botReply,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const quickPrompts = [
    "Quiero automatizar mi empresa",
    "Necesito implementar IA",
    "Quiero una capacitación",
    "Necesito domótica"
  ];

  return (
    <div id="ia-agent" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[340px] md:w-[380px] h-[500px] md:h-[550px] mb-4 overflow-hidden rounded-3xl shadow-2xl glass border border-white/20 flex flex-col glow-violet z-[60]"
          >
            {/* Header */}
            <div className="p-5 bg-white/[0.02] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-[#050505] rounded-full" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">Conexus AI</h3>
                  <p className="text-[10px] text-zinc-500 font-medium">Agente inteligente activo</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsMinimized(true)} className="p-2 hover:bg-white/5 rounded-lg transition-colors text-zinc-400">
                  <Minus className="w-4 h-4" />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg transition-colors text-zinc-400">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-violet-600 text-white rounded-tr-none shadow-lg shadow-violet-950/20' 
                      : 'bg-white/[0.05] text-zinc-300 border border-white/[0.08] rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 rounded-2xl text-sm border border-white/5 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {messages.length === 1 && (
              <div className="p-5 pt-0">
                <div className="grid grid-cols-2 gap-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSend(prompt)}
                      className="p-2 bg-white/[0.05] rounded-xl text-[9px] font-bold text-center border border-white/10 text-zinc-400 hover:bg-white/[0.1] hover:text-white transition-all cursor-pointer"
                    >
                      {prompt === "Quiero automatizar mi empresa" ? "Automatizar empresa" : 
                       prompt === "Necesito implementar IA" ? "Necesito IA" : prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-5 bg-white/[0.02] border-t border-white/[0.08]">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="flex items-center bg-white/[0.08] rounded-xl px-4 py-2 hover:bg-white/[0.12] transition-colors group"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu consulta..."
                  className="flex-1 bg-transparent text-xs text-white outline-none placeholder:text-zinc-600"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="text-cyan-400 hover:text-cyan-300 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (isMinimized) setIsMinimized(false);
          else setIsOpen(!isOpen);
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group ${
          isOpen && !isMinimized 
            ? 'bg-zinc-800 text-white' 
            : 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen && !isMinimized ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <Minus className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" className="relative" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                <Sparkles className="w-2 h-2 text-cyan-600 fill-cyan-600" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
