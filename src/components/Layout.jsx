import { Outlet } from 'react-router-dom';
import { StyledLink } from './Layout.styled';
import { Suspense } from 'react';

// const StyledLink = styled(NavLink)`
// color: green;
// `;

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <StyledLink to={'/'}>homepage </StyledLink>
          </li>
          <li>
            <StyledLink to={'/movies'}>movies </StyledLink>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
