import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hello!!!", likesCount: 12 },
      { id: 2, message: "Hiiiii", likesCount: 19 },
      { id: 3, message: "New Car???", likesCount: 102 },
      { id: 4, message: "What's up man", likesCount: 666 },
    ],
    newPostText: "some text..."
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Emin" },
      { id: 2, name: "Yusif" },
      { id: 3, name: "Mamed" },
      { id: 4, name: "Rasim" },
      { id: 5, name: "Vasif" },
    ],

    messages: [
      { id: 1, message: "How are you?" },
      { id: 2, message: "Whats up man?" },
      { id: 3, message: "How old are you?" },
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree (state);
}

export default state;