export class Utilisateur{
    
    constructor(public id,public nom :string , public prenom : string , 
        public matricule : string , public email : string , public password : string , 
        public tel : string, public role :string[],
         public enabled :boolean,public idcaisse:number) {
   
  
  
    }}