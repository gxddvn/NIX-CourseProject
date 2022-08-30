var am_hearts = 15, am_stat = 15, am_shop = 1, num_image = 0, amount_product = 1;
var arr_slider = ["../images/image33.svg", "../images/slider_image\(6\).svg", "../images/slider_image\(11\).svg", "../images/slider_image\(10\).svg", "../images/slider_image\(9\).svg", "../images/slider_image\(9\).svg", "../images/slider_image\(9\).svg"];

function upload_info() {
    document.getElementById('hhhm2_bbr_nrai_txt_stat').innerHTML = am_stat;
    document.getElementById('hhhm2_bbr_nrai_txt_heart').innerHTML = am_hearts;
    document.getElementById('hhhm2_bbr_nrai_txt_shop').innerHTML = am_shop;
    document.getElementById('mcrcrcb4c_p_id').innerHTML = amount_product;
    document.getElementById('prod_img').style = `background-image: url("${arr_slider[num_image]}");`;
}

upload_info();

document.querySelector('.mcl_sc_arrow_left').addEventListener('click', () => {
    if(num_image > 0) {
        num_image--;
    }
    document.querySelectorAll('.mcl_sc_image').forEach(but => {
        but.style = 'border: none;';
    });
    document.getElementById(`image_slide${num_image+1}`).style = `border: 1px solid #F53B49; background-image: url('${arr_slider[num_image]}');`;
    upload_info();
});

document.querySelector('.mcl_sc_arrow_right').addEventListener('click', () => {
    if(num_image < 6) {
        num_image++;
    }
    document.querySelectorAll('.mcl_sc_image').forEach(but => {
        but.style = 'border: none;';
    });
    document.getElementById(`image_slide${num_image+1}`).style = `border: 1px solid #F53B49; background-image: url('${arr_slider[num_image]}');`;
    upload_info();
});

function stats_sh(butt) {
    butt.addEventListener('click', () => {
        if (butt.getAttribute("activeted") == "disabled") {
            butt.setAttribute("activeted" , "enabled");
            butt.style = 'opacity: 0.8;';
            am_stat++;
        }
        else {
            butt.setAttribute("activeted" , "disabled");
            butt.style = 'opacity: 1;';
            am_stat--;
        }
        upload_info();
    })
}

document.querySelectorAll('.mcrc_stats').forEach(butt => {
    stats_sh(butt);
});

document.querySelectorAll('.mccmlb_icr_stat').forEach(butt => {
    stats_sh(butt);
});

document.querySelectorAll('.mcrcrcb4_button').forEach(butt => {
    butt.addEventListener('click', () => {
        if (butt.getAttribute("activeted") == "disabled") {
            butt.setAttribute("activeted" , "enabled");
            let res = +butt.parentNode.childNodes[1].childNodes[3].innerHTML;
            am_shop += res;
        }
        upload_info();
    })
});

document.querySelectorAll('.mcrctei_button').forEach(butt => {
    butt.addEventListener('click', () => {
        if (butt.getAttribute("activeted") == "disabled") {
            butt.setAttribute("activeted" , "enabled");
            am_shop++;
        }
        upload_info();
    })
});

document.querySelectorAll('.mcrcrcb4c_button').forEach(butt => {
    butt.addEventListener('click', () => {
        if (butt.getAttribute("butt_val") == "-") {
            if (amount_product > 1) {
                amount_product--;
            }
        }
        else if(butt.getAttribute("butt_val") == "+") {
            amount_product++;
        }
        upload_info();
    })
})

function mcrc1br_elem(block, butt) {
    butt.addEventListener('click', () => {
        block.forEach(but => {
            but.style = "border: 1px solid rgba(144, 156, 181, 0.5); background: #F7F7F7;";
        })
        butt.style = "border: 2px solid #F53B49; background: #FFFFFF;";
    })
}

document.querySelectorAll('.mcrc1br_elem_b1').forEach(butt => {
    mcrc1br_elem(document.querySelectorAll('.mcrc1br_elem_b1'), butt);
});
document.querySelectorAll('.mcrc1br_elem_b2').forEach(butt => {
    mcrc1br_elem(document.querySelectorAll('.mcrc1br_elem_b2'), butt);
});
document.querySelectorAll('.mcrc1br_elem_b3').forEach(butt => {
    mcrc1br_elem(document.querySelectorAll('.mcrc1br_elem_b3'), butt);
});
document.querySelectorAll('.mcrc1br_elem_b4').forEach(butt => {
    mcrc1br_elem(document.querySelectorAll('.mcrc1br_elem_b4'), butt);
});
document.querySelectorAll('.mcrc1br_elem_b5').forEach(butt => {
    mcrc1br_elem(document.querySelectorAll('.mcrc1br_elem_b5'), butt);
});

function hearts_sh(butt) {
    butt.addEventListener('click', () => {
        if (butt.getAttribute("activeted") == "disabled") {
            butt.setAttribute("activeted" , "enabled");
            butt.style = 'background-image: url("../images/heart_active.svg");';
            am_hearts++;
        }
        else {
            butt.setAttribute("activeted" , "disabled");
            butt.style = 'background-image: url("../images/heart-outline1.svg");';
            am_hearts--;
        }
        upload_info();
    })
}

document.querySelectorAll('.mcrc_hearts').forEach(butt => {
    hearts_sh(butt);
});

document.querySelectorAll('.mccmlb_icr_heart').forEach(butt => {
    hearts_sh(butt);
});

