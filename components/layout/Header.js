import Link from "next/link";

function Header1() {
  return (
    <div className="header">
      <div className="header_content">
        <div>Jobs App</div>
        <nav>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header1;
