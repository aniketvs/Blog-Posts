import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Pagination() {
    const {page,totalPage,handelpagedata}=useContext(AppContext);

    return (
        <>
            <div className='w-full bg-white border-t-2 flex justify-center items-center fixed bottom-0 bg-white'>
                <div className=' mx-w-[670px] w-11/12 flex flex-row justify-between'>
                <div className='flex gap-x-3'>
                    {   page<1? "":
                        <button className='m-2 border-2 p-1 rounded-sm px-3 '  onClick={()=>handelpagedata(page-1)}>Previous</button>
                    }
                    {
                        page<totalPage &&
                        (
                            <button  className='m-2 border-2 p-1 rounded-sm px-3 '  onClick={()=>handelpagedata(page+1)}>
                                Next
                            </button>
                        )
                    }
                    </div>
                    <p className='font-bold text-sm mt-3'>
                        page {page} of {totalPage}
                    </p>
                    
                </div>
            </div>
        </>
    )
}
