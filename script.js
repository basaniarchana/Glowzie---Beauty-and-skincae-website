// ================= Smooth Scroll =================

function scrollToSection(sectionId){

    const section = document.getElementById(sectionId);

    if(section){

        section.scrollIntoView({
            behavior:"smooth"
        });

    }

}




// ================= Contact Form =================


document.getElementById("contactForm").addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you for contacting Glowzie! We'll get back to you soon 💖");

    this.reset();

});







// ================= Login / Signup Switch =================


function switchTo(type){


    if(type === "signup"){


        document.getElementById("loginForm").style.display="none";

        document.getElementById("signupForm").style.display="block";


    }

    else{


        document.getElementById("loginForm").style.display="block";

        document.getElementById("signupForm").style.display="none";


    }

}








// ================= Login =================


function handleLogin(){


let email = document.getElementById("loginEmail").value;

let password = document.getElementById("loginPassword").value;



if(!email.endsWith("@gmail.com")){


    alert("Only Gmail accounts are allowed");


    return;


}



if(password===""){


    alert("Please enter password");


    return;


}



alert("Login Successful 💖");


// remove login popup

document.getElementById("authModal").remove();


// show website

document.getElementById("mainContent").style.display="block";


}

    








// ================= Signup =================


function handleSignup(){


    let name =
    document.getElementById("signupName").value;


    let email =
    document.getElementById("signupEmail").value;


    let password =
    document.getElementById("signupPassword").value;



    if(name==="" || email==="" || password===""){


        alert("Please fill all details");


        return;


    }



    alert("Signup Successful 💖 Welcome to Glowzie");



    // Remove signup box

    document.getElementById("authModal").remove();



    // Show website

    document.getElementById("mainContent").style.display="block";


}







// ================= Close Modal =================


function closeModal(){


    document.getElementById("authModal").remove();


}





window.onclick=function(event){


    let modal=document.getElementById("authModal");


    if(event.target===modal){


        modal.remove();


    }


};








// ================= KNOW YOUR SKIN =================


function checkSkin(){


    let feel =
    document.getElementById("skinFeel").value;


    let pimples =
    document.getElementById("pimples").value;


    let reaction =
    document.getElementById("reaction").value;



    let result="";

    let tips="";




    if(feel==="oily" || pimples==="oily"){


        result="Your Skin Type: Oily Skin 🌸";


        tips=`

        ✨ Use oil-free moisturizer <br>
        ✨ Wash your face twice daily <br>
        ✨ Use lightweight sunscreen

        `;


    }



    else if(feel==="dry" || reaction==="dry"){


        result="Your Skin Type: Dry Skin 💧";


        tips=`

        ✨ Use hydrating products <br>
        ✨ Avoid harsh cleansers <br>
        ✨ Drink enough water

        `;


    }



    else if(feel==="combination"){


        result="Your Skin Type: Combination Skin 🌿";


        tips=`

        ✨ Balance oily and dry areas <br>
        ✨ Use gentle skincare products

        `;


    }



    else if(reaction==="sensitive"){


        result="Your Skin Type: Sensitive Skin 🌷";


        tips=`

        ✨ Use fragrance-free products <br>
        ✨ Test products before applying

        `;


    }



    else{


        result="Your Skin Type: Normal Skin 😊";


        tips=`

        ✨ Maintain your skincare routine <br>
        ✨ Never skip sunscreen

        `;


    }





    document.getElementById("skinResult").innerHTML=`

    <h3>${result}</h3>

    <p>${tips}</p>

    `;


}