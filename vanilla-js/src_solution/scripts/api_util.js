function getRequest(route) {
  return async () => {
    const response = await fetch(route);
    const jsonRes = await response.json();
    return jsonRes;
  };
}

export const getAllUsers = getRequest(
  "https://jsonplaceholder.typicode.com/users"
);
export const getUserPosts = (userId) =>
  getRequest(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)();

export const getPostComments = (postId) =>
  getRequest(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)();
