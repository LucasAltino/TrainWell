import SecaoVideo from "../sections/SecaoVideo";
import SecaoCards from "../sections/SecaoCards";
import SecaoComentarios from "../sections/SecaoComentarios";
import Header from "../sections/Header";
import Planos from "../sections/Planos";
import Footer from "../sections/Footer";


function Home(){
    return (
        <div style={{ maxWidth: '100vw', overflow:"hidden"}}>
            <Header></Header>
            <SecaoVideo></SecaoVideo>
            <SecaoCards></SecaoCards>
            <SecaoComentarios></SecaoComentarios>
            <Planos></Planos>
            <Footer></Footer>
        </div>
    )
}export default Home;
