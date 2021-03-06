import profileReducer, {actions} from "./profile-reducer";
import {ProfileType} from "../types/types";


let state = {
    // 1 test data
    posts: [
        {id: 1, message: "It's my first post", likesCount: 15},
        {id: 2, message: "Hello, how are you?", likesCount: 45},
        {id: 3, message: "Hello, how are you?", likesCount: 45},
        {id: 4, message: "Hello, how are you?", likesCount: 45},
    ],
    profile: null,
    status: "",
};

it('length of posts should be incremented', () => {
    let action = actions.addPostActionCreator("it - gosu");

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.posts.length).toBe(5);
})

it('message of new post should be correct', () => {
    let action = actions.addPostActionCreator("it - gosu");

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.posts[4].message).toBe("it - gosu");
})
it('after deleting the length of messages should be decremented', () => {
    // 1.test data
    let action = actions.deletePost(1);

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.posts.length).toBe(3);
})
it(`after deleting the length shouldn't be decremented if it is incorrect`, () => {
    let action = actions.deletePost(10000);

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.posts.length).toBe(4);
})

