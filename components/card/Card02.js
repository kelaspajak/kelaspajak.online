export default function Card02({ title, description }) {
  return (
    <div className="p-4 lg:w-1/2 md:w-full ">
      <div className="flex border-1 h-96 bg-white border-grayssss-200 border-opacityssss-50 p-8 sm:flex-row flex-col">
        <div className="flex-grow content-evenly">
          <h2 className="text-gray-900 text-4xl title-font font-semibold mb-3 text-center">
            {title}
          </h2>
          <p className="text-gray-900 leading-snug text-xl text-center font-medium">{description}</p>
          {/* <a className="mt-3 text-blue-500 inline-flex items-center text-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
}
