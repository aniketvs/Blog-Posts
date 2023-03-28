import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
export default function Blogs() {
    const { loading, posts } = useContext(AppContext);
 
    return (
        <>
            <div className=''>
            {
                loading ? (<Spinner />)
                    : (
                        posts.length === 0 ? <div>
                            no post found
                        </div> :
                            <div className='flex flex-col mb-10 mt-10 justify-center pt-6 mx-auto w-11/12 max-w-[670px]'>
                                {
                                    posts.map((post) => {
                                        return (<div key={post.id} className="mt-3 flex flex-col justify-center mx-auto ">
                                            <p className='font-bold text-xs'>{post.title}</p>
                                            <p className='text-[10px] mt-2'>
                                                By <span className='italic underline'>{post.author}</span> on
                                                <span>{posts.category}</span>
                                            </p>
                                            <p className='text-[10px]'>
                                                posted on {posts.date}
                                            </p>
                                            <p className='text-[11px] mb-[10px] mt-[10px]'>
                                                {post.content}
                                            </p>
                                            <div className='flex gap-3'>
                                                {post.tags.map((tag,index) => {
                                                    return <span key={index} className=" text-blue-500 cursor-pointer underline font-bold text-[8px]  ">#{tag}</span>
                                                })}
                                            </div>
                                        </div>);
                                    })
                                }
                            </div>
                    )

            }
            </div>
        </>
    )
}
