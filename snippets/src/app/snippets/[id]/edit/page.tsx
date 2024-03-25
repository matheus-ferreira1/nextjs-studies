import { notFound } from 'next/navigation';

import { db } from '@/db';
import SnippetEditForm from '@/components/snippet-edit-form';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage({
  params,
}: SnippetEditPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  if (!snippet) notFound();

  return (
    <div>
      <h1>Editing snippet with title {snippet.title}</h1>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
