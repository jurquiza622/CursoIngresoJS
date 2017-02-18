function Mostrar()
{

    var alto;
    var ancho;
    var ilustradorancho=0;
    var ilustradoralto=0;
    alto=document.getElementById("alto").value;
    ancho=document.getElementById("ancho").value;
     while(ilustradoralto<alto){
            ilustradoralto++;
        while(ilustradorancho<ancho){
            ilustradorancho++;
            document.write('<br>');
            };
            document.write('*');

}
};