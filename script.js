function donationPage(btnID , fileName){
    document.getElementById(btnID).addEventListener('click',function(){
        window.location.href = fileName;
    })
}
donationPage('btn-donation','/index.html')
donationPage('btn-history' ,'/history.html')

function donationValue(donationInput, newAmountId){
   const newDonationStr = document.getElementById(donationInput).value;
   const newDonation = parseFloat(newDonationStr)
   const newDonateAmount = document.getElementById(newAmountId);
   newDonateAmount.innerText = newDonation;
   const previousTotalStr = document.getElementById('total-amount').innerText;
   const previousTotal = parseFloat(previousTotalStr)
   console.log(newDonation , newDonation,previousTotal)
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