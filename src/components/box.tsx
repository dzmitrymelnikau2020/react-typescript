import { PropsWithChildren, /* ReactNode */ } from 'react'

type BoxProps = {
    color?: 'red' | 'green' | 'blue';
    //children: ReactNode;
}

 const Box = ({ children, color = 'red' }: /* PropsWithChildren<BoxProps> */ PropsWithChildren & BoxProps) => {
    return (
      <section
        className="m-4"
        style={{ padding: '1em', border: '5px solid purple', color }}
      >
        {children}
      </section>
    );
 };

 export default Box;
