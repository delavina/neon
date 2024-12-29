import { Configuration, OpenAI } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const openai = new OpenAI(configuration);

export default async function handler(req: { method: string; body: { prompt: unknown; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; result?: any; }): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
      const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 150,
      });

      if (response.data.choices && response.data.choices.length > 0) {
        res.status(200).json({ result: response.data.choices[0].text });
      } else {
        res.status(500).json({ error: 'No response from OpenAI' });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(500).json({ error: 'Error generating text' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not allowed`);
  }
}
