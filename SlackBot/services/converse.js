const { axiosConfigInstance } = require('../config/axiosConfig');

const converse = async (query, token) => {
  const { data } = await axiosConfigInstance.post('/converse', {
    query,
    token,
  });
  return data;
};

module.exports = { converse };
