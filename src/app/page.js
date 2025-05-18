import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="container">
      <Card />
      <p className="copyright">{`Copyright © ${new Date().getFullYear()}`}</p>
    </div>
  );
}
