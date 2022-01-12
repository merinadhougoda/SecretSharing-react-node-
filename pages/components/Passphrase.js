import { useRecoilState, useRecoilValue } from "recoil";
import { passphraseState } from "./atoms/passphraseAtom";
import { passwordState } from "./atoms/passwordAtom";

import axios from "axios";
import { useRouter } from "next/router";


export default function SecretPassword() {
  const router = useRouter();
  const { id } = router.query;
  const [password, setPassword] = useRecoilState(passwordState);
  const [passphrase, setPasspharase] = useRecoilState(passphraseState);

  const passphraseValue = useRecoilValue(passphraseState)

  const handleSubmit = async (e, password) => {
    e.preventDefault();
    const passwordData = await axios.post(`http://localhost:3100/private/${id}`, {password});
    console.log(passwordData.data);
    setPasspharase(passwordData.data)
  };

  const handlePassphrase = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <h4 className="mt-5">Please enter your Passphrase</h4>
      <form
        method="POST"
        onSubmit={(e) => {
          handleSubmit(e, password);
        }}
      >
        <div className="mb-3 mt-2">
          <label className="form-label">Passphrase:</label>
          <input
            type="text"
            className="form-control"
            value={password}
            placeholder="Enter Passphrase"
            onChange={handlePassphrase}
          />
        </div>
        <button type="submit" className="btn btn-primary secret-link-btn">
          View Secret
        </button>
        <div className="passphrase">
          <p>{passphraseValue}</p>
        </div>
      </form>
    </>
  );
}
