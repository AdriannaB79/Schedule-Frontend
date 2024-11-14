const Header = ({ userName }) => (
  <header className="bg-blue-500 text-white p-4 shadow-md text-center">
    <h1 className="text-2xl font-bold">Wellcome, {userName}!</h1>
  </header>
);

export default Header;
