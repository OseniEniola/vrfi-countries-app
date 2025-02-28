import axios from 'axios';
import { isEmpty } from 'lodash';

import { BASE_URL } from '@/utils/config';

export const baseUrl = BASE_URL;

export const settings = {
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
    charset: 'utf-8',
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'accept-encoding': 'gzip, deflate, br',
    // 'sec-fetch-mode': 'cors',
    // 'sec-fetch-site': 'same-origin',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  }
};

const instance = axios.create(settings);

export const bearer = `Bearer `;
const token = "";

if (token != null && !isEmpty(token)) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}



const onResponseSuccess = (response: any) => {
  return Promise.resolve(response);
};

const onResponseFail = async (error: any) => {
  const originalRequest = error.config;

  if (!error.response) {
    console.error('Network error or request was canceled:', error.message);

    return Promise.reject({ message: 'Network error or request canceled' });
  }

  if (error?.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    try {

      instance.defaults.headers['Authorization'] = `Bearer `;
      instance.defaults.headers.common.Authorization = `Bearer `;

      originalRequest.headers['Authorization'] = `Bearer `;

      return instance(originalRequest);
    } catch (err) {
      console.error('Refresh token error:', err);
      // Handle logout or redirection to login
      //logOutUser();
    }
  }


  const status = error.response.status;
  let errorMessage = 'An error occurred. Please try again later.';
  //

  if (status >= 400 && status < 500) {
    errorMessage = 'Request failed. Please check your input.';
  } else if (status >= 500) {
    errorMessage = 'Server error. Please try again later.';
  }

  // return Promise.reject(error);
  return Promise.reject({ message: error.response?.data, details: errorMessage });
  // return Promise.reject(error?.response?.data);
};

const getUrl = (url: string): string => `${url}`;

instance.interceptors.response.use(onResponseSuccess, onResponseFail);

export default {
  setToken(token: string) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  async getUrl(url: string, request: any) {
    return instance.get(url, request);
  },
  async get(url: string, request?: any) {
    return await instance.get(getUrl(url), request);
  },
  async post(url: string, request?: any) {
    return await instance.post(getUrl(url), request);
  },
  async put(url: string, request: any) {
    return await instance.put(getUrl(url), request);
  },
  async patch(url: string, request: any) {
    return await instance.patch(getUrl(url), request);
  },
  async delete(url: string, request: any) {
    return await instance.delete(getUrl(url), request);
  }
};
