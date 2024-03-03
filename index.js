class FinanceTracker {
    constructor() {
        this.expenses = [];
        this.budget = 0;
        this.financialGoals = [];
    }

    addExpense(category, amount, description) {
        this.expenses.push({ category, amount, description });
        console.log(`Expense of $${amount} under ${category} category added.`);
    }

    categorizeExpenses() {
        const categorizedExpenses = {};
        this.expenses.forEach(expense => {
            if (!categorizedExpenses[expense.category]) {
                categorizedExpenses[expense.category] = 0;
            }
            categorizedExpenses[expense.category] += expense.amount;
        });
        console.log("Categorized expenses:", categorizedExpenses);
    }

    setBudget(amount) {
        this.budget = amount;
        console.log(`Budget set to $${amount}.`);
    }

    setFinancialGoal(goalName, targetAmount) {
        this.financialGoals.push({ goalName, targetAmount });
        console.log(`Financial goal "${goalName}" set with target amount of $${targetAmount}.`);
    }

    trackProgress() {
        let totalExpenses = 0;
        this.expenses.forEach(expense => {
            totalExpenses += expense.amount;
        });
        const remainingBudget = this.budget - totalExpenses;
        console.log(`Total expenses: $${totalExpenses}`);
        console.log(`Remaining budget: $${remainingBudget}`);
    }
}

// Example usage:
const financeTracker = new FinanceTracker();

financeTracker.setBudget(5000);
financeTracker.addExpense('Food', 200, 'Dinner with friends');
financeTracker.addExpense('Transportation', 100, 'Gasoline');
financeTracker.addExpense('Shopping', 300, 'New clothes');
financeTracker.categorizeExpenses();
financeTracker.setFinancialGoal('Vacation', 2000);
financeTracker.trackProgress();