export default function Navbar() {
  return (
    <header className="nav">
      <div className="container navInner">
        <a className="brand" href="#home">Hung</a>

        <nav className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact" className="pill">Contact</a>
        </nav>
      </div>
    </header>
  );
}
