import PageTemplate from "@/components/SolutionsTemplate";
import comm_img from "../../images/commerciale.jpg";
import analyses from "../../images/analyses.png";
import personnalisable from "../../images/personnalisable.png";
import sécurité from "../../images/sécurité.png";
import tempsréel from "../../images/temps-réel.png";

const page = () => {
  return (
    <PageTemplate
      title="WINSOFT GARAGE PLUS"
      subtitle="Votre allié pour une gestion commerciale simplifiée et performante"
      mainImage={comm_img}
      featureIcons={[
        { src: analyses, alt: "Analyses" },
        { src: tempsréel, alt: "Temps réel" },
        { src: sécurité, alt: "Sécurité" },
        { src: personnalisable, alt: "Personnalisable" },
      ]}
      description={[
        "Dans un monde où les entreprises s’appuient sur des données stratégiques pour assurer leur succès, les responsables ont besoin de solutions fiables, intuitives et puissantes. Winsoft Commercial Plus répond à ces exigences avec un logiciel ergonomique conçu pour optimiser vos opérations commerciales.",
        "Avec Winsoft Commercial Plus, vous pouvez :",
      ]}
      bullets={[
        "Établir et gérer facilement vos inventaires.",
        "Automatiser vos processus d'achats et de ventes.",
        "Consulter et éditer instantanément les journaux de ventes, règlements clients, et bien plus encore.",
      ]}
      additionalInfo={[
        "Notre solution ne se limite pas à la gestion quotidienne. Elle analyse votre activité grâce à des statistiques et des indicateurs de performance, tout en vous offrant un environnement de travail personnalisable et sécurisé. Prenez des décisions éclairées avec un accès immédiat et sécurisé à vos données essentielles.",
      ]}
      additionalText="Winsoft Commercial Plus : La solution pour transformer vos données en résultats."
      downloadLink="https://winsoftinformatique.tn/wp-content/uploads/2020/01/WinsoftCommercialPlus.pdf"
    />
  );
};

export default page;
