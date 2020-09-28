## Running the Project

After installing dependencies, the following commands are available:

- To run the development environment (webpacka and webpack-dev-server with live updates to JS and SCSS files), run `npm run start`
- To run webpack and watch for changes without a live server to see changes, run `npm run webpack:watch`
- To run the tests once, run `npm run test`
- To run the tests and watch for changes, run `npm run test:watch`

### Restraints

- this assessment should be completed using ONLY Vanilla JavaScript.
- Please do not edit the HTML or SCSS files, you should only need to use JavaScript to complete the project

## Instructions

- make sure to review the HTML provided before started the DOM manipulation portion of the project

### API Calls

- In `/src/api/utils.js` you should write and `export` 3 functions called `getAllUsers`, `getUserPosts` and `getPostComments`
- `getAllUsers` should fetch all users from https://jsonplaceholder.typicode.com/users and return them as an array of user objects
- `getUserPosts` should take a userId as a parameter, fetch all of that user's posts from [https://jsonplaceholder.typicode.com/posts?userId=\<userId\>](https://jsonplaceholder.typicode.com/posts?userId=), and return them as an array of post objects
- `getPostComments` should take a postId as a parameter, fetch all of that post's comments from [https://jsonplaceholder.typicode.com/posts/\<postId\>/comments](https://jsonplaceholder.typicode.com/posts//comments) and return them as an array of comment objects

### Users, Posts, and Comments

- All JavaScript intended to edit the DOM or implement user interaction should be called from inside the `main()` function in `/src/index.js`

- Once the DOM is loaded, the project should render each user inside of the `section#user` HTML element.
- It should list each user's username and city inside its own `div`
- It should list each user alphabetically by username

---

- Once a user is clicked, that user's posts should be rendered inside of the `section#posts` HTML element
- It should render the each post's title and body inside of its own `div` element
- It should render the correct user's posts and only the correct user's posts

---

- Once a post is clicked, the `.hidden` class of the `div.modal-background` HTML element should be removed
- The post's comments should be rendered inside of the `section.comments` HTML element
- Each comment should be rendered with its own div containing the comment's name, email, and body
- When a user clicks outside of the `section.comments-modal` HTML element, the modal should be closed
