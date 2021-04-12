const Modal= {
    open(){
        //abrir modal
        //adicionar a class active ao modal
        document.querySelector('.model-overlay').classList.add('active')
    },
    close(){
        //fechar modal
        //remover a class active do modal
        document.querySelector('.model-overlay').classList.remove('active')
    }
}


const transactions = [
    {id:1, description:'luz',amount:-50000,date:'23/01/2021',},
    {id:2, description:'Criação de Website',amount:500000,date:'23/01/2021',},
    {id:3, description:'internet',amount:-20000,date:'23/01/2021',},
]
const transaction = {
        all:transactions,
        add(transactions){
            transaction.all.push(transactions)
        },


    incomes(){

        let income =0;
        transaction.all.forEach(transactions => {
            if(transactions.amount > 0){
                income = income + transactions.amount;
            }
        })

            //somar as entradas
            return income;
    },

    expenses(){


        let expens = 0;
        transactions.all.forEach(transactions =>{
            if(transactions.amount < 0){
                expens= expens + transactions.amount;
            }
        })
         //somar as saidas
         return expens;
    },

    total(){

  
        //entradas -saidas
        return transaction.incomes() + transaction.expenses();
    }

}
//Substituir os dados do HTML com os dados do JS

const DOM={ 
    transactionContainer: document.querySelector('#data-table tbody'),




    addTransaction(transaction, index){
        const tr= document.createElement('tr')
        tr.innerHTML= DOM.innerHTMLTransaction(transaction)

        DOM.transactionContainer.appendChild(tr)

    },
    
    innerHTMLTransaction(transaction){
        const CSSclass= transaction.amount > 0? "income" : "expense"
        const amount= Utils.formatCurrency(transaction.amount)



    const html =`
    <td class="description">${transaction.description}</td>
    <td class=${CSSclass}>${amount}</td>
    <td clase="date">${transaction.date}</td>
    <td>
        <img src="./assets/minus.svg">
    </td>
 `
     return html
},


    updateBalance(){ 
        document.getElementById('incomeDislpay').innerHTML= Utils.formatCurrency(transaction.incomes())

        document.getElementById('expenseDisplay').innerHTML=  Utils.formatCurrency(transaction.expenses())
        document.getElementById('totalDisplay').innerHTML=  Utils.formatCurrency(transaction.total())
        





    }
}

const Utils ={
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""

    alue = String(value).replace(/\D/g,"")
    value= Number(value) / 100
    value=      value.toLocaleString("pt-BR",{
        style: "currency",
        currency:"BRL"
    })
    
    return signal + value

    }
}


transactions.forEach(function(transaction){

    DOM.addTransaction(transaction)

})

DOM.updateBalance()


transaction.add({
<<<<<<< Updated upstream
    id: 39,descriptio:'Alo', amount: 200, date: '23/01/21'
=======
    id:4, description:'internet',amount: -20000,date:'23/01/2021',

>>>>>>> Stashed changes
})