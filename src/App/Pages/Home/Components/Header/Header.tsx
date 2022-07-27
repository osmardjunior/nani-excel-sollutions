import styles from "./Header.module.scss";
import Button from "../Button/Button";
import Label from "../Label/Label";

function ListItems({ info }: { info: string }) {
  return <li className={styles.list__item}>{info}</li>;
}

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <Label
          title="De 9 a 12 de agosto"
          classes={styles.label}
          theme={false}
        />

        <h1 className={styles.title}>
          3 aulas + 1 materclass Grátis para você sair do zero
        </h1>

        <ul className={styles.list}>
          <ListItems info={"As principais funções do Excel"} />
          <ListItems
            info={"Como deixar suas planilhas mais bonitaseatrativas"}
          />
          <ListItems info={"Como gerar relatórios completos"} />
          <ListItems info={"Fórmulas básicas para facilitarasua vida"} />
          <ListItems info={"E Muito Mais!"} />
        </ul>
        <Button title="Agora sua vaga" classes={styles.button} theme={false} />
      </section>
    </header>
  );
}

export default Header;
