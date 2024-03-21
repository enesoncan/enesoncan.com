import React from 'react';
import './styles.scss';

const Content = () => {
  return (
    <main className="main-wrapper">
      <span className="title" role="img" aria-label="Say hello">
        👋🏻
      </span>
      <h1 className="title">Merhaba, ben Enes.</h1>
      <p className="content">
        Çanakkale Onsekiz Mart Üniversitesi, Bilgisayar Programcılığı bölümünden
        mezun oldum. Şu anda{" "}
        <a
          href="https://www.blutv.com"
          target="_blank"
          rel="noopener noreferrer"
          className="blutv-texture link"
        >
          BluTV
        </a>{" "}
        şirketinde <span style={{ color: "#7723db" }}>Front-End Developer</span>{" "}
        olarak çalışmaktayım. Hakkımda daha fazla bilgi edinmek için
        <a
          href="https://www.linkedin.com/in/enesoncan/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-texture link"
        >
          {" "}
          LinkedIn
        </a>{" "}
        profilimi ziyaret edebilirsiniz.
      </p>
      <p className="content">
        {`Yazılım dışında yapmaktan keyif aldığım şeyler; satranç, bilgisayar & konsol oyunları, doğa yürüyüşü, seyahat.`}
      </p>
    </main>
  );
};

export default Content;
