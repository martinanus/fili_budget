
class budgetItem {
    constructor(array, group, subGroup, currency, project) {
        this.name       = array[0];
        this.unit       = array[1];
        this.quantity   = array[2];
        this.unitPrice  = array[3];
        this.datePrice  = array[4];
        this.tax        = array[5] - 1; // [0:1] - %IVA
        this.group      = group;
        this.subGroup   = subGroup;
        this.currency   = currency;
        this.project    = project;
    }

    getItemArray(){
        var array = [this.name, this.unit, this.quantity, this.unitPrice,
            this.datePrice, this.tax, this.group, this.subGroup,
            this.currency, this.project]

        return array;
    }
  }
