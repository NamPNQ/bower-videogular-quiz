bower-videogular-quiz
=====================

Videogular `quiz` plugin repository for distribution on `bower` 

## Install

Install [Videogular](http://www.videogular.com/) `quiz` plugin with Bower:

`bower install videogular-quiz`

Inside the folder `bower_components\videogular-quiz` you should find also `html`, `css`partials that you should locate in `.\views\videogular\plugins\quiz\`.

## How to use
Add directives source to your HTML:

```html
<videogular vg-width="config.width" vg-height="config.height" vg-theme="config.theme.url" vg-autoplay="config.autoPlay" vg-stretch="config.stretch.value" vg-responsive="config.responsive">
	<video class='videoPlayer' preload='metadata'>
		<source type="video/youtube" src="http://www.youtube.com/watch?v=nOEw9iiopwI" />
	</video>

	<vg-youtube></vg-youtube>
	<vg-quiz vg-data='config.plugins.quiz.data' vg-quiz-submit="onQuizSubmit" vg-quiz-skip="onQuizSkip" vg-quiz-continue="onQuizContinue" vg-quiz-show-explanation="onQuizShowExplanation"></vg-quiz>
	<vg-controls vg-autohide="config.autoHide" style="height: 50px;">
		<vg-play-pause-button vg-play-icon="config.theme.playIcon" vg-pause-icon="config.theme.pauseIcon"></vg-play-pause-button>
		<vg-timeDisplay>{{ currentTime }}</vg-timeDisplay>
		<vg-scrubBar>
			<vg-scrubbarcurrenttime></vg-scrubbarcurrenttime>
		</vg-scrubBar>
		<vg-timeDisplay>{{ totalTime }}</vg-timeDisplay>
		<vg-volume>
			<vg-mutebutton
				vg-volume-level-3-icon="config.theme.volumeLevel3Icon"
				vg-volume-level-2-icon="config.theme.volumeLevel2Icon"
				vg-volume-level-1-icon="config.theme.volumeLevel1Icon"
				vg-volume-level-0-icon="config.theme.volumeLevel0Icon"
				vg-mute-icon="config.theme.muteIcon">
			</vg-mutebutton>
			<vg-volumebar></vg-volumebar>
		</vg-volume>
		<vg-fullscreenButton vg-enter-full-screen-icon="config.theme.enterFullScreenIcon" vg-exit-full-screen-icon="config.theme.exitFullScreenIcon"></vg-fullscreenButton>
	</vg-controls>
</videogular>
```

Add function callback and data config in main controller

```js
$scope.onQuizSubmit = function(data) {
            return {
                result:true,
                description:"Correct"
            }
        }
$scope.config = {
            width: 740,
			...
            plugins: {
                poster: {
                    url: "assets/images/videogular.png"
                },
                quiz: {
                    data: [{
                        "time": "164",
                        "question_id": "70d70be689d73e08687496a6d12b2b0d",
                        "html": "<div style=\"position:absolute;\">Select the restaurant(s) that serve Canadian cuisine for a price of $$$.\n\n<small>\n<pre>Georgie Porgie\n87%\n$$$\nCanadian,Pub Food\n\nSilver Spoon\n97%\n$$$$\nCanadian\n\nCoffee Cafe\n77%\n$$\nCoffee/Tea,Diner\n</pre>\n</small>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left: 470px; top: 50px;\">\n<input dir=\"auto\" class=\"quiz-input\" type=\"checkbox\" name=\"answer[70d70be689d73e08687496a6d12b2b0d][]\" id=\"gensym_52be3ad71a1f5\" value=\"d5c5ec0ff53ebf35958c5ba02c30ce24\"><label for=\"gensym_52be3ad71a1f5\" style=\"cursor:pointer;\">Georgie Porgie</label>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left: 470px; top: 140px; /* width:370px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"checkbox\" name=\"answer[70d70be689d73e08687496a6d12b2b0d][]\" id=\"gensym_52be3ad71a71f\" value=\"cfc6db592e488051decbce17bd7b98b8\"><label for=\"gensym_52be3ad71a71f\" style=\"cursor:pointer;\">Silver Spoon</label>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left: 470px; top: 230px; /* width:370px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"checkbox\" name=\"answer[70d70be689d73e08687496a6d12b2b0d][]\" id=\"gensym_52be3ad71ac52\" value=\"b387d47429de02592f973814b393e51d\"><label for=\"gensym_52be3ad71ac52\" style=\"cursor:pointer;\">Coffee Cafe</label>\n</div>",
                        "background": "color",
                        "background_src": "white",
                        "post_answer_url": "https:\/\/class.coursera.org\/programming2-001\/quiz\/video_quiz_attempt?method=post_question_answer&quiz_id=20&preview=0&question_id=70d70be689d73e08687496a6d12b2b0d"
                    }, {
                        "time": "180",
                        "question_id": "9326a7b17e15cfc69f8e46f9357bf6c5",
                        "html": "<div dir=\"auto\" class=\"quiz-question-text\" style=\"position:absolute;\">\n<small>\n<pre>def is_palindrome_v3(s):\n    i = 0\n    j = len(s) - 1\n    while i &lt; j and s[i] == s[j]:\n        i = i + 1\n        j = j - 1\n\n    return j &lt;= i\n</pre>\n</small>\nIf <code>s</code> refers to a single-character string such as 'x', when the return statement is reached, which of the following expressions evaluates to <code>True</code>?</div>\n<div class=\"quiz-option\" style=\"position:absolute; left:40px; top: 250px; /* width:370px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"radio\" name=\"answer[9326a7b17e15cfc69f8e46f9357bf6c5][]\" id=\"gensym_52bed85054bc8\" value=\"ad32510af7c53e2fa6cce4d764c09800\"><label for=\"gensym_52bed85054bc8\" style=\"cursor:pointer;\"><code>i == 0 and j == -1</code> </label>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left:40px; top: 320px; /* width:370px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"radio\" name=\"answer[9326a7b17e15cfc69f8e46f9357bf6c5][]\" id=\"gensym_52bed85055221\" value=\"8d53ca2fa487cfbb4479ce2bf7f2e295\"><label for=\"gensym_52bed85055221\" style=\"cursor:pointer;\"><code>i == 0 and j == 0</code> </label>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left:430px; top: 250px; /* width:380px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"radio\" name=\"answer[9326a7b17e15cfc69f8e46f9357bf6c5][]\" id=\"gensym_52bed850558b5\" value=\"94023160fe66f684740c119a18e39a9e\"><label for=\"gensym_52bed850558b5\" style=\"cursor:pointer;\"><code>i == 0 and j == 1</code> </label>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left:430px; top: 320px; /* width:380px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"radio\" name=\"answer[9326a7b17e15cfc69f8e46f9357bf6c5][]\" id=\"gensym_52bed85055eba\" value=\"ff8f062afa22c18eb5c2d4c557bcd44b\"><label for=\"gensym_52bed85055eba\" style=\"cursor:pointer;\"><code>i == 1 and j == 0</code> </label>\n</div>",
                        "background": "color",
                        "background_src": "white",
                        "post_answer_url": "https:\/\/class.coursera.org\/programming2-001\/quiz\/video_quiz_attempt?method=post_question_answer&quiz_id=18&preview=0&question_id=9326a7b17e15cfc69f8e46f9357bf6c5"
                    }]
                }
            }
        };        
```

Additionally, you will need to add quiz plugins and videogular to your application:

```js
"use strict";
angular.module("videogularApp",
    [
        "controllers",

        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controlbar",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.buffering",
        "info.vietnamcode.nampnq.videogular.plugins.quiz"
    ]
);
```

And that's all :)

### Install Videogular

Install [Videogular](http://www.videogular.com/) with Bower:

`bower install videogular`

### Install themes

Install [Videogular](http://www.videogular.com/) themes with Bower:

`bower install videogular-themes-default`

### Install plugins

Install [Videogular](http://www.videogular.com/) plugins with Bower:

`bower install videogular-buffering`

`bower install videogular-controls`

`bower install videogular-poster`

## Documentation

It's available on [Videogular's project Wiki](https://github.com/2fdevs/videogular/wiki).

## License

The MIT License (MIT)

Copyright (c) 2013 2fdevs

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.