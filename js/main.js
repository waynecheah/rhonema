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
    title: { en:'Rhone Ma Dosage Calculator', zh: 'Rhone Ma 药物剂量计算机' },
    animal: { en:'Animal', zh: '动物' },
    poultry: { en: 'Poultry', zh: '家畜' },
    swine: { en: 'Swine', zh: '猪' },
    disease: { en: 'Disease', zh: '疾病' },
    product_name: { en: 'Product Name', zh: '产品名称' },
    concentration: { en: 'Product Concentration (%)', zh: '产品浓度（%）' },
    dosage: { en: 'Dosage', zh: '剂量' },
    no_animal: { en: 'No. of Animal', zh: '动物数量' },
    feed_intake: { en: 'Feed intake(kg/day)', zh: '每日采食量(kg/天)' },
    kgday: { en: 'kg/day', zh: 'kg/天' },
    average_weight: { en: 'Average Body Weight (kg)', zh: '动物平均体量(kg)' },
    calculate: { en: 'Calculate', zh: '计算' },
    msg1: { en: 'Please enter Product Active Ingredients Concentration (%)', zh: 'Please enter Product Active Ingredients Concentration (%)' },
    msg2: { en: 'Please enter Dosage (mg/kg)', zh: 'Please enter Dosage (mg/kg)' },
    msg3: { en: 'Please enter quantity of animal', zh: 'Please enter quantity of animal' },
    msg4: { en: 'Please enter animal\'s body weight', zh: 'Please enter animal\'s body weight' },
    msg5: { en: 'Please enter Feed intake (kg/day)', zh: 'Please enter Feed intake (kg/day)' },
    rs1: { en: 'Animal quantity', zh: '动物数量' },
    rs2: { en: 'Average Body Weight', zh: '动物平均体重' },
    rs3: { en: 'Amount of active ingredient required', zh: '所需活性成分' },
    rs4: { en: 'Amount of product required', zh: '所需产品使用量' },
    rss1: { en: 'Average Body weight of animal', zh: '动物平均体重' },
    rss2: { en: 'Daily Feed Consumption', zh: '每日采食量' },
    rss3: { en: 'Amount of product required per animal', zh: '每只动物需要的产品分量' },
    rss4: { en: 'Amount of product need to add into 1 MT of feed', zh: '每公屯饲料需要添加产品剂量' },
    back: { en: 'Back', zh: '回到前一页' },
    exit: { en: 'Exit', zh: '离开' },
    contact: {
        en: 'Please visit <a href="htpp://www.rhonema.com">www.rhonema.com</a> or call <a href="tel:+60378737355">+60378737355</a> for more information',
        zh: '请游览 <a href="htpp://www.rhonema.com">www.rhonema.com</a> 或联络 <a href="tel:+60378737355">+60378737355</a> 以获得更多资讯'
    }
};


$(function() {
    function number_format (number, decimals, dec_point, thousands_sep) {
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + Math.round(n * k) / k;
            };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    } // number_format

    function message (no) {
        alert(i18n[no][language]);
    } // message

    function switchLang () {
        var l = language;
        $('title').html(i18n.title[l]);

        if (typeof parent.title == 'function') {
            parent.title(i18n.title[l]);
        }

        $.each($('.lang'), function(){
            var k = $(this).attr('data-lang');

            if (typeof i18n[k] == 'undefined') { return; }

            $(this).html(i18n[k][l]);
        });
    } // switchLang

    function scrollField (el) {
        var p = $(el).position();
        var t = Math.round(p.top) - 25;
        $('body').scrollTop(t);
        setTimeout(function(){
            $('body').scrollTop(t);
        }, 500);
    } // scrollField


    var height = window.innerHeight;
    $('#choose-language').css('height', height+'px');
    $('#form').attr('style', 'display:none');

    $('#choose-language').show();
    var butHgt = $('#lang-buttons').outerHeight();
    var padTop = (height - butHgt) / 2;
    $('#lang-buttons').css('padding-top', padTop+'px');
    setTimeout(function(){
        $('body').scrollTop(0);
    }, 500);

    $(window).on('resize', function(){
        if ($('#choose-language:visible').length) {
            var height = window.innerHeight;
            var padTop = (height - butHgt) / 2;
            $('#choose-language').css('height', height+'px');
            $('#lang-buttons').css('padding-top', padTop+'px');
            $('body').scrollTop(0);
        }
    });


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
            $('#form').attr('style','').removeAttr('style');
            $('#no_animal').focus();
        });
        switchLang();
    });


    var html = '';
    $.each(disease, function(i, o){
        html += '<option value="'+i+'">'+o.name[language]+'</option>';
    });
    $('#disease').html(html);

    $('input[type=number],select,#calculate').focus(function(){
        var p = $(this).position();
        var t = Math.round(p.top) - 25;
        $('body').scrollTop(t);
        setTimeout(function(){
            $('body').scrollTop(t);
        }, 800);
    });

    $('#animal').on('change', function(){
        var animal = $(this).val();
        if (animal == 'poultry') {
            $('#rs-poultry').show();
            $('#rs-swine').hide();
            $('div.swine').slideUp('normal', function(){
                $('#dosage,#measure').attr('disabled', 'disabled').val('20');
                $('div.poultry').slideDown('normal', function(){
                    $('#no_animal').focus();
                });
            });
        } else {
            $('#rs-poultry').hide();
            $('#rs-swine').show();
            $('div.poultry').slideUp('normal', function(){
                $('#concentration').val('50');
                $('#dosage,#measure').removeAttr('disabled');
                $('div.swine').slideDown('normal', function(){
                    $('#concentration').focus();
                });
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
        var showResultFn = function () {
            var w = $('#form').outerWidth();
            var h = $('#form').outerHeight();
            $('#form').css('position', 'relative').animate({
                left: -w+'px'
            }, 500, function(){
                $('#form').hide();
            });

            $('body').scrollTop(0);
            $('#result').css({
                position: 'absolute',
                top: 0,
                width: w+'px',
                //height: h+'px',
                left: w+'px'
            }).show().animate({
                left: 0
            }, 500, function(){
                $('#result').attr('style', '');
            });
        };

        if ($('#animal').val() == 'swine') {
            var active = $('#concentration').val();
            var dosage = $('#dosage').val();
            var intake = $('#feed_intake').val();
            var weight = $('#average_weight').val();
            var unit   = ($('#measure').val() == 'mgkg') ? 'gm' : 'MIU';
            var devide = (unit == 'gm') ? 1000 : 1000000;

            if (!active) {
                message('msg1');
                $('#concentration').focus();
                return;
            } else if (!dosage) {
                message('msg2');
                $('#dosage').focus();
                return;
            } else if (!intake) {
                message('msg5');
                $('#feed_intake').focus();
                return;
            } else if (!weight) {
                message('msg4');
                $('#average_weight').focus();
                return;
            }

            var t1 = (((dosage * weight) / active) * 100) / devide;
            var t2 = (devide / intake) * t1;
            $('span.avg_body_weight').html(weight);
            $('span.feed_consumption').html(intake);
            $('span.required_product').html(number_format(t1,2));
            $('span.amount_product').html(number_format(t2,2)+' '+unit);
            showResultFn();

            return;
        }

        var active = $('#concentration2').val();
        var dosage = $('#dosage').val();
        var animal = $('#no_animal').val();
        var weight = $('#average_weight').val();
        var unit   = ($('#measure').val() == 'mgkg') ? 'gm' : 'MIU';
        var devide = (unit == 'gm') ? 1000 : 1000000;

        if ($('div.others:hidden').length) {
            active = $('#product option:selected').attr('data-ingredient');
        }

        if (!active) {
            message('msg1');
            $('#concentration2').focus();
            scrollField('#concentration2');
            return;
        } else if (!dosage) {
            message('msg2');
            $('#dosage').focus();
            scrollField('#dosage');
            return;
        } else if (!animal) {
            message('msg3');
            $('#no_animal').focus();
            scrollField('#no_animal');
            return;
        } else if (!weight) {
            message('msg4');
            $('#average_weight').focus();
            scrollField('#average_weight');
            return;
        }

        var t1 = (dosage * animal * weight) / devide;
        var t2 = (dosage * animal * weight) / active;
        $('span.animal_qty').html(animal);
        $('span.weight').html(weight);
        $('span.amt_ingredient').html(number_format(t1,2)+' '+unit);
        $('span.amt_product').html(number_format(t2,2));
        showResultFn();
    });

    $('#back-form').click(function(){
        var w = $('#result').outerWidth();
        var h = $('#form').outerHeight();

        $('#result').css({
            position: 'relative',
            height: h+'px'
        }).animate({
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
            $('#form').attr('style','').removeAttr('style');
        });
    });
});