import Home from "./Pages/Home/Home";
import HeaderComponent from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle.ts";


const App = () => {
    return <>
        <GlobalStyle />
        <HeaderComponent />
        <Home />
    </>;
};

export default App;
