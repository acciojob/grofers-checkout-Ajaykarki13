const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll(".price")
  let sum =0;
for(let i=0;i<prices.length;i++)
		{
			sum = sum + parseInt( prices[i].innerHTML)
		}
	let lastrow =  document.createElement("tr")
	lastrow.innerHTML =
		`<td>total price</td
  <td>${sum}</td>` ;
	let table = document.querySelector(".table")
  table.append(lastrow)

};
getSumBtn.addEventListener("click", getSum);
