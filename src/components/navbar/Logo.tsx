import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 mr-8">
      <Image src="/images/logo.jpeg" alt="logo" width={24} height={24} />
      <h2 className="text-base font-bold">JohnP</h2>
    </Link>
  );
}

export default Logo