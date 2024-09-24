document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = './blog/index.html'
})
const date = new Date();
const dateStr = date.toDateString()
const currentDate = new Date(dateStr);

function strToNumber(str){
    const strValue = str.innerText;
    const floatingNumber = parseFloat(strValue);
    return floatingNumber;
}
function donationValue(donationInput, newAmountId,donationPlace){
   const previousDonationStr = document.getElementById(newAmountId);
   const totalAmountStr = document.getElementById('total-amount');
   const newDonationStr = document.getElementById(donationInput).value;
   const newDonation = parseFloat(newDonationStr)
   const previousDonation = strToNumber(previousDonationStr)
   const totalAmount = strToNumber (totalAmountStr)

    if(typeof newDonation === 'number' && newDonation > 0 && totalAmount > 0 ){
        document.getElementById('my_modal_5').showModal()
        previousDonationStr.innerText = previousDonation + newDonation;
        const currentAmount = totalAmount - newDonation;
        totalAmountStr.innerText = currentAmount;
        const donateHistory = document.getElementById('history-section');
        const div = document.createElement('div');
        div.innerHTML =`<div class="my-10 py-10 px-3 border border-gray-200 rounded-md">
        <h1 class="font-semibold text-xl">${newDonation} Taka is Donate For Flood at ${donationPlace} ,Bangladesh</h1>
        <p>Date: ${currentDate}</p>
        </div>`;
        donateHistory.appendChild(div)
    }
    else{
        return alert('Sorry! You cannot donate here')
    }
}

document.getElementById('donate-noakhali').addEventListener('click',function(){
    donationValue('input-noakhali','amount-noakhali','Noakhali')
})
document.getElementById('donate-feni').addEventListener('click',function(){
    donationValue('input-feni','amount-feni','Feni')
})
document.getElementById('donate-quota-protest').addEventListener('click',function(){
    donationValue('input-quota-protest','amount-quota-protest','the Quota Movement')
})
const donationButton = document.getElementById('btn-donation').addEventListener('click',function(){
    document.getElementById('donation-section').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('btn-donation').classList.add('bg-lime-400')   
    document.getElementById('btn-history').classList.remove('bg-lime-400')   
})
const historyButton =  document.getElementById('btn-history').addEventListener('click',function(){
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('btn-history').classList.add('bg-lime-400')   
    document.getElementById('btn-donation').classList.remove('bg-lime-400')
    
})
