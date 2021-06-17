



document.addEventListener('DOMContentLoaded', function() {
        
        document.querySelector('#add').onclick = () => {
            const first = document.querySelector("#first_num").value;
            const second = document.querySelector("#second_num").value;
            document.querySelector('#answer').innerHTML = parseInt(first)+parseInt(second);
            document.querySelector('#first_num').value = "";
            document.querySelector('#second_num').value = "";

            return false;
        };

        document.querySelector('#subtract').onclick = () => {
            const first = document.querySelector("#first_num").value;
            const second = document.querySelector("#second_num").value;
            document.querySelector('#answer').innerHTML = parseInt(first)-parseInt(second);
            document.querySelector('#first_num').value = "";
            document.querySelector('#second_num').value = "";
            return false;
        };
        
        document.querySelector('#multiply').onclick = () => {
            const first = document.querySelector("#first_num").value;
            const second = document.querySelector("#second_num").value;
            document.querySelector('#answer').innerHTML = parseInt(first)*parseInt(second);
            document.querySelector('#first_num').value = "";
            document.querySelector('#second_num').value = "";
            return false;
        };
        
        
        document.querySelector('#divide').onclick = () => {
            const first = document.querySelector("#first_num").value;
            const second = document.querySelector("#second_num").value;
            document.querySelector('#answer').innerHTML = parseInt(first)/parseInt(second);
            document.querySelector('#first_num').value = "";
            document.querySelector('#second_num').value = "";
            return false;
        };
        return false;
});