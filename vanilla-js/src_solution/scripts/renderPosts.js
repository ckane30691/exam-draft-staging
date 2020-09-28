// import { postSection } from "./DOMElementPointers";
import { renderComments } from "./renderComments";
import { getUserPosts } from "./api_util";
export default function renderPosts(userId) {
  const postSection = document.querySelector("#posts");
  return (event) => {
    postSection.innerHTML = ``;
    postSection.classList.toggle("loading");
    getUserPosts(userId).then((posts) => {
      const postDivs = posts.map((post) => {
        const { title, body, id } = post;
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `<h3>${title}</h3> <p>${body}</p>`;
        postDiv.onclick = renderComments(id);
        return postDiv;
      });
      postSection.classList.toggle("loading");
      postSection.append(...postDivs);
      document
        .querySelector(".js-view-comments-instruction")
        .classList.remove("hidden");
    });
  };
}
