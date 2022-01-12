import { useRouter } from "next/router";
import { useRecoilValue, selector } from "recoil";
import { timeState } from "./atoms/secretAtoms";


export default function SecretLink({ id }) {
  const timeValue = useRecoilValue(timeState);

  const router = useRouter()
  
  return (
    <>
      <div className="secret-link">
        <p> http://localhost:3000/private/{id}</p>
      </div>
      <div className="secret-expire-time">
        <h4>Expires in {timeValue}.</h4>
      </div>
      <div>
      </div>
    </>
  );
}
