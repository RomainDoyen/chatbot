import { MessageCircleWarning, SendHorizontal, X } from "lucide-react";
import { useState } from "react";
import { fetchData } from "../../utils/axios";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const faqResponse = await fetchData("faqs");
      const faq = faqResponse.find((faq: any) =>
        faq.question.toLowerCase().includes(userInput.toLowerCase())
      );

      const botResponse = {
        sender: "bot",
        text: faq ? faq.answer : "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ?",
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `Erreur lors de la récupération des données. ${error}` },
      ]);
    }

    setUserInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
          onclick={() => setIsOpen(true)}
          icon={<MessageCircleWarning />}
        />
      )}

      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg w-80 h-96 flex flex-col">
          <div className="bg-blue-500 text-white py-2 px-4 flex justify-between items-center rounded-t-lg">
            <span className="font-bold">Chatbot</span>
            <Button
              onclick={() => setIsOpen(false)}
              icon={<X />}
              className="text-white hover:text-gray-200 focus:outline-none"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"
                  }`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 flex">
            <Input
              type="text"
              value={userInput}
              onChange={setUserInput}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Posez votre question..."
            />
            <Button
              onclick={sendMessage}
              icon={<SendHorizontal />}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
