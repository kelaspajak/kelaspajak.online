import Container from '../components/Container';
import Card02 from '@/components/card/Card02';
import Card03 from '@/components/card/Card03';

export default function Home() {
  return (
    <Container>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-40 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="sm:text-6xl text-4xl font-bold title-font mb-4 text-gray-900 text-center">
                  <span className="relative inline-block px-2 py-4">
                    <div className="absolute inset-0 transform -skew-x-12 bg-yellow-400" />
                    <span className="relative text-gray-900">OneDrive</span>
                  </span>
                  <span className="block">+</span>
                  <span className="block">File Perpajakan</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Akses seluruh file perpajakan dalam satu folder OneDrive
                  dimanapun, kapanpun.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://pajak365-my.sharepoint.com/:f:/p/pajak/Ej8dbenWOmZFtDJegaeBWfoB0A9ut371KAXQ5vjblM2MRQ"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://pajak365-my.sharepoint.com/:f:/p/pajak/Eva-TlwakW1IrIU8c2TXFocBIvv4G6-8sO0tIx8t3UhxGg"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/office.png"
          />
        </div>
      </div>

      <section className="text-gray-600 body-font bg-gradient-to-b from-blue-50 to-blue-100 pt-4 mt-4">
        <div className="relative z-10 text-center text-gray-900 max-w-2xl px-4 sm:px-3 mx-auto pt-16 sm:pt-24 xl:pt-32 pb-14 lg:pb-20 xl:pb-28">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mb-4">
            Solusi belajar perpajakan
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Dapatkan ratusan file perpajakan langsung dari sumbernya
          </p>
          <dl className="flex flex-wrap items-center justify-center text-xs font-semibold text-gray-800 tracking-wide uppercase">
            <dt className="flex-none w-full mb-4">All packages include</dt>
            <dd className="flex items-center  bg-opacity-50 py-2 pl-5 sm:pl-6 pr-2 sm:pr-3">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="/images/cover-onedrive-big.png"
              />
            </dd>
          </dl>
        </div>
      </section>

      <section className="text-gray-400 body-font bg-gradient-to-tl from-gray-50 to-gray-100">
        <div className="container px-0 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -my-4">
            <Card02
              title="Direktori Layanan Perpajakan"
              description="Build and deploy a modern Jamstack application using the most popular open-source software."
              icon="react2025"
            />
            <Card02
              title="Aspek Perpajakan"
              description="Terbagi dalam aspek perpajakan profesi dan aspek perpajakan sektoral"
              icon="react2025"
            />
            <Card02
              title="Waw"
              description="Build and deploy a modern Jamstack application using the most popular open-source software."
              href="https://react2025.com/"
              icon="react2025"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="xl:text-6xl text-4xl font-semibold title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            <Card03
              title="Card 03"
              description="Build and deploy a modern Jamstack application using the most popular open-source software."
              href="https://react2025.com/"
              icon="react2025"
            />
            <Card03
              title="Card 03"
              description="Build and deploy a modern Jamstack application using the most popular open-source software."
              href="https://react2025.com/"
              icon="react2025"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
