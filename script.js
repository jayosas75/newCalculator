var my_calculator = new Calculator();

/*function callback(type, value, item) {
    switch (value) {
        case undefined:
            $('#display_area').text("");
    break;
default:
    $('#display_area').text(value);
    break;
}
}*/

$(document).ready(function() {
    console.log('hello');
    $('button').click(my_calculator.button_clicked);
});

    function Calculator() {
        var self = this;
        var inputs_array = [''];
        var index = 0;

        this.button_clicked = function () {

            var clicked_value = $(this).val();
            var clicked_class = $(this).attr('class');

            if (clicked_class === 'btn btn-default number_button') {
                console.log('number clicked');
                self.add_number(clicked_value);
            } else if (clicked_class === 'btn btn-default operator_button') {
                console.log('operator clicked');
                self.add_operator(clicked_value);
            } else if (clicked_class === 'btn btn-default equate_button') {
                console.log('equal button clicked');
                self.equate();
            } else if (clicked_class === 'clear_all btn btn-default buttons') {
                console.log('clear all button clicked');
                self.delete_all();
            } else if (clicked_class === 'clear_one btn btn-default buttons') {
                console.log('clear one button clicked');
                self.delete_one();
            }
        };



        this.add_operator = function (clicked_value) {
            if (inputs_array[index] === '') {
                if (index === 0) {
                    return;
                }
                inputs_array[index - 1] = operator;
            }
            index++;
            inputs_array[index] = operator;
            index++;
            inputs_array[index] = '';
        };

        this.add_number = function (clicked_value) {
          /*  inputs_array[index] += clicked_value;*/
            if (clicked_value === ".") {//decimal point is the first input
                clicked_value = "0.";
            }
            inputs_array[index] = clicked_value;
            index++;
            this.display(clicked_value);
        };

        this.delete_one = function () {
            inputs_array.pop();
            $('#output').text('');
        };

        this.delete_all = function () {
            this.inputs_array = [];
            $('#output').text('');
        };

        /*this.equate = function () {

        };*/

        this.display = function(input) {
            $('#output').text(input);
        };
    }












/*
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
*/


/*function equations(type, value, item){
    switch(value) {
        case undefined:
            $('#output').html('');
            break;
        default:
            $('#output').html(value);
            break;
    }
}*/

/*var my_calculator = new calculator(equations);*/

/*
$(document).ready(function(){
    $('button').on('click', function(){
        var val = $(this).text();
        switch (val) {
            case 'CE':
                $('#output').allClear();
                break;
            default:
                $('#output').add($(this).text());
                break;
        }
    })
})*/
