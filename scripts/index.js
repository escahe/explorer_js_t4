const a = ()=>{
    const boton = document.getElementById("calcular");
    const input_placa = document.getElementById("placa");
    const input_ingreso = document.getElementById("ingreso");
    const input_salida = document.getElementById("salida");
    const output_total = document.getElementById("total");
    output_total.value = "Tarifa $3000/Hora-fracción"

    boton.addEventListener("click",(e)=>{
        
        const placa = input_placa.value;
        const ingreso = new Date(input_ingreso.value);
        const salida = new Date(input_salida.value);
        const horas = (salida-ingreso)/3600000;
        const entero = parseInt(horas);
        if(ingreso==""||salida==""||placa==""){
            alert("Faltan datos, rellene todos los campos")
        }else{
            if(ingreso>salida){
                alert("La fecha de salida no puede ser anterior a la fecha de ingreso");
            }else{

                if(horas>entero){
                    output_total.value = `El vehículo con placa ${placa} debe pagar ${entero+1}H por un total de: $${3000*(entero+1)}`;
                }else{
                    output_total.value = `El vehículo con placa ${placa} debe pagar ${entero}H por un total de: $${3000*(entero)}`;
                }
            }
    
            
        }
    });

}
a();
