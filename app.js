var arr= function(nums,target) { //Dizi ve hedef parametre olarak alındı.
  for(let i=0; i<nums.length; i++){ //Diziyi sonuna kadar gezen for döngüsü
    for(let j=0; j<i; j++){
      if(nums[i]+nums[j]===target){//Elemanların toplamının hedef değere eşit olup olmadığını kontrol eder.
        return [j,i];// indisleri dönderir.
      }

    }
  }};

console.log(arr([2,7,11,15],9));
console.log(arr([3,2,4],6));
console.log(arr([3,3],6));