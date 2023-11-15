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

export const getPostsNewFirst = () => {
  return fetch(`${URL}/posts/new-first`, {
    method: "GET",
    headers: headersWithContentType,
  }).then(checkResponse);
};

export const getPostsOldFirst = () => {
  return fetch(`${URL}/posts/old-first`, {
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

export const markPost = (post) => {
  return fetch(`${URL}/posts/${post.id}`, {
    method: "PATCH",
    headers: headersWithContentType,
    body: JSON.stringify({important: post.important}),
  }).then(checkResponse);
}
