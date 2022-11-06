import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import React from "react";
import { GET_PDC } from "../../graphql/Queries";

const PDC = () => {
  const { loading, error, data } = useQuery(GET_PDC);

  if (loading)
    return (
      <div className="bg-light dark:bg-dark h-screen w-full flex items-center justify-center">
        <CircularProgress disableShrink className="m-8" />;
      </div>
    );
  if (error) return `Error! ${error.message}`;
  const pdc = data?.allPDC?.nodes[0]?.pdc?.pdc;
  console.log(pdc);
  return (
    <div className="text-light dark:text-dark p-8">
      <div dangerouslySetInnerHTML={{ __html: pdc }} />
    </div>

    /*  <article className="text-light dark:text-dark p-8">
      <header>
        <h1>Politique de confidentialité</h1> <br />
      </header>

      <div>
        <section>
          <p>
            Les sites web WordPress.org (collectivement
            «&nbsp;WordPress.org&nbsp;» dans ce document) font référence aux
            sites hébergés sur WordPress.org, WordPress.net, WordCamp.org,
            BuddyPress.org, bbPress.org, et d’autres domaines et sous-domaines
            connexes. Cette politique de confidentialité décrit comment
            WordPress.org utilise et protège les informations que vous nous
            fournissez. Nous nous engageons à protéger votre vie privée. Si vous
            nous fournissez des informations personnelles par l’intermédiaire de
            WordPress.org, vous pouvez être assuré·e qu’ils ne seront utilisés
            que conformément à la présente déclaration de confidentialité.
          </p>{" "}
          <br />
          <br />
          <h2>Personnes visitant le site</h2> <br /> <br />
          <p>
            Comme la plupart des exploitants de sites Web, WordPress.org
            recueille des informations non nominatives du type de celles que les
            navigateurs et les serveurs rendent généralement disponibles, comme
            le type de navigateur, la langue de préférence, le site de
            référence, ainsi que la date et l’heure de chaque demande des
            personnes visitant le site. Le but de WordPress.org en recueillant
            des informations d’identification non personnelles est de mieux
            comprendre comment les personnes visitant le site de WordPress.org
            utilisent son site Web. De temps à autre, WordPress.org peut publier
            des informations non nominatives et généralistes, par exemple, en
            publiant un rapport sur les tendances d’utilisation de son site Web.
          </p>{" "}
          <br />
          <p>
            WordPress.org recueille également des informations potentiellement
            personnelles, telles que des adresses IP (Internet Protocol).
            WordPress.org n’utilise cependant pas les adresses IP pour
            identifier les personnes visitant le site et ne divulgue pas de
            telles informations, sauf dans les mêmes circonstances que celles où
            nous utilisons et divulguons les informations d’identification
            personnelle, comme décrit ci-dessous.
          </p>{" "}
          <br />
          <br />
          <h2>
            Collecte d’informations d’identification personnelle
          </h2> <br /> <br />
          <p>
            Certaines personnes visitant le site WordPress.org choisissent
            d’interagir avec WordPress.org d’une manière qui exige que
            WordPress.org recueille des informations d’identification
            personnelle. La quantité et le type d’informations que WordPress.org
            recueille dépend de la nature de cette interaction. Par exemple,
            nous demandons aux personnes visitant le site qui utilisent nos
            forums de fournir un identifiant et une adresse e-mail.
          </p>{" "}
          <br />
          <p>
            Dans chaque cas, WordPress.org ne recueille de telles informations
            que dans la mesure où cela est nécessaire ou approprié pour remplir
            l’objectif de l’interaction des personnes visitant le site avec
            WordPress.org. WordPress.org ne divulgue aucune information
            d’identification personnelle autres que celles décrites ci-dessous.
            Et les personnes visitant le site peuvent toujours refuser de
            fournir des informations d’identification personnelle, avec la mise
            en garde que cela peut les empêcher de s’engager dans certaines
            activités liées au site web, comme l’achat d’un billet pour un
            WordCamp.
          </p>{" "}
          <br />
          <p>
            Toutes les informations collectées sur WordPress.org seront gérées
            en accord avec la législation GDPR.
          </p>{" "}
          <br />
          <br />
          <h2>
            Protection des informations susceptibles d’identifier les individus
          </h2>{" "}
          <br /> <br />
          <p>
            WordPress.org ne divulgue d’informations personnelles
            potentiellement identifiantes et personnellement identifiables
            qu’aux administrateurs de projet, employés, sous-traitants et
            organisations affiliées qui (i) ont besoin de connaître ces
            informations pour pouvoir les traiter pour le compte de
            WordPress.org ou pour fournir des services disponibles sur
            WordPress.org, et (ii) qui ont accepté de ne pas les divulguer à
            d’autres. Certains de ces employés, sous-traitants et organisations
            affiliées peuvent être situés en dehors de votre pays d’origine. En
            utilisant WordPress.org, vous consentez au transfert de ces
            informations.
          </p>{" "}
          <br />
          <p>
            WordPress.org ne louera ni ne vendra à qui que ce soit des
            informations d’identification personnelle. À l’exception des
            administrateurs de projet, employés, sous-traitants et organisations
            affiliées, comme décrit ci-dessus, WordPress.org ne divulgue des
            informations d’identification personnelle que lorsque la loi
            l’exige, si vous donnez l’autorisation de partager vos informations,
            ou lorsque WordPress.org croit de bonne foi que la divulgation est
            raisonnablement nécessaire pour protéger la propriété ou les droits
            de WordPress.org, de tiers ou du public en général.
          </p>{" "}
          <br />
          <p>
            Si vous avez un compte enregistré d’un site web WordPress.org et que
            vous avez fourni votre adresse e-mail, WordPress.org peut
            occasionnellement vous envoyer un message pour vous informer des
            nouvelles fonctionnalités, solliciter vos commentaires ou simplement
            vous tenir au courant de ce qui se passe sur WordPress.org et nos
            produits. Nous utilisons principalement notre blog pour communiquer
            ce type d’information, donc nous gardons ce type d’e-mail au strict
            minimum.
          </p>{" "}
          <br />
          <p>
            Si vous nous envoyez une demande (par exemple via un e-mail
            d’assistance ou via l’un de nos mécanismes de retour
            d’informations), nous nous réservons le droit de la publier afin de
            nous aider à clarifier ou à répondre à votre demande ou pour nous
            aider à prendre en charge d’autres utilisatrices et utilisateurs.
            WordPress.org prend toutes les mesures raisonnablement nécessaires
            pour se protéger contre l’accès, l’utilisation, la modification ou
            la destruction non autorisée d’informations potentiellement
            personnelles permettant de vous identifier.
          </p>{" "}
          <br />
          <br />
          <h2>Utilisation de données personnelles</h2> <br /> <br />
          <p>
            Nous utilisons les informations que vous nous fournissez pour vous
            créer un compte, assister à nos évènements, recevoir des
            newsletters, utiliser certains autres services, ou participer au
            projet open source WordPress de toute autre manière.
          </p>{" "}
          <br />
          <p>
            Nous ne vendrons ni ne céderons vos renseignements personnels à des
            tiers à moins d’avoir votre autorisation ou d’y être obligé par la
            loi.
          </p>{" "}
          <br />
          <p>
            Nous aimerions vous envoyer des e-mails de communication marketing
            qui pourraient vous intéresser de temps en temps. Si vous avez
            consenti, vous pourrez retirer votre consentement plus tard.
          </p>{" "}
          <br />
          <p>
            Vous avez le droit à tout moment de nous demander d’arrêter de vous
            contacter à des fins de marketing. Si vous ne souhaitez plus être
            contacté à des fins de marketing, veuillez cliquer sur le lien de
            désabonnement au bas de l’e-mail.
          </p>{" "}
          <br />
          <br />
          <h2>
            Motifs légaux du traitement des renseignements personnels
          </h2>{" "}
          <br /> <br />
          <p>
            Nous nous appuyons sur une ou plusieurs des conditions de traitement
            suivantes&nbsp;:
          </p>{" "}
          <br />
          <ul>
            <li>
              nos intérêts légitimes dans la diffusion efficace de l’information
              et des services qui vous sont offerts&nbsp;;
            </li>
            <li>le consentement explicite que vous avez donné&nbsp;;</li>
            <li>obligations légales.</li>
          </ul>
          <br />
          <br />
          <h2>Accéder aux données</h2> <br /> <br />
          <p>
            Vous avez le droit de demander une copie des renseignements que nous
            détenons à votre sujet. Si vous désirez obtenir une copie de
            certains ou de tous vos renseignements personnels, veuillez suivre
            les instructions en bas de cette section.
          </p>{" "}
          <br />
          <p>
            Toutes les données fournies par les participants à un WordCamp
            peuvent être visualisées et modifiées par le participant via l’URL
            du jeton d’accès envoyé par e-mail lors de la confirmation de
            l’achat d’un billet.
          </p>{" "}
          <br />
          <p>
            Les comptes WordPress.org peuvent être modifiés en suivant ces
            étapes&nbsp;:
          </p>{" "}
          <br />
          <ol>
            <li>
              Visitez{" "}
              <a href="https://login.wordpress.org/">
                https://login.wordpress.org/
              </a>
              , et saisissez votre identifiant et votre mot de passe.{" "}
            </li>
            <li>
              Vous serez redirigé vers
              https://profiles.wordpress.org/votre_identifiant.
            </li>
            <li>
              Cliquez sur le lien «&nbsp;Modifier&nbsp;» à coté de votre
              identifiant.
            </li>
          </ol>
          <p>
            Si vous désirez demander l’accès aux données de votre compte,
            veuillez suivre ces étapes&nbsp;:
          </p>{" "}
          <br />
          <ol>
            <li>
              Visitez{" "}
              <a href="https://wordpress.org/about/privacy/data-export-request/">
                https://wordpress.org/about/privacy/data-export-request/
              </a>
              .{" "}
            </li>
            <li>Saisissez votre adresse e-mail.</li>
            <li>
              Cliquez sur «&nbsp;Accepter la déclaration et demander
              l’exportation &nbsp;».
            </li>
          </ol>
          <p>
            Note : si vous avez un compte WP.org, nous vous recommandons de vous
            connecter afin d’associer votre compte à cette demande.
          </p>{" "}
          <br />
          <br />
          <h2>Conservation des données personnelles</h2> <br /> <br />
          <p>
            Nous ne conserverons vos informations personnelles sur nos systèmes
            que le temps nécessaire pour le succès du projet open source
            WordPress et des programmes qui supportent WordPress.org. Nous
            conservons les informations de contact (telles que les informations
            de la liste de diffusion) jusqu’à ce qu’une personne se désabonne ou
            nous demande de supprimer directement ces informations de nos
            systèmes. Si vous choisissez de vous désabonner d’une liste de
            diffusion, il se peut que nous conservions certaines informations
            limitées à votre sujet afin de pouvoir honorer votre demande.
          </p>{" "}
          <br />
          <p>
            WordPress.org ne supprimera pas de données personnelles ou
            d’enregistrements nécessaires à l’opération, au développement ou les
            archives du projet open-source WordPress.
          </p>{" "}
          <br />
          <p>
            WordPress.org peut conserver les données d’un participant à un
            Wordcamp pendant 3 ans pour un meilleur suivi et favoriser la
            croissance de la communauté, pour ensuite supprimer les données non
            essentielles collectées lors de l’inscription. Les nom, prénom et
            adresses de messagerie d’un participant seront conservées
            indéfiniment, pour assurer notre capacité à répondre au rapports de
            code de conduite.
          </p>{" "}
          <br />
          <p>
            Sur les sites WordCamp.org, les données bancaires ou financières
            collectées afin de pouvoir procéder aux demandes de remboursements
            sont supprimées de WordCamp.org sept jours après le paiement. La
            raison de ce délai de 7 jours est d’éviter aux organisatrices et
            organisateurs de devoir ressaisir les données bancaires si le
            paiement échoue ou s’il est indiqué comme réussi par erreur. Les
            factures et reçus liés aux dépenses des WordCamps sont retenus
            pendant 7 ans après la fermeture des comptes de l’année écoulée, par
            instruction de nos consultants financiers.
          </p>{" "}
          <br />
          <p>
            Quand la suppression est demandée ou nécessaire pour toute autre
            raison, nous rendrons anonymes les données relatives aux personnes
            concernées et/ou supprimerons leurs données de tout site
            publiquement accessible si la suppression de ces données provoquait
            une défaillance de systèmes essentiels ou endommageait les
            enregistrements ou historiques nécessaire au fonctionnement,
            développement, ou archives du projet open source WordPress.
          </p>{" "}
          <br />
          <p>
            Si vous souhaitez demander la suppression de votre compte et de ses
            données associées, veuillez suivre les étapes suivantes&nbsp;:
          </p>{" "}
          <br />
          <ol>
            <li>
              Visitez{" "}
              <a href="https://wordpress.org/about/privacy/data-erasure-request/">
                https://wordpress.org/about/privacy/data-erasure-request/
              </a>
              .{" "}
            </li>
            <li>Saisissez votre adresse e-mail.</li>
            <li>
              Cliquez sur «&nbsp;J’accepte cette déclaration et demande la
              suppression définitive de mon compte&nbsp;».
            </li>
          </ol>
          <p>
            Note : si vous avez un compte WP.org, nous vous recommandons de vous
            connecter afin d’associer votre compte à cette demande.
          </p>{" "}
          <br />
          <br />
          <h2>Droits en lien avec vos informations</h2> <br /> <br />
          <p>
            Vous pouvez avoir certains droits en vertu de la loi sur la
            protection des données concernant les renseignements personnels que
            nous détenons à votre sujet. En particulier, vous pouvez avoir le
            droit de&nbsp;:
          </p>{" "}
          <br />
          <ul>
            <li>
              demander une copie des données personnelles que nous détenons sur
              vous&nbsp;;
            </li>
            <li>
              nous demander de mettre à jour les renseignements personnels que
              nous détenons sur vous, ou de corriger de façon indépendante ces
              renseignements personnels qui, selon vous, sont incorrects ou
              incomplets;
            </li>
            <li>
              demander que nous supprimions les renseignements personnels que
              nous détenons sur vous à partir de systèmes en direct ou que nous
              limitions la façon dont nous utilisons ces renseignements
              personnels (pour plus d’informations sur la suppression des
              archives, consultez la section «&nbsp;conservation des
              renseignements personnels&nbsp;») ;
            </li>
            <li>
              s’opposer à notre traitement de vos informations
              personnelles&nbsp;; et/ou
            </li>
            <li>
              retirer votre consentement à notre traitement de vos
              renseignements personnels (dans la mesure où ce traitement est
              fondé sur le consentement et le consentement est la seule base
              admissible pour le traitement).
            </li>
          </ul>
          <p>
            Si vous souhaitez exercer ces droits ou comprendre si ces droits
            s’appliquent à vous, veuillez suivre les instructions à la fin de
            cette déclaration de confidentialité.
          </p>{" "}
          <br />
          <br />
          <h2>Liens de tierce partie</h2> <br /> <br />
          <p>
            Notre site peut contenir des liens vers d’autres sites fournis par
            des tierces parties qui ne sont pas sous notre contrôle. Lorsque
            vous suivez un lien et que vous fournissez des informations à un
            site tiers, sachez que nous ne sommes pas responsables des données
            fournies à cette tierce partie. Cette politique de confidentialité
            s’applique uniquement aux sites énumérés au début de ce document,
            donc lorsque vous visitez d’autres sites, même lorsque vous cliquez
            sur un lien publié sur WordPress.org, vous devriez lire leurs
            propres politiques de confidentialité.
          </p>{" "}
          <br />
          <br />
          <h2>Statistiques agrégées</h2> <br /> <br />
          <p>
            WordPress.org peut collecter des statistiques sur le comportement
            des personnes visitant ses sites web. Par exemple, WordPress.org
            peut révéler combien de fois une version particulière de WordPress a
            été téléchargée ou indiquer les extensions les plus populaires, en
            fonction des données collectées par <code>api.wordpress.org</code>,
            un service web utilisé par les installations WordPress pour vérifier
            les nouvelles versions de WordPress et d’extensions. Cependant,
            WordPress.org ne divulgue aucune information d’identification
            personnelle autre que celles décrite dans cette politique.
          </p>{" "}
          <br />
          <br />
          <h2>Cookies</h2> <br /> <br />
          <p>
            En outre, des informations sur la façon dont vous utilisez notre
            site sont collectées automatiquement en utilisant les
            «&nbsp;cookies&nbsp;». Les cookies sont des fichiers texte placés
            sur votre ordinateur pour collecter les informations internet
            standards et des informations sur le comportement des personnes
            visitant le site. Ces informations servent à suivre l’utilisation du
            site par les visiteurs et à compiler des rapports statistiques sur
            l’activité du site.
          </p>{" "}
          <br />
          <p>
            Veuillez lire{" "}
            <a href="https://fr.wordpress.org/about/privacy/cookies/">
              notre politique de cookie
            </a>{" "}
            pour plus d’information concernant les cookies collectés sur
            WordPress.org.
          </p>{" "}
          <br />
          <br />
          <h2>Modifications de la politique de confidentialité</h2> <br />{" "}
          <br />
          <p>
            Bien que la plupart des changements soient mineurs, WordPress.org
            peut changer sa politique de confidentialité de temps en temps, et à
            la seule discrétion de WordPress.org. WordPress.org encourage les
            personnes visitant le site à consulter fréquemment cette page pour
            tout changement à sa politique de confidentialité. Votre utilisation
            continue de ce site après tout changement de cette politique de
            confidentialité constituera votre acceptation d’un tel changement.
          </p>{" "}
          <br />
          <br />
          <h2>Contact</h2> <br /> <br />
          <p>
            Veuillez nous contacter si vous avez des questions relatives à notre
            politique de confidentialité ou les informations que nous détenons à
            votre propos en écrivant à dpo@wordpress.org.
          </p>{" "}
        </section>
      </div>
    </article> */
  );
};

export default PDC;
