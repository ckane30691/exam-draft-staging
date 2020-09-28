import { getAllUsers } from "./scripts/api_util";
import { renderUsers } from "./scripts/renderUsers";
import "./styles/index.scss";

window.addEventListener("DOMContentLoaded", main);
export function main() {
  getAllUsers().then((users) => {
    renderUsers(users);
  });
}
