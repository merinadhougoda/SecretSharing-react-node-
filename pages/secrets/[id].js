import SecretLink from "../components/SecretLink";

export default function SecretPageLink({ id }) {
  return (
    <>
      <div className="container">
        <div className="text-start mt-5 mb-3">          
          <h3>Share this link</h3>
        </div>
        <SecretLink id={id} />
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: { id },
  };
}
