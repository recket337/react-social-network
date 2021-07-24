import { renderEntireTree } from "../render";

export let state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'fewe', likesCount: 11},
            { id: 2, message: 'fewe', likesCount: 11},
            { id: 3, message: 'fewe', likesCount: 11},
        ]
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Andrew'},
            { id: 2, name: 'Dick'},
            { id: 3, name: 'John'},
            { id: 4, name: 'Jason'},
        ],
        messagesData: [
            { id: 1, message: 'fewe'},
            { id: 2, message: 'fewe'},
            { id: 3, message: 'fewe'},
            { id: 4, message: 'fewe'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: state.profilePage.postsData.length + 1,
        message: postMessage,
        likesCount: 0,
    }
    state.profilePage.postsData.push(newPost);
    renderEntireTree(state);
}
    