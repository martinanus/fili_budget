
function updateBudget(){

    var budgetData      = getBudget();
    var itemBudgetList  = parseBudget(budgetData);

    clearBudgetTable();
    writeBudgetTable(itemBudgetList);

    writeChangeRegister();

}

function getBudget(){
    var budgetRange   = budgetFirstCol + budgetFirstRow + ":" + budgetLastCol + budgetLastRow;
    var budgetData = budgetSheet.getRange(budgetRange).getValues();

    return budgetData;
}

function parseBudget(budgetData){
    var group;
    var subGroup;
    var itemBudgetList = [];

    for(var i=0; i<budgetData.length; i++) {
        // Logger.log("Numbering: " + budgetData[i][0])

        if (isGroup(budgetData[i][0])){
            group = budgetData[i][1];
            // Logger.log("Group is: " + group);
            continue;
        } else if (isSubGroup(budgetData[i][0])){
            subGroup = budgetData[i][1];
            // Logger.log("SubGroup is: " + subGroup);
            continue;
        }
        var item = new budgetItem(budgetData[i].slice(1), group, subGroup, currency, project)
        // Logger.log("New item name is: " + item.name);

        itemBudgetList.push(item.getItemArray())
    }
    return itemBudgetList;
}

function writeBudgetTable(itemBudgetList){
    var itemBudgetRange = itemBudgetFirstCol + itemBudgetFirstRow + ":" + itemBudgetLastCol;
    itemBudgetRange += (itemBudgetList.length + 1);
    itemBudgetSheet.getRange(itemBudgetRange).setValues(itemBudgetList)
}

function clearBudgetTable(){
    var itemBudgetRange = itemBudgetFirstCol + itemBudgetFirstRow + ":" + itemBudgetLastCol;
    itemBudgetSheet.getRange(itemBudgetRange).clearContent();
}

function isGroup(str){
    var level = String(str).split(".").length;
    return (level == 1);
}

function isSubGroup(str){
    var level = String(str).split(".").length;
    return (level == 2);
}
