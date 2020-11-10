import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);


let AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name="newPostText"
                       validate={[required, maxLength10]}
                       placeholder={"Post message"}
                />
            </div>
            <div>
                <button>Send post</button>
            </div>
        </form>
    )
}

const AddNewPostFormWrapper = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo(props => {
    let postsElement = props.posts.map((p) => (

        <Post key={Math.random()} message={p.message} likesCount={p.likesCount}/>

    ));

    const onSubmit = (formData) => {
        props.addPost(formData.newPostText);
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <AddNewPostFormWrapper onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>{postsElement}</div>
        </div>
    );
});

export default MyPosts;
