
"use client";  

import React, { useState, ChangeEvent, FormEvent } from 'react';  
import { Button } from '../ui/button';  

const CommentSection: React.FC = () => {  
  const [comments, setComments] = useState<string[]>([]);  
  const [commentText, setCommentText] = useState<string>('');  
  const [isEditing, setIsEditing] = useState<boolean>(false);  
  const [editIndex, setEditIndex] = useState<number | null>(null);  
  const [isVisible, setIsVisible] = useState<boolean>(false); // State for visibility  

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {  
    e.preventDefault();  
    if (commentText.trim() !== '') {  
      if (isEditing && editIndex !== null) {  
        const updatedComments = comments.map((comment, index) =>  
          index === editIndex ? commentText : comment  
        );  
        setComments(updatedComments);  
        setIsEditing(false);  
        setEditIndex(null);  
      } else {  
        setComments([...comments, commentText]);  
      }  
      setCommentText('');  
    }  
  };  

  const handleEdit = (index: number) => {  
    setCommentText(comments[index]);  
    setIsEditing(true);  
    setEditIndex(index);   
  };  

  const handleDelete = (index: number) => {  
    const updatedComments = comments.filter((_, i) => i !== index);  
    setComments(updatedComments);  
  };  

  const toggleVisibility = () => {  
    setIsVisible((prev) => !prev); // Toggle visibility  
  };  

  return (  
    <div className="comment-section">   
      <Button className='md:w-40 md:h-10 w-20 h-8 ' variant={'destructive'} onClick={toggleVisibility}>  
        {isVisible ? 'Hide ' : 'Comments'} {/* Button text */}  
      </Button>  
      {isVisible && ( // Conditional rendering  
        <div className=''>  
          <h2 className="font-bold mt-2 -ml-28 xl:-ml-28 ">Comments</h2>  
          <p className='text-sm -ml-28 xl:-ml-28'>Total Comments: {comments.length}</p> {/* Comment counter */}  
          <div className="comments-list">  
            {comments.length === 0 ? (  
              <p className='text-sm -ml-28 xl:-ml-28'>No comments yet. Be the first to comment!</p>  
            ) : (  
              comments.map((comment, index) => (  
                <div key={index} className="comment flex flex-col justify-between items-center">   
                  <p className='w-36 md:w-[300px] lg:w-[400px] h-auto p-2 border rounded-sm shadow-sm  
                -ml-60 xl:-ml-48 bg-red-300 text-sm'>  
                    {comment}  
                  </p>  
                  <div className='flex flex-row gap-2 md:gap-5 p-2'>  
                    <Button variant='destructive' className='text-white hover:text-slate-300 w-12 md:w-20 h-5'   
                    onClick={() => handleEdit(index)}>Edit</Button>  
                    <Button variant='destructive' className='text-white border w-12 md:w-20 h-5 hover:text-slate-300'   
                    onClick={() => handleDelete(index)}>Delete</Button>  
                  </div>  
                </div>  
              ))  
            )}  
          </div>  
          
          <form onSubmit={handleCommentSubmit} className="flex flex-col mt-2">  
            <textarea  
              className="border p-2 w-36 md:w-[300px] lg:w-[500px] xl:-ml-28"  
              value={commentText}  
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCommentText(e.target.value)}  
              placeholder="Add a comment..."   
            />  
            <Button variant={'destructive'} className='w-20 h-8 md:w-40 md:h-10 xl:-ml-28 my-2 lg:my-4 2xl:my-8'>  
              {isEditing ? 'Update Comment' : 'Submit'}  
            </Button>   
          </form>  
        </div>  
      )}  
    </div>  
  );  
}  

export default CommentSection;


