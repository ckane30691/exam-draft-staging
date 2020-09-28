import { getPostComments } from "./api_util";

export function renderComments(postId) {
  return (event) => {
    const modalBackground = document.querySelector(".modal-background");
    const commentSection = document.querySelector(".comments");
    const commentsModal = document.querySelector(".comments-modal");

    getPostComments(postId).then((comments) => {
      commentSection.innerHTML = ``;
      modalBackground.classList.toggle("hidden");
      const commentDivs = comments.map((comment) => {
        const { name, email, body } = comment;
        const commentDiv = document.createElement("div");
        commentDiv.innerHTML = `
        <h3>${name}</h3>
        <p>from: ${email}</p>
        <p>${body}</p>
        `;
        return commentDiv;
      });
      commentSection.append(...commentDivs);
    });
  };
}
