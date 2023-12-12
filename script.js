function aceso(){var light = document.querySelector('.light');
        light.classList.toggle('aceso');
        var cord = document.querySelector('.cord');

        if(light.classList.contains('aceso')){
        cord.style.display = 'block';
            return;
        }
        else
        cord.style.display = 'none';
    }
