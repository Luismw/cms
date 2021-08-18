/* PIXIE IMAGE EDITOR */
$(function (){
    let pixie = new Pixie({
        watermarkText: 'Pixie Demo',
        onLoad: function () {
            window.postMessage('pixieLoaded', '*');
        }, 
    });
});

/* ////////////////////////////////////////////// */
/* ////////////////////////////////////////////// */

/* MATERIAL COLOR PICKER */
$(function() {
    $('.colors-buttons a').materialColorPicker({
        onClose: function(e){
            var color = e.currentcolor;
            if (color) {
                var style = {
                    "color": color.color
                }
                e.target.css(style);
            }
        }
    });
    $('.colors-background a').materialColorPicker({
        onClose: function(e){
            var color = e.currentcolor;
            if (color) {
                var style = {
                    "color": color.color
                }
                e.target.css(style);
            }
        }
    });
});

/* ////////////////////////////////////////////// */
/* ////////////////////////////////////////////// */

/* CONTADOR DE CARACTERES PARA LOS INPUT */
$(function(){
    $(document).on('keyup', "[maxlength]", function (e) {
        let este = $(this),
        maxlengthint = 0,
        currentCharacters = este.val().length;
        remainingCharacters = maxlengthint + currentCharacters,
        espan = este.next('.txt-length').find('.count');		
        espan.html(remainingCharacters);	
    });
});

/* ////////////////////////////////////////////// */
/* ////////////////////////////////////////////// */

/* INPUT FILE (DRAG AND DROP) */
$(function (){
    let $fileInput = $('.file-input');
    
    $fileInput.on('change', function() {
        let filesCount = $(this)[0].files.length;
        let $textContainer = $(this).prev();
    
        if (filesCount === 1) {
            let fileName = $(this).val().split('\\').pop();
            $textContainer.text(fileName);
        } else {
            $textContainer.text('O arrastrar aquí');
        }
    });
});

/* ////////////////////////////////////////////// */
/* ////////////////////////////////////////////// */

/* CONVERTIR LOS TEXTAREA EN EDITOR WYSIWYG */
function textareaWysiwyg (){
    $('.textarea-wysiwyg').summernote({
        height: 100,
        minHeight: null,
        maxHeight: null,
        toolbar: [
            ['toolbar', ['bold', 'italic', 'underline','ul', 'ol']]
        ],
        lang: 'es-ES',	
    });
} textareaWysiwyg();

/* ////////////////////////////////////////////// */
/* ////////////////////////////////////////////// */

/* SLIDER PRINCIPAL */
$(function(){ // Accordion
    $('#edit-slider .btn-edit-slide').click(function(e) {
        e.preventDefault();
    
        var $this = $(this);
    
        if ($this.parent().parent().next().hasClass('show')) {
            $this.parent().parent().next().removeClass('show');
            $this.parent().parent().next().slideUp(350);
        } else {
            $this.parent().parent().parent().parent().find('.item-slide .item-slide__content').removeClass('show');
            $this.parent().parent().parent().parent().find('.item-slide .item-slide__content').slideUp(350);
            $this.parent().parent().next().toggleClass('show');
            $this.parent().parent().next().slideToggle(350);
        }
    });
})

$(function () { // Agregar item slide
    $('.btn-add-slide').die('click').live('click', function (e) {
        e.preventDefault();
        let content = $('#content-item-slider .item-slide');
        let element = null;
        let type_div = 'slide_' + $.now();

        let randomID = `#${type_div}`;

        for (let i = 0; i < 1; i++) {
            element = content.clone();
            element.attr('id', type_div);
            element.find('.item-slide').attr('id', type_div);
            element.find('.btn-remove-slide').attr('targetDiv', type_div);
            element.appendTo('#edit-slider .list-slider');
        };

        $(`${randomID} .btn-edit-slide`).on("click", function(){
            let contentSlide = $(`${randomID} .item-slide__content`);

            contentSlide.slideToggle();
        });

        let cantSlider = $("#edit-slider .list-slider").children().length;
        let btnAddSlide = $("#edit-slider .btn-add-slide");
        if(cantSlider == 3){
            btnAddSlide.addClass("hide");
            btnAddSlide.removeClass("show");
        }
    }); 
}); 

$(function(){ // Eliminar item slide
    $(".btn-remove-slide").die('click').live('click', function (e) { 
        let targetDiv = $(this).attr('targetDiv');
    
        Swal.fire({
            title: 'Eliminar imagen',
            text: "¿Estás seguro?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#CB3234',
            cancelButtonColor: '#999999',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, eliminar',
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Eliminado!',
                    text: "Se ha eliminado la imagen exitosamente",
                    icon: 'success',
                    confirmButtonColor: '#CB3234'
                }),
                $('#' + targetDiv).remove();
    
                let cantSlider = $("#edit-slider .list-slider").children().length;
                let btnAddSlide = $("#edit-slider .btn-add-slide");
                if(cantSlider < 3){
                    btnAddSlide.addClass("show");
                    btnAddSlide.removeClass("hide");
                }
            }
        });
    });
});

/* ////////////////////////////////////////////// */
/* ////////////////////////////////////////////// */

/* SERVICIOS */
$(function(){ // Accordion
    $('#edit-services .btn-edit-service').click(function(e) {
        e.preventDefault();
    
        var $this = $(this);
    
        if ($this.parent().parent().next().hasClass('show')) {
            $this.parent().parent().next().removeClass('show');
            $this.parent().parent().next().slideUp(350);
        } else {
            $this.parent().parent().parent().parent().find('.item-service .item-service__content').removeClass('show');
            $this.parent().parent().parent().parent().find('.item-service .item-service__content').slideUp(350);
            $this.parent().parent().next().toggleClass('show');
            $this.parent().parent().next().slideToggle(350);
        }
    });
});

$(function(){ // Sortable (Drag)
    new Sortable( 
        document.querySelector('#edit-services .list-services'), { 
            handle: '.handle',
            animation: 150,
        }
    );
});

$(function () { // Agregar item servicio
    $('.btn-add-service').die('click').live('click', function (e) {
        e.preventDefault();
        let content = $('#content-item-service .item-service');
        let element = null;
        let type_div = 'service_' + $.now();

        for (let i = 0; i < 1; i++) {
            element = content.clone();
            element.attr('id', type_div);
            element.find('.item-service').attr('id', type_div);
            element.find('.btn-remove-service').attr('targetDiv', type_div);
            element.appendTo('#edit-services .list-services');
        };

        let randomID = `#${type_div}`;

        $(`${randomID} .input-name`).on("keyup change",function(){
            let inputService = document.querySelector(`${randomID} .input-name`).value;

            if (inputService !== ""){
                $(`${randomID} .title`).html($(this).val());
            }else{
                $(`${randomID} .title`).html(("Nombre del servicio"));
            }
        });

        $(`${randomID} .btn-edit-service`).on("click", function(){
            let contentService = $(`${randomID} .item-service__content`);

            contentService.slideToggle();
        });

        let $fileInput = $('.file-input');
        $fileInput.on('change', function() {
            let filesCount = $(this)[0].files.length;
            let $textContainer = $(this).prev();

            if (filesCount === 1) {
                let fileName = $(this).val().split('\\').pop();
                $textContainer.text(fileName);
            } else {
                $textContainer.text('O arrastrar aquí');
            }
        });

        let cantServices = $("#edit-services .list-services").children().length;
        let btnAddServices = $("#edit-services .btn-add-service");
        if(cantServices == 6){
            btnAddServices.addClass("hide");
        }
    }); 
}); 

$(function(){ // Eliminar item servicio
    $(".btn-remove-service").die('click').live('click', function (e) {
        let targetDiv = $(this).attr('targetDiv');

        Swal.fire({
            title: 'Eliminar servicio',
            text: "¿Estás seguro?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#CB3234',
            cancelButtonColor: '#999999',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, eliminar',
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Eliminado!',
                    text: "Se ha eliminado el servicio exitosamente",
                    icon: 'success',
                    confirmButtonColor: '#CB3234'
                }),
                $('#' + targetDiv).remove();

                let cantServices = $("#edit-services .list-services").children().length;
                let btnAddServices = $("#edit-services .btn-add-service");

                if(cantServices < 6){
                    btnAddServices.removeClass("hide");
                }
            }
        });
    });
});

$(function(){ //Cambiar nombre de titulo del servicio al escribir en el input correspondiente 
    $("#service_1 .input-name").on("keyup change",function(){
        let inputService1 = document.querySelector("#service_1 .input-name").value;

        if (inputService1 !== ""){
            $("#service_1 .title").html($(this).val());
        }else{
            $("#service_1 .title").html(("Nombre del servicio"));
        }
    });
    $("#service_2 .input-name").on("keyup change",function(){
        let inputService2 = document.querySelector("#service_2 .input-name").value;

        if (inputService2 !== ""){
            $("#service_2 .title").html($(this).val());
        }else{
            $("#service_2 .title").html(("Nombre del servicio"));
        }
    });
    $("#service_3 .input-name").on("keyup change",function(){
        let inputService3 = document.querySelector("#service_3 .input-name").value;

        if (inputService3 !== ""){
            $("#service_3 .title").html($(this).val());
        }else{
            $("#service_3 .title").html(("Nombre del servicio"));
        }
    });
});

/* ////////////////////////////////////////////// */
/* ////////////////////////////////////////////// */

/* INFORMACIÓN DE CONTACTO */
$(function () { // Agregar nuevo selector de horario
    $('.btn-add-select.lunes').die('click').live('click', function (e) {
        e.preventDefault();
        let content = $('#content-item-day .select-item'),
            element = null;
        let type_div = 'select' + $.now();
        for (let i = 0; i < 1; i++) {
            element = content.clone();
            element.attr('id', type_div);
            element.find('.btn-remove-select').attr('targetDiv', type_div);
            element.find('.select-item').attr('id', type_div);
            element.appendTo('.item-day.lunes .list-selects');
        };
    }); 
    $('.btn-add-select.martes').die('click').live('click', function (e) {
        e.preventDefault();
        let content = $('#content-item-day .select-item'),
            element = null;
        let type_div = 'select' + $.now();
        for (let i = 0; i < 1; i++) {
            element = content.clone();
            element.attr('id', type_div);
            element.find('.btn-remove-select').attr('targetDiv', type_div);
            element.find('.select-item').attr('id', type_div);
            element.appendTo('.item-day.martes .list-selects');
        };
    }); 
    $('.btn-add-select.miercoles').die('click').live('click', function (e) {
        e.preventDefault();
        let content = $('#content-item-day .select-item'),
            element = null;
        let type_div = 'select' + $.now();
        for (let i = 0; i < 1; i++) {
            element = content.clone();
            element.attr('id', type_div);
            element.find('.btn-remove-select').attr('targetDiv', type_div);
            element.find('.select-item').attr('id', type_div);
            element.appendTo('.item-day.miercoles .list-selects');
        };
    }); 
    $('.btn-add-select.jueves').die('click').live('click', function (e) {
        e.preventDefault();
        let content = $('#content-item-day .select-item'),
            element = null;
        let type_div = 'select' + $.now();
        for (let i = 0; i < 1; i++) {
            element = content.clone();
            element.attr('id', type_div);
            element.find('.btn-remove-select').attr('targetDiv', type_div);
            element.find('.select-item').attr('id', type_div);
            element.appendTo('.item-day.jueves .list-selects');
        };
    }); 
    $('.btn-add-select.viernes').die('click').live('click', function (e) {
        e.preventDefault();
        let content = $('#content-item-day .select-item'),
            element = null;
        let type_div = 'select' + $.now();
        for (let i = 0; i < 1; i++) {
            element = content.clone();
            element.attr('id', type_div);
            element.find('.btn-remove-select').attr('targetDiv', type_div);
            element.find('.select-item').attr('id', type_div);
            element.appendTo('.item-day.viernes .list-selects');
        };
    }); 
    $('.btn-add-select.sabado').die('click').live('click', function (e) {
        e.preventDefault();
        let content = $('#content-item-day .select-item'),
            element = null;
        let type_div = 'select' + $.now();
        for (let i = 0; i < 1; i++) {
            element = content.clone();
            element.attr('id', type_div);
            element.find('.btn-remove-select').attr('targetDiv', type_div);
            element.find('.select-item').attr('id', type_div);
            element.appendTo('.item-day.sabado .list-selects');
        };
    }); 
    $('.btn-add-select.domingo').die('click').live('click', function (e) {
        e.preventDefault();
        let content = $('#content-item-day .select-item'),
            element = null;
        let type_div = 'select' + $.now();
        for (let i = 0; i < 1; i++) {
            element = content.clone();
            element.attr('id', type_div);
            element.find('.btn-remove-select').attr('targetDiv', type_div);
            element.find('.select-item').attr('id', type_div);
            element.appendTo('.item-day.domingo .list-selects');
        };
    }); 

    $(".btn-remove-select").die('click').live('click', function (e) {
        let targetDiv = $(this).attr('targetDiv');
        $('#' + targetDiv).remove();
        return true; 
    });

    $(".item-day.lunes .select-close select").on('focus', function(e){
        let btnAddSelect = document.querySelector(".btn-add-select.lunes");
        btnAddSelect.classList.add("show")
    });
    $(".item-day.martes .select-close select").on('focus', function(e){
        let btnAddSelect = document.querySelector(".btn-add-select.martes");
        btnAddSelect.classList.add("show")
    });
    $(".item-day.miercoles .select-close select").on('focus', function(e){
        let btnAddSelect = document.querySelector(".btn-add-select.miercoles");
        btnAddSelect.classList.add("show")
    });
    $(".item-day.jueves .select-close select").on('focus', function(e){
        let btnAddSelect = document.querySelector(".btn-add-select.jueves");
        btnAddSelect.classList.add("show")
    });
    $(".item-day.viernes .select-close select").on('focus', function(e){
        let btnAddSelect = document.querySelector(".btn-add-select.viernes");
        btnAddSelect.classList.add("show")
    });
    $(".item-day.sabado .select-close select").on('focus', function(e){
        let btnAddSelect = document.querySelector(".btn-add-select.sabado");
        btnAddSelect.classList.add("show")
    });
    $(".item-day.domingo .select-close select").on('focus', function(e){
        let btnAddSelect = document.querySelector(".btn-add-select.domingo");
        btnAddSelect.classList.add("show")
    });

    // Mostrar campo buscar al hacer click en la lupa de dirección
    $("#edit-info-contact .address .btn-search").on("click", function(){
        let inputSearch = $("#edit-info-contact .address .input-search");

        inputSearch.slideToggle();
    })
});









