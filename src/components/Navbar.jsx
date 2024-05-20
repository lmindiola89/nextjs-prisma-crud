import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-slate-900">
      <div className="container  flex justify-between items-center py-4 px-10">
        <Link href={"/"}>
          <h3 className="font-bold text-3xl">NextCRUD</h3>
        </Link>

        <ul className="flex gap-x-2 text-lg font-bold">
          <li className="text-slate-300 hover:text-slate-200">
            <Link href={"/new"}>New</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200">
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
