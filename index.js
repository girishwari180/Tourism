function searchPlace()
{
    try
    {
        var search = document.getElementById("searchInput").value.trim();
        var state = document.getElementById("stateSelect").value;
        var category = document.getElementById("categorySelect").value;

        var count = 0;

        if(search != "")
        {
            count++;
        }

        if(state != "Select State")
        {
            count++;
        }

        if(category != "Select Category")
        {
            count++;
        }

        if(count == 0)
        {
            alert("Please select one search option");
            return;
        }

        if(count > 1)
        {
            alert("Please use only one search option");
            return;
        }

        // SEARCH BY TEXT
        if(search == "Kerala" || search =="kerala")
        {
            window.location.href = "kerala.html";
        }
        else if(search == "Tamil Nadu" || search =="tamil nadu")
        {
            window.location.href = "tamilnadu.html";
        }
        else if(search == "Karnataka" || search =="karnataka")
        {
            window.location.href = "karnataka.html";
        }
        else if(search == "Goa"|| search=="goa")
        {
            window.location.href = "goa.html";
        }
        else if(search == "Telangana" || search =="telangana")
        {
            window.location.href = "telangana.html";
        }
        else if(search == "Andhra Pradesh" || search =="andhra pradesh")
        {
            window.location.href = "andhrapradesh.html";
        }

        // SEARCH BY STATE
        else if(state == "Kerala")
        {
            window.location.href = "kerala.html";
        }
        else if(state == "Tamil Nadu")
        {
            window.location.href = "tamilnadu.html";
        }
        else if(state == "Karnataka")
        {
            window.location.href = "karnataka.html";
        }
        else if(state == "Goa")
        {
            window.location.href = "goa.html";
        }
        else if(state == "Telangana")
        {
            window.location.href = "telangana.html";
        }
        else if(state == "Andhra Pradesh")
        {
            window.location.href = "andhrapradesh.html";
        }

        // CATEGORY (NO PAGE)
        else if(category != "Select Category")
        {
            alert("No page found for this category");
        }

        else
        {
            alert("Destination not found");
        }
    }
    catch(error)
    {
        alert("Error in searching");
    }
}
