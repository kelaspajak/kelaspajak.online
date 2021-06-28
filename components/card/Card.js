import Image from 'next/image'
import Link from '@/components/Link'

const Card = ({ title, lessons }) => (
  <div className="border-t border-gray-300 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
    <h5 className="mb-2 text-2xl font-semibold leading-none md:pl-2">{title}</h5>
    <div className="">
      <ul className="grid gap-8 row-gap-3 lg:grid-cols-2 mt-12">
        {lessons.map((lesson) => {
          return (
            <li className="flex items-start font-normal">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
              {lesson}
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default Card

// <div className="p-4">
//     <h2 className="text-lg font-semibold text-black">{title}</h2>
// {
//   lessons.map((lesson) => {
//     return (
//       <div key={lesson}>
//         <p className="mt-3 text-base text-blue-gray-700">{lesson}</p>
//       </div>
//     )
//   })
// }
//   </div>
