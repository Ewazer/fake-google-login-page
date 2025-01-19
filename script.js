const vm = new Vue({
  el: '#app',
  data: {
    isFocus: false,
    isWarning: false,
    account: '' 
  },
  methods: {
    toggle() {
      this.isFocus = !this.isFocus;
    },
    reset() {
      this.isFocus = false;
    },
    login(event) {
      event.preventDefault();
    
      if (!this.account.includes('@gmail.com')) {
        return;
      }
  
      document.querySelector('.block')?.classList.add('show-before');
      document.querySelector('.bui-loading-bar')?.classList.remove('bui-loading-bar-fade-out');
    
      setTimeout(() => {
        window.location.href = "indexconnect.php";
      }, 1000);
    }    
  },
  computed: {
    inputClassHandler() {
      return {
        input: true,
        focus: this.isFocus || this.account.length > 0,
        warning: this.isWarning
      };
    }
  }
});


const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  
  loader.classList.add('fondu-out');
  
})