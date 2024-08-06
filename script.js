$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },

            
            country:{
                required:true
            },
            message:{
                required:true
            }
        }
       
    })
})
// submission;

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzfreCStinddcOgdHfS8-CESN79p8xTTbxGc1340jkG1TRZi-yNl6-Nebq0lPO5iGmvew/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})