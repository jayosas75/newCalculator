var my_calculator = new Calculator();

$(document).ready(function() {
    console.log('hello');
    $('button').click(my_calculator.button_clicked);
});

    function Calculator() {
        var self = this;
        this.array_input = [];
        this.index = 0;
        this.last_number = null;
        this.last_operator = null;
        this.last_item = {};

        this.button_clicked = function () {
            var clicked_value = $(this).val();
            var clicked_class = $(this).attr('class');

            if (clicked_class === 'number_button') {
                console.log('number clicked');
                self.add_number(clicked_value);
            } else if (clicked_class === 'operator_button') {
                console.log('operator clicked');
                self.add_operator(clicked_value);
            } else if (clicked_class === 'equate_button') {
                console.log('equal button clicked');
                self.equate();
            } else if (clicked_class === 'clear_all') {
                console.log('clear all button clicked');
                self.delete_all();
            } else if (clicked_class === 'clear_one') {
                console.log('clear one button clicked');
                self.delete_one();
            }
        };

        this.add_number = function(clicked_value){
            var last_input= null;
            if(self.array_input.length && self.array_input[self.index - 1].type === 'number') {
                self.index--;
                last_input = self.array_input[self.index].value;
                if(!self.array_input[self.index].total){
                    if(clicked_value === '.' && last_input.indexOf('.') > -1){
                        clicked_value = last_input;
                    }
                } else if(last_input === '0'){
                    clicked_value = clicked_value;
                } else if(clicked_value === '-' || clicked_value === '*'){
                    if(last_input.indexOf('-') > -1){
                        clicked_value = last_input.replace('-', '');
                    } else if(last_input.indexOf('*') > -1){
                        clicked_value = last_input.replace('*', '');
                    } else if(last_input.length < 11) {
                        clicked_value = '-' + last_input;
                    } else {
                        clicked_value = last_input;
                    }
                } else {
                    clicked_value += last_input;
                }
            } else{
                self.last_number = null;
                self.last_operator = null;
                self.last_item = {};
            }
            if(clicked_value === '.'){
                clicked_value = '0.';
            }
            clicked_value = clicked_value.slice(0, 11);
            self.last_item = {"type": 'number', "value": clicked_value};
            self.index++;
            self.last_number = clicked_value;
            self.array_input[self.index] = self.last_item;
            self.display(clicked_value);
        };

        this.add_operator = function (clicked_value) {

        };



        this.delete_one = function () {
            inputs_array.pop();
            $('#output').text('');
        };

        this.delete_all = function () {
            inputs_array = [''];
            $('output').text('');
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
