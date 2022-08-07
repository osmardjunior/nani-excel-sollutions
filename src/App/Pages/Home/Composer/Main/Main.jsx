// Components
import Button from "../../Components/Button/Button";
import Video from "../../../../Components/Video/Video";
import Card from "../../Components/Cards/Card";
import ClassesComponent from "../../Components/Classes/ClassesComponent";
import TeacherCard from "../../Components/Teacher/Teacher";
import Brands from "../../Components/Brands/Brands";

// Styles
import styles from "./Main.module.scss";

const PhotoSection = () => {
  const idLabelledby = "description-title";

  return (
    <section
      className={`${styles.photoSection} blur-blobs--right`}
      aria-labelledby={idLabelledby}
    >
      <header>
        <h2 className={styles.photoSection__title} itemID={idLabelledby}>
          Com a metodologia Excel Solutions, é possível aprender o básico do
          Excel na prática em
          <span>&nbsp;só 4 dias.</span>
        </h2>
        {/* adicionar video da paola aqui pesquisar no 3schools */}
      </header>
      <Video />
      <ul className={styles.photoSection__list}>
        <Card text={"Material didático próprio"} icon="book" />
        <Card text={"Estudos de casos reais"} icon="pensil" />
        <Card text={"Instrutores que atuam no mercado"} icon="person" />
        <Card
          text={" A única que combina pensamento analítico e Excel"}
          icon="grath"
        />
      </ul>
      <Button
        title="Garanta sua vaga"
        classes={styles.photoSection__button}
        link="#FORM"
      />
    </section>
  );
};

const ClassesSection = () => {
  const idLabelledby = "classes-title";

  return (
    <section
      className={`${styles.classesSection} blur-blobs--left`}
      aria-labelledby={idLabelledby}
    >
      <header className={styles.classSection__header}>
        <h3 className={styles.classesSection__title} itemID={idLabelledby}>
          O que você vai aprender na
          <span>&nbsp;Semana do Excel na Prática?</span>
        </h3>
      </header>

      <ClassesComponent
        idLabelledbyCard="class-1"
        title="SUPERAULA 1"
        dateDay="23/08"
        dateString="Segunda-Feira"
        description=" Matemática básica (soma; subtração; divisão; multiplicação e porcentagem)
        Formatação de planilha
        Colar Especial
        Preenchimento relâmpago
        Inserir e Formatar objetos
        Gráfico padrão
        Lógica e Função SE."
      />
      <ClassesComponent
        className={` blur-blobs--right`}
        idLabelledbyCard="class-2"
        title="AULA 2"
        dateDay="24/08"
        dateString="Terça-feira"
        description="Formatação Condicional
        Condicionais matemáticas com um e mais critérios
        Tratamento e Validação de Dados
        Aninhamento de funções condicionais
        Gráficos Combinados
        PROCV / PROCH."
      />
      <ClassesComponent
        idLabelledbyCard="class-3"
        title="AULA 3"
        dateDay="25/08"
        dateString="Quarta-feira"
        description="PROCX
        Tabela Dinâmica
        Como solucionar problemas de Fórmulas
        Trabalhando com funções de Tempo e Texto
        Gestão de Dados
        Gráficos Dinâmicos."
      />
      <ClassesComponent
        idLabelledbyCard="class-4"
        title="MASTERCLASS"
        dateDay="26/08"
        dateString="Sexta-feira"
        description="Variações do PROCV,
        
        Solver,
        Macro com Edição,
        Funções de Banco de Dados;
        Suplementos Power do Excel
        Dashboard."
      />
    </section>
  );
};

const TeacherSection = () => {
  const idLabelledby = "teacher-title";

  return (
    <section className={styles.teacherSection} aria-labelledby={idLabelledby}>
      <header className={styles.teacherSection__header}>
        <h3 className={styles.teacherSection__title} itemID={idLabelledby}>
          Os especialistas Excel Solutions que estarão à sua disposição nas
          aulas gratuitas:
        </h3>
      </header>

      <ul className={styles.teacherSection__list}>
          <TeacherCard imgUlr={"Adriana"} />
          <TeacherCard imgUlr={"Altamir"} />
          <TeacherCard imgUlr={"Joelson"} />
          <TeacherCard imgUlr={"Lucas"} />
          <TeacherCard imgUlr={"Paola"} />
      </ul>
    </section>
  );
};

const BrandSection = () => {
  const idLabelledby = "brand-logos";

  return (
    <section className={styles.brandSection} aria-labelledby={idLabelledby}>
      <header>
        <h3 className={styles.brandSection__title} itemID={idLabelledby}>
          Quem já aprendeu Excel com a Excel Solutions?
        </h3>
      </header>

      <nav className={styles.brandSection__brands}>
        <Brands imgUlr="furukawa" />
        <Brands imgUlr="mondelez" />
        <Brands imgUlr="o-boticario" />
        <Brands imgUlr="parana-banco" />
        <Brands imgUlr="pucpr" />
        <Brands imgUlr="renault" />
        <Brands imgUlr="rumo" />
      </nav>
    </section>
  );
};

function Main() {
  return (
    <main className={styles.main}>
      <PhotoSection />
      <ClassesSection />
      <TeacherSection />
      <BrandSection />
    </main>
  );
}

export default Main;
