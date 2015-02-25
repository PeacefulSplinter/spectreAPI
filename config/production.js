module.exports = {
  mongo: {
    url: process.env.MONGOLAB_URI
  },
  productionURL: process.env.PRODUCTION_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  Mailchimp: {
  	API_KEY: MAILCHIMP_API_KEY
  }
};
