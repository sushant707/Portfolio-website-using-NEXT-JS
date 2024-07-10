import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Services() {
  return (
    <div id="services" className="flex items-center justify-center h-screen p-10 md:p-20 lg:p-40 bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map((item: any, index: number) => {
          return <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow scale-90 hover:scale-100 transition-all cursor-pointer">
            <div className='flex items-center justify-center'>
              <img className="rounded-t-lg h-60 w-full object-cover sm:h-72 lg:h-80" src={item.image} alt={item.name} />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900">{item.name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

const services = [
  {
    name: "Front-end development",
    image: "https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg",
    description: "Front-end developers design and implement the visual elements and user interactions of websites and web applications using HTML, CSS, and JavaScript."
  },
  {
    name: "Web Application development",
    image: "https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg",
    description: "Develop Web Applications using React, MERN, Node, Express"
  },
  // {
  //   name: "MVP Products",
  //   image: "https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg",
  //   description: "Build Fast MVP Products"
  // },
]
