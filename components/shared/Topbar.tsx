import { OrganizationSwitcher } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

import SignOut from '../ui/SignOut';

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="Logo" width={28} height={28} />
        <p className="text-heading3-bold  max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignOut className="p-4" />
        </div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: 'py-2 px-4',
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
