import React from "react"


const Component_header = () => {
    return (
        <div >
           <nav class="header">
            <div class="header-inner">
                <h1 class="logo-container"><a href="https://www.docplanner.com/about-us">
                    <img class="logo" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="docplannerLogo"></img></a></h1>

                <ul class="ul-head">
                    <li><a class="ul-menutop" id="alwaysgreen" href="https://www.docplanner.com/about-us">About us</a></li>            
                    <li><a class="ul-menutop" href="https://www.docplanner.com/career">Career</a></li>
                    <li class="dropdown">
                        <a class="department">
                            Departments<br/>
                        </a>
                        <div class="dropdown-content">
                            <ul class="dropdown-list">
                                <li><a href="https://www.docplanner.com/department?dep=marketing">Marketing &amp; PR</a></li>
                                <li><a href="https://www.docplanner.com/department?dep=customer">Customer Success &amp; Sales</a></li>
                                <li><a href="https://www.docplanner.com/department?dep=it">IT, Product, Data</a></li>
                                <li><a href="https://www.docplanner.com/department?dep=finance">Finance &amp; Administration</a></li>
                                <li><a href="https://www.docplanner.com/department?dep=hr">HR &amp; more</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>    
        </nav>
        </div>
    )
}

export default Component_header