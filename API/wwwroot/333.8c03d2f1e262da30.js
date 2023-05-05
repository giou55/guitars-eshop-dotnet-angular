"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[333],{4333:($,S,r)=>{r.r(S),r.d(S,{ShopModule:()=>h});var u=r(6895),y=r(4466),C=r(9838),Z=r(5698),t=r(1571),P=r(529),f=r(9646),x=r(4004),A=r(2340);class B{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6,this.search=""}}class c{constructor(o){this.http=o,this.baseUrl=A.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.shopParams=new B,this.productCache=new Map}getProducts(o=!0){if(o||(this.productCache=new Map),this.productCache.size>0&&o&&this.productCache.has(Object.values(this.shopParams).join("-"))&&(this.pagination=this.productCache.get(Object.values(this.shopParams).join("-")),this.pagination))return(0,f.of)(this.pagination);let e=new P.LE;return this.shopParams.brandId>0&&(e=e.append("brandId",this.shopParams.brandId)),this.shopParams.typeId&&(e=e.append("typeId",this.shopParams.typeId)),e=e.append("sort",this.shopParams.sort),e=e.append("pageIndex",this.shopParams.pageNumber),e=e.append("pageSize",this.shopParams.pageSize),this.shopParams.search&&(e=e.append("search",this.shopParams.search)),this.http.get(this.baseUrl+"products",{params:e}).pipe((0,x.U)(s=>(this.productCache.set(Object.values(this.shopParams).join("-"),s),this.pagination=s,s)))}setShopParams(o){this.shopParams=o}getShopParams(){return this.shopParams}getProduct(o){const e=[...this.productCache.values()].reduce((s,i)=>({...s,...i.data.find(a=>a.id===o)}),{});return 0!==Object.keys(e).length?(0,f.of)(e):this.http.get(this.baseUrl+"products/"+o)}getBrands(){return this.brands.length>0?(0,f.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,x.U)(o=>this.brands=o))}getTypes(){return this.types.length>0?(0,f.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,x.U)(o=>this.types=o))}}c.\u0275fac=function(o){return new(o||c)(t.LFG(P.eN))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var k=r(8909),T=r(5866);function q(n,o){if(1&n&&(t.TgZ(0,"h5",14),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" \u0388\u03c7\u03b5\u03c4\u03b5 ",e.quantityInBasket," \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b1\u03c0\u03cc \u03c4\u03bf \u03c0\u03c1\u03bf\u03ca\u03bf\u03bd \u03b1\u03c5\u03c4\u03cc \u03c3\u03c4\u03bf \u03ba\u03b1\u03bb\u03ac\u03b8\u03b9 \u03c3\u03b1\u03c2 ")}}function I(n,o){if(1&n&&(t.TgZ(0,"h5",14),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" \u0388\u03c7\u03b5\u03c4\u03b5 ",e.quantityInBasket," \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03b1 \u03b1\u03c0\u03cc \u03c4\u03bf \u03c0\u03c1\u03bf\u03ca\u03bf\u03bd \u03b1\u03c5\u03c4\u03cc \u03c3\u03c4\u03bf \u03ba\u03b1\u03bb\u03ac\u03b8\u03b9 \u03c3\u03b1\u03c2 ")}}function N(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",5)(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,q,2,1,"h5",7),t.YNc(10,I,2,1,"h5",7),t.TgZ(11,"div",8)(12,"i",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.decrementQuantity())}),t.qZA(),t.TgZ(13,"span",10),t._uU(14),t.qZA(),t.TgZ(15,"i",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.incrementQuantity())}),t.qZA(),t.TgZ(16,"button",12),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.updateBasket())}),t._uU(17),t.qZA()(),t.TgZ(18,"div",13)(19,"h4"),t._uU(20,"\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae"),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.Dn7(8,10,e.product.price,"EUR","symbol")),t.xp6(2),t.Q6J("ngIf",1===e.quantityInBasket),t.xp6(1),t.Q6J("ngIf",e.quantityInBasket>1),t.xp6(4),t.hij(" ",e.quantity," "),t.xp6(2),t.Q6J("disabled",e.quantity===e.quantityInBasket),t.xp6(1),t.Oqu(e.buttonText),t.xp6(5),t.Oqu(e.product.description)}}class d{constructor(o,e,s,i){this.shopService=o,this.activatedRoute=e,this.bcService=s,this.basketService=i,this.quantity=1,this.quantityInBasket=0,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}loadProduct(){const o=this.activatedRoute.snapshot.paramMap.get("id");o&&this.shopService.getProduct(+o).subscribe({next:e=>{this.product=e,this.bcService.set("@productDetails",e.name),this.basketService.basketSource$.pipe((0,Z.q)(1)).subscribe({next:s=>{const i=s?.items.find(a=>a.id===+o);i&&(this.quantity=i.quantity,this.quantityInBasket=i.quantity)}})},error:e=>console.log(e)})}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity--}updateBasket(){if(this.product)if(this.quantity>this.quantityInBasket){const o=this.quantity-this.quantityInBasket;this.quantityInBasket+=o,this.basketService.addItemToBasket(this.product,o)}else{const o=this.quantityInBasket-this.quantity;this.quantityInBasket-=o,this.basketService.removeItemFromBasket(this.product.id,o)}}get buttonText(){return 0===this.quantityInBasket?"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03c4\u03bf \u03ba\u03b1\u03bb\u03ac\u03b8\u03b9":"\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7 \u03ba\u03b1\u03bb\u03b1\u03b8\u03b9\u03bf\u03cd"}}function M(n,o){if(1&n&&(t.TgZ(0,"span")(1,"strong"),t._uU(2),t.qZA(),t._uU(3," \u03b1\u03c0\u03cc "),t.TgZ(4,"strong"),t._uU(5),t.qZA(),t._uU(6," \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1 "),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.AsE(" ",(e.pageNumber-1)*e.pageSize+1," - ",e.pageNumber*e.pageSize>e.totalCount?e.totalCount:e.pageNumber*e.pageSize," "),t.xp6(3),t.Oqu(e.totalCount)}}function w(n,o){if(1&n&&(t.TgZ(0,"header"),t.YNc(1,M,7,3,"span",0),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.totalCount>0)}}function O(n,o){1&n&&(t.TgZ(0,"header")(1,"span"),t._uU(2,"\u03a5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd "),t.TgZ(3,"strong"),t._uU(4,"0"),t.qZA(),t._uU(5," \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1"),t.qZA()())}d.\u0275fac=function(o){return new(o||d)(t.Y36(c),t.Y36(C.gz),t.Y36(k.pm),t.Y36(T.v))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-12","col-md-6"],[1,"w-100",3,"src","alt"],[1,"col-12","col-md-6","mt-5"],[2,"font-size","2em"],["class","text-primary mb-3",4,"ngIf"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-danger","me-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-danger","ms-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","ms-4",3,"disabled","click"],[1,"row","mt-4"],[1,"text-primary","mb-3"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.YNc(1,N,23,14,"div",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",e.product))},dependencies:[u.O5,u.H9]});class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:2,vars:2,consts:[[4,"ngIf"]],template:function(o,e){1&o&&(t.YNc(0,w,2,1,"header",0),t.YNc(1,O,6,0,"header",0)),2&o&&(t.Q6J("ngIf",e.totalCount&&e.pageNumber&&e.pageSize),t.xp6(1),t.Q6J("ngIf",0===e.totalCount))},dependencies:[u.O5]});var U=r(2521),v=r(433);function F(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"pagination",1),t.NdJ("pageChanged",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onPagerChanged(i))}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("boundaryLinks",!0)("totalItems",e.totalCount)("itemsPerPage",e.pageSize)("maxSize",10)("ngModel",e.pageNumber)}}class m{constructor(){this.pageChanged=new t.vpe}onPagerChanged(o){this.pageChanged.emit(o.page)}}function J(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.TgZ(3,"div",4)(4,"button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addItemToBasket())}),t._UZ(5,"i",6),t.qZA(),t.TgZ(6,"button",7),t._uU(7," \u03a0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae "),t.qZA()()(),t.TgZ(8,"div",8)(9,"a",9)(10,"h6",10),t._uU(11),t.qZA()(),t.TgZ(12,"span",11),t._uU(13),t.ALo(14,"currency"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(4),t.MGl("routerLink","/shop/",e.product.id,""),t.xp6(5),t.hij(" ",e.product.name," "),t.xp6(2),t.Oqu(t.Dn7(14,5,e.product.price,"EUR","symbol"))}}m.\u0275fac=function(o){return new(o||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:1,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","maxSize","ngModel","pageChanged",4,"ngIf"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","maxSize","ngModel","pageChanged"]],template:function(o,e){1&o&&t.YNc(0,F,1,5,"pagination",0),2&o&&t.Q6J("ngIf",e.totalCount&&e.pageSize)},dependencies:[u.O5,U.Qt,v.JJ,v.On]});class g{constructor(o){this.basketService=o}addItemToBasket(){this.product&&this.basketService.addItemToBasket(this.product)}}g.\u0275fac=function(o){return new(o||g)(t.Y36(T.v))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["class","card h-100 shadow-sm",4,"ngIf"],[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","flex-row","align-items-center","justify-content-center","hover-overlay"],[1,"btn","btn-primary","me-2",3,"click"],[1,"fa","fa-shopping-cart"],[1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],["href","",1,"text-decoration-none"],[1,"text-uppercase"],[1,"mb-2"]],template:function(o,e){1&o&&t.YNc(0,J,15,9,"div",0),2&o&&t.Q6J("ngIf",e.product)},dependencies:[u.O5,C.rH,u.H9],styles:[".image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}"]});const z=["search"],D=["searchMobile"];function Q(n,o){if(1&n&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&n){const e=o.$implicit,s=t.oxw(2);t.Q6J("selected",s.shopParams.sort===e.value)("value",e.value),t.xp6(1),t.hij(" ",e.name," ")}}function H(n,o){if(1&n&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&n){const e=o.$implicit,s=t.oxw(2);t.Q6J("selected",e.id===s.shopParams.brandId)("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function Y(n,o){if(1&n&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&n){const e=o.$implicit,s=t.oxw(2);t.Q6J("selected",e.id===s.shopParams.typeId)("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function j(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"li",30),t.NdJ("click",function(){const a=t.CHM(e).$implicit,b=t.oxw(2);return t.KtG(b.onBrandSelected(a.id))}),t._uU(1),t.qZA()}if(2&n){const e=o.$implicit,s=t.oxw(2);t.ekj("active",e.id===s.shopParams.brandId),t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function G(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"li",30),t.NdJ("click",function(){const a=t.CHM(e).$implicit,b=t.oxw(2);return t.KtG(b.onTypeSelected(a.id))}),t._uU(1),t.qZA()}if(2&n){const e=o.$implicit,s=t.oxw(2);t.ekj("active",e.id===s.shopParams.typeId),t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function E(n,o){if(1&n&&(t.TgZ(0,"div",31),t._UZ(1,"app-product-item",32),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("product",e)}}function K(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",33)(1,"app-pager",34),t.NdJ("pageChanged",function(i){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onPageChanged(i))}),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber)}}function R(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"section",3)(2,"h5",4),t._uU(3,"\u03a4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7"),t.qZA(),t.TgZ(4,"select",5),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onSortSelected(i))}),t.YNc(5,Q,2,3,"option",6),t.qZA(),t.TgZ(6,"div",7)(7,"h5",4),t._uU(8,"\u039a\u03b1\u03c4\u03b1\u03c3\u03ba\u03b5\u03c5\u03b1\u03c3\u03c4\u03ad\u03c2"),t.qZA(),t.TgZ(9,"select",5),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onBrandOptionSelected(i))}),t.YNc(10,H,2,3,"option",6),t.qZA(),t.TgZ(11,"h5",4),t._uU(12,"\u03a4\u03cd\u03c0\u03bf\u03c2"),t.qZA(),t.TgZ(13,"select",5),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onTypeOptionSelected(i))}),t.YNc(14,Y,2,3,"option",6),t.qZA(),t.TgZ(15,"div",8)(16,"input",9,10),t.NdJ("keyup.enter",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSearch())}),t.qZA(),t.TgZ(18,"button",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSearch())}),t._UZ(19,"i",12),t.qZA(),t.TgZ(20,"button",13),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onReset())}),t._UZ(21,"i",14),t.qZA()()(),t.TgZ(22,"div",15)(23,"h5",4),t._uU(24,"\u039a\u03b1\u03c4\u03b1\u03c3\u03ba\u03b5\u03c5\u03b1\u03c3\u03c4\u03ad\u03c2"),t.qZA(),t.TgZ(25,"ul",16),t.YNc(26,j,2,4,"li",17),t.qZA(),t.TgZ(27,"h5",4),t._uU(28,"\u03a4\u03cd\u03c0\u03bf\u03c2"),t.qZA(),t.TgZ(29,"ul",16),t.YNc(30,G,2,4,"li",17),t.qZA()()(),t.TgZ(31,"section",18)(32,"div",19),t._UZ(33,"app-paging-header",20),t.TgZ(34,"div",21)(35,"input",22,23),t.NdJ("keyup.enter",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSearch())}),t.qZA(),t.TgZ(37,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSearch())}),t._uU(38,"\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7"),t.qZA(),t.TgZ(39,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onReset())}),t._uU(40,"\u0395\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac"),t.qZA()()(),t.TgZ(41,"div",26),t.YNc(42,E,2,1,"div",27),t.qZA(),t.YNc(43,K,2,3,"div",28),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.sortOptions),t.xp6(5),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types),t.xp6(12),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types),t.xp6(3),t.Q6J("totalCount",e.totalCount)("pageNumber",e.shopParams.pageNumber)("pageSize",e.shopParams.pageSize),t.xp6(9),t.Q6J("ngForOf",e.products),t.xp6(1),t.Q6J("ngIf",e.totalCount>0)}}class _{constructor(o){this.shopService=o,this.products=[],this.brands=[],this.types=[],this.sortOptions=[{name:"\u0391\u03bb\u03c6\u03b1\u03b2\u03b7\u03c4\u03b9\u03ba\u03ac",value:"name"},{name:"\u03a4\u03b9\u03bc\u03ae: \u03a7\u03b1\u03bc\u03b7\u03bb\u03ae \u03c0\u03c1\u03bf\u03c2 \u03c5\u03c8\u03b7\u03bb\u03ae",value:"priceAsc"},{name:"\u03a4\u03b9\u03bc\u03ae: \u03a5\u03c8\u03b7\u03bb\u03ae \u03c0\u03c1\u03bf\u03c2 \u03c7\u03b1\u03bc\u03b7\u03bb\u03ae",value:"priceDesc"}],this.totalCount=0,this.shopParams=o.getShopParams()}ngOnInit(){this.getProducts(),this.getBrands(),this.getTypes()}getProducts(){this.shopService.getProducts().subscribe({next:o=>{this.products=o.data,this.totalCount=o.count},error:o=>console.log(o)})}getBrands(){this.shopService.getBrands().subscribe({next:o=>this.brands=[{id:0,name:"\u038c\u03bb\u03bf\u03b9"},...o],error:o=>console.log(o)})}getTypes(){this.shopService.getTypes().subscribe({next:o=>this.types=[{id:0,name:"\u038c\u03bb\u03bf\u03b9"},...o],error:o=>console.log(o)})}onBrandSelected(o){const e=this.shopService.getShopParams();e.brandId=o,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onBrandOptionSelected(o){const e=this.shopService.getShopParams();e.brandId=o.target.value,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onTypeSelected(o){const e=this.shopService.getShopParams();e.typeId=o,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onTypeOptionSelected(o){const e=this.shopService.getShopParams();e.typeId=o.target.value,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onSortSelected(o){const e=this.shopService.getShopParams();e.sort=o.target.value,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onPageChanged(o){const e=this.shopService.getShopParams();e.pageNumber!==o&&(e.pageNumber=o,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts())}onSearch(){const o=this.shopService.getShopParams();o.search=this.searchTerm?.nativeElement.value,o.pageNumber=1,this.shopService.setShopParams(o),this.shopParams=o,this.getProducts()}onReset(){this.searchTerm&&(this.searchTerm.nativeElement.value=""),this.shopParams=new B,this.shopService.setShopParams(this.shopParams),this.getProducts()}onSearchMobile(){const o=this.shopService.getShopParams();o.search=this.searchTermMobile?.nativeElement.value,o.pageNumber=1,this.shopService.setShopParams(o),this.shopParams=o,this.getProducts()}onResetMobile(){this.searchTermMobile&&(this.searchTermMobile.nativeElement.value=""),this.shopParams=new B,this.shopService.setShopParams(this.shopParams),this.getProducts()}}_.\u0275fac=function(o){return new(o||_)(t.Y36(c))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-shop"]],viewQuery:function(o,e){if(1&o&&(t.Gf(z,5),t.Gf(D,5)),2&o){let s;t.iGM(s=t.CRH())&&(e.searchTerm=s.first),t.iGM(s=t.CRH())&&(e.searchTermMobile=s.first)}},decls:2,vars:1,consts:[[1,"container","pb-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-0","col-md-5","col-lg-4","col-xl-3"],[1,"text-danger","ms-3"],[1,"form-select","mb-4",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"d-block","d-md-none"],[1,"d-flex","d-lg-none","mt-5","mb-3"],["type","text","placeholder","\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7...",1,"form-control","me-1",3,"keyup.enter"],["searchMobile",""],[1,"btn","btn-outline-primary","btn-sm","mx-1",3,"click"],[1,"fa","fa-search"],[1,"btn","btn-outline-danger","btn-sm",3,"click"],[1,"fa","fa-undo"],[1,"d-none","d-md-block"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[1,"col-12","col-md-7","col-lg-8","col-xl-9","mt-4"],[1,"d-flex","flex-column","flex-lg-row","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageNumber","pageSize"],[1,"d-none","d-md-flex","mt-2"],["type","text","placeholder","\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7...",1,"form-control","me-2",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","mx-2",3,"click"],[1,"btn","btn-outline-danger",3,"click"],[1,"row","row-cols-3","g-3","mb-5","mt-3"],["class","col-6 col-md-6 col-lg-4 col-xl-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[3,"selected","value"],[1,"list-group-item",3,"value","click"],[1,"col-6","col-md-6","col-lg-4","col-xl-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"totalCount","pageSize","pageNumber","pageChanged"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.YNc(1,R,44,10,"div",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",e.types.length>0&&e.brands.length>0))},dependencies:[u.sg,u.O5,l,m,v.YN,v.Kr,g],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#e95420b3;border-radius:10px}"]});const L=[{path:"",component:_},{path:":id",component:d,data:{breadcrumb:{alias:"productDetails"}}}];class p{}p.\u0275fac=function(o){return new(o||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[C.Bz.forChild(L),C.Bz]});class h{}h.\u0275fac=function(o){return new(o||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[u.ez,y.m,p]})}}]);