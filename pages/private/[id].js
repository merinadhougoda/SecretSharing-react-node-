import axios from "axios";
import { useRecoilValue } from "recoil";
import { passwordState } from "../components/atoms/passwordAtom";
import Passphrase from "../components/Passphrase";

export default function SecretUrl({ SecretBody }) {
    const passphrase = useRecoilValue(passwordState)
      return (
        <>
          <div className="container">
            <Passphrase />
          </div>
        </>
      );  
}

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const SecretBody = await axios.get(`http://localhost:3100/secrets/${id}`);

//   return {
//     props: {
//       SecretBody: JSON.parse(JSON.stringify(SecretBody.data.body)),
//     },
//   };
// }
