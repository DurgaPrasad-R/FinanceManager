const NavBar = () => {
  return (
    <div className="flex justify-between p-4">
      <div>
        <img src="/logo.png" alt="logo" className="w-10 object-contain" />
      </div>
      <div className="flex gap-5">
        <img src="/home.png" alt="home" className="w-10 object-contain" />
        <img src="/tranxn.png" alt="home" className="w-10 object-contain" />
        <img src="/budget.png" alt="home" className="w-10 object-contain" />
        <img src="/goal.png" alt="home" className="w-10 object-contain" />
        <img src="/report.png" alt="home" className="w-10 object-contain" />
      </div>
    </div>
  );
};

export default NavBar;
