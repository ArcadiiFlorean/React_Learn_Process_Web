function Header() {
    return (
      <div className=" flex items-center justify-center">
        <ul className="flex items-center gap-4">
          <li className="text-2xl">
            <a href="#">Home</a>
          </li>
          <li>
            <a className="text-red-500  text-5xl hover:text-blue-500" href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Header;
  