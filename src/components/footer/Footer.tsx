import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            &copy; {new Date().getFullYear()} BlockPhi Capital. Not financial
            advice.
          </div>
          <div className="footer-links">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
