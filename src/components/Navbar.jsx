import React from 'react'

const Navbar = () => {


    
    return (
        <nav  className='bg-[#441151] text-white '>
             
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-[#b593f5] text-2xl">
                    <span className='text-white'> &lt;</span>
                   
                    <span>Pass</span><span className='text-white'>OP/&gt;</span>
                  
                    
                    </div>
                {/* <ul>
                    <li className='flex gap-4 '>
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='#'>About</a>
                        <a className='hover:font-bold' href='#'>Contact</a>
                    </li>
                </ul> */}
                <button className='text-white  my-5 mx-2 rounded-full flex  justify-between items-center  '> 
                    <img className=' overflow-hidden rounded-full  w-10 p-1' src="/icons/img.jpg" alt="github logo" />
                    
                    
                </button>
            </div>
        </nav>
    )
}

export default Navbar