const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <nav className="bg-red-600 text-white">Auth nav</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
