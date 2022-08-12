import styles from "./Header.module.scss";
import Button from "../../Components/Button/Button";
import Label from "../../../../Components/Label/Label";

function ListItems({ info }) {
  return <li className={styles.list__item}>{info}</li>;
}
function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.bg}
        src="/assets/background/bg-widescreen.png"
        alt="Big background Img"
      />
      <img
        className={styles.bg}
        src="/assets/background/mini-header-bg.jpg"
        alt="Big background Img"
      />
      <section className={styles.container}>
        <Label
          title="DE 23 A 26 DE AGOSTO"
          classes={styles.label}
          theme={false}
        />

        <h1 className={styles.title}>
          3 SUPER-AULAS GRATUITAS + 1 MASTERCLASS PARA VOCÊ SAIR DO ZERO
        </h1>

        <ul className={styles.list}>
          <ListItems info={"As principais funções do Excel"} />
          <ListItems
            info={"Como deixar suas planilhas mais bonitas e atrativas"}
          />
          <ListItems info={"Como gerar relatórios completos"} />
          <ListItems info={"Fórmulas básicas para facilitar a sua vida"} />
          <ListItems info={"E Muito Mais!"} />
        </ul>
        <br></br>
        <h3>Seja o primeiro a se inscrever!</h3>
        <Button
          title="Garanta sua vaga"
          classes={styles.button}
          theme={false}
          link="#FORM"
        />
      </section>
    </header>
  );
}

export default Header;
