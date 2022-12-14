import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;