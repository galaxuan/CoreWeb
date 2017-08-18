$(function(){
	$('.class_list li').hover(function(){
		$(this).toggleClass('on');
	});
	$('.feedback').hover(function(){
		$(this).toggleClass('feedback_on');
	});
	$('.problem_list').click(function(){
		$(this).toggleClass('problem_list_on');
		$(this).siblings('.answer_list').toggleClass('answer_list_black');
	});
	$('.img_add').hover(function(){
		$(this).find('.delete_img').slideDown(200);
	},function(){
		$(this).find('.delete_img').slideUp(200);	
	})
})
