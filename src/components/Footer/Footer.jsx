import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text">
        Dados oficiais fornecidos pelo{" "}
        <span className="footer-INPE">INMET</span>.
      </p>
      <p className="footer-text">
        &copy; Estéfanno Pimenta. Todos os direitos reservados.
      </p>
    </div>
  );
}

export default Footer;
