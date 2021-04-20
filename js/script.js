var app = new Vue({
        el: '#root',
        data: {
            currentImageIndex: 0,
            images: [
                {
                    source: 'img/campagna.jpg',
                    alt: 'campagna'
                },
                {
                    source: 'img/cascate.webp',
                    alt: 'cascate'
                },
                {
                    source: 'img/fiori.jpeg',
                    alt: 'fiori'
                },
                {
                    source: 'img/montagne.webp',
                    alt: 'montagne'
                }
            ]                       
            
        },
        methods: {
            nextImage() {
                let nextImageIndex = this.currentImageIndex + 1;
                if (this.currentImageIndex >= this.images.length - 1) {
                    this.currentImageIndex = 0;
                } else {
                    this.currentImageIndex = nextImageIndex;
                }
            },
            prevImage() {
                let prevImageIndex = this.currentImageIndex -1;
                if(this.currentImageIndex <= 0) {
                    this.currentImageIndex = this.images.length - 1;
                } else {
                    this.currentImageIndex = prevImageIndex;
                }
            }
        }
});

