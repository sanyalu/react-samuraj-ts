import {ActionTypes, ProfilePageType} from "./store";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), postText: 'Hi, how are you?', likesCount: 5},
        {id: v1(), postText: `It's my first post.`, likesCount: 10},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            state.posts.unshift({
                id: v1(),
                postText: state.newPostText,
                likesCount: 0
            })
            state.newPostText = ''
            return state;
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.payload
            return state;
        default:
            return state;
    }
}


export const addPostAC = () => ({type: ADD_POST} as const)
export const changeNewPostTextAC = (newPostText: string) => ({type: CHANGE_NEW_POST_TEXT, payload: newPostText} as const)


export default profileReducer;