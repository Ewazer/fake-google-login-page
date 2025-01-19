const vm = new Vue({
  el: '#app',
  data: {
    isFocus: false,
    isWarning: false,
    account: '' },

  methods: {
    toggle() {
      this.isFocus = !this.isFocus;
    },
    reset() {
      this.isFocus = false;
    },
 login(event) {
      event.preventDefault();
      var boutonActiver = document.getElementById("activerPseudoElement");
      var blockElement = document.querySelector(".block");
      $('.block').addClass('show-before');;
      $('.bui-loading-bar').removeClass('bui-loading-bar-fade-out');
      setTimeout(function() {
        window.location.href = "error.php";
      }, 1000); 
      
    } },

  computed: {
    inputClassHandler() {
      return {
        input: true,
        focus: this.isFocus ? true : this.account.length > 0,
        warning: this.isWarning };

    } } });

function show() {
    const checkbox = document.getElementById("c1");
    const passwordInput = document.getElementById("passwordInput");

    if (checkbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  
  loader.classList.add('fondu-out');
  
})