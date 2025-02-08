import { Section, Container} from "./About.styles"

const About = () => {
    return (
        <Section id="about">
            <h2>Sobre</h2>
            <Container className="about-container">
                <div className="about-item">
                    <div className="icon-wrapper">
                        <i className="fas fa-truck"></i>
                    </div>
                    <h3>Entrega rápida e grátis</h3>
                    <p>Entrega gratuita para todos os pedidos acima de R$140</p>
                </div>

                <div className="about-item">
                    <div className="icon-wrapper">
                        <i className="fas fa-headset"></i>
                    </div>
                    <h3>Suporte 24/7</h3>
                    <p>Atendimento ao cliente disponível 24 horas por dia</p>
                </div>

                <div className="about-item">
                    <div className="icon-wrapper">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h3>Garantia de reembolso</h3>
                    <p>Devolvemos seu dinheiro em até 30 dias</p>
                </div>

                <div className="about-item">
                    <div className="icon-wrapper">
                        <i className="fas fa-credit-card"></i>
                    </div>
                    <h3>Pagamento seguro</h3>
                    <p>Pagamento 100% seguro com criptografia SSL</p>
                </div>

                <div className="about-item">
                    <div className="icon-wrapper">
                        <i className="fas fa-store"></i>
                    </div>
                    <h3>Loja confiável</h3>
                    <p>Compre com segurança em nossa loja online</p>
                </div>
            </Container>
        </Section>
    )
}

export default About;