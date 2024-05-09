import { sidebarLinks } from '@/constants';

import NavigationLink from '../ui/NavigationLink';

function Bottombar() {
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map(link => (
          <NavigationLink link={link} key={link.route} />
        ))}
      </div>
    </section>
  );
}

export default Bottombar;
