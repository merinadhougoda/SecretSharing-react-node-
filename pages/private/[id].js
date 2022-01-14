import axios from "axios";
import PassphraseCheck from "../components/PassphraseCheck";
import SecretMessage from "../components/SecretMessage";

export default function SecretUrl({SecretPassword}) {
  return (
    <>
    { SecretPassword ? 
      <PassphraseCheck />
    :
      <SecretMessage />
    }
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const SecretPassword = await axios.get(`http://localhost:3100/secrets/${id}`);

  return {
    props: {
      SecretPassword: JSON.parse(JSON.stringify(SecretPassword.data.password)),
    },
  };
}
