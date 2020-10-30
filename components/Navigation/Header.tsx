import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 font-hairline text-white bg-black opacity-90">
      <nav className="flex m-auto minmd:w-4/5">
        <ul className="flex py-6">
          <li className="m-auto text-lg minmd:pl-4 minmd:pr-12 sm:pl-4 sm:pr-6">
            <Link href="/">
              <a className="font-black tracking-widest font-title">
                Wolf's Workshop
              </a>
            </Link>
          </li>
          <li className="m-auto minmd:px-4 sm:px-2">
            <Link href="/order">
              <a>Order</a>
            </Link>
          </li>
          <li className="m-auto minmd:px-4 sm:px-2">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="m-auto minmd:px-4 sm:px-2">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
