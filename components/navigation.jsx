import Link from 'next/link'
import React from 'react'

export const Navigation = () => {
  return (
    <div>
      <Link href="/posts/post1">Post1</Link>
      <Link href="/posts/post2">Post2</Link>
      <Link href="/posts/post3">Post3</Link>
    </div>
  );
}
