let formbutt = document.getElementById("formbutt");

let ProductName = document.getElementById("NameInput");
let ProductPrice = document.getElementById("PriceInput");
let ProductCategory = document.getElementById("CategoryInput");
let ProductDesc = document.getElementById("DescInput");
let arrpro;
let zxc;
if (localStorage.getItem("allproduct") == null) {
  arrpro = [];
} else {
  arrpro = JSON.parse(localStorage.getItem("allproduct"));
  addproducttotable();
}
formbutt.addEventListener("click", function () {
  if (formbutt.innerHTML == "ADD Product") {
    addpro();
  } else {
    saveupdaa();
    restValue()
  }
});

function restValue(){
  ProductName.value="",
  ProductPrice.value="",
  ProductCategory.value="",
  ProductDesc.value=""
}
function saveupdaa() {
  let mainpro = {
    name: ProductName.value,
    price: ProductPrice.value,
    category: ProductCategory.value,
    descrip: ProductDesc.value,
  };
  arrpro[zxc] = mainpro;
  localStorage.setItem("allproduct", JSON.stringify(arrpro));
  addproducttotable();
  formbutt.innerHTML = "ADD Product";
}
function addpro() {
  let mainpro = {
    name: ProductName.value,
    price: ProductPrice.value,
    category: ProductCategory.value,
    descrip: ProductDesc.value,
  };
  arrpro.push(mainpro);
  localStorage.setItem("allproduct", JSON.stringify(arrpro));
  addproducttotable();
  restValue()
}
//	let databasePrn=document.createElement("table");
function addproducttotable() {
  let boxmove = "";
  for (let i = 0; i < arrpro.length; i++) {
    boxmove += `<tr>
						<td>${i}</td>
						<td>${arrpro[i].name}</td>
						<td>${arrpro[i].price}</td>
						<td>${arrpro[i].category}</td>
						<td>${arrpro[i].descrip}</td>
						<td><button id="upd" inde="" onclick="updaatt(${i})" class=" btn btn-danger p-1   text-white p-2">Update</button></td>
						<td><button onclick="delettt(${i})" class="btn btn-danger p-1  text-white p-2">Delete</button></td>
					</tr>`;
  }
  document.getElementById("tabb").innerHTML = boxmove;
}
function delettt(index) {
  arrpro.splice(index, 1);
  localStorage.setItem("allproduct", JSON.stringify(arrpro));
  addproducttotable();
}
function updaatt(index) {
  zxc = index;
  ProductName.value = arrpro[index].name;
  ProductPrice.value = arrpro[index].price;
  ProductCategory.value = arrpro[index].category;
  ProductDesc.value = arrpro[index].descrip;
  formbutt.innerHTML = "Update";
  
}
// الاتنين فانكشنبتاع السيرش للتابل الرئيسى واللشيك بوك
let serchh = document.getElementById("chechinput");
serchh.onkeyup = function () {
  let carto = "";
  let cartox = "";
  let texcarto = "";
  for (let i = 0; i < arrpro.length; i++) {
    if (arrpro[i].name.includes(this.value.trim())) {
      carto += `<tr>
						<td>${i}</td>
						<td>${arrpro[i].name}</td>
						<td>${arrpro[i].price}</td>
						<td>${arrpro[i].category}</td>
						<td>${arrpro[i].descrip}</td>
						<td><button onclick="updaatt(${i})" class="p-1 bg-danger rounded-pill text-white p-2">Update</button></td>
						<td><button onclick="delettt(${i})" class="p-1 bg-danger rounded-pill text-white p-2">Delete</button></td>
					</tr>`;
      cartox = arrpro[i].name.replace(
        this.value.trim(),
        `<span style='color:red'>${this.value.trim()}</span>`
      );
      texcarto += `<h3>${cartox}</h3>`;
    }
    document.getElementById("tabb").innerHTML = carto;
    document.getElementById("prodserchfound").innerHTML = texcarto;
  }
};
