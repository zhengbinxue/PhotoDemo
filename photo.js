class Photo {
    constructor (width = 8, height = 10) {
        this.width = width;
        this.height = height;
    }
    price() {
        let finalPrice;

        if (this.width == 8 && this.height == 10) {
            finalPrice = 4;
        }
        else {
            if (this.width == 10 && this.height == 12) {
                finalPrice = 6;
            }
            else {
                finalPrice = 10;
            }
        }
        return finalPrice;
    }
    toString() {
        return `This is a ${this.width} by ${this.height} photo and it cost ${this.price()}`;
    }
}

let photo1 = new Photo(8, 10);
console.log(photo1.toString());

let photo2 = new Photo(20, 30)
console.log(photo2.toString());
