import facebook from '../../Facebook.svg'
import instagram from '../../Instagram.svg'
import linkedIn from '../../Linkedin.svg'
import footerStyle from './Footer.module.scss'

export function Footer() {

    return (
        <footer className={footerStyle.footer}>
            <section>
                <article>
                    <h3>ADRESSE</h3>
                    <p> Det utrolige teater</p>
                    <p>Havnegade 901</p>
                    <p>9000 Aalborg</p>
                    <p>EAN 5798003279845</p>
                    <p>Find vej på kort</p>
                    <p>CVR 1001 0012</p>
                    <aside>
                        <p>Find vej på kort</p>
                    </aside>
                </article>
            </section>

            <section>
                <article>
                    <h3>Se åbningstider</h3>
                    <p>Se åbningstider</p>
                    <p>Billettelefon: +45 96 31 80 80</p>
                    <p>billet@dut.dk</p>
                </article>

                <article>
                    <h3>ADMINISTRATION</h3>
                    <p>Telefon: +45 96 31 80 90</p>
                    <p>adm@dut.dk</p>
                </article>
            </section>

            <section>
                <article>
                    <h3>PRAKTISK INFO</h3>
                    <p>Kontakt</p>
                    <p>Kom trygt i teatret</p>
                    <p>Presseside</p>
                    <p>Skoleforestillinger</p>
                    <p>Teatercaféen</p>
                    <p>Handelsbetingelser</p>
                </article>
            </section>
            <section>
                <article className={footerStyle.socials}>
                    <img src={facebook} alt="Facebook" />
                    <img src={instagram} alt="Instagram" />
                    <img src={linkedIn} alt="LinkedIn" />
                </article>
            </section>
        </footer>
    )
}
