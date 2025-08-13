// Factores de conversión (todos basados en metros como unidad base)
const conversionFactors = {
    // Métrico
    m: 1,           // Metro (unidad base)
    km: 1000,       // Kilómetro
    cm: 0.01,       // Centímetro
    mm: 0.001,      // Milímetro
    
    // Imperial
    ft: 0.3048,     // Pie
    in: 0.0254,     // Pulgada
    yd: 0.9144,     // Yarda
    mi: 1609.344    // Milla
};

// Nombres de unidades para mostrar
const unitNames = {
    m: 'Metros',
    km: 'Kilómetros',
    cm: 'Centímetros',
    mm: 'Milímetros',
    ft: 'Pies',
    in: 'Pulgadas',
    yd: 'Yardas',
    mi: 'Millas'
};

// Elementos del DOM
const fromValueInput = document.getElementById('fromValue');
const fromUnitSelect = document.getElementById('fromUnit');
const toValueInput = document.getElementById('toValue');
const toUnitSelect = document.getElementById('toUnit');
const swapBtn = document.getElementById('swapBtn');

// Función principal de conversión
function convert() {
    const fromValue = parseFloat(fromValueInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    
    if (isNaN(fromValue)) {
        toValueInput.value = '';
        return;
    }
    
    // Convertir a metros primero, luego a la unidad destino
    const meters = fromValue * conversionFactors[fromUnit];
    const result = meters / conversionFactors[toUnit];
    
    // Formatear el resultado con decimales apropiados
    const formattedResult = formatResult(result);
    toValueInput.value = formattedResult;
    
    // Actualizar conversiones rápidas
    updateQuickConversions();
}

// Función para formatear el resultado
function formatResult(value) {
    if (value === 0) return '0';
    
    // Determinar el número de decimales basado en la magnitud
    let decimals = 2;
    if (Math.abs(value) >= 1000) decimals = 0;
    else if (Math.abs(value) >= 100) decimals = 1;
    else if (Math.abs(value) >= 10) decimals = 2;
    else if (Math.abs(value) >= 1) decimals = 3;
    else if (Math.abs(value) >= 0.1) decimals = 4;
    else decimals = 6;
    
    return parseFloat(value.toFixed(decimals));
}

// Función para intercambiar unidades
function swapUnits() {
    const tempValue = fromValueInput.value;
    const tempUnit = fromUnitSelect.value;
    
    fromValueInput.value = toValueInput.value;
    fromUnitSelect.value = toUnitSelect.value;
    
    toValueInput.value = tempValue;
    toUnitSelect.value = tempUnit;
    
    // Realizar conversión después del intercambio
    convert();
}

// Función para actualizar conversiones rápidas
function updateQuickConversions() {
    const quickItems = document.querySelectorAll('.quick-item');
    
    quickItems.forEach(item => {
        const from = parseFloat(item.dataset.from);
        const fromUnit = item.dataset.fromUnit;
        const toUnit = item.dataset.toUnit;
        
        if (from && fromUnit && toUnit) {
            const meters = from * conversionFactors[fromUnit];
            const result = meters / conversionFactors[toUnit];
            const formattedResult = formatResult(result);
            
            const resultSpan = item.querySelector('.quick-result');
            if (resultSpan) {
                resultSpan.textContent = `${formattedResult} ${toUnit}`;
            }
        }
    });
}

// Función para manejar conversiones rápidas
function handleQuickConversion(event) {
    const quickItem = event.currentTarget;
    const from = quickItem.dataset.from;
    const fromUnit = quickItem.dataset.fromUnit;
    const toUnit = quickItem.dataset.toUnit;
    
    if (from && fromUnit && toUnit) {
        fromValueInput.value = from;
        fromUnitSelect.value = fromUnit;
        toUnitSelect.value = toUnit;
        
        convert();
        
        // Scroll suave a la tarjeta de conversión
        document.querySelector('.converter-card').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Función para validar entrada
function validateInput(input) {
    const value = input.value;
    
    // Permitir números, punto decimal y signo negativo
    if (value && !/^-?\d*\.?\d*$/.test(value)) {
        input.value = value.replace(/[^0-9.-]/g, '');
    }
    
    // Limitar a un solo punto decimal
    const dots = (value.match(/\./g) || []).length;
    if (dots > 1) {
        input.value = value.replace(/\.+$/, '');
    }
}

// Función para manejar teclas especiales
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        convert();
        toValueInput.focus();
    }
}

// Función para animar el botón de intercambio
function animateSwapButton() {
    swapBtn.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        swapBtn.style.transform = 'rotate(0deg)';
    }, 300);
}

// Función para mostrar notificación de conversión
function showConversionNotification() {
    // Crear notificación temporal
    const notification = document.createElement('div');
    notification.className = 'conversion-notification';
    notification.textContent = 'Conversión realizada';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners para el conversor principal
    fromValueInput.addEventListener('input', convert);
    fromUnitSelect.addEventListener('change', convert);
    toUnitSelect.addEventListener('change', convert);
    
    // Event listener para el botón de intercambio
    swapBtn.addEventListener('click', () => {
        swapUnits();
        animateSwapButton();
        showConversionNotification();
    });
    
    // Event listeners para conversiones rápidas
    const quickItems = document.querySelectorAll('.quick-item');
    quickItems.forEach(item => {
        item.addEventListener('click', handleQuickConversion);
    });
    
    // Validación de entrada
    fromValueInput.addEventListener('input', () => validateInput(fromValueInput));
    fromValueInput.addEventListener('keypress', handleKeyPress);
    
    // Inicializar conversiones rápidas
    updateQuickConversions();
    
    // Focus en el primer input
    fromValueInput.focus();
    
    // Agregar efecto de hover en conversiones rápidas
    quickItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Función para exportar conversión (opcional)
function exportConversion() {
    const fromValue = fromValueInput.value;
    const fromUnit = fromUnitSelect.value;
    const toValue = toValueInput.value;
    const toUnit = toUnitSelect.value;
    
    if (fromValue && toValue) {
        const data = {
            from: `${fromValue} ${fromUnit}`,
            to: `${toValue} ${toUnit}`,
            timestamp: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'conversion.json';
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Función para limpiar todos los campos
function clearAll() {
    fromValueInput.value = '';
    toValueInput.value = '';
    fromUnitSelect.value = 'm';
    toUnitSelect.value = 'ft';
    fromValueInput.focus();
}

// Agregar atajos de teclado
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + Enter para convertir
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        convert();
    }
    
    // Ctrl/Cmd + S para intercambiar
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        swapUnits();
    }
    
    // Escape para limpiar
    if (event.key === 'Escape') {
        clearAll();
    }
});

// Función para hacer la página más accesible
function enhanceAccessibility() {
    // Agregar aria-labels
    fromValueInput.setAttribute('aria-label', 'Valor a convertir');
    toValueInput.setAttribute('aria-label', 'Resultado de la conversión');
    fromUnitSelect.setAttribute('aria-label', 'Unidad de origen');
    toUnitSelect.setAttribute('aria-label', 'Unidad de destino');
    swapBtn.setAttribute('aria-label', 'Intercambiar unidades');
    
    // Agregar roles
    swapBtn.setAttribute('role', 'button');
    
    // Agregar tabindex para navegación por teclado
    const interactiveElements = document.querySelectorAll('input, select, button, .quick-item');
    interactiveElements.forEach((el, index) => {
        el.setAttribute('tabindex', index + 1);
    });
}

// Llamar a la función de accesibilidad cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', enhanceAccessibility);
