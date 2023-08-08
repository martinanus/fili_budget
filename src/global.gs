project                 = "sandbox"
currency                = "pesos"
uploadFolderId          = "1wO91YahYEJSST9la4_9Ale9r5k_OqLUh"

spreadsheet             = SpreadsheetApp.getActiveSpreadsheet();

budgetPageName          = "Presupuesto";
budgetSheet             = spreadsheet.getSheetByName(budgetPageName);
budgetFirstCol          = "C";
budgetFirstRow          = "10";
budgetLastCol           = "I";
budgetLastRow           = budgetSheet.getLastRow();

itemBudgetPageName      = "Items Presupuesto";
itemBudgetSheet         = spreadsheet.getSheetByName(itemBudgetPageName);
itemBudgetFirstCol      = "A";
itemBudgetFirstRow      = "2";
itemBudgetLastCol       = "J";

changeLogPageName       = "Registro de Cambios"
changeLogSheet          = spreadsheet.getSheetByName(changeLogPageName);
changeLogFirstCol       = "A";
changeLogFirstRow       = "2";
changeLogLastCol        = "D";


