"use strict";
angular.module('nampnq.util.bindHtml', [])
    .directive('bindHtmlUnsafe', function() {
        return function(scope, element, attr) {
            element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
            scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
                element.html(value || '');
            });
        };
    });
angular.module("info.vietnamcode.nampnq.videogular.plugins.quiz", ['nampnq.util.bindHtml'])
    .directive(
        "vgQuiz", ["VG_EVENTS",
            function(VG_EVENTS) {
                return {
                    restrict: "E",
                    require: "^videogular",
                    templateUrl: "views/videogular/plugins/quiz/quiz.html",
                    scope: {
                        vgData: "=",
                        vgQuizSubmit: '&',
                        vgQuizSkip: '&',
                        vgQuizContinue: '&',
                        vgQuizShowExplanation: '&'
                    },
                    link: function(scope, elem, attr, API) {
                        scope.previous_time = 0;
                        scope.submit = true;
                        scope.skip = true;
                        scope.continue_btn = false;
                        scope.explanation = false;
                        var vgQuizSubmitCallBack = scope.vgQuizSubmit();
                        var vgQuizSkipCallBack = scope.vgQuizSkip();
                        var vgQuizContinueCallBack = scope.vgQuizContinue();
                        var vgQuizShowExplanationCallBack = scope.vgQuizShowExplanation();

                        function onUpdateTime(target, params) {
                            if (scope.vgData)
                                if (!API.videoElement[0].paused) {
                                    var i, cue_point_time, triggered_cue_points, currentTime = params[0],
                                        timeDelta = currentTime - scope.previous_time;
                                    if (timeDelta > 0 && 2 > timeDelta) {
                                        for (triggered_cue_points = [], i = 0; i < scope.vgData.length; i++)
                                            if (cue_point_time = scope.vgData[i].time, scope.previous_time < cue_point_time && currentTime >= cue_point_time)
                                                triggered_cue_points.push(scope.vgData[i]);
                                        if (triggered_cue_points.length > 0) {
                                            //TODO: change varible in html, add css display
                                            elem.css('display', 'block');
                                            API.pause();
                                            scope.html = triggered_cue_points[0].html;
                                            var background_type = triggered_cue_points[0].background,
                                                background_src = triggered_cue_points[0].background_src;
                                            if ("color" == background_type)
                                                elem.css("background", background_src);
                                            else if ("image" == background_type)
                                                elem.css("background-image", "url(" + background_src + ")").css("background-size", "100% 100%");
                                            else if ("transparent" == background_type)
                                                elem.css("background", "transparent");
                                        }
                                    }
                                    scope.previous_time = currentTime
                                }
                        };

                        function onUpdateSize(target, param) {
                            elem.css('width', param[0]);
                            elem.css('height', param[1]);
                        };

                        function refreshOverlay() {

                        }
                        scope.quizSubmit = function() {
                            if (vgQuizSubmitCallBack) {

                                var paramObj = {};
                                angular.forEach(elem.find('form').serializeArray(), function(kv) {
                                    if (paramObj.hasOwnProperty(kv.name)) {
                                        if (!paramObj[kv.name].push) {
                                            paramObj[kv.name] = [paramObj[kv.name]];
                                        }
                                        paramObj[kv.name].push(kv.value);
                                    } else {
                                        paramObj[kv.name] = kv.value;
                                    }
                                });
                                var result = vgQuizSubmitCallBack(paramObj);
                                scope.status = result.description;
                                if (result.result) {
                                    scope.submit = false;
                                    scope.skip = false;
                                    scope.continue_btn = true;
                                    scope.explanation = true;

                                }
                            }

                        };
                        scope.quizSkip = function() {
                            if (vgQuizSkipCallBack) vgQuizSkipCallBack();
                            scope.status = "";
                            elem.css('display', 'none');
                            API.play();
                        };
                        scope.quizContinue = function() {
                            if (vgQuizContinueCallBack) vgQuizContinueCallBack();
                            scope.status = "";
                            scope.submit = true;
                            scope.skip = true;
                            scope.continue_btn = false;
                            scope.explanation = false;
                            elem.css('display', 'none');
                            API.play();
                        };
                        scope.quizShowExplanation = function() {
                            if (vgQuizShowExplanationCallBack) {
                                var result = vgQuizShowExplanationCallBack();
                                scope.status = result;
                            }
                        };
                        elem.css('display', 'none');
                        API.$on(VG_EVENTS.ON_UPDATE_TIME, onUpdateTime);
                        API.$on(VG_EVENTS.ON_UPDATE_SIZE, onUpdateSize);

                    }
                }
            }
        ]);
