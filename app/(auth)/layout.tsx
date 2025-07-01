import React, { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

const Authlayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex justify-center pt-40">
      {children}
    </div>
  );
};

export default Authlayout;
