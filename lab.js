Caman = require('caman').Caman;

function crop(image) {
  isSquared = (image.imageWidth() == image.imageHeight())
  isHorizontal = (image.imageWidth() > image.imageHeight())

  if (!isSquared) {
    left = 0
    upper = 0

    if (isHorizontal) {
      length = image.imageHeight()
      left = (image.imageWidth() - length) / 2
    } 
    else {
      length = image.imageWidth()
      upper = (image.imageHeight() - length) / 2
    }  

    image.crop(length, length, left, upper);
  } 

  image.resize({ width: 1400, height: 1400 });  

  return image
}


Caman("bridge.jpg", function () {
  crop(this);

  this.contrast(-40);

  this.colorize("#4D09B3", 30);

  this.colorize("#000000", 50);

  this.render(function () {
    this.save("./output.png");
  });
});