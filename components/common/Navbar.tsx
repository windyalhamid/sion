import Link from "next/link";

const Navbar = () => (
  <div className="navbar bg-base-100 sticky top-0 z-10 shadow">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <Link href="/profil">Profil</Link>
          </li>
          <li>
            <Link href="/download">Download</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost normal-case text-xl">Jemaat Sion</a>
    </div>
    <div className="navbar-end"></div>
  </div>
);

export default Navbar;
