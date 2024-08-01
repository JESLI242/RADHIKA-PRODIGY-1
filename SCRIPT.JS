body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #333;
    padding: 10px 0;
    z-index: 1000;
    transition: background-color 0.3s;
  }
  
  .nav-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  .nav-item {
    margin: 0 20px;
  }
  
  .nav-link {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: color 0.3s;
  }
  
  .nav-link:hover {
    color: #f0a500;
  }
  
  .section {
    padding: 100px 20px;
    min-height: 100vh;
  }
  
  #home {
    background-color: #f4f4f4;
  }
  
  #about {
    background-color: #e2e2e2;
  }
  
  #services {
    background-color: #cccccc;
  }
  
  #contact {
    background-color: #b2b2b2;
  }