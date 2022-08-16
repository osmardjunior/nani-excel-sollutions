import styles from "./Header.module.scss";
import Button from "../../Components/Button/Button";
import Label from "../../../../Components/Label/Label";
import ImageLarge from "../../../../../../public/assets/background/bg-widescreen.png"
import ImageSmall from "../../../../../../public/assets/background/mobile4.svg"
import imgLarg from "../../../../../../public/assets/background/mobile4.svg"

function ListItems({ info }) {
  return <li className={styles.list__item}>{info}</li>;
}
function Header() { 
  return (
    <header className={styles.header}> 

<picture className={styles.bg}>
  <source media="(min-width:720px)" srcSet={ImageLarge}/>
  <source media="(min-width:0px)" srcSet={ImageSmall}/>
  <img className={styles.mobile} src="mobile4.svg" alt="header"/>
</picture>



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
