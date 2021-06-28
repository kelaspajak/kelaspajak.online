
const Banner = ({ title, lessons }) => (
	<div class="bg-yellow-300">
	<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
	  <div class="flex items-center justify-between flex-wrap">
		<div class="w-0 flex-1 flex items-center">
		  <span class="flex p-2 rounded-lg bg-yellow-500">
			<svg class="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
			</svg>
		  </span>
		  <p class="ml-3 font-medium text-black truncate">
			<span class="md:hidden">
			  We announced a new product!
			</span>
			<span class="hidden md:inline">
			  Big news! We're excited to announce a brand new product.
			</span>
		  </p>
		</div>
		<div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
		  <a href="https://www.blibli.com/p/materi-perpajakan-one-drive-pajak-resources-microsoft-onedrive/ps--PAR-70030-00008" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-red-50">
			Beli Produk
		  </a>
		</div>
		{/* <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
		  <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
			<span class="sr-only">Dismiss</span>
			<svg class="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		  </button>
		</div> */}
	  </div>
	</div>
  </div>
)

export default Banner

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