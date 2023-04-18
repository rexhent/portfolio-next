export default function Footer() {
  return (
    <footer
      className={`w-full justify-between flex flex-row absolute bottom-0 p-1`}
    >
      <p>Copyright &copy; rexhent {new Date().getFullYear()}.</p>
      <p>Licensed under GPLv3.</p>
    </footer>
  );
}
