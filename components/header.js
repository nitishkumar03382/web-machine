class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <style>
        nav {
          height: 40px;
          display: flex;
          align-items: center;
         
          background-color:  #0a0a23;
        }
        .link{
            display: inline;
        }
       
        
        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
        }
        
        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }
      </style>
      <header>
        <nav>
          <ul>
            <li class = 'link'><a href="ml-day1-intro.html">Machine Learning</a></li>
            <li class = 'link'><a href="#">Web Dev</a></li>
            <li class = 'link' style="float:right"><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
    
}

customElements.define('header-component', Header);
