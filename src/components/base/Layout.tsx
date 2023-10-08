import  { ReactNode } from "react";

type Props = {
    children : ReactNode
}

/**
 * 共通スタイルコンポーネント
 */
const Layout = ({ children }:Props)=> {
  return (
      <main>{children}</main>
  );
}

export default Layout;