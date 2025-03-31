document.addEventListener("DOMContentLoaded", function() {
    const categorySelect = document.getElementById("category");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const inputValue = document.getElementById("inputValue");
    const outputValue = document.getElementById("outputValue");
    const convertBtn = document.getElementById("convertBtn");

    const units = {
        temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
        distancia: ["Metros", "Kilómetros", "Millas", "Pies", "Pulgadas"],
        tiempo: ["Años", "Días", "Horas", "Segundos"],
        moneda: ["MXN", "USD", "Euro"]
    };

    const conversiones = {
        temperatura: {
            Celsius: { Fahrenheit: v => v * 9/5 + 32, Kelvin: v => v + 273.15 },
            Fahrenheit: { Celsius: v => (v - 32) * 5/9, Kelvin: v => (v - 32) * 5/9 + 273.15 },
            Kelvin: { Celsius: v => v - 273.15, Fahrenheit: v => (v - 273.15) * 9/5 + 32 }
        },
        distancia: {
            Metros: { Kilómetros: v => v / 1000, Millas: v => v / 1609.34, Pies: v => v * 3.281, Pulgadas: v => v * 39.37 },
            Kilómetros: { Metros: v => v * 1000, Millas: v => v / 1.609, Pies: v => v * 3281, Pulgadas: v => v * 39370 },
            Millas: { Metros: v => v * 1609.34, Kilómetros: v => v * 1.609, Pies: v => v * 5280, Pulgadas: v => v * 63360 },
            Pies: { Metros: v => v / 3.281, Kilómetros: v => v / 3281, Millas: v => v / 5280, Pulgadas: v => v * 12 },
            Pulgadas: { Metros: v => v / 39.37, Kilómetros: v => v / 39370, Millas: v => v / 63360, Pies: v => v / 12 }
        },
        tiempo: {
            Años: { Días: v => v * 365, Horas: v => v * 8760, Segundos: v => v * 31536000 },
            Días: { Años: v => v / 365, Horas: v => v * 24, Segundos: v => v * 86400 },
            Horas: { Años: v => v / 8760, Días: v => v / 24, Segundos: v => v * 3600 },
            Segundos: { Años: v => v / 31536000, Días: v => v / 86400, Horas: v => v / 3600 }
        }
    };

    function updateUnits() {
        const selectedCategory = categorySelect.value;
        fromUnit.innerHTML = "";
        toUnit.innerHTML = "";
        units[selectedCategory].forEach(unit => {
            fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
            toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
        });
    }

    function convert() {
        const category = categorySelect.value;
        const from = fromUnit.value;
        const to = toUnit.value;
        const value = parseFloat(inputValue.value);
        
        if (!isNaN(value) && from !== to) {
            const conversionFunc = conversiones[category][from]?.[to];
            outputValue.value = conversionFunc ? conversionFunc(value).toFixed(2) : "Conversión no disponible";
        } else {
            outputValue.value = "Error";
        }
    }

    categorySelect.addEventListener("change", updateUnits);
    convertBtn.addEventListener("click", convert);
    updateUnits();
});
