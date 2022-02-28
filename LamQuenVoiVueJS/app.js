//Khởi tại Ứng dụng VueJS
var appVue = new Vue({
    el: '#app', //Gọi đến id cần làm việc 
    data: {
        message: 'Bùi Quang Hiếu'
    },
    methods: {
        say: function(text) {
            return 'Hello ' + text;
        }
    }
});
console.log(appVue.message);

setMessage = function() {

    appVue.message == 'Bùi Quang Hiếu' ? appVue.message = 'Hà Phương Thùy' : appVue.message = 'Bùi Quang Hiếu';

    setTimeout(() => {
        // appVue.message = 'Hà Phương Thùy'
        setMessage();
    }, 1500);
};
setMessage();