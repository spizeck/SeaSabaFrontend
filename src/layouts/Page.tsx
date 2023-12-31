import React from 'react';
import {Header} from '../components/Header';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article className='prose lg:prose-xl mx-auto p-4'>
      <Header
        user={user}
        onLogin={() => setUser({name: 'Jane Doe'})}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({name: 'Jane Doe'})}
      />

      <section>
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a <strong>component-driven</strong> process starting with atomic
          components
          and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without needing to
          navigate
          to them in your app. Here are some handy patterns for managing page data in Storybook:
        </p>
        <ul>
          <li>Use a higher-level connected component. Storybook helps you compose such data from the "args" of
            child
            component stories
          </li>
          <li>Assemble data in the page component from your services. You can mock these services out using
            Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at <a
          href="https://storybook.js.org/tutorials/">Storybook
          tutorials</a>. Read more in the <a href="https://storybook.js.org/docs">docs</a>.
        </p>
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
          <p className="font-bold">Tip</p>
          <p>Adjust the width of the canvas with the Viewports addon in the toolbar.</p>
        </div>
      </section>
    </article>
  );
};
