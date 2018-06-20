$(function () {

	$.ajax({
		type:'get',
		url:`${APP.baseUrl}/category/queryTopCategoryPaging`,
		data:{
			page: 1,
			pageSize: 10
		},
		success:function (response) {
			var html = template('categoryFirstTpl', response);
			$('#categoryFirstBox').html(html);
		}
	})

});
