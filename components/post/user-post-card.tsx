import {useSession} from "next-auth/react";
import {getUserIDByEmail} from "@/app/actions/user/getUserByEmail";
import {useInView} from "react-intersection-observer";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useEffect} from "react";


type PostQueryParams = {
    take?: number;
    lastCursor?: string;
};

type PostsType = {
    title: string;
    message:string;
    image: string;
    createdAt: string;
};


const UserPosCard = () => {
    const {data: session} = useSession();
    const getUserIds = await getUserIDByEmail(session?.user?.email);

    const allUserPosts = async({take, lastCursor }: PostQueryParams) => {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/post/user/${getUserIds}?take=${take}&lastCursor=${lastCursor}`);
        return response.data;
    };

    const {ref, inView} = useInView();

    //useInfiniteQuery is a hook that accept a queryFn and queryKey and returs
    const {
        data,
        error,
        isLoading,
        hasNextPage,
        fetchNextPage,
        isSuccess,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryFn: ({ pageParam = ""}) =>
            allUserPosts({take: 2, lastCursor: pageParam}),
        queryKey: ["posts"],
        //getNextPageParam is used to get the cursor of the last element in the  current
        //page which is then used as the page Param in the queryFn
        getNextPageParam: (lastPage) => {
            return lastPage?.metaData.lastCursor;
        }
    });

    useEffect(() => {
        //if the last element is in view and there is a next page, fetch the next page
        if(inView && hasNextPage) fetchNextPage();
    },[hasNextPage, inView, fetchNextPage]);
    if(error as any)
        return(
            <div className={"mt-10"}>
                {"An error has occured: " + (error as any).message}
            </div>
        )

    console.log("data: ", data);

    return(
        <div>
            ok
        </div>
    )
}