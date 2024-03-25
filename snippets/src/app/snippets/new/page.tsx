'use client';

import { useFormState } from 'react-dom';

import { createSnippet } from '@/actions';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(createSnippet, { message: '' });

  return (
    <form action={action}>
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

        {formState.message ? (
          <div className="p-2 my-2 bg-red-300 rounded">{formState.message}</div>
        ) : null}

        <Button>Create</Button>
      </div>
    </form>
  );
}
