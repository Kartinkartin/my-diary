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
const headersWithAuthorizeFn = () => ({
  "Content-Type": "application/json",
  authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
});

export const refreshAndSet = (method, contextSetter) => {
  method().then(contextSetter);
};

export const getPosts = (page = 1) => {
  return fetch(`${URL}/posts/`, {
    method: "GET",
    headers: headersWithContentType,
  }).then(checkResponse);
};

export const getCard = (id) => {
  return fetch(`${URL}/wishes/${id}`, {
    method: "GET",
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);
};

export const createCard = (wish) => {
  return fetch(`${URL}/wishes`, {
    method: "POST",
    headers: headersWithAuthorizeFn(),
    body: JSON.stringify(wish),
  }).then(checkResponse);
};
