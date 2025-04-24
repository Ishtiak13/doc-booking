import React from 'react';
import { TbCalendarPlus } from 'react-icons/tb';
import { useLoaderData } from 'react-router';

const Blog = () => {
  const data = useLoaderData()
    return (
        <div>
          <title>Phudu | Blogs</title>
          <div className='text-center my-10'>
            <h2 className='text-[40px] font-extrabold'>Blogs</h2>
            <p>Let's explore some basic concept that will make you a good developer</p>
            </div>
            <div>
              {data.map(question => <div key={question.id} className='bg-white p-10 rounded-2xl mb-6'> 
                <h3 className='text-2xl font-bold mb-4'>{question.question}</h3>
                <hr className='border border-dashed border-black/20' />
                <p className='font-secondary my-4'><span className='text-blue-500'>Answer: </span><br />{question.answer}</p>
                <hr className='border border-dashed border-black/20' />
                <p className='flex items-center gap-2 mt-4 text-black/60'><TbCalendarPlus /> Added at {question.addedDate}</p>
              </div>)}
            </div>
        </div>
    );
};

export default Blog;