import React from 'react';

const Profile = async({params}) => {
    const perPage = 2;
    const {pagination } = parms;
    const response = await fetch(`localhost:3000/api/post/user/1?limit=${perPage}&skip=${(pagination - 1) * perPage}`);
    const {posts} = await response.json();
    return (
        <div>
            {
                posts.map((post) => (
                    <p key={post.title}>{post.title}</p>
                ))
            }
        </div>
    );
};

export default Profile;
