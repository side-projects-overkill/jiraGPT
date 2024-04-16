const { axiosConfigInstance } = require("../config/axiosConfig");

const groomJira = async (query) => {
  const { data } = await axiosConfigInstance.post("/groom", {
    query,
  });
  return data;
};

module.exports = { groomJira };
