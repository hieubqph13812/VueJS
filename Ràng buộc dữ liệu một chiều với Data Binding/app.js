var appVue = new Vue({
    el: '#app', //Gọi đến id cần làm việc 
    data: {
        title: 'Áo thun nam thể thao hàng VNXK vải dày min - Vải Đốm',
        url: 'https://www.adidas.com.vn/vi/ao-thun-own-the-run/FS9799.html?cm_mmc=AdieSEM_Feeds-_-GoogleProductAds-_-SEA-_-FS9799&cm_mmca1=VN&cm_mmca2&cm_mmc=AdieSEM_Google-_-adidas-SEAPAC-eCom-SSC-B-Brand-Multiple-None-VN_VN-SEAPAC-eCom-Paid_Search-_-SSC-VN-_-PRODUCT_GROUP-_-dv:eCom&cm_mmc1=VN&cm_mmc2=&gclid=CjwKCAiAgvKQBhBbEiwAaPQw3Bts2zZZpRPhTON7DrN0f2t41MYyMgTDw5eRtCmWuOG6lpTnq2B93xoC4CYQAvD_BwE&gclsrc=aw.ds',
        target: '_blank',
        price: 15000,
        check: true,
        listProductDetail: [{
            image: './images/red.jpg',
            quantity: 0,
            textColor: 'Màu Đỏ'
        }, {
            image: './images/blue.jpg',
            quantity: 8,
            textColor: 'Màu Xanh'
        }, {
            image: './images/black.jpg',
            quantity: 2,
            textColor: 'Màu Đen'
        }, ]
    },
    methods: {
        formatPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'VND'
            }).format(number);

        }
    },

});