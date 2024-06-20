function SendOutput()
{
    var name;
    var msg;

    name = document.getElementById("name");

    msg = name + ", you booking has been confirmed.";
    document.getElementById("message").innerHTML = msg;
}