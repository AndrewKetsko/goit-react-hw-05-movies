import { Outlet } from 'react-router-dom';
import { StyledLink } from './layout.styled';
import { Suspense } from 'react';
import { Header } from './layout.styled';

// const StyledLink = styled(NavLink)`
// color: green;
// `;

export const Layout = () => {
  return (
    <div>
      <nav>
        <Header>
          <li>
            <StyledLink to={'/'}> Trending </StyledLink>
          </li>
          <li>
            <StyledLink to={'/movies'}> Search </StyledLink>
          </li>
        </Header>
      </nav>
      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
