// create an empty array of Items
const budgetDB = [];

// Set budget 
const budgetMax = 100.00;

// Create a class call Items
class Items {
    constructor (itemName, itemQty, itemCost, subTotal) {
        this.itemName = itemName;
        this.itemQty = itemQty;
        this.itemCost = itemCost;
        // this.subTotal = subTotal;
    }
}

// function to grab user input
function getItemDetails() {
    if ($('#itemNameIn').val() == "" || $('#itemQtyIn').val() == "" || $('#itemCostIn').val() == ""){
        alert("Fields cannot be empty");
    }
    else{
        addToItemDetails($('#itemNameIn').val(), $('#itemQtyIn').val(), $('#itemCostIn').val());
        ($('#itemNameIn').val("")); $('#itemQtyIn').val(""), $('#itemCostIn').val("");

        calc();
    }
} // end getItemDetails


// Set document ready
$ (document).ready(readyNow);

function readyNow() {
    console.log('JQ Loaded');
    $ ('#submitBtn').on('click', getItemDetails);
    $ (document.getElementById("budgetAmount").innerHTML = "The amount of your budget is " + budgetMax + " dollars");
} // end readyNow

// function to create new budget item and push to the budgetDB array for user input from getItemDetails
// function addToItemDetails(itemName, itemQty, itemCost, subTotal) {
//     budgetDB.push(new Items (itemName, itemQty, itemCost, subTotal));
//     console.log(budgetDB);

    function addToItemDetails(itemName, itemQty, itemCost) {
        budgetDB.push(new Items (itemName, itemQty, itemCost));
        console.log(budgetDB);

    // $("#itemQtyIn").on('input', function () {
    //     let self = $(this);
    //     let costVal = self.next().val();
    //     self.next().next().val(costVal * self.val());
    //     fnAlltotal();
    // });
    
    // $("#itemCostIn").on('input', function () {
    //     var self = $(this);
    //     var qtyVal = self.prev().val();
    //     self.next().val(qtyVal * self.val());
    //     fnAlltotal();
    // });

    displayItemDetails();

    return true;
}
// // function to calculate total
// function fnAlltotal(){
//     var total=0
//       $(".amount").each(function(){
//            total += parseFloat($(this).val()||0);
//       });
//       $("#resultTotal").val(total);
  
//   }

// function to calculate totals
function calc() {
    let QtyIn = document.getElementById('itemQtyIn').value;
    let CostIn = document.getElementById('itemCostIn').value;
    let result = document.getElementById('result');
    let TotResult = QtyIn * CostIn;
    result.value = TotResult;

    // let result = parseFloat(QtyIn)*parseFloat(CostIn);

    // if(!isNaN(result)) {
    //     document.getElementById('TotalCost').innerHTML=result;
    // }
}

// function to display items to the user in the table 
function displayItemDetails() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#itemsTable tbody").length == 0) {
      $("#itemsTable").append("<tbody></tbody>");
  }

//       // Append item to the table
//       $("#itemsTable tbody").append(
//           "<tr>" + 
//             "<td>" + $("#itemNameIn").val() + "</td>" 
//             + "<td>" + $("#itemQtyIn").val() + "</td>" 
//             + "<td>" + $("#itemCostIn").val() + "</td>" + 
//             "<td>" + $('#result').val() + "</td>" +
//             "<td>" + "<button type='button' " + 
//                     "onclick='itemDelete(this);' " + 
//                     "class='btn btn-default'>" + 
//                       "DELETE" + "</button>" + "</td>" + "</tr>" +
//                       "<tr>" + 
//                       "<td>" + "&nbsp;" + "</td>" + 
//                       "<td>" + "&nbsp;" + "</td>" + 
//                       `<th colspan="5" scope="col" id="resultTotal"> Total: </th>` + 
//                   "</tr>"
                      
//         );

//     return true;
//   }

  // Append item to the table
  $("#itemsTable tbody").append(
    "<tr>" + 
      "<td>" + $("#itemNameIn").val() + "</td>" 
      + "<td>" + $("#itemQtyIn").val() + "</td>" 
      + "<td>" + $("#itemCostIn").val() + "</td>" + 
      "<td>" + $('#result').val() + "</td>" +
      "<td>" + "<button type='button' " + 
              "onclick='itemDelete(this);' " + 
              "class='btn btn-default'>" + 
                "DELETE" + "</button>" + "</td>" + "</tr>"
               
                
  );

    return true;
}
   
 // end displayItemDetails

// Function to delete an item
function itemDelete(ctl) {
    $(ctl).parents("tr").remove();
    }

// // Function for calculating Budget
// function budgetMath() {
//     let itemBudget = budgetMax;
//    let itemSubTotal = itemQty * itemCost;
    
// }

//     let outputE1 = $('#itemOneDisplay');
  //   outputE1.empty();
 //    for (item of budgetDB) {
//         outputE1.append(`${item.itemName}`);
//     }
 //    return true;
// } // end displayItemDetails

