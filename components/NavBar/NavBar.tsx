import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className={`ml-1 flex justify-between items-center`}>
        <div className={`mr-1`}>
          <h2 className="font-bold font text-xl">Rexhent App</h2>
        </div>
        <div className={`underline flex flex-row-reverse`}>
          <Link href="/" className="mr-1">
            Home
          </Link>
          <Link href="/blog" className="mr-1">
            Blog
          </Link>
          <a href="https://github.com/rexhent" className="mr-1" target="_blank">
            GitHub
          </a>
          <a
            href="https://github.com/rexhent/portfolio-next"
            className="mr-1"
            target="_blank"
          >
            Source
          </a>
          <a href="https://game1.rexhent.xyz" className="mr-1" target="_blank">
            JS Game
          </a>
        </div>
      </div>
    </>
  );
}
