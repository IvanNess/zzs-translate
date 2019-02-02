var msg;
var services = document.getElementsByClassName("ms-parent form-control");
console.log(services);
function call() {
  servicesArr = [...services];
  servicesArr.map((v,i,a)=>{
    v.className = "ms-parent form-control is-valid";
  })
  msg = $('#cbForm').serialize();

  var service = $('#chooseService').multipleSelect('getSelects', 'text');
  var language = $('#language').multipleSelect('getSelects', 'text');

  var completeMessage = `${msg}&service=${service}&language=${language}`;

  alert(completeMessage);
  
  $.ajax({
    type: 'POST',
    url: '/email.php',
    data: completeMessage,
    success: function(data) {
      alert("Спасибо! Ваше сообщение отправлено!");
    },
    error:  function(xhr, str){
      alert('Errror');
    }
  });
  
} 
   