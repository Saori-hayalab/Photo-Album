"use strict";
$(document).ready(function() {

    let numberOfPhotos = 1
    let photos = [];

    $("#addPhotoButton").on("click", function() {

        let $pictureContainer = $(".pictureContainer").first().clone(true, true);
        // $pictureContainer.removeAttr("class");
        numberOfPhotos = numberOfPhotos + 1;
        $pictureContainer.attr("id", "pictureContainer1" + numberOfPhotos);


        let $imageTagOfPictureContainer = $pictureContainer.find("img");
        let $row = $("#manyPictures");
        $imageTagOfPictureContainer.attr("src", $("#PhotoURL").val());

        $pictureContainer.addClass("bounce");
        // append (element I'm interested in).append(the element i'm appending)
        $row.append($pictureContainer);

        // appendTo -> (the element I'm appending).appendTo(element I want to add something to)
        $("#PhotoURL").val("");

        let $picUrl = $pictureContainer.find("src");
        photos.push("$picUrl");
        localStorage.setItem("photos", JSON.stringify(photos));
        // $(".table").find("tbody").append($tr);
        console.log("workign?")
             
         });
         
 

    if (localStorage.getItem("photos")) {
        let photosString = localStorage.getItem("photos");
        let photosArray = JSON.parse(photosString);
    //     todos = todosArray;
    //     numberOfTodos = todosArray.length;
    //     writeTodos(todosArray);
    // }


    // function writeTodos(arrayOfTodos) {
    //     for (var i = 0; i < arrayOfTodos.length; i++) {
    //         let $tr = $("<tr>");
    //         let $tdNumber = $("<td>");
    //         $tdNumber.text(arrayOfTodos[i].id);
    //         let $tdTodo = $("<td>").append(`<h1>${arrayOfTodos[i].todoText}</h1>`);
    //         numberOfTodos++;
    //         $tr.append($tdNumber);
    //         $tr.append($tdTodo);
    //         $(".table").find("tbody").append($tr);
    //     }
    // }




    });

//     // .remove => delete entire thing
//     $(".remove.btn-danger").on("click", function() {
//         // remove the closest pictureContainer 
//         // remove the .pictureContainer element and it's children
//         $(this).closest(".pictureContainer").remove();
//     });



//     $(".like.btn-danger").on("click", function() {

//         // using just appendTo
//         $(this).closest(".pictureContainer").detach().appendTo($("#myFavoriteBox"));
 
//     });


// });

    
    
           // if we wante to use append
        //  let $pictureContainer =  $(this).closest(".pictureContainer").detach();
        //  let $favBox = $("#myFavoriteBox");
        //  $favBox.append($pictureContainer)

        // let $selectedBox = $(this)
        //  $selectedBox.detach().appendTo($("#myFavoriteBox"));