import { URL } from "./constants";

const checkResponse = (res) => {
  if (res.ok || res.created) {
    return res.json();
  }
  return res.json().then((err) => {
    return Promise.reject(err);
  });
};
const headersWithContentType = { "Content-Type": "application/json" };

export const refreshAndSet = (method, contextSetter) => {
  method().then(contextSetter);
};

export const getPosts = (page = 1) => {
  return fetch(`${URL}/posts/`, {
    method: "GET",
    headers: headersWithContentType,
  }).then(checkResponse);
};

export const createPost = (post) => {
  return fetch(`${URL}/posts`, {
    method: "POST",
    headers: headersWithContentType,
    body: JSON.stringify(post),
  }).then(checkResponse);
};
