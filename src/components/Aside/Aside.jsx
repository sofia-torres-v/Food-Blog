import "./Aside.css";
import marcaPeru from "../../assets/marcaPeru.jpeg";
import tamal from "../../assets/tamal.jpg";
import juane from "../../assets/juane.jpg";
import tacacho from "../../assets/tacacho.jpg";

const Aside = () => {
    return (
        <aside className="aside">
            <div className="aside__info">
                <div className="aside__info-peru">
                    <h3 className="aside__title">Gastronomía Peruana</h3>
                    <img className="aside__img-peru" src={marcaPeru} alt="" />

                    <p className="aside__text-peru">
                        La Gastronomía Peruana es reconocida como una de las más
                        variadas y ricas del mundo.
                    </p>
                </div>

                <div className="aside__info-subscription">
                    <h3>Suscríbite a nuestro blog</h3>
                    <input
                        className="aside__inp-suscription"
                        type="text"
                        placeholder="Escribe tu correo electronico"
                    />
                    <button className="btn__aside">Suscribirse</button>
                </div>
                <div className="aside__post">
                    <h3 className="aside__text-post">Últimas recetas</h3>
                    <p>
                        Tenemos las ultimas recetas que hemos probado y queremos
                        ofrecerte exclusivamente a ti.
                    </p>
                    <div className="aside__img-posts">
                        <div className="box-images">
                            <img className="img-post" src={tamal} alt="" />
                            <p>Tamales</p>
                        </div>
                        <div className="box-images">
                            <img className="img-post" src={juane} alt="" />
                            <p>Juanes</p>
                        </div>
                        <div className="box-images">
                            <img className="img-post" src={tacacho} alt="" />
                            <p>Tacacho</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
export default Aside;
