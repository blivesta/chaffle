(function($) {
  var namespace = 'chaffle';
  var methods = {    
    init: function(options){
      options = $.extend({
        speed: 20, //シャッフルスピード
        time: 140 //一文字をシャッフルする時間
      }, options);
      return this.each(function(){
        var _this = this;
        var $this = $(this);
        var data = $this.data(namespace);
        if (!data) {
          options = $.extend({
          }, options);
          $this.data(namespace, {
            options: options
          });
        }

        var $text = $this.text();
        var substitution;　//代入テキスト
        var shuffle_timer;
        var shuffle_timer_delay;
        
        //ランダムにテキストを代入
        var shuffle = function(){
          $this.text(substitution);
          //$text.length = オリジナルテキストの文字数
          //substitution.length = 現在の文字数（ループカウント）
          //オリジナルの文字数までシャッフルをループさせる
          //thisがシャッフル中かどうか文字数で判定
          if ($text.length - substitution.length > 0) { 
            //thisにオリジナルの文字数があればその文字数までループ
            for (i = 0; i < $text.length - substitution.length; i++) {
              //ランダムな文字を代入
              var shuffleStr = random_text.call();
              $this.append(shuffleStr);
            }
          } else {
            //シャッフル中場合などそれ以外は止める
            clearInterval(shuffle_timer);
          }          
        }
        
        //1文字遅れてオリジナルのテキストを入れていく。
        var shuffle_delay = function(){
          if (substitution.length < $text.length) {
            substitution = $text.substr(0, substitution.length + 1);
          } else {
            clearInterval(shuffle_timer_delay);
          }        
        }
        
        //ランダムに文字を取得
        var random_text = function(){
          var str;
          var lang = $this.data('lang');
          switch (lang) {
            case "en":
              str = String.fromCharCode(33 + Math.round(Math.random() * 99));
              break;
            case "ja":
              str = String.fromCharCode(19968 + Math.round(Math.random() * 80));
              break;
            case "ja-hiragana":
              str = String.fromCharCode(12352 + Math.round(Math.random() * 50));
              break;
            case "ja-katakana":
              str = String.fromCharCode(12448 + Math.round(Math.random() * 84));
              break;
          }
          return str;
        }
        
        var start = function(){
          substitution = '';
          clearInterval(shuffle_timer);
          clearInterval(shuffle_timer_delay);
          
          //ランダムテキストダイマー
          shuffle_timer = setInterval(function(){
            shuffle.call(_this);
          }, options.speed);

          shuffle_timer_delay = setInterval(function() {
            shuffle_delay.call(this);
          }, options.time);
        }
        
        //mouseover
        $this.unbind('mouseover.'+namespace).bind('mouseover.'+namespace, function(){        
            start.call(_this);
        });
      
      }); // end each
    },
    destroy: function(){
      return this.each(function(){
        var $this = $(this);
        $(window).unbind('.'+namespace);
        $this.removeData(namespace);
      });
    }
  };
  $.fn.chaffle = function(method){
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.'+namespace);
    }    
  };
})(jQuery);