class ChatService {

  constructor() {
    this.answer = []
    this.chat();
  }


  async chat(message) {

    //Initialize openai
    const dotenv = require('dotenv').config();

    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      organization: process.env.OPENAI_API_ORG_KEY,
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);


    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${message}`,
      max_tokens: 4000,
      temperature: 0
    });
    // console.log(response.data.choices[0].text)


    this.answer = response.data.choices
    return this.answer
  }

}

module.exports = ChatService;
