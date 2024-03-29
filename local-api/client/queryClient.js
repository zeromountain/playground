import { request } from 'graphql-request';

const URL = 'http://localhost:4000/api';

export const fetcher = (query, variables = {}) =>
  request(URL, query, variables);
export const QueryKeys = {
  MESSAGES: 'MESSAGES',
  MESSAGE: 'MESSAGE',
  USERS: 'USERS',
  USER: 'USER',
};
/*
get: axios.get(url[, config])
post: axios.post(url, data[,config])
put: axios.put(url, data[,config])
delete: axios.delete(url[,config])
*/
