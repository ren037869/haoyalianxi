// JavaScript Document
jQuery(function() {
jQuery('.qht1>ul>li').click(function() { TabSelect(".qht1>ul>li", ".qh1>div.qhm1", "cur", jQuery(this)) });
jQuery('.qht1>ul>li').eq(0).trigger("click");
jQuery('.qht2>ul>li').click(function() { TabSelect(".qht2>ul>li", ".qh2>div.qhm2", "cur", jQuery(this)) });
jQuery('.qht2>ul>li').eq(0).trigger("click");
jQuery('').click(function(){
			jQuery('.wthpop').show();
		})
		jQuery('.wthpop>p>span').click(function(){
			jQuery('.wthpop').hide()
		})

    });

//tab function
function TabSelect(tab,con,addClass,obj) {
    var jQuery_self = obj;
    var jQuery_nav = jQuery(tab);

    jQuery_nav.removeClass(addClass),
	jQuery_self.addClass(addClass);

    var jQuery_index = jQuery_nav.index(jQuery_self);
    var jQuery_con = jQuery(con);
    jQuery_con.hide(),
	jQuery_con.eq(jQuery_index).show();
}
//切换
