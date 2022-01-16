import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

export default fetcher;

/*
get: axios.get(url[, config])
post: axios.post(url, data[,config])
put: axios.put(url, data[,config])
delete: axios.delete(url[,config])
*/
