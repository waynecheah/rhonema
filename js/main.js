var language = 'en';
var disease = [{
    name: {
        en: 'Colibacillosis', zh: 'Colibacillosis'
    },
    products: [{
        name: { en: 'Rhonamox 50 WSP', zh: 'Rhonamox 50 WSP' },
        ingredient: 500,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Trisulmix Liquid', zh: 'Trisulmix Liquid' },
        ingredient: 200,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Cofacoli', zh: 'Cofacoli' },
        ingredient: 2000000,
        dosage: 75000,
        unit: 'miu'
    }, {
        name: { en: 'Imequyl 20%', zh: 'Imequyl 20%' },
        ingredient: 200,
        dosage: 12,
        unit: 'gm'
    }, {
        name: { en: 'Colisultrix', zh: 'Colisultrix' },
        ingredient: 500000,
        dosage: 75000,
        unit: 'miu'
    }, {
        name: { en: 'Other Products', zh: '其他产品' },
        dosage: 0,
        unit: 'gm'
    }]
}, {
    name: {
        en: 'Fowl Cholera', zh: 'Fowl Cholera'
    },
    products: [{
        name: { en: 'Trisulmix Liquid', zh: 'Trisulmix Liquid' },
        ingredient: 200,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Ronaxan 5%', zh: 'Ronaxan 5%' },
        ingredient: 50,
        dosage: 10,
        unit: 'gm'
    }, {
        name: { en: 'Merimycin Gold', zh: 'Merimycin Gold' },
        ingredient: 200,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Other Products', zh: '其他产品' },
        ingredient: 0,
        dosage: 0,
        unit: 'gm'
    }]
}, {
    name: {
        en: 'Pasteurellosis', zh: 'Pasteurellosis'
    },
    products: [{
        name: { en: 'Trisulmix Liquid', zh: 'Trisulmix Liquid' },
        ingredient: 200,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Ronaxan 5%', zh: 'Ronaxan 5%' },
        ingredient: 50,
        dosage: 10,
        unit: 'gm'
    }, {
        name: { en: 'Merimycin Gold', zh: 'Merimycin Gold' },
        ingredient: 200,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Other Products', zh: '其他产品' },
        ingredient: 0,
        dosage: 0,
        unit: 'gm'
    }]
}, {
    name: {
        en: 'Infectious Coryza', zh: 'Infectious Coryza'
    },
    products: [{
        name: { en: 'Trisulmix Liquid', zh: 'Trisulmix Liquid' },
        ingredient: 200,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Merimycin Gold', zh: 'Merimycin Gold' },
        ingredient: 200,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Other Products', zh: '其他产品' },
        ingredient: 0,
        dosage: 0,
        unit: 'gm'
    }]
}, {
    name: {
        en: 'Chronic Respiratory Disease', zh: 'Chronic Respiratory Disease'
    },
    products: [{
        name: { en: 'Rhomicosin 25 LQ', zh: 'Rhomicosin 25 LQ' },
        ingredient: 250,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Suanovil', zh: 'Suanovil' },
        ingredient: 1500000,
        dosage: 150000,
        unit: 'miu'
    }, {
        name: { en: 'Ronaxan 5%', zh: 'Ronaxan 5%' },
        ingredient: 50,
        dosage: 10,
        unit: 'gm'
    }, {
        name: { en: 'Other Products', zh: '其他产品' },
        ingredient: 0,
        dosage: 0,
        unit: 'gm'
    }]
}, {
    name: {
        en: 'Necrotic Enteritis', zh: 'Necrotic Enteritis'
    },
    products: [{
        name: { en: 'Rhonamox 50 WSP', zh: 'Rhonamox 50 WSP' },
        ingredient: 500,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Suanovil', zh: 'Suanovil' },
        ingredient: 1500000,
        dosage: 50000,
        unit: 'miu'
    }, {
        name: { en: 'Rhomicosin 25 LQ', zh: 'Rhomicosin 25 LQ' },
        ingredient: 250,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Other Products', zh: '其他产品' },
        ingredient: 0,
        dosage: 0,
        unit: 'gm'
    }]
}, {
    name: {
        en: 'Salmonellosis', zh: 'Salmonellosis'
    },
    products: [{
        name: { en: 'Trisulmix Liquid', zh: 'Trisulmix Liquid' },
        ingredient: 200,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Rhonamox 50 WSP', zh: 'Rhonamox 50 WSP' },
        ingredient: 500,
        dosage: 20,
        unit: 'gm'
    }, {
        name: { en: 'Imequyl  20%', zh: 'Imequyl  20%' },
        ingredient: 200,
        dosage: 12,
        unit: 'gm'
    }, {
        name: { en: 'Other Products', zh: '其他产品' },
        ingredient: 0,
        dosage: 0,
        unit: 'gm'
    }]
}, {
    name: {
        en: 'Others', zh: '其他'
    },
    products: [{
        name: { en: 'Other Products', zh: '其他产品' },
        dosage: 0,
        unit: 'gm'
    }]
}];

