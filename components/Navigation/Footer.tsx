import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav className="pt-12 pb-12 text-white bg-black minmd:flex minlg:px-20 minmd:px-10 minmd:justify-evenly opacity-90">
        <ul className="text-2xl font-title sm:text-center">
          <li>Wolf's Workshop</li>
        </ul>
        <ul className="flex flex-col justify-center px-6 sm:px-8">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/order">
              <a>Order</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col justify-center text-sm sm:pl-8">
          <li>Copyright © 2020. All rights reserved.</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
