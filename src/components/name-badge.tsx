import { PropsWithChildren } from "react";

import Box from "./box";
import Counter from "./counter";

type NameBadgeProps = {
  name: string;
  greeting?: string;
  children?: PropsWithChildren;
}

const NameBadge = ({ name, greeting, children }: NameBadgeProps): JSX.Element => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{greeting}</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name}</p>
      </div>
      <Counter />
      {/* <Box color="green">
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box color="green">
          <h2>Another React component with one child.</h2>
        </Box>
        <Box color="red">
          <h2 className="mb-4">A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box> */}
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
