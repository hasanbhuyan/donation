document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = '/blog.html'
})

function strToNumber(str){
    const strValue = str.innerText;
    const floatingNumber = parseFloat(strValue);
    return floatingNumber;
}


function donationValue(donationInput, newAmountId){
   const previousDonationStr = document.getElementById(newAmountId);
   const totalAmountStr = document.getElementById('total-amount');
   const newDonationStr = document.getElementById(donationInput).value;
   const newDonation = parseFloat(newDonationStr)
   
   const previousDonation = strToNumber(previousDonationStr)
   const totalAmount = strToNumber (totalAmountStr)
   console.log(previousDonation,newDonation,totalAmount)
   
    if(typeof newDonation === 'number' && newDonation > 0 && totalAmount > 0 ){
        previousDonationStr.innerText = previousDonation + newDonation;
        const currentAmount = totalAmount - newDonation;
        totalAmountStr.innerText = currentAmount;

        // const div = document.createElement('div');
        // h1.innerText = `${newDonation} Taka is Donated for  , Bangladesh `;
        const donateHistory = document.getElementById('history-section');
        const div = document.createElement('div');
        div.innerHTML =`<div class="my-10 py-10 px-3 border border-gray-200 rounded-md">
        <h1 class="font-semibold text-xl">${newDonation} Taka is Donate For ,Bangladesh</h1>
        <p class="font-bold">dkkdjkjdfkjfkfjkdfjdjf fjkjd kjfkjf sl sj</p>
        </div>`;

        donateHistory.appendChild(div)

        // donateHistory.appendChild(h1);
    }

    else{
        return alert('Sorry! You cannot donate here')
    }
}
document.getElementById('donate-noakhali').addEventListener('click',function(){
    donationValue('input-noakhali','amount-noakhali')
})
document.getElementById('donate-feni').addEventListener('click',function(){
    donationValue('input-feni','amount-feni')
})
document.getElementById('donate-quota-protest').addEventListener('click',function(){
    donationValue('input-quota-protest','amount-quota-protest')
})
document.getElementById('btn-donation').addEventListener('click',function(){
    document.getElementById('donation-section').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')   
})
document.getElementById('btn-history').addEventListener('click',function(){
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('donation-section').classList.add('hidden')
})
