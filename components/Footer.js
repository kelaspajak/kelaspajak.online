import Link from 'next/link';

// import NowPlaying from '@/components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="footerLink"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-2">
          <Link href="/">
            <a className="footerLink">Home</a>
          </Link>
          <Link href="/about">
            <a className="footerLink">About</a>
          </Link>
          <Link href="/newsletter">
            <a className="footerLink">Newsletter</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <ExternalLink href="https://twitter.com/leeerob">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-2">
          <Link href="/uses">
            <a className="footerLink">Uses</a>
          </Link>
          <Link href="/guestbook">
            <a className="footerLink">Guestbook</a>
          </Link>
          <Link href="/snippets">
            <a className="footerLink">Snippets</a>
          </Link>
          <Link href="/tweets">
            <a className="footerLink">Tweets</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
