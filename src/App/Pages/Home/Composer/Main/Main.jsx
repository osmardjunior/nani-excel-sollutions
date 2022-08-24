// Components
import Button from "../../Components/Button/Button";
import Video from "../../../../Components/Video/Video";
import Card from "../../Components/Cards/Card";
import ClassesComponent from "../../Components/Classes/ClassesComponent";
import TeacherCard from "../../Components/Teacher/Teacher";
import Brands from "../../Components/Brands/Brands";
import TopWrapper from "../../../Thanks/Components/TopWrapper/TopWrapper";

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
      </header>
      <Video isVideo={true} url="https://vimeo.com/738749613" />
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
        dateDay="30/08"
        dateString="Terça-Feira"
        description=" Matemática básica (soma; subtração; divisão; multiplicação e porcentagem) Formatação de planilha; Colar Especial; Preenchimento relâmpago; Inserir e Formatar objetos Gráfico padrão; Lógica e Função SE."
      />
      <ClassesComponent
        className={` blur-blobs--right`}
        idLabelledbyCard="class-2"
        title="AULA 2"
        dateDay="31/08"
        dateString="Quarta-Feira"
        description="  Formatação Condicional; Condicionais matemáticas com um e mais critérios;
        
        Tratamento e Validação de Dados; 
        Aninhamento de funções condicionais;
         Gráficos Combinados; 
         PROCV e PROCH."
      />
      <ClassesComponent
        idLabelledbyCard="class-3"
        title="AULA 3"
        dateDay="01/09"
        dateString=" Quinta-feira"
        description="PROCX; Tabela Dinâmica; Como solucionar problemas de Fórmulas; Trabalhando com funções de Tempo e Texto; Gestão de Dados; Gráficos Dinâmicos."
      />
      <ClassesComponent
        idLabelledbyCard="class-4"
        title="MASTERCLASS"
        dateDay="02/09"
        dateString="Sexta-feira"
        blurry="Variações do PROCV,
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
        {/* <<<<<<< HEAD */}
        <TeacherCard
          imgUlr={"Lucas"}
          name={"Lucas Ferronato"}
          desciption={"Instrutor na Excel Solutions Brasil"}
          longDescription={
            "Formado em Administração pela PUC-PR e Especialista em Análise de Dados. Atualmente é instrutor na Excel Solutions Brasil e Engenheiro de Software na SAE Digital S.A"
          }
        />
        <TeacherCard
          imgUlr={"Adriana"}
          name={"Adriana Fontana"}
          desciption={"Instrutora na Excel Solutions Brasil"}
          longDescription={
            "Formada em Contabilidade pela USP, com MBA e Mestrado na FAE e FGV, respectivamente.Atualmente é instrutora na Excel Solutions Brasil e Business Consultant na Go On Consulting."
          }
        />
        <TeacherCard
          imgUlr={"Altamir"}
          name={"Altamir Pereira"}
          desciption={"Instrutor na Excel Solutions Brasil"}
          longDescription={
            "Formado em Engenharia Civil pela UFPR e mestrando na mesma instituição. Atualmente é Engenheiro de Projetos Estruturais na EGEL Engenharia Ltda."
          }
        />
        <TeacherCard
          imgUlr={"Joelson"}
          name={"Joelson Gomes"}
          desciption={"CEO da Excel Solutions Brasil"}
          longDescription={
            "Formado em Ciência da Computação pela UTP. É fundador e CEO da Excel Solutions Brasil, além de criador do método de ensino revolucionário da empresa."
          }
        />
        <TeacherCard
          imgUlr={"Paola"}
          name={"Paola Bertolae"}
          desciption={"Gerente Comercial na Excel Solutions Brasil"}
          longDescription={
            "Formada em Administração de Empresas pela PUC-PR. Atualmente é Gerente Comercial na Excel Solutions Brasil, onde está há mais de 4 anos."
          }
        />
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
