const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// $(document).ready(function(){
//   $('#eye').click(function(){
//       $(this).toggleClass('open');
//       $(this).children('i').toggleClass('fa-eye-slash fa-eye');
//       if($(this).hasClass('open')){
//           $(this).prev().attr('type', 'text');
//       }else{
//           $(this).prev().attr('type', 'password');
//       }
//   });
// });