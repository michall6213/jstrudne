const transactions = [
    { id: 1, user: "Anna", category: "RTV", amount: 1200, status: "completed" },
    { id: 2, user: "Piotr", category: "AGD", amount: 450, status: "pending" },
    { id: 3, user: "Anna", category: "RTV", amount: 300, status: "completed" },
    { id: 4, user: "Jan", category: "AGD", amount: 2100, status: "completed" },
    { id: 5, user: "Piotr", category: "RTV", amount: 150, status: "cancelled" }
];

function analyzeTransactions(data) {
    let wynik = data
        .filter(transakcja => transakcja.status === "completed")
        .reduce((raport, transakcja) => {
            raport.totalCompletedAmount += transakcja.amount;

            if (raport.usersSummary[transakcja.user] === undefined) {
                raport.usersSummary[transakcja.user] = 0;
            }

            raport.usersSummary[transakcja.user] += transakcja.amount;

            if (raport.categories[transakcja.category] === undefined) {
                raport.categories[transakcja.category] = 0;
            }

            raport.categories[transakcja.category] += transakcja.amount;

            return raport;
        }, {
            totalCompletedAmount: 0,
            usersSummary: {},
            categories: {}
        });

    let topCategory = Object.keys(wynik.categories).reduce((najlepsza, kategoria) => {
        if (wynik.categories[kategoria] > wynik.categories[najlepsza]) {
            return kategoria;
        }
        return najlepsza;
    });

    return {
        totalCompletedAmount: wynik.totalCompletedAmount,
        usersSummary: wynik.usersSummary,
        topCategory: topCategory
    };
}

console.log(analyzeTransactions(transactions));