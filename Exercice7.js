document.getElementById('submit').addEventListener('click',sizeDate);
function sizeDate(){
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  // Condition qui vérifie si la pointure n'est pas inférieur à 0 et supérieur à 50.
 if (shoeSize == ''){
  alert('Il manque ta pointure !');
}else if (yearOfBirth == ''){
  alert('Il manque ton année de naissance');
  // Condition valide après vérification.
 }else if ((shoeSize <= 0) || (shoeSize >= 50)){
       alert('Tu as vu tes pieds !');
   // Condition qui vérifie si c\'est la valeur entrée n\'est pas supérieur à 2019.
 }else if (yearOfBirth >= 2019){
       alert('Tu n\'es pas né !');
   // Condition qui vérifier si c\'est bien une valeur numérique.
 }else if((isNaN(shoeSize)) || (isNaN(yearOfBirth))){
  alert('Tu n\'as rien renseigné !');
  // Condition si tu as oublié de mettre l'un des champs.
  }else{
    var result = parseInt(shoeSize) * 2;
    result += 5;
    result *= 50;
    result -= Number(yearOfBirth);
    result += 1766;
    alert(result);
  }
}
