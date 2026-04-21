"use client";

export default function CookieSettingsLink({
  children = "Change your cookie preferences",
}: {
  children?: React.ReactNode;
}) {
  const open = () => {
    window.dispatchEvent(new CustomEvent("blockphi:open-cookie-settings"));
  };

  return (
    <button type="button" className="cookie-inline-link" onClick={open}>
      {children}
    </button>
  );
}
