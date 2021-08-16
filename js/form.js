$("form").submit(function(e){
    e.preventDefault();
    var name = $("input[name='name']").val();
    var email = $("input[name='email']").val();
    var mname = $("input[name='mname']").val();
    var internid = $("input[name='internid']").val();
 
    $(".data-table tbody").append("<tr data-internid='"+internid+"' data-name='"+name+"'data-email='"+email+"'data-mname='"+mname+"'><td>"+internid+"</td><td>"+name+"</td><td>"+email+"</td><td>"+mname+"</td><td><button class='btn btn-info btn-xs btn-edit button2'>Edit</button><button class='btn btn-danger btn-xs btn-delete button3'>Delete</button></td></tr>");

    $("input[name='name']").val('');
    $("input[name='email']").val('');
    $("input[name='mname']").val('');
    $("input[name='internid']").val('');
});

$("body").on("click", ".btn-delete", function(){
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function(){

    var mname = $(this).parents("tr").attr('data-mname');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_mname" value="'+mname+'">');
    $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update button2'>Update</button><button class='btn btn-warning btn-xs btn-cancel button4'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function(){
    var name = $(this).parents("tr").attr('data-name');
    var email = $(this).parents("tr").attr('data-email');
    var mname = $(this).parents("tr").attr('data-mname');
    var interid = $(this).parents("tr").attr('data-internid');

    $(this).parents("tr").find("td:eq(0)").text(interid);
    $(this).parents("tr").find("td:eq(1)").text(name);
    $(this).parents("tr").find("td:eq(2)").text(email);
    $(this).parents("tr").find("td:eq(3)").text(mname);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function(){
    var mname = $(this).parents("tr").find("input[name='edit_mname']").val();
    $(this).parents("tr").find("td:eq(3)").text(mname);
    $(this).parents("tr").attr('data-mname', mname);
    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});