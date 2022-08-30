
function upload_info() {
    document.getElementById('hhhm2_bbr_nrai_txt_stat').innerHTML = am_stat;
    document.getElementById('hhhm2_bbr_nrai_txt_heart').innerHTML = am_hearts;
    document.getElementById('hhhm2_bbr_nrai_txt_shop').innerHTML = am_shop;
}

function add_element(id, obj, num) {
    let block = document.createElement("aside");
    block.id = id;
    block.className = "mccml_block";
    if (num == 0) { block.style = "margin-left: 0;" }
    else if (num == 3) { block.style = "margin-right: 0;" }
    block.innerHTML = `<aside class="mccmlb_image"><aside class="mccmlb_i_container"><aside class="mccmlb_ic_left"><aside class="mccmlb_icl_elem"><p style="font-size: 16px;">%</p></aside><aside class="mccmlb_icl_elem" style="left: 26px; background: #4B7EE8;"><aside class="mccmlb_icle_image"></aside></aside><aside class="mccmlb_icl_elem" style="left: 52px; background: #2FC509;"><p>NEW</p></aside></aside><aside class="mccmlb_ic_right"><aside activeted="disabled" class="mccmlb_icr_stat"></aside><aside activeted="disabled" class="mccmlb_icr_heart"></aside></aside></aside><aside class="mccmlb_i_cont1"></aside></aside><aside class="mccmlb_info"><aside class="mccmlb_i_container"><p class="mccmlb_ic_txt1">В наличии</p><aside class="mccmlb_ic_circle"></aside><aside class="mccmlb_ic_circle"></aside><aside class="mccmlb_ic_circle"></aside><p class="mccmlb_ic_txt2">Есть в шоу-руме</p></aside><p class="mccmlb_i_title">${obj.title}</p><aside class="mccmlb_i_container1"><p class="mccmlb_ic_name">Тип дорожки:</p><p class="mccmlb_ic_value">${obj.top_dorozhki}</p></aside><aside class="mccmlb_i_container1"><p class="mccmlb_ic_name">Бег.полотно:</p><p class="mccmlb_ic_value">${obj.beg_polotno}</p></aside><aside class="mccmlb_i_container1"><p class="mccmlb_ic_name">Мощность двигателя:</p><p class="mccmlb_ic_value">${obj.moshnost_dvigatelya}</p></aside><aside class="mccmlb_i_container1"><p class="mccmlb_ic_name">Беговое полотно:</p><p class="mccmlb_ic_value">${obj.begovoe_polotno}</p></aside><aside class="mccmlb_i_container1"><p class="mccmlb_ic_name">Производитель </p><p class="mccmlb_ic_value">${obj.proizvoditel}</p></aside><aside class="mccmlb_i_container1"><p class="mccmlb_ic_name">Рейтинг</p><aside class="mccmlb_ic_star"></aside><aside class="mccmlb_ic_star"></aside><aside class="mccmlb_ic_star"></aside><aside class="mccmlb_ic_star"></aside><aside class="mccmlb_ic_star"></aside></aside><aside class="mccmlb_ic_container2"><aside class="mccmlb_icc2_left"><p class="mccmlb_icc2l_title">${obj.price}</p><p class="mccmlb_icc2l_disc">${obj.price_dec}</p></aside><aside activeted="disabled" class="mccmlb_icc2_right"><aside class="mccmlb_icc2r_image"></aside><p class="mccmlb_icc2r_p">Купить</p></aside></aside></aside>`;
    return block;
}

function init() {
    upload_info();
    let amount_c = 1;
    let product_am = 0;
    let res;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 4; j++) {
            if (amount_c == 1) {
                res = add_element(`c${amount_c}_${j+1}`, product[product_am], j);
                document.getElementById('mccml_c1').appendChild(res);
            }
            else if (amount_c == 2) {
                res = add_element(`c${amount_c}_${j+1}`, product[product_am], j);
                document.getElementById('mccml_c2').appendChild(res);
            }
            else if (amount_c == 3) {
                res = add_element(`c${amount_c}_${j+1}`, product[product_am], j);
                document.getElementById('mccml_c3').appendChild(res);
            }
            else if (amount_c == 4) {
                res = add_element(`c${amount_c}_${j+1}`, product[product_am], j);
                document.getElementById('mccml_c4').appendChild(res);
            }
            else if (amount_c == 5) {
                res = add_element(`c${amount_c}_${j+1}`, product[product_am], j);
                document.getElementById('mccml_c5').appendChild(res);
            }
            product_am++;
        }
        amount_c++;
    }
}

var am_hearts = 15, am_stat = 15, am_shop = 1, price_bar_left_num = 2000, price_bar_right_num = 1050000;

init();

document.querySelectorAll('.mcctn1r_butt').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.mcctn1r_butt').forEach(but => {
            but.style = "font-weight: 400; opacity: 0.5; margin-left: 0;";
        })
        button.style = "font-weight: 700; opacity: 1; margin-left: 0;";
    })
})
var price_bar_left = document.getElementById('mccmr_pl_input_left');
var price_bar_left_txt = document.getElementById('mccmrp_input_left_id');
price_bar_left_txt.value = price_bar_left.value;
var price_bar_right = document.getElementById('mccmr_pl_input_right');
var price_bar_right_txt = document.getElementById('mccmrp_input_right_id');
price_bar_right_txt.value = price_bar_right.value;

price_bar_left.oninput = function() {
    price_bar_left_txt.value = this.value;
}

price_bar_right.oninput = function() {
    price_bar_right_txt.value = this.value;
}

document.querySelectorAll('.mccmlb_i_cont1').forEach(button => {
    button.addEventListener('click', () => {
        document.location.href = "../public/index2.html";
    })
})

document.querySelector('.mccmrf_button').addEventListener('click', () => {
    price_bar_left_txt.value = price_bar_left_num;
    price_bar_left.value = price_bar_left_num;
    price_bar_right_txt.value = price_bar_right_num;
    price_bar_right.value = price_bar_right_num;
    document.querySelectorAll('.mccmri_cb').forEach(cb => {
        if (cb.checked == true) {
            cb.checked = false;
        }
    })
})

document.querySelectorAll('.mccmlb_icr_stat').forEach(button => {
    button.addEventListener('click', function () {
        if (button.getAttribute("activeted") == "disabled") {
            button.setAttribute("activeted" , "enabled");
            button.style = 'opacity: 0.8;';
            am_stat++;
        }
        else {
            button.setAttribute("activeted" , "disabled");
            button.style = 'opacity: 1;';
            am_stat--;
        }
        upload_info();
    });
})

document.querySelectorAll('.mccmlb_icr_heart').forEach(button => {
    button.addEventListener('click', function () {
        if (button.getAttribute("activeted") == "disabled") {
            button.setAttribute("activeted" , "enabled");
            button.style = 'background-image: url("../images/heart_active.svg");';
            am_hearts++;
        }
        else {
            button.setAttribute("activeted" , "disabled");
            button.style = 'background-image: url("../images/heart-outline1.svg");';
            am_hearts--;
        }
        upload_info();
    });
})

document.querySelectorAll('.mccmlb_icc2_right').forEach(button => {
    button.addEventListener('click', function () {
        if (button.getAttribute("activeted") == "disabled") {
            button.setAttribute("activeted" , "enabled");
            am_shop++;
        }
        upload_info();
    })
})

