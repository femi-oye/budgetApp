// create an empty array of Items
const budgetDB = [];

// Set budget to $50
const budgetMax = 50.00;

// Create a class call Items
class Items {
    constructor (itemName, itemQty, itemCost) {
        this.itemName = itemName;
        this.itemQty = itemQty;
        this.itemCost = itemCost;
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
    }
} // end getItemDetails


// Set document ready
$ (document).ready(readyNow);

function readyNow() {
    console.log('JQ Loaded');
    $ ('#submitBtn').on('click', getItemDetails);
} // end readyNow

// function to create new budget item and push to the budgetDB array for user input from getItemDetails
function addToItemDetails(itemName, itemQty, itemCost) {
    budgetDB.push(new Items (itemName, itemQty, itemCost));
    console.log(budgetDB);
    displayItemDetails();

    return true;
}

// function to display items to the user in the table 
function displayItemDetails() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#itemsTable tbody").length == 0) {
      $("#itemsTable").append("<tbody></tbody>");
  }

      // Append item to the table
      $("#itemsTable tbody").append(
          "<tr>" + 
            "<td>" + $("#itemNameIn").val() + "</td>" + "<td>" + $("#itemQtyIn").val() + "</td>" + "<td>" + $("#itemCostIn").val() + "</td>" + 
            "<td>" +
                "<button type='button' " + 
                    "onclick='itemDelete(this);' " + 
                    "class='btn btn-default'>" + 
                    "<span class='glyphicon glyphicon-remove' />" + "</button>" + "</td>" + "</tr>"
        );

    return true;
  }
   
 // end displayItemDetails

// Function to delete an item
function itemDelete(ctl) {
    $(ctl).parents("tr").remove();
    }


//     let outputE1 = $('#itemOneDisplay');
  //   outputE1.empty();
 //    for (item of budgetDB) {
//         outputE1.append(`${item.itemName}`);
//     }
 //    return true;
// } // end displayItemDetails

