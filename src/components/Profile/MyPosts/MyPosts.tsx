import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import AddPostForm, {AddPostValuesType} from "../AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
    let postsElement = props.posts.map((p) => (

        <Post key={Math.random()} message={p.message} likesCount={p.likesCount}/>

    ));

    const onSubmit = (formData: AddPostValuesType) => {
        props.addPost(formData.newPostText);
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <AddPostForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>{postsElement}</div>
        </div>
    );
}

const MyPostsMemorised = React.memo(MyPosts)

export default MyPostsMemorised
