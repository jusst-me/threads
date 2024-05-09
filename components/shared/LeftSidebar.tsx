'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';

function LeftSidebar() {
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map(link => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              title={link.label}
              className={clsx(
                'leftsidebar_link',
                isActive && 'bg-primary-500',
                pathname && 'p-0',
              )}
              key={link.route}
              href={link.route}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <span className="max-lg:hidden">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default LeftSidebar;