var i18n = {
    animal: { en:'Animal', zh: '动物' },
    disease: { en: 'Disease', zh: '疾病' },
    product_name: { en: 'Product Name', zh: '产品名称' },
    concentration: { en: 'Product Concentration', zh: '集中产品' },
    dosage: { en: 'Dosage', zh: '剂量' },
    no_animal: { en: 'No. of Animal', zh: '动物数量' },
    average_weight: { en: 'Average Body Weight (kg)', zh: '动物平均体量(kg)' },
    calculate: { en: 'Calculate', zh: '计算' },
    msg1: { en: 'Please enter Product Active Ingredients Concentration (%)', zh: 'Please enter Product Active Ingredients Concentration (%)' },
    msg2: { en: 'Please enter Dosage (mg/kg)', zh: 'Please enter Dosage (mg/kg)' },
    msg3: { en: 'Please enter quantity of animal', zh: 'Please enter quantity of animal' },
    msg4: { en: 'Please enter animal\'s body weight', zh: 'Please enter animal\'s body weight' },
    msg5: { en: 'reserve', zh: 'reserve' },
    back: { en: 'Back', zh: '返回' },
    exit: { en: 'Exit', zh: '离开' }
};


$(function() {
    function message (no) {
        alert(i18n[no][language]);
    } // message

    function switchLang () {
        var l = language;
        $.each($('.lang'), function(){
            var k = $(this).attr('data-lang');

            if (typeof i18n[k] == 'undefined') { return; }

            $(this).html(i18n[k][l]);
        });
    } // switchLang


    var height = $('#form').outerHeight();
    $('#choose-language').css('height', height+'px');
    $('#form').attr('style', 'display:none');

    $('#choose-language').show();
    var butHgt = $('#lang-buttons').outerHeight();
    var padTop = (height - butHgt) / 2;
    $('#lang-buttons').css('padding-top', padTop+'px');

    $('button.language').click(function(){
        language = $(this).attr('data-lang');

        var w = $('#choose-language').outerWidth();
        $('#choose-language').css('position', 'relative').animate({
            left: -w+'px'
        }, 500, function(){
            $('#choose-language').hide();
        });

        $('#form').css({
            position: 'absolute',
            top: 0,
            width: w+'px',
            left: w+'px'
        }).show().animate({
            left: 0
        }, 500, function(){
            $('#form').removeAttr('style');
        });
        switchLang();
    });


    var html = '';
    $.each(disease, function(i, o){
        html += '<option value="'+i+'">'+o.name[language]+'</option>';
    });
    $('#disease').html(html);

    $('#animal').on('change', function(){
        var animal = $(this).val();
        if (animal == 'poultry') {
            $('div.swine').slideUp('normal', function(){
                $('div.poultry').slideDown();
            });
        } else {
            $('div.poultry').slideUp('normal', function(){
                $('div.swine').slideDown();
            });
        }
    });

    $('#disease').on('change', function(){
        var i = $(this).val();
        var t = '';

        $.each(disease[i].products, function(i, o){
            t += '<option data-ingredient="'+o.ingredient+'" data-dosage="'+o.dosage+'" data-unit="'+o.unit+'" value="'+i+'">'+o.name[language]+'</option>'
        });
        $('#product').html(t);
        $('#product').trigger('change');
    }).trigger('change');

    $('#product').on('change', function(){
        var dosage = $(this).find(':selected').attr('data-dosage');
        var unit   = $(this).find(':selected').attr('data-unit');

        if (unit == 'gm') {
            $('#measure').val('mgkg');
        } else {
            $('#measure').val('iukg');
        }

        if (dosage == 0) {
            $('div.others').slideDown();
            $('#concentration2').val(50).focus();
            $('#dosage').removeAttr('disabled').val('');
            $('#measure').removeAttr('disabled');
        } else {
            $('div.others').slideUp('fast');
            $('#dosage').attr('disabled', 'disabled').val(dosage);
            $('#measure').attr('disabled', 'disabled');
        }
    }).trigger('change');

    $('input[type=number]').on('keypress', function(e){
        if (e.keyCode < 46 || e.keyCode > 57) {
            e.preventDefault();
        }
    });

    $('#calculate').click(function(){
        var active = $('#concentration2').val();
        var dosage = $('#dosage').val();
        var animal = $('#no_animal').val();
        var weight = $('#average_weight').val();
        var devide = ($('#measure').val() == 'mgkg') ? 1000 : 1000000;

        if ($('div.others:hidden').length) {
            active = $('#product option:selected').attr('data-ingredient');
        }

        if (!active) {
            message('msg1');
            $('#concentration2').focus();
            return;
        } else if (!dosage) {
            message('msg2');
            $('#dosage').focus();
            return;
        } else if (!animal) {
            message('msg3');
            $('#no_animal').focus();
            return;
        } else if (!weight) {
            message('msg4');
            $('#average_weight').focus();
            return;
        }

        var t1 = (dosage * animal * weight) / devide;
        var t2 = (dosage * animal * weight) / active;
        $('span.animal_qty').html(animal);
        $('span.weight').html(weight);
        $('span.amt_ingredient').html(t1);
        $('span.amt_product').html(t2);

        var w = $('#form').outerWidth();
        var h = $('#form').outerHeight();
        $('#form').css('position', 'relative').animate({
            left: -w+'px'
        }, 500, function(){
            $('#form').hide();
        });

        $('#result').css({
            position: 'absolute',
            top: 0,
            width: w+'px',
            height: h+'px',
            left: w+'px'
        }).show().animate({
            left: 0
        }, 500, function(){
            $('#result').attr('style', 'height:'+h+'px');
        });
    });

    $('#back-form').click(function(){
        var w = $('#result').outerWidth();
        $('#result').css('position', 'relative').animate({
            left: w+'px'
        }, 500, function(){
            $('#result').hide();
        });

        $('#form').css({
            position: 'absolute',
            top: 0,
            left: '-'+w+'px',
            width: w+'px'
        }).show().animate({
            left: 0
        }, 500, function(){
            $('#form').removeAttr('style');
        });
    });
});