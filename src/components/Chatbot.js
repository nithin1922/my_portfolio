"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "ai", text: data.response }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: "ai", text: "Error fetching response." }]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition relative animate-pulse"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <MessageCircle size={24} className="animate-spin-slow" />
          <motion.div 
  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-white text-black text-sm font-bold rounded-lg shadow-md"
  animate={{ opacity: [0, 1, 1, 0] }}
  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
>
  <span className="text-blue-600">Chat</span> <span className="text-red-500">with</span> <span className="text-green-500">my</span> <span className="text-purple-500">AI</span>
</motion.div>
        </motion.button>
      )}
      {open && (
        <div className="w-80 bg-white shadow-xl rounded-2xl p-4 flex flex-col">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold"><span className="text-blue-600">Nithin</span>  <span className="text-purple-500">AI</span></h2>
            <button onClick={() => setOpen(false)} className="text-gray-500">✕</button>
          </div>
          <div className="h-60 overflow-y-auto py-2">
            {messages.map((msg, i) => (
              <div key={i} className={`my-1 p-2 rounded-lg ${msg.role === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"}`}>
                <strong>{msg.role === "user" ? "You: " : "AI: "}</strong>{msg.text}
              </div>
            ))}
            {loading && (
              <motion.div className="flex space-x-1 mt-2" initial={{ opacity: 0.3 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 1 }}>
                <div className="w-2 h-2 bg-gray-500 rounded-full" />
                <div className="w-2 h-2 bg-gray-500 rounded-full" />
                <div className="w-2 h-2 bg-gray-500 rounded-full" />
              </motion.div>
            )}
          </div>
          <div className="border-t pt-2 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-l-lg focus:outline-none"
              placeholder="Type a message..."
            />
            <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
