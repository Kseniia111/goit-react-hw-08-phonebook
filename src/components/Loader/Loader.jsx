import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => (
  <RotatingLines
    strokeColor="#e15b64"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
    ariaLabel="rotating-lines-loading"
  />
);
