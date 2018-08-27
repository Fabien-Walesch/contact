let contacts = [];
let contact =
        {
            // Initialise le contact de base
            initContact: function (nom, prenom) {
                this.nom = nom;
                this.prenom = prenom;
            },
            // Renvoie la description du contact
            afficherContact: function () {
                let description = "Nom:" + this.nom + " , Prénom: " + this.prenom;
                return description;
 
            },
            ajouterContact: function (nom, prenom) {
                this.initContact(nom, prenom);
                contacts.push(this);
            },
        };
 
let contact1 = Object.create(contact);
contact1.initContact("Lévisse", "Carole");
let contact2 = Object.create(contact);
contact2.initContact("Nelsonne", "Mélodie");
 
contacts.push(contact1);
contacts.push(contact2);
 
console.log("Bienvenue dans le gestionnaire des contacts");
console.log("1: Lister les contacts");
console.log("2: Ajouter les contacts");
console.log("0: Quitter");
 
do
{
    var choix = Number(prompt("Choisissez une option"));
    switch (choix)
    {
        case 0 :
            console.log("Au Revoir");
            break;
        case 1 :
            for (i=0; i<contacts.length; i++)
            {
                console.log(contacts[i].afficherContact());
            }
 
            break;
 
        case 2 :
            let nouveauNom = prompt("Saisissez le nom du nouveau contact");
            let nouveauPrenom = prompt("Saisissez le prénom du nouveau contact");
 
            let nouveaucontact = Object.create(contact);
            nouveaucontact.ajouterContact(nouveauNom, nouveauPrenom);
            console.log("Le contact a bien était ajouté !");
            break;
 
    }
} while (choix !== 0);