/**
 * @author: Nikita Dezzpil Orlov
 * @date: 2/11/14
 */

var RAL = {}, count = 0;

function add_row_to_list($elem, i) {

    var code, rgb_approx, rgb_hex, name, data = [];

    data[i] = [];
    $elem.each(function() {
        var txt = $(this).html().replace(/<[^>]*>/g, '');
        txt = txt.replace(/\s+/g, ' ').trim();
        txt = txt.replace(/&nbsp;/g, ' ').trim();
        if (txt.length == 0) return ;
        data[i].push(txt);
    })

    if (data[i].length == 0) return;

    code = data[i][0].split(' ')[1];
    rgb_approx = data[i][1];
    rgb_hex = data[i][2];
    name = data[i][4];

    RAL[code] = {
        'code' : code,
        'rgb_approx' : rgb_approx,
        'rgb_hex' : rgb_hex,
        'name' : name
    };

    count++;
}

$(document).ready(function() {

    var row_list = $('div.Section1 table.MsoNormalTable').find('tr').get(),
        i = 0, target_elem;

    for (i = 10; i < row_list.length - 7; i++) {

        target_elem = $(row_list[i]).children('td');

        if (target_elem.length && target_elem[0].tagName == 'TD') {
            if (target_elem.length > 7 && target_elem.length < 12) {
                add_row_to_list(target_elem, i);
            }
        }

    }

    console.log(count);
    console.log(RAL);
    console.log(JSON.stringify(RAL));

});
