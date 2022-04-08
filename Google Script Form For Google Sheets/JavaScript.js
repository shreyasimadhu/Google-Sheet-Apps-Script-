

// Ai code tuku "JavaScript" Name e JavaScript.html e save Korte Hobe App Script e


// <script> 
        function preventFormSubmit(){
            var forms = document.querySelectorAll('form');
            for(var i=0;i<forms.length;i++){
                forms[i].addEventListener('submit',function(event){
                    event.preventDefault();
                });
            }
        }

        window.addEventListener('load',preventFormSubmit);
        
        function handleFormSubmit(formObject){
            google.script.run.processForm(formObject);
            document.getElementById("myForm").reset();
        }
//</script>