const { axiosConfigInstance } = require("../config/axiosConfig");

const createJira = async (query) => {
  const { data } = await axiosConfigInstance.post("/jira", {
    query,
  });
  return data;
};

module.exports = { createJira };
