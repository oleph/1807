"use strict";require(["config"],function(){require(["jquery","header","footer","template","reckon","jquery-cookie"],function(a,c,s,e,o){new Promise(function(s,i){a("header").load("/html/component/header.html",function(){s()}),a("footer").load("/html/component/footer.html",function(){})}).then(function(){c.nav(),c.barrage(),c.fix(),c.isLogin(),c.head_search();try{c.head_cart()}catch(s){console.log("not found cookie")}}).then(function(){var s=a.cookie("cart");if(s){var i=JSON.parse(s),t=e("pro-template",{products:{products:i}.products});a("#addli").html(t)}else a(".Products").addClass("isProduct").siblings().removeClass("isProduct")}).then(function(){var s=a("#addli");console.log(s),o.unitprice(),o.totals(),a(s).on("click",".revise",function(){if(console.log(this),"edit"===this.id&&(a(this).css("display","none").siblings("#del").css("display","block"),a(this).siblings("#true").css("display","block").siblings("#cancel").css("display","block"),a(this).parent().parent().find(".num").css("display","block").siblings().css("display","none").siblings().find(".the_num").val(a(this).parent().parent().find("._num").html()),a(this).parent().parent().find(".choice_size").css("display","block").find(".size_old").html(a(this).parent().parent().find(".old_size").html())),"true"===this.id&&(a(this).siblings("#edit").css("display","block"),a(this).css("display","none").siblings("#cancel").css("display","none"),a(this).parent().parent().find(".num").css("display","none").siblings().css("display","block").html(a(this).parent().parent().find(".the_num").val()),a(this).parent().parent().find(".old_size").html(a(this).parent().parent().find(".size_old").html()).parent().parent().parent().find(".choice_size").css("display","none"),o.rush(),o.unitprice(),o.totals(),c.head_cart()),"del"===this.id){var s=a.cookie("cart"),i=JSON.parse(s),t=a(this).parent().parent().index();i.splice(t,1);var e=JSON.stringify(i);a.cookie("cart",e,{path:"/",expires:7}),a(this).parent().parent().remove(),o.totals();var n=a.cookie("cart");"[]"==n?(a.cookie("cart","",{expires:-1,path:"/"}),a(".Products").addClass("isProduct").siblings().removeClass("isProduct")):console.log(n,11)}"cancel"===this.id&&(a(this).parent().parent().find(".num").css("display","none").siblings().css("display","block").parent().parent().find(".choice_size").css("display","none"),a(this).css("display","none").siblings("#true").css("display","none").siblings("#edit").css("display","block").siblings("#del").css("display","block"),o.unitprice(),o.totals())}),a(".res").click(function(){var s=parseInt(a(this).siblings(".the_num").val());1===s?console.log("不能再减了"):a(this).siblings(".the_num").val(--s),o.xunitprice(this)}),a(".add").click(function(){var s=parseInt(a(this).siblings(".the_num").val());a(this).siblings(".the_num").val(++s),o.xunitprice(this)});var t=a("#allcheck"),e=a(".checks");t.click(function(){var s=0;if(t.is(":checked")){for(var i=0;i<e.length;i++)a(e[i]).prop("checked",!0);s=e.length}else{for(i=0;i<e.length;i++)a(e[i]).prop("checked",!1);s=0}a(".pitch").html(s),o.totals()}),e.click(function(){for(var s=0,i=0;i<e.length;i++)a(e[i]).is(":checked")&&s++;a(".pitch").html(s),s===e.length?t.prop("checked",!0):t.prop("checked",!1),o.totals()}),t.click(),a(".size_top").click(function(){a(this).parent().find(".size_bottom").hasClass("ac")?(a(this).parent().find(".size_bottom").removeClass("ac"),a(this).find("span").css("transform","rotate(0deg)")):(a(this).parent().find(".size_bottom").addClass("ac"),a(this).find("span").css("transform","rotate(180deg)"))}),a(".size_bottom").on("click","li",function(){a(this).parent().parent().find(".size_old").html(a(this).html()),a(this).parent().addClass("ac"),a(this).parent().parent().find("span").css("transform","rotate(180deg)")})})})});