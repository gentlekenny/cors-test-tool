function main() 
{
    console.log("Cors test");
    $.ajax
    ({
        url: "https://google.com",
        success: function(data) 
        {
            console.log(data);
        }
    });
}