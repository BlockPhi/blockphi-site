import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="logo">
        <svg
          className="logo-symbol"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="42"
            r="24"
            stroke="#001F3F"
            strokeWidth="2.5"
            fill="none"
          />
          <line
            x1="50"
            y1="14"
            x2="50"
            y2="8"
            stroke="#001F3F"
            strokeWidth="2.5"
          />
          <line
            x1="50"
            y1="70"
            x2="50"
            y2="90"
            stroke="#001F3F"
            strokeWidth="2.5"
          />
          <line
            x1="42"
            y1="66"
            x2="58"
            y2="66"
            stroke="#001F3F"
            strokeWidth="2"
          />
          <path
            d="M42 38 C42 32 46 28 50 28 C54 28 58 32 58 38 C58 42 56 45 53 47 L53 52 C53 54 50 56 50 56 C50 56 47 54 47 52 L47 47 C44 45 42 42 42 38Z"
            fill="#001F3F"
            opacity="0.7"
          />
        </svg>
        <span className="logo-text">
          BlockPhi <span>Capital</span>
        </span>
      </Link>
      <div className="nav-right">
        <Link href="/">Home</Link>
        <Link href="#">Analytics</Link>
        <Link href="#">Services</Link>
        <Link href="#">Insights</Link>
        <Link href="#">About</Link>
        <Link href="#" className="nav-cta">
          Apply to Join
        </Link>
      </div>
      <button className="hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
