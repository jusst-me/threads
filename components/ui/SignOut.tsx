import { SignedIn, SignOutButton } from '@clerk/nextjs';
import clsx from 'clsx';
import Image from 'next/image';

export default function SignOut({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <SignedIn>
      <SignOutButton>
        <button
          aria-label="Sign out"
          type="button"
          className={clsx('flex cursor-pointer gap-4', className)}
        >
          <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
          {children}
        </button>
      </SignOutButton>
    </SignedIn>
  );
}
