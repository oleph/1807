define(["jquery","jquery-cookie"],function(c){function e(){}return e.prototype.unitprice=function(){var e=c("#addli .addli_li"),t=JSON.parse(c.cookie("cart"));console.log(t);for(var n=0;n<e.length;n++){var r=c(e[n]).find("#total"),i=c(e[n]).find("#price"),o=c(e[n]).find("#_num");i=t[n].price,o=t[n].num;c(r).html(parseInt(i)*parseInt(o))}},e.prototype.xunitprice=function(e){c("#addli .addli_li");var t=c(e).siblings(".the_num").val(),n=c(e).parent().parent().parent().find("#price").html();c(e).parent().parent().parent().find("#total").html(parseInt(t)*parseInt(n))},e.prototype.totals=function(){for(var e=c("#addli .addli_li"),t=0,n=JSON.parse(c.cookie("cart")),r=0;r<e.length;r++)if(c(e[r]).find(".checks").is(":checked")){var i=parseInt(n[r].price)*parseInt(n[r].num);t+=parseInt(i)}c("#total_cost").html(t)},e.prototype.head_total=function(){for(var e=0,t=c("#cart_list li"),n=JSON.parse(c.cookie("cart")),r=0;r<t.length;r++){var i=n[r].price,o=n[r].num;console.log(i),e+=parseInt(i)*parseInt(o)}c("#head_num").html(t.length),c("#head_total").html("￥"+e)},e.prototype.rush=function(){var e=c("#addli .addli_li");console.log(e);var t=[],n=JSON.parse(c.cookie("cart"));console.log(n);for(var r=0;r<e.length;r++){var i=n[r].id,o=n[r].name,a=n[r].price,l={id:i,name:o,pic:n[r].pic,size:c(e[r]).find(".old_size").html(),price:a,num:Number(c(e[r]).find("#_num").html())};console.log(l),t.push(l)}console.log(t);var p=JSON.stringify(t);c.cookie("cart",p,{expires:7})},new e});