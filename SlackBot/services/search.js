const { axiosConfigInstance } = require('../config/axiosConfig');

const searchData = async (query) => {
  const { data } = await axiosConfigInstance.post('/search', {
    query,
  });
  return data;
};

module.exports = { searchData };
