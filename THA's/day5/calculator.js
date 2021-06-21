



document.addEventListener('DOMContentLoaded', function() {
        
        const ans = document.querySelector('#answer');

        document.querySelectorAll(".operations").forEach(function(button)  {
            button.addEventListener('click', (e) => {
                let first = document.querySelector("#first_num").value;
                let second = document.querySelector("#second_num").value;
                let operation = button.id;
                if ((first === "") || (second === "")) {
                    ans.innerHTML = "please enter the numbers!";
                }
                else {
                    switch(operation) {
                        case 'add':
                            ans.innerHTML = parseInt(first) + parseInt(second);
                            break;
                        case 'subtract':
                            ans.innerHTML = parseInt(first) - parseInt(second);
                            break;
                        case 'multiply':
                            ans.innerHTML = parseInt(first) * parseInt(second);
                            break;
                        case 'divide':
                            ans.innerHTML = parseInt(first) / parseInt(second);
                            break;
                    }
                }
            });
        });
    });
