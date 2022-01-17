import { useRouter } from "next/router";
import { useRecoilValue, selector } from "recoil";
import { timeState } from "./atoms/secretAtoms";
import { passwordState } from "./atoms/passwordAtom";

export default function SecretLink({ id }) {
  const timeValue = useRecoilValue(timeState);
  const passwordValue = useRecoilValue(passwordState);
  // console.log(passwordValue)

  const router = useRouter();

  return (
    <>
      <div className="secret-link">
        <p> http://localhost:3000/private/{id}</p>
      </div>
      {passwordValue && <p>This Secret requires Passphrase</p>}
      <div className="secret-expire-time">
        <h4>Expires in {timeValue}.</h4>
      </div>
      <div></div>
    </>
  );
}
