import Link from 'next/link';
import { notFound } from 'next/navigation';

import { db } from '@/db';

import { buttonVariants } from '@/components/ui/button';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage({
  params,
}: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  if (!snippet) notFound();

  return (
    <div>
      <Link href="/" className="font-bold text-lg py-4">
        Snippets
      </Link>
      <div className="my-4 flex items-center justify-between">
        <h1 className="font-bold text-lg">{snippet.title}</h1>
        <div className="space-x-2">
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={`/snippets/${snippet.id}/edit`}
          >
            Edit
          </Link>
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={`/snippets/${snippet.id}/delete`}
          >
            Delete
          </Link>
        </div>
      </div>
      <pre className="bg-gray-200 p-3 rounded">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
