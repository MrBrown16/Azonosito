

class TajSzam extends HTMLElement{
    constructor(){
        super();
        //példányosítás
        this.shadowDOM = this.attachShadow({mode: "open"});
        this.billentyuzet=this.billentyuzet.bind(this);
        this.felengedes=this.felengedes.bind(this);
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "./css/shadow.css");
        this.shadowDOM.appendChild(linkElem);
        //this.deleteKey=this.deleteKey.bind(this);
        //this.numberInputed=this.numberInputed.bind(this);
    }
    
    connectedCallback(){
        //felülethez való hozzáadás
        let mennyi = this.getAttribute("hossz");
        for(let i=1; i<=mennyi; i++){
            
            
            var rubrika = document.createElement("input");
            rubrika.size = 1;
            rubrika.maxLength = 1;
            let az = this.getAttribute("megnevezes");
            rubrika.id = az + i;
            rubrika.addEventListener("keydown", this.billentyuzet);
            rubrika.addEventListener("keyup", this.felengedes);
            this.shadowDOM.appendChild(rubrika);
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
    
    static get observedAttributes(){
        //return []; //valóságban itt az attribútumok azonosítói jelennek meg, melyeket módosíthatunk
        return["megnevezes", "hossz", "elso"];
    }
  
    billentyuzet(objektum){
        if(objektum.key<"0"||objektum.key>"9"&&objektum.key!=="Backspace"){
            objektum.preventDefault();
        }else if(objektum.key==="Backspace"&&objektum.target.value===""){
            this.deleteKey();
        }else{
            console.log("BU felengedes");
            this.felengedes();
            //this.numberInputed();
        }
    }
    deleteKey(objektum){
        switch(objektum){
            case objektum.id==="taj1":
                this.shadowDOM.getElementById("taj1").focus;
                break;
            case objektum.id==="taj2":
                this.shadowDOM.getElementById("taj1").focus;
                break;
            case objektum.id==="taj3":
                this.shadowDOM.getElementById("taj2").focus;
                break;
            case objektum.id==="taj4":
                this.shadowDOM.getElementById("taj3").focus;
                break;
            case objektum.id==="taj5":
                this.shadowDOM.getElementById("taj4").focus;
                break;
            case objektum.id==="taj6":
                this.shadowDOM.getElementById("taj5").focus;
                break;
            case objektum.id==="taj7":
                this.shadowDOM.getElementById("taj6").focus;
                break;
            case objektum.id==="taj8":
                this.shadowDOM.getElementById("taj7").focus;
                break;
            case objektum.id==="taj9":
                this.shadowDOM.getElementById("taj8").focus;
        }
    }
    numberInputed(objektum){
        switch(objektum){
            case objektum.id==="taj1":
                this.shadowDOM.getElementById("taj2").focus;
                break;
            case objektum.id==="taj2":
                this.shadowDOM.getElementById("taj3").focus;

            case objektum.id==="taj3":
                this.shadowDOM.getElementById("taj4").focus;
            
            case objektum.id==="taj4":
                this.shadowDOM.getElementById("taj5").focus;
            
            case objektum.id==="taj5":
                this.shadowDOM.getElementById("taj6").focus;
            
            case objektum.id==="taj6":
                this.shadowDOM.getElementById("taj7").focus;
            
            case objektum.id==="taj7":
                this.shadowDOM.getElementById("taj8").focus;
            
            case objektum.id==="taj8":
                this.shadowDOM.getElementById("taj9").focus;
            
            case objektum.id==="taj9":
                this.shadowDOM.getElementById("taj9").focus;
        }
    }
    
    felengedes(objektum){
        var rk1 = new RegExp("\\d+");
        var rk2 = new RegExp("\\D+");
        var szoveg = objektum.target.id.replace(rk1,"");
        var szam = objektum.target.id.replace(rk2,"");
        if(szam < this.getAttribute("hossz")+1){
            szam++;
        }
        this.shadowDOM.getElementById(szoveg+szam).focus();
    }
    
};