import fs from 'fs';
import fetch from 'node-fetch';
import OpenAI, { toFile } from 'openai';

const openai = new OpenAI({ apiKey: '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' });

// If you have access to Node fs we recommend using fs.createReadStream():
await openai.files.create({ file: fs.createReadStream('trainingData.jsonl'), purpose: 'fine-tune' });
