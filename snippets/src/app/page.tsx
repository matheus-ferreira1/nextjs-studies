import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map(snippet => (
    <div className="border" key={snippet.id}>
      <h3>{snippet.title}</h3>
      <pre>{snippet.code}</pre>
    </div>
  ));

  return <>{renderedSnippets}</>;
}
