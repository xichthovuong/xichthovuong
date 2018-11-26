<script>
    function search() {
        var input = document.getElementById("mySearch");
        var temp = input.value.toLowerCase();
        var ul = document.getElementById("myMenu");
        var li = [];
        li = ul.getElementsByTagName("li");
        if (temp.length == 0) {
            for (let i = 3; i < li.length; i++) {
                li[i].style.display= "none";
            }
        } else {
            for (let i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                if (a.innerHTML.toLowerCase().indexOf(temp) > -1) {
                li[i].style.display = "";
                } else {
                li[i].style.display = "none";
                }
            }
        }
    }
</script>