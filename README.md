chaffle
==================
chaffle is a jquery plug-in that allows you to shuffle randomly character.

##example
http://blivesta.github.io/chaffle/

##Setup
```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="./dist/jquery.chaffle.min.js"></script>

<script type="text/javascript">
	$(document).ready(function() {
  	$('.chaffle').chaffle({
      speed: 20,
      time: 60
  	});
	});		
</script>

<ul class="nav">
	<li><a href="#" class="chaffle" data-lang="en">Engligh</a></li>
	<li><a href="#" class="chaffle" data-lang="ja">日本語（漢字）</a></li>
	<li><a href="#" class="chaffle" data-lang="ja-hiragana">ひらがな</a></li>
	<li><a href="#" class="chaffle" data-lang="ja-katakana">カタカナ</a></li>
</ul>
```

##License
Released under the MIT license.