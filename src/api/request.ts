import axios, { AxiosError } from 'axios';
import { api } from '../constants';
import validateTitle from '../funcs/validateTitle';

const instance = axios.create({
  baseURL: api.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 123'
  }
});

instance.interceptors.request.use((req) => {
  if (
    [
      /^\/board(\/[a-z0-9]+)?\/?$/i,
      /^\/board\/[a-z0-9]+\/list(\/[a-z0-9]+)?\/?$/i,
      /^\/board\/[a-z0-9]+\/card(\/[a-z0-9]+)?\/?$/i
    ].some((exp) => req.url?.match(exp) || false)
  ) {
    const title = req.data?.title;
    const isTitleValid = validateTitle(title || '');

    let temp;
    switch (req.method) {
      case 'post':
        temp = isTitleValid;
        break;
      case 'put':
        temp = title ? isTitleValid : true;
        break;
      default:
        temp = true;
        break;
    }
    if (!temp) throw new AxiosError('Title contains illegal characters');
  }
  return req;
});
instance.interceptors.response.use((res) => res.data);

export default instance;
