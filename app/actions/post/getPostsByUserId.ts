
export const getPostByUserId = async (userId: number) => {
    const response = await fetch(`/api/post/user/${userId}`);
    const data = await response.json;
    return data.posts;
}