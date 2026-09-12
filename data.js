// Plan complet du site : chaque outil pointe vers sa page si elle existe,
// sinon href est null et la carte s'affiche en "Bientôt".
const SITE = {
  name: "Atelier",
  tagline: "Une boîte à outils du quotidien : calculs, texte, fichiers, sécurité, web — sans compte, sans pub, tout se passe dans ton navigateur.",
  categories: [
    {
      id: "calculs",
      title: "Calculs",
      icon: "calc",
      tools: [
        { name: "Calculatrice", href: "tools/calculatrice.html" },
        { name: "Calculatrice scientifique", href: "tools/calculatrice-scientifique.html" },
        { name: "Calcul de pourcentage", href: "tools/pourcentage.html" },
        { name: "TVA / taxes", href: "tools/tva.html" },
        { name: "Convertisseur de devises", href: "tools/devises.html" },
        { name: "Convertisseur d'unités", href: "tools/unites.html" },
        { name: "Calculateur d'âge", href: "tools/age.html" },
        { name: "Différence entre deux dates", href: "tools/difference-dates.html" },
        { name: "Générateur de nombres aléatoires", href: "tools/nombres-aleatoires.html" }
      ]
    },
    {
      id: "texte",
      title: "Texte",
      icon: "text",
      tools: [
        { name: "Compteur de mots et caractères", href: null },
        { name: "Convertisseur majuscules / minuscules", href: null },
        { name: "Supprimer les espaces inutiles", href: null },
        { name: "Inverser un texte", href: null },
        { name: "Trier des lignes par ordre alphabétique", href: null },
        { name: "Supprimer les doublons", href: null },
        { name: "Générateur de texte aléatoire", href: null },
        { name: "Encodeur / décodeur Base64", href: null },
        { name: "URL encode / decode", href: null },
        { name: "Compteur de mots répétés", href: null }
      ]
    },
    {
      id: "aleatoire",
      title: "Aléatoire",
      icon: "dice",
      tools: [
        { name: "Roue de choix", href: null },
        { name: "Tirage au sort", href: null },
        { name: "Générateur de dés", href: null },
        { name: "Générateur de mot de passe", href: null },
        { name: "Générateur de noms", href: null },
        { name: "Générateur de pseudo", href: null },
        { name: "Générateur de couleurs", href: null },
        { name: "Générateur de citations", href: null },
        { name: "Choisir un élément dans une liste", href: null }
      ]
    },
    {
      id: "fichiers",
      title: "Fichiers",
      icon: "files",
      tools: [
        { name: "Convertir des images", href: null },
        { name: "Redimensionner une image", href: null },
        { name: "Compresser une image", href: null },
        { name: "Rogner une image", href: null },
        { name: "Convertir PNG ↔ JPG ↔ WEBP", href: null },
        { name: "Générer un PDF", href: null },
        { name: "Fusionner des PDF", href: null },
        { name: "Séparer un PDF", href: null },
        { name: "Convertir CSV en tableau", href: null }
      ]
    },
    {
      id: "images",
      title: "Images et couleurs",
      icon: "palette",
      tools: [
        { name: "Pipette de couleur", href: null },
        { name: "Convertisseur HEX / RGB / HSL", href: null },
        { name: "Générateur de palettes", href: null },
        { name: "Créateur de dégradés CSS", href: null },
        { name: "Générateur d'ombres CSS", href: null },
        { name: "Générateur de bordures CSS", href: null },
        { name: "Générateur de favicon", href: null },
        { name: "Générateur de QR Code", href: null },
        { name: "Image en Base64", href: null }
      ]
    },
    {
      id: "dev",
      title: "Développeur",
      icon: "code",
      tools: [
        { name: "Formateur JSON", href: null },
        { name: "Minifier JSON", href: null },
        { name: "Validateur JSON", href: null },
        { name: "Beautifier HTML", href: null },
        { name: "Beautifier CSS", href: null },
        { name: "Beautifier JavaScript", href: null },
        { name: "Encodeur URL", href: null },
        { name: "Générateur de UUID", href: null },
        { name: "Générateur de hash", href: null },
        { name: "Convertisseur Timestamp ↔ Date", href: null },
        { name: "Générateur de Lorem Ipsum", href: null },
        { name: "Testeur Regex", href: null }
      ]
    },
    {
      id: "web",
      title: "Web",
      icon: "globe",
      tools: [
        { name: "Vérificateur d'adresse IP", href: null },
        { name: "Informations sur un domaine", href: null },
        { name: "Générateur de liens UTM", href: null },
        { name: "Testeur de redirection", href: null },
        { name: "Encodeur HTML", href: null },
        { name: "Décodeur HTML", href: null },
        { name: "Générateur de meta tags", href: null },
        { name: "Générateur de robots.txt", href: null },
        { name: "Générateur de sitemap", href: null }
      ]
    },
    {
      id: "securite",
      title: "Sécurité",
      icon: "shield",
      tools: [
        { name: "Générateur de mot de passe", href: null },
        { name: "Vérificateur de force de mot de passe (local)", href: null },
        { name: "Générateur de phrase secrète", href: null },
        { name: "Générateur de UUID", href: null },
        { name: "Hash d'un texte", href: null },
        { name: "Encodeur / décodeur Base64", href: null }
      ]
    },
    {
      id: "temps",
      title: "Temps",
      icon: "clock",
      tools: [
        { name: "Chronomètre", href: null },
        { name: "Minuteur", href: null },
        { name: "Compte à rebours", href: null },
        { name: "Horloge mondiale", href: null },
        { name: "Calculateur de dates", href: null },
        { name: "Générateur de calendrier", href: null },
        { name: "Quel jour était cette date ?", href: null },
        { name: "Convertisseur de fuseaux horaires", href: null }
      ]
    },
    {
      id: "fun",
      title: "Fun",
      icon: "fun",
      tools: [
        { name: "Pierre-feuille-ciseaux", href: null },
        { name: "Lancer de pièce", href: null },
        { name: "Lancer de dés", href: null },
        { name: "Roue de la fortune", href: null },
        { name: "Générateur de défis", href: null },
        { name: "Générateur de « Oui ou Non »", href: null },
        { name: "Test de vitesse de frappe", href: null },
        { name: "Compteur de clics", href: null },
        { name: "Générateur d'équipes aléatoires", href: null }
      ]
    }
  ]
};
