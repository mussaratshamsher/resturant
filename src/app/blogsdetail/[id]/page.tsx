import CommentSection from "@/components/themes/CommentSection";
import LikeBlogs from "@/components/themes/LikeBlogs";
import Image from "next/image";
import Link from "next/link";

interface IBlogs{
    id:string, title: string, image:string, description: string,
}
const blogsData:IBlogs[] = [
    { id:'1', title: 'Lorem ipsum dolor sit', image: '/img/blog1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi exercitationem unde eos accusantium doloremque fugiat omnis soluta, eaque distinctio iure eveniet quibusdam adipisci provident quod.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi.' 
    },
    { id:'2', title: 'Lorem ipsum dolor sit', image: '/img/blog2.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi exercitationem unde eos accusantium doloremque fugiat omnis soluta, eaque distinctio iure eveniet quibusdam adipisci provident quod.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi' 

    },
    { id:'3', title: 'Lorem ipsum dolor sit', image: '/img/blog3.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi exercitationem unde eos accusantium doloremque fugiat omnis soluta, eaque distinctio iure eveniet quibusdam adipisci provident quod.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi' 

    },
    { id:'4', title: 'Lorem ipsum dolor sit', image: '/img/blog4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi exercitationem unde eos accusantium doloremque fugiat omnis soluta, eaque distinctio iure eveniet quibusdam adipisci provident quod.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi' 
    },
    { id:'5', title: 'Lorem ipsum dolor sit', image: '/img/blog5.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi exercitationem unde eos accusantium doloremque fugiat omnis soluta, eaque distinctio iure eveniet quibusdam adipisci provident quod.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt error voluptatem placeat commodi' 
    }
]
interface Prop {
    params: {id: string}
}
const details: React.FC<Prop> = ({params}) => {
    const{id} = params; 
    const blg = blogsData.find((blog) => blog.id ===id)
    if(!blg){
        return(
            <div className="p-20 flex flex-col mt-20 justify-center items-center"> 
          <h1 className="text-2xl underline">404 Product Not Found </h1> <br />
          <div>
           <button className="w-40 p-2 bg-black rounded-tl-full text-white hover:scale-95">
           <Link href="/">Back to Home</Link></button>
           <button className="w-40 p-2 bg-black rounded-tr-full text-white hover:scale-95">
            <Link href="/items"> Show Items</Link></button> 
        </div>
       </div>
        )}
        if(blg)
            return(
            <div className="ml-5 lg:ml-10 mr-5 md:ml-10 lg:mr-10 xl:mr-40 xl:ml-40 mt-2 2xl:ml-96 2xl:mr-96 md:mt-5 lg:mt-10 2xl:mt-16">
        <h1 className='my-2 md:my-5 2xl:my-10 text-center text-md md:text-2xl lg:text-4xl 2xl:text-8xl font-bold' id="clr2">Read detailed Blog</h1>                   
     <div className="grid grid-cols-4 grid-row-2 gap-3 md:gap-5 ">
          <Image src={blg.image} alt="" width={500} height={500} 
          className=' col-span-2 xl:w-[700px] xl:h-[300px] 2xl:w-[900px] 2xl:h-[400px] hover:scale-90 transition-all ease-linear'/>
          <Image src={blg.image} alt="" width={500} height={500} 
          className=' xl:ml-10 2xl:ml-20 mt-5 xl:mt-3 xl:w-48 xl:h-32 2xl:w-96 2xl:h-52 shadow-gray-400 shadow-lg hover:animate-bounce transition-all ease-linear'/>          
          <Image src={blg.image} alt="" width={500} height={500} 
          className='mt-16 md:mt-28 lg:mt-40 xl:mt-36 xl:w-60 xl:h-40 2xl:w-[350px] 2xl:h-80 2xl:ml-10 shadow-2xl shadow-gray-400 hover:scale-110 transition-all ease-linear'/>
         </div>
         <div className="flex flex-col md:flex-row md:gap-10 lg:gap-14 2xl:gap-28">
    <h1 className="text:sm lg:text-xl">Posted By: <b>Miller</b></h1>
    <h2 className="text:sm lg:text-xl">Post Date: 23/4/2024</h2>
    {/* Links  */}
<p className='flex gap-2 lg:gap-5 2xl:gap-10'>
  <i className='bx bxl-twitter p-1 hover:text-white' id="icon"></i>
<i className='bx bxl-pinterest p-1 hover:text-white' id="icon"></i>
 <i className='bx bxl-instagram p-1 hover:text-white' id="icon"></i>
 <i className='bx bxl-facebook p-1 hover:text-white' id="icon"></i>
 </p>
    </div>   
    <hr className="border-gray-400"/>
<h1 className='text-xl md:text-2xl lg:text-3xl 2xl:5xl p-1 md:p-2 lg:p-3 2xl:p-4 font-bold underline' id="clr2">{blg.title}</h1>
<h2 className='text-xs font-thin md:text-lg p-1 md:p-2 lg:p-3 2xl:p-4 indent-40 hyphens-auto whitespace-break-spaces'>{blg.description}</h2>
<div className='flex flex-row gap-2 md:gap-3 lg:gap-5 p-2'>
    <div><LikeBlogs /></div>
    <div> <CommentSection /></div>

</div>
            </div> 
)}
export default details