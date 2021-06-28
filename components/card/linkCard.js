import Link from 'next/link';
import { kebabCase } from '@/lib/utils';
import titleStyle from '../../utils/title-style';

const Tag = ({ text }) => {
  return (
    <Link href={`/direktori/${kebabCase(text)}`}>
      <a className="flex items-start rounded-lg border border-teal-400 px-5 py-4 text-lg leading-6 font-medium text-gray-800 hover:bg-gray-800 hover:text-gray-200 transition ease-in-out duration-150">
      <svg class="mr-3 h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            {titleStyle(text)}
            <div class="ml-auto mt-0.5 pl-4">
              <svg class="h-5 w-5 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
      </a>
    </Link>
  )
}

export default Tag