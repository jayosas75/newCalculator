var input_index = 0;
var input = [''];

function add_number(number){
    input[input_index] += number;
}

function add_operator(operator){
    if(input[input_index] === ''){
        if(input_index === 0){
            return;
        }
        input[input_index - 1] = operator;
    }
    input_index++;
    input[input_index] = operator;
    input_index++;
    input[input_index] = '';

}


function equations(type, value, item){
    switch(value) {
        case undefined:
            $('#output').html('');
            break;
        default:
            $('#output').html(value);
            break;
    }
}

var my_calculator = new calculator(equations);

$(document).ready(function(){
    $('button').on('click', function(){
        var val = $(this).text();
        switch (val) {
            case 'CE':
                my_calculator.allClear();
                break;
            default:
                my_calculator.addItem($(this).text())
                break;
        }
    })
})