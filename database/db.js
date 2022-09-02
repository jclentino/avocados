import data from './data';

const Database = {};

Database.getAll = async () => {
  const formatArray = Object.values(data);
  await randomDelay();
  return formatArray;
};

Database.getById = async (id) => {
  const entry = data[id];
  await randomDelay();
  return entry;
};

const randomDelay = () => {
  return new Promise((res) => {
    const delay = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(res, delay);
  });
};

export default Database;