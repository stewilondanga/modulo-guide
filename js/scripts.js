var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var vy = new Vue({
      el: "#app",
      data: {
        l: 13,
        r: 3,
        q: 0,
        m: 0,
        wholes: 0,
      },
      methods: {
        calc: function() {
          this.q = this.l / this.r;
          this.m = this.l % this.r;
          this.wholes = parseInt(this.q);
        },
        decimal: function() {
          return Number((this.q - this.wholes).toFixed(3));
        }
      },
      /*          mounted: function(){
                  this.calc();
                }
              });
