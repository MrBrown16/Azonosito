class Azonosito extends HTMLElement{
    #tajTomb=[3, 7, 3, 7, 3, 7, 3, 7]; //private
    #tajOszto=10;
    
    #adoTomb=[1, 2, 3, 4, 5, 6, 7, 8, 9];
    #adoOszto=11;

    #omTomb=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    #omOszto=11;
    
    
    
    
    
    constructor(){
        super();
        
        this.arnyek = this.attachShadow({mode: "open"});
        
        this.billentyuzet = this.billentyuzet.bind(this);
        this.felengedes = this.felengedes.bind(this);
        
        
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "./css/shadow.css");
        this.arnyek.appendChild(linkElem);
        this.mehet = false;
        
    
    
    }
    connectedCallback(){
        var mennyi = this.getAttribute("hossz");
        var az = this.getAttribute("megnevezes");
        var elso = this.getAttribute("elso");
        for(var i=1; i<=mennyi; i++){            
            var rubrika = document.createElement("input");

            rubrika.name = az + "[]";
            rubrika.id = az + i;
            if (i === 1 && elso!==""){
                rubrika.value = elso;
                rubrika.disabled = true;
            }
            rubrika.size = 1;
            rubrika.maxLength = 1;
            rubrika.addEventListener("keydown", this.billentyuzet);
            rubrika.addEventListener("keyup", this.felengedes);
            this.arnyek.appendChild(rubrika);
        }
    }
    
    disconnectCallback(){
        //felületről történő elvétel
    }
    
    attributesChangedCallback(){
        //a tag-paraméter megváltoztatása
    }
    
    adoptedCallback(){
        //Más felületre való áthelyezés
    }
    
    static get observedAttributes() {
        //return []; //valóságban itt az attribútumok azonosítói jelennek meg, melyeket módosíthatunk
        return["megnevezes", "hossz", "elso"];
    }
    
    billentyuzet(objektum){
        if(objektum.key<"0"||objektum.key>"9" || objektum.key==="Backcpace"){
            objektum.preventDefault();
            this.mehet = false;
            
        }
    }
    
    felengedes(objektum){
        var rk1 = new RegExp("\\d+");
        var rk2 = new RegExp("\\D+");
        var szoveg = objektum.target.id.replace(rk1,"");
        var szam = objektum.target.id.replace(rk2,"");
        szam++;
        var mennyi = this.getAttribute("hossz");
        if(szam===mennyi){
            if(this.ellenorzo(szoveg)){
                let tomb = this.arnyek.children;
                for (var i = 1; i < tomb.length; i++){
                    tomb[i].className = "oke";
                }
                tomb[tomb.length-1]
            }else{
            this.arnyek.getElementById(szoveg+szam).focus();
            }
        }    
    }

    
    
    #ellenorzo(melyik){
        var szorzok = eval("this.#" + melyik + "Tomb");
        var osszeg = 0;
        var tomb = this.arnyek.children;
        var vmi = [];
        for (var i = 1; i<tomb.length; i++){
            
        }
        for(var i=0; i<szorzok.length; i++){
            osszeg+= (vmi[i]*szorzok[i]);
        }
        var oszto = eval("this.#" + melyik + "Oszto");
        
        if (vmi[szorzok.length]==osszeg%oszto){
            return true;
        }else{
            return false;
        }
        
        
    }
    
    
}