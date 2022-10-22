const axios = require('axios');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

const app = async (req, res) => {


  const {url} = req;
  const path = `${baseUrl}/${url}.png`;

  try {
    const response = await axios.get(path, {responseType: 'arraybuffer'})
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.send(Buffer.from(response.data, 'binary'));
  } catch (e) {
    res.send(e.message);
  }

}

module.exports = {
  app,
}
