
class changeLogItem {
    constructor(user, project, budgetLink) {
        this.timestamp  = new Date();
        this.user       = user
        this.project    = project;
        this.budgetLink = budgetLink;
    }

    getItemArray(){
        var array = [this.timestamp, this.user, this.project, this.budgetLink]
        return array;
    }
  }
