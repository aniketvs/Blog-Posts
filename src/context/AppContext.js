import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl'
export  const AppContext = createContext();




export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPage, setTotalPage] = useState(null);
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        try {
            let result = await fetch(url);
            result = await result.json();
            console.warn(result);
            setPage(result.page);
            setPosts(result.posts);
            setTotalPage(result.totalPages);

        } catch (error) {
            console.log(error);
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);
    }

   
    function handelpagedata(page) {
        setPage(page);
        fetchBlogPosts(page);
    }
    const value = {
        posts, setPosts,
        loading, setLoading,
        page, setPage,
        totalPage, setTotalPage,
        handelpagedata,
        fetchBlogPosts
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}