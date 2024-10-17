import Link from "next/link";

export default function Navbar() {
  const navLink = [
    { name: "Products", path: "#" },
    { name: "Enterprise", path: "#" },
    { name: "Docs", path: "#" },
    { name: "Resources", path: "#" },
    { name: "Products", path: "#" },
  ]
  return (
    <nav className="px-20 z-[200] py-4 border-b border-zinc-900 flex justify-between items-center text-center">
      <Link href={`/`} className="hover:text-rose-800 transition duration-300 ease-out font-bold text-lg">CodeX</Link>
      <ul className="flex justify-center items-center text-center gap-5">
        {
          navLink.map((item) => (
            <div key={item.name}>
              <Link href={item.path}>
                <li className="hover:text-rose-800 transition duration-300 ease-out">{item.name}</li>
              </Link>
            </div>
          ))
        }
      </ul>
      <div className="flex justify-center items-center text-center gap-3">
        <button className="px-4 py-2 rounded-md text-sm bg-rose-800 text-white hover:bg-rose-900 transition duration-300 ease-out">
          Get CodeX
        </button>
        <button className="px-4 py-2 rounded-md border border-zinc-800 text-sm">
          Login
        </button>
      </div>
    </nav>
  )
}
