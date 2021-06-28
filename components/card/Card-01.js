import Image from 'next/image'
import Link from '@/components/Link'

const Card01 = ({ title, lessons }) => (
  <div className="max-w-[385px] py-16" data-analytics-section-engagement="name:trade in" data-progressive-image-loaded="">
					<div className="px-5 border">
						<div className="px-5">
							<h3 className="font-semibold text-2xl"><span data-tradein-product="ipadpro-tradein" data-product-template="Get up to ${credit.display.smart}&nbsp;toward a new&nbsp;iPad&nbsp;Pro." data-pricing-loaded="">Get up to $535&nbsp;toward a new&nbsp;iPad&nbsp;Pro.</span></h3>
							<p className="font-normal leading-6">With Apple Trade In, just give us your eligible iPad and get credit for a new one. It’s good for you and&nbsp;the&nbsp;planet.<sup className="footnote footnote-number"><a href="#footnote-3" aria-label="Footnote 2">2</a></sup></p>
							<p className="link-wrap">
								<a href="/us/shop/goto/trade_in#tradeup-app" data-analytics-title="learn more about trade in" aria-label="Learn more about Apple Trade In" className="icon-wrapper"><span className="icon-copy">Learn more</span><span className="icon icon-after more"></span></a> </p>
						</div>
					</div>
					<figure className="promo-image"></figure>
				</div>
)

export default Card01

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
