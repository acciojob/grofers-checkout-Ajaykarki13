const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let prices=document.querySelectorAll(".price");
let totalPrice=0;
  for(let i=0;i<prices.length;i++){
    totalPrice+=Number(prices[i].innerHTML);
  }
  console.log(totalPrice);
  let row=document.createElement("tr");
//   let td1=document.createElement("td");
//   td1.textContent="Total Price";
  let td2=document.createElement("td");
  td2.textContent=totalPrice;
  td2.setAttribute("id","ans");
  row.append(td2);
  document.querySelector("table").append(row);
};

getSumBtn.addEventListener("click", getSum);
	
	/*
  let prices = document.querySelectorAll(".price")
  let sum =0;
for(let i=0;i<prices.length;i++)
		{
			sum = sum + parseInt( prices[i].innerHTML)
		}
	let lastrow =  document.createElement("tr")
	let table =document.querySelector("table")
	let td =  document.createElement("td")
	td.innerHTML = sum
	//`
 // <td>${sum}</td>` ;
	//let table = document.querySelector(".table")
 // table.append(lastrow)
lastrow.append(td)
	table.append(lastrow)
};
getSumBtn.addEventListener("click", getSum);
*/
