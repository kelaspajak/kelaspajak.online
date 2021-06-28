import Link from 'next/link';

export default function CardDirektori({ title, summary }) {
  return (
    <li>
      <Link href={`/newsletter/${slug}`}>{title},{ summary }
      </Link>
    </li>
  );
}
