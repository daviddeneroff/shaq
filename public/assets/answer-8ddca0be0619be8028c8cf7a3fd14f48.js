$(document).ready(function(){$(".add-answer").click(function(t){t.preventDefault();var e=$(t.target),a=e.attr("href");$.ajax({type:"get",url:a,success:function(t){$("#main").after(t)}})})});