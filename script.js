function donationPage(btnID , fileName){
    document.getElementById(btnID).addEventListener('click',function(){
        window.location.href = fileName;
    })
}
function strToNumber(str){
    const strValue = str.innerText;
    const floatingNumber = parseFloat(strValue);
    return floatingNumber;
}
donationPage('btn-donation','/index.html')
donationPage('btn-history' ,'/history.html')

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
        console.log(currentAmount);
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