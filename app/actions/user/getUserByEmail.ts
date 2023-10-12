
export const getUserIDByEmail  = async(email: string)=>{
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/user/email/${email}`);
    const data = await response.json();
    return data.user.id;
}


export const postsByAUser  = async(id: number)=>{
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/post/user/${id}`);
    const data = await response.json();
    return data.posts;
}