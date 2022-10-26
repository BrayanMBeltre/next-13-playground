import "../styles/globals.css";
import CharacterList from "./CharacterList";
import Logo from "./Logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Logo />
          <CharacterList />
        </div>
        <div className="col-span-10">{children}</div>
      </div>
    </html>
  );
}
