import {RecoilRoot} from "recoil"
import 'bootstrap/dist/css/bootstrap.css'
import './styles/custom.css'

function MyApp({ Component, pageProps }) {
  return (
  <RecoilRoot>
      <Component {...pageProps} />
  </RecoilRoot>
  )
}


export default MyApp