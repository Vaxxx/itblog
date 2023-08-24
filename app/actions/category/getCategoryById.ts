
type RequestBody = {
    title: string;
    id: number;
}


export  async function getCategoryById(id: number){
    const response = await fetch(`/api/category/${id}`);
    const data = await response.json();
    return data.category;
}

export const  updateCategoryById = async(body: RequestBody) => {
    const response = fetch(`/api/category/${body.id}`, {
        method: "PUT",
        body: JSON.stringify({title: body.title}),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}