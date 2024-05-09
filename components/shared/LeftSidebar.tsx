import { sidebarLinks } from '@/constants';

import NavigationLink from '../ui/NavigationLink';
import SignOut from '../ui/SignOut';

function LeftSidebar() {
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map(link => (
          <NavigationLink key={link.route} link={link} />
        ))}
      </div>

      <div className="mt-10 px-6">
        <SignOut className="p-4">
          <span className="max-lg:hidden">Logout</span>
        </SignOut>
      </div>
    </section>
  );
}

export default LeftSidebar;
