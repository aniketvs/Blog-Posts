import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import Header from './Components/Header'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import '../src/App.css'
export default function App() {
  const {fetchBlogPosts}=useContext(AppContext)
  useEffect(()=>{
    fetchBlogPosts();
  },[])
  return (
    <>
      <Header/>
      <Blogs/>
      <Pagination/>
    </>
  );
}
