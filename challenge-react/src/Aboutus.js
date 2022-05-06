import React from "react"

const Aboutus = () => {
    return (
        <div id="About-us">
        
        <img class="star" src="https://www.docplanner.com/img/sygnet.png" alt=""/>
        <h1 class="big-title">Making the healthcare experience more human</h1>
        <div class="flexp">
            <div class="divp"><p id="p1">We want patients to find the perfect 
                doctor and book an appointment in the most easy way. The pat
                ient journey should be enjoyable, and that's why we are alwa
                ys next to them: to help them find the best possible care. Anytime, anywhere.</p></div>
        <div class="divp"><p id="p2">We also help doctors to better manage t
            heir practice and build their online reputation. With our in
            tegrated end-to-end solution, doctors are able not only to impr
            ove their online presence, but also to devote their time to what
             really matters: their patients</p></div>
    </div>

        <div class="pdc-flex">
        <div id="for-pdc">
            <div id="for-p" class="for-pdc">
                <img class="iconspdc" src="https://www.docplanner.com/icons/icon-patients.svg" alt=""/>
                <h2>For patients</h2>
                <p class="p-pdc">Find a doctor, book a visit and solve any health-related doubt</p>
                
                <select>
                    <option>Choose country</option>
                    <option>Argentina</option>
                    <option>Brazil</option>
                    <option>Chile</option>
                    <option>Colombia</option>
                    <option>Czech</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>Mexico</option>
                    <option>Peru</option>
                    <option>Poland&lt; /option&gt;
                    </option><option>Portugal</option>
                    <option>Spain</option>
                    <option>Turkey</option>
                </select>
            </div>

            <div id="for-d" class="for-pdc">
                <img class="iconspdc" src="https://www.docplanner.com/icons/icon-doctors.svg" alt=""/>
                <h2>For doctors</h2>
                <p class="p-pdc">Save time managing visits and cut no-shows by half</p>
                
                <select>
                    <option>Choose country</option>
                    <option>Argentina</option>
                    <option>Brazil</option>
                    <option>Chile</option>
                    <option>Colombia</option>
                    <option>Czech</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>Mexico</option>
                    <option>Peru</option>
                    <option>Poland</option>
                    <option>Portugal</option>
                    <option>Spain</option>
                    <option>Turkey</option>
                </select>

            </div>
            
                <div id="for-c" class="for-pdc">
                    <img class="iconspdc" src="https://www.docplanner.com/icons/icon-clinics.svg" alt=""/>
                    <h2>For clinics</h2>
                    <p class="p-pdc">Deliver an exceptional patient experience in your clinic</p>
                    
                    <select>
                        <option>2 to 20 specialists</option>
                        <option>Brazil</option>
                        <option>Czech</option>
                        <option>Italy</option>
                        <option>Mexico</option>
                        <option>Poland</option>
                        <option>Spain</option>
                        <option>Turkey</option>
                    </select>

                    <select>
                        <option>More than 20 specialists</option>
                        <option>Brazil</option>
                        <option>Italy</option>
                        <option>Mexico</option>
                        <option>Poland</option>
                        <option>Spain</option>
                    </select>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Aboutus