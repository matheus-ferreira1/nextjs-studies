import { redirect } from 'next/navigation';

import { db } from '@/db';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold my-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Label className="w-12" htmlFor="title">
            Title
          </Label>
          <Input
            className="border rounded p-2 w-full"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <Label className="w-12" htmlFor="code">
            Code
          </Label>
          <Textarea
            className="border rounded p-2 w-full"
            name="code"
            id="code"
          />
        </div>

        <Button>Create</Button>
      </div>
    </form>
  );
}
