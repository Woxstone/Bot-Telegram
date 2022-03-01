class Expense{
    
    constructor(theExpense, user_id = undefined){
        this.money = theExpense.money,
        this.concept = theExpense.concept,
        this.date = theExpense.date || this.today(),
        this.id = user_id 
    }

    today() {
        const today = new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          }).format(Date.now());
        return today;
    }

    description() {
        const concept = (this.concept == '')? 'expense.description_noConcept': this.concept;
        return `message.article ${this.date}, /ID:${this.id}/ message.person message.quantity: ${this.money}, "${concept}"`;
    }
}

export {Expense}