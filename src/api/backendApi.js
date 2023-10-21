const { default: axios } = require("axios");

const API_URL = process.env.REACT_APP_HEROKU_PRODUCTION;
// const API_URL = process.env.REACT_APP_LOCAL_HOST_FOR_TESTING;
export const sendEmail = (order, type) => {
  return axios.post(`${API_URL}emails/sendemail`, {
    order,
    type,
  });
};
