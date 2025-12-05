class Empresa {
    constructor (nom, adreça){
        this.nom = nom;
        this.adreça = adreça;
        this.deute = 0;
    }
    incrementDeute(n){
        this.deute += n;
    }
    totPagat(){
        this.deute = 0;
    }
}

class Paquet {
    constructor (origen, destinacio, cost){
        this.origen = origen;
        this.destinacio = destinacio;
        this.cost = cost;
        this.lliurat = false;
    }
    lliuramentFet(){
        this.origen.incrementDeute(this.cost);
        this.lliurat = true;
    }
}