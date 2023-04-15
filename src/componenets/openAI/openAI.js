import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const ChatWindow = ({ apiKey, model }) => {
  // get the api key from the environment variable
  apiKey = process.env.openAIKEY;
  model = "text-davinci-003";
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const configuration = new Configuration({ apiKey });
  const openai = new OpenAIApi(configuration);

  const handleInput = async () => {
    console.log("input", input);
    console.log("apiKey", apiKey);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);
    // const response = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: input }],
    // });
    let city = "kat key bahamas";
    let plantName = "iguanas";
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `What is the history of ${plantName} in ${city} and is it considered invasive? \n\n Do I need to report if I see it in ${city}? is there an email address for that?`,
      temperature: 0,
      max_tokens: 1006,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log("response", response);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: response.data.choices[0].text, sender: "bot" },
    ]);
    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender === "user" ? (
              <div>
                <strong>User:</strong> {message.text}
              </div>
            ) : (
              <div>
                <strong>Bot:</strong> {message.text}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <textarea
          style={{ width: "100%", height: "100px" }} // adjust the size as needed
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button onClick={handleInput}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
