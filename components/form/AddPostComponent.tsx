"use client";
import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {getAllCategories} from "@/app/actions/category/getAllCategories";
import toast from "react-hot-toast";
import Loader from "@/components/Loader";
import {AiFillSave} from "react-icons/ai";
import ImageUpload from "@/components/form/ImageUpload";
import Image from "next/image";

interface  InitialDataProps{
    title: string;
    message: string;
    cate: string;
    imageSrc: string;
}

const initialData: InitialDataProps = {
    title: '',
    message:'',
    cate: '',
    imageSrc: ''
}

interface PostProps{
    title?:     string | null;
    message?:   string | null;
    cate?:      string | null;
    imageSrc?:     string | null;
}

const AddPostComponent = ({title, message, cate, imageSrc}: PostProps) => {
    const [isLoading, setIsLoading] = useState(false);//create a loading scene when button is pressed
    const [state, setState] = useState(initialData); //the state of the title,message

  //combo box details
    const [options, setOptions] = useState([]); //initial state of the combobox ie an array to store them
    const [selectedOption, setSelectedOption] = useState("");//the selected value of the combo box

    // const [file, setFile] = useState<File>(); //variables for the image
    // const [createObjectURL, setCreateObjectUrl] = useState(null);
    const router = useRouter();


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    }


    const setCustomValue = (id:any, value: any) => {
        setState((prevValues) => ({
            ...prevValues,
            [id] : value
        }));
    };
    // const handleImageChange = (event: any) => {
    //     if(event.target.files && event.target.files[0]){
    //         const i = event.arget.files[0];
    //         // setFile(event.target.files?.[0]);
    //         setFile(i);
    //         setCreateObjectUrl(URL.createObjectURL(i))
    //     }
    // }

    //populate all categories into the combo box
    useEffect(() => {
        try{
            setIsLoading(true);
            getAllCategories()
                .then((category) => {
                    setOptions(category)
                })
        }catch(error){
            toast.error("Error fetching Categories")
        }
        finally{
            setIsLoading(false);
        }
    }, []);

    function handleChange(event: ChangeEvent<HTMLInputElement> ){
        setState({ ...state, [event.target.name]: event.target.value } );
    }

    const addPost = async (event:FormEvent) => {
        event.preventDefault();
        // alert(state.title)
        // alert(state.message)
        // alert(selectedOption)
        // alert(file)
        try{
            if(!imageSrc) return;
            setIsLoading(true);
            const data = new FormData();
            data.set('title', state.title)
            data.set('message', state.message);
            data.set('category', selectedOption);
            data.set('imageSrc', state.imageSrc);

            const response = await fetch ('/api/post', {
                method: 'POST',
                body: data
            })
            if(!response.ok)
            {
                console.log("Error in adding post")
            }
            else{
                toast.success("Post Added Successfully!")
                router.push("/pages/dashboard");
            }
          }catch(error: any){
            console.log("POST ERROR: " + error);
          }finally{
            setIsLoading(false);
        }
    }

    return (
        <div>
            <div>
                <div>
                    {
                        isLoading &&  <Loader/>
                    }
                </div>
                <div className="ie bg-white px-6 py-24 sm:py-32 lg:px-8">

                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Add A New Post</h2>

                    </div>
                    <div className="mt-10 mx-auto w-full sm:max-w-sm">
                        {/*Add Content Here */}
                        <form onSubmit={addPost}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Choose Post Image?</span>
                                </label>
                                <div className={"w-[500px]"}>
                                    <ImageUpload value={state.imageSrc} onChange={(value) => setCustomValue("imageSrc",value)}
                                                 className={"input input-bordered  bg-slate-500  h-50 w-full max-w-xs hover:ring-2 hover:ring-blue-500\""}
                                    />
                                </div>
                                {/*<img src={createObjectURL} alt={"IT Trends"}/>*/}
                                {/*<input*/}
                                {/*    type={"file"} name={image}*/}
                                {/*    accept={"image/*"}*/}
                                {/*    onChange={handleImageChange}*/}
                                {/*    className="textarea textarea-bordered  bg-slate-500  h-50 w-full max-w-xs hover:ring-2 hover:ring-blue-500"*/}
                                {/*/>*/}
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">What is the title?</span>
                                </label>
                                <input
                                    name={title}
                                    value={state.title}
                                    onChange={handleChange}
                                    type="text"  placeholder="Enter Post Title"
                                    className="input input-secondary bg-slate-500 w-full max-w-xs hover:ring-2 hover:ring-blue-500" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">What is the Post?</span>
                                </label>
                                <textarea
                                    required
                                    value={state.message}
                                    onChange={handleChange}
                                    name={message}
                                    minLength={"10"}
                                    maxLength={"1000"}
                                    className="textarea textarea-bordered bg-slate-500  h-50 w-full max-w-xs hover:ring-2 hover:ring-blue-500" placeholder="Enter Post Body"></textarea>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Select Category for post?</span>
                                </label>
                                <select
                                    value={selectedOption}
                                    placeholder={"Enter a category"}
                                    name={cate}
                                    className={"select select-bordered bg-slate-500  h-50 w-full max-w-xs hover:ring-2 hover:ring-blue-500"}
                                    onChange={handleOptionChange}
                                >
                                    <option value={""}>Select a Category</option>
                                    {options.map((category) => <option key={category.id} value={category.id}>{category.title}</option>)}
                                </select>
                            </div>

                            <div className="form-control w-full max-w-xs mt-5">
                                <button type={"submit"} className={"btn btn-active hover:ring-2 hover:ring-blue-500 "}><AiFillSave size={20}/> Save Post</button>

                            </div>
                        </form>
                        {/*///Add Content Here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPostComponent;
