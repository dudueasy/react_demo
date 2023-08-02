import yayJpg from '../assets/yay.jpg';
import {composeProvider} from "@/components/composeProvider";

function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} alt={'picture'} width="388"/>
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}


export const TitleProvider = ({children}) => {
  return <div>
    <h1>title</h1>
    {children}
  </div>
}

export const FooterProvider = ({children}) => {
  return <div>
    {children}
    <footer>
      <h1>footer</h1>
    </footer>
  </div>
}

const ComposedProvider = composeProvider(TitleProvider, FooterProvider)


export default () => <ComposedProvider><HomePage/></ComposedProvider>