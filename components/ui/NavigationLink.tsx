'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  link: {
    imgURL: string;
    label: string;
    route: string;
  };
}

export default function NavigationLink({ link }: Props) {
  const pathname = usePathname();

  const isActive =
    (pathname.includes(link.route) && link.route.length > 1) ||
    pathname === link.route;

  return (
    <Link
      title={link.label}
      className={clsx('navigation_link', isActive && 'bg-primary-500')}
      href={link.route}
    >
      <Image src={link.imgURL} alt={link.label} width={24} height={24} />
      <span className="hidden text-subtle-medium sm:block md:hidden lg:block lg:text-body-medium">
        {link.label}
      </span>
    </Link>
  );
}
