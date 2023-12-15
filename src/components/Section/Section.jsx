import "./section.css";
import ceviche from "../../assets/ceviche.webp";
import anticuchos from "../../assets/anticuchos.jpg";
import picarones from "../../assets/picarones.webp";
import rocotoRelleno from "../../assets/rocotoRelleno.jpg";
import papaHuancaina from "../../assets/causa.jpg";
import causa from "../../assets/causa.jpg";

const Section = () => {
    return (
        <main className="main">
            <article>
                <div className="article__box-img">
                    <img className="article__img" src={ceviche} alt="" />
                </div>

                <h2 className="article__subtitle-post">Ceviche</h2>
                <p className="article__fecha">Publicado / Julio 2023</p>
                <p>
                    El alma del ceviche es la sabrosísima leche de tigre que es
                    la mezcla de jugo de limón en el que cocinamos el pescado...
                </p>

                <button className="btn__article">Leer mas</button>
            </article>

            <article>
                <div className="article__box-img">
                    <img className="article__img" src={anticuchos} alt="" />
                </div>
                <h2 className="article__subtitle-post">Anticuchos</h2>
                <p className="article__fecha">Publicado / Julio 2023</p>
                <p>
                    Su elaboración es bastante simple, consiste de papas
                    cocidas, corazón de res cortado en trozos pequeños y
                    especias...
                </p>

                <button className="btn__article">Leer mas</button>
            </article>

            <article>
                <div className="article__box-img">
                    <img className="article__img" src={picarones} alt="" />
                </div>

                <h2 className="article__subtitle-post">Picarones</h2>
                <p className="article__fecha">Publicado / Julio 2023</p>
                <p>
                    llDistinctio praesentium consequatur pariatur accusantium
                    saepe asperiores eius natus doloribus possimus veritatis...
                </p>

                <button className="btn__article">Leer mas</button>
            </article>

            <article>
                <div className="article__box-img">
                    <img className="article__img" src={rocotoRelleno} alt="" />
                </div>

                <h2 className="article__subtitle-post">Rocoto Relleno</h2>
                <p className="article__fecha">Publicado / Julio 2023</p>

                <p>
                    llDistinctio praesentium consequatur pariatur accusantium
                    saepe asperiores eius natus doloribus possimus veritatis?...
                </p>

                <button className="btn__article">Leer mas</button>
            </article>

            <article>
                <div className="article__box-img">
                    <img className="article__img" src={papaHuancaina} alt="" />
                </div>

                <h2 className="article__subtitle-post">Papa a la Huancaína</h2>
                <p className="article__fecha">Publicado / Julio 2023</p>
                <p>
                    llDistinctio praesentium consequatur pariatur accusantium
                    saepe asperiores eius natus doloribus possimus veritatis?...
                </p>

                <button className="btn__article">Leer mas</button>
            </article>

            <article>
                <div className="article__box-img">
                    <img className="article__img" src={causa} alt="" />
                </div>

                <h2 className="article__subtitle-post">Causa de pollo</h2>
                <p className="article__fecha">Publicado / Julio 2023</p>
                <p>
                    llDistinctio praesentium consequatur pariatur accusantium
                    saepe asperiores eius natus doloribus possimus veritatis...
                </p>

                <button className="btn__article">Leer mas</button>
            </article>
        </main>
    );
};

export default Section;
