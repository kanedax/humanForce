import M from 'materialize-css'

    var elems = document.querySelectorAll('.sidenav');
    var options = {
      edge: "right",
    }
    M.Sidenav.init(elems, options);
// ----------------------
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {
      coverTrigger: "false",
    }
     M.Dropdown.init(elems, options);



