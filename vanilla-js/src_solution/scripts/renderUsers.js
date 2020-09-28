import renderPosts from "./renderPosts";
// import { userSection } from "./DOMElementPointers";

export function renderUsers(users) {
  const modalBackground = document.querySelector(".modal-background");
  modalBackground.onclick = (event) => {
    if (event.target === event.currentTarget)
      modalBackground.classList.toggle("hidden");
  };

  const userSection = document.querySelector("#users");
  const userDivs = users
    .sort(({ username: username1 }, { username: username2 }) =>
      username1.toUpperCase() > username2.toUpperCase() ? 1 : -1
    )
    .map((user) => {
      const {
        username,
        id,
        address: { city },
      } = user;
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `<p>${username}</p><p>(${city})</p>`;
      userDiv.onclick = renderPosts(id);
      return userDiv;
    });
  userSection.append(...userDivs);
}
