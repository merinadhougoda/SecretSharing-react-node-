import SecretMessage from "./components/SecretBody";


export default function Home() {
  return (
    <>
      <div className="container">
        <div className="text-center my-4">
          <h3>Paste your Secret and Password below.</h3>
        </div>
          <SecretMessage />
      </div>
    </>
  );
}
