const Main = () => {
    return (
        <div className="container">
            <main className="main">
                <article>
                    <div className="article__box-img">
                        <img
                            className="article__img"
                            src="../images/ceviche2.webp"
                            alt=""
                        />
                    </div>

                    <h2 className="article__subtitle-post">Ceviche</h2>
                    <p className="article__fecha">Publicado / Julio 2023</p>
                    <p>
                        El alma del ceviche es la sabrosísima leche de tigre que
                        es la mezcla de jugo de limón en el que cocinamos el
                        pescado...
                    </p>

                    <button className="btn__article">Leer mas</button>
                </article>

                <article>
                    <div className="article__box-img">
                        <img
                            className="article__img"
                            src="../images/anticuchos-peruanos_680x454.jpg"
                            alt=""
                        />
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
                        <img
                            className="article__img"
                            src="../images/picarones-peruanos.webp"
                            alt=""
                        />
                    </div>

                    <h2 className="article__subtitle-post">Picarones</h2>
                    <p className="article__fecha">Publicado / Julio 2023</p>
                    <p>
                        llDistinctio praesentium consequatur pariatur
                        accusantium saepe asperiores eius natus doloribus
                        possimus veritatis...
                    </p>

                    <button className="btn__article">Leer mas</button>
                </article>

                <article>
                    <div className="article__box-img">
                        <img
                            className="article__img"
                            src="../images/rocoto-relleno5.jpg"
                            alt=""
                        />
                    </div>

                    <h2 className="article__subtitle-post">Rocoto Relleno</h2>
                    <p className="article__fecha">Publicado / Julio 2023</p>

                    <p>
                        llDistinctio praesentium consequatur pariatur
                        accusantium saepe asperiores eius natus doloribus
                        possimus veritatis?...
                    </p>

                    <button className="btn__article">Leer mas</button>
                </article>

                <article>
                    <div className="article__box-img">
                        <img
                            className="article__img"
                            src="../images/papa-huancaina.jpg"
                            alt=""
                        />
                    </div>

                    <h2 className="article__subtitle-post">
                        Papa a la Huancaína
                    </h2>
                    <p className="article__fecha">Publicado / Julio 2023</p>
                    <p>
                        llDistinctio praesentium consequatur pariatur
                        accusantium saepe asperiores eius natus doloribus
                        possimus veritatis?...
                    </p>

                    <button className="btn__article">Leer mas</button>
                </article>

                <article>
                    <div className="article__box-img">
                        <img
                            className="article__img"
                            src="../images/causa-limena-peruana-.jpg"
                            alt=""
                        />
                    </div>

                    <h2 className="article__subtitle-post">Causa de pollo</h2>
                    <p className="article__fecha">Publicado / Julio 2023</p>
                    <p>
                        llDistinctio praesentium consequatur pariatur
                        accusantium saepe asperiores eius natus doloribus
                        possimus veritatis...
                    </p>

                    <button className="btn__article">Leer mas</button>
                </article>
            </main>

            <aside className="aside">
                <div className="aside__info">
                    <div className="aside__info-peru">
                        <h3>La gastronomía Peruana</h3>
                        {/* <img className="aside__img-peru" src="../images/images.jpeg" alt=""> */}
                        <p className="aside__text-peru">
                            La gastronomía peruana es reconocida como una de las
                            más variadas y ricas del mundo.
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
                        <h3 className="aside__text-post">ÚLTIMAS RECETAS</h3>
                        <p>
                            Tenemos las ultimas recetas que hemos probado y
                            queremos ofrecerte exclusivamente a ti.
                        </p>
                        <div className="aside__img-posts">
                            <div className="box-images">
                                {/* <img className="img-post" src="../images/tamal.jpg" alt=""> */}
                                <p>Tamales</p>
                            </div>
                            <div className="box-images">
                                {/* <img className="img-post" src="../images/juane-de-gallina.jpg" alt=""> */}
                                <p>Juanes</p>
                            </div>
                            <div className="box-images">
                                {/* <img className="img-post" src="../images/tacacho-con-cecina.jpg" alt=""> */}
                                <p>Tacacho</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Main;
