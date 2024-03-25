import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { db } from '@/db';
import { Heading3 } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg my-4">Snippets</h1>
        <Link className={buttonVariants()} href="/snippets/new">
          New Snippet
        </Link>
      </div>
      <div className="space-y-2">
        {snippets.length > 0 ? (
          snippets.map(snippet => (
            <Card key={snippet.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{snippet.title}</CardTitle>
                <Link
                  className={buttonVariants({ variant: 'outline' })}
                  href={`/snippets/${snippet.id}`}
                >
                  View
                </Link>
              </CardHeader>
            </Card>
          ))
        ) : (
          <h3>There are no snippets to show</h3>
        )}
      </div>
    </div>
  );
}
