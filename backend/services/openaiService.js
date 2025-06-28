const { OpenAI } = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function processNote(note) {
  const prompt = `Note: ${note}

Summarize this note in 2-3 sentences.
List 3-5 keywords.
Extract any to-do items or follow-up questions.
Format:
Summary: ...\nKeywords: ...\nTo-Dos: ...`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });

  const output = response.choices[0].message.content;
  const [summary, keywords, todos] = output.split(/\n(?=Keywords:|To-Dos:)/);

  return {
    summary: summary.replace('Summary: ', '').trim(),
    keywords: keywords.replace('Keywords: ', '').split(',').map(k => k.trim()),
    todos: todos.replace('To-Dos: ', '').split(/\n|,/).map(t => t.trim()).filter(Boolean),
  };
}

module.exports = { processNote };
