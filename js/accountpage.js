const tabBtn = document.querySelectorAll(".tab");
        const tab = document.querySelectorAll(".tabshow");
        function tabs(panelIndex){
            tab.forEach(function(node) {
                node.style.display = "none";
            });
            tab[panelIndex].style.display="block";
        }
        tabs(0);