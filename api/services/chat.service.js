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

    const maxTokenString = process.env.OPENAI_MAX_TOKENS;
    const maxTokenInt = parseInt(maxTokenString);

    const temperatureString = process.env.OPENAI_TEMPERATURE;
    const temperatureInt = parseInt(temperatureString);

    const response = await openai.createCompletion({
      model: process.env.OPENAI_MODEL,
      prompt: `${message}`,
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS),
      temperature: parseInt(process.env.OPENAI_TEMPERATURE)
    })

    // const response = await openai.createCompletion({
    //   model: 'text-davinci-003',
    //   prompt: `${message}`,
    //   max_tokens: 4000,
    //   temperature: 0
    // });


    // console.log(response.data.choices[0].text)


    this.answer = response.data.choices
    return this.answer
  }

}

module.exports = ChatService;
