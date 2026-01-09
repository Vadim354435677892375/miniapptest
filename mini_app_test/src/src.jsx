import React from "react";
import "./miniapp.css";

function Card({ children, style }) {
  return <div className="card" style={style}>{children}</div>;
}

export default function App() {
  return (
    <div className="wrap">
      <div className="header">
        <div className="brand">NAZVANIE</div>
        <div className="profile">👤</div>
      </div>

      <section className="section-block">
        <h3 className="section-title">ТОП-10 МЕСЯЦА</h3>
        <div className="section-inner">
          <div className="cards-row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <section className="section-block">
        <h3 className="section-title">НОВИНКИ</h3><div className="section-inner">
          <div className="cards-row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <section className="section-block">
        <h3 className="section-title">БАМ</h3>
        <div className="promo">BABABABABABABABABABABABABABABA</div>
      </section>

      <section className="section-block">
        <h3 className="section-title">ЛЮДИ ЧАСТО ВЫБИРАЮТ</h3>
        <div className="section-inner">
          <div className="cards-row">
            <Card style={{ height: 160 }} />
            <Card style={{ height: 160 }} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <h3 className="section-title">ОТЛОЖИЛИ ПРОСМОТР</h3>
        <div className="section-inner">
          <div className="cards-row">
            <Card style={{ height: 160 }} />
            <Card style={{ height: 160 }} />
          </div>
        </div>
      </section>
    </div>
  );
}