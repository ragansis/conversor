# Conversor de Unidades - Convertidor Métrico

Una aplicación web moderna e intuitiva para realizar conversiones de unidades métricas e imperiales, diseñada para ser desplegada en Vercel.

## 🚀 Características

- **Conversiones Precisas**: Soporte para unidades métricas e imperiales
- **Diseño Moderno**: Interfaz atractiva con gradientes y animaciones
- **Responsivo**: Funciona perfectamente en dispositivos móviles y de escritorio
- **Conversiones Rápidas**: Ejemplos predefinidos para uso inmediato
- **Intercambio de Unidades**: Botón para cambiar rápidamente entre unidades
- **Validación de Entrada**: Prevención de errores de entrada
- **Accesibilidad**: Compatible con lectores de pantalla y navegación por teclado

## 📐 Unidades Soportadas

### Métricas
- Metros (m)
- Kilómetros (km)
- Centímetros (cm)
- Milímetros (mm)

### Imperiales
- Pies (ft)
- Pulgadas (in)
- Yardas (yd)
- Millas (mi)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Lógica de conversión y interactividad
- **Font Awesome**: Iconos atractivos
- **Google Fonts**: Tipografía Inter para mejor legibilidad

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. Haz fork de este repositorio
2. Ve a [vercel.com](https://vercel.com) y crea una cuenta
3. Haz clic en "New Project"
4. Importa tu repositorio desde GitHub
5. Vercel detectará automáticamente la configuración y desplegará tu proyecto

### Opción 2: Despliegue Manual

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Navega al directorio del proyecto:
```bash
cd conversor
```

3. Despliega:
```bash
vercel
```

4. Sigue las instrucciones en la terminal

## 📱 Uso

1. **Ingresa el valor** que quieres convertir en el campo "Valor a convertir"
2. **Selecciona la unidad de origen** (ej: metros)
3. **Selecciona la unidad de destino** (ej: pies)
4. **El resultado se muestra automáticamente** en tiempo real
5. **Usa el botón de intercambio** para cambiar rápidamente entre unidades
6. **Explora las conversiones rápidas** para ejemplos comunes

## ⌨️ Atajos de Teclado

- **Enter**: Realizar conversión
- **Ctrl/Cmd + Enter**: Convertir y enfocar resultado
- **Ctrl/Cmd + S**: Intercambiar unidades
- **Escape**: Limpiar todos los campos

## 🎨 Características del Diseño

- **Gradiente de fondo** atractivo
- **Tarjetas con sombras** para mejor profundidad visual
- **Animaciones suaves** en hover y transiciones
- **Colores consistentes** con paleta profesional
- **Tipografía legible** con la fuente Inter
- **Iconos intuitivos** de Font Awesome

## 🔧 Personalización

### Cambiar Colores
Modifica las variables CSS en `styles.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ffd700;
}
```

### Agregar Nuevas Unidades
Edita el objeto `conversionFactors` en `script.js`:
```javascript
const conversionFactors = {
  // ... unidades existentes
  nuevaUnidad: factorDeConversion
};
```

## 📊 Rendimiento

- **Carga rápida**: Sin dependencias externas pesadas
- **Conversiones instantáneas**: Cálculos en tiempo real
- **Optimizado para móviles**: Diseño responsive eficiente
- **SEO friendly**: HTML semántico y meta tags apropiados

## 🌐 Compatibilidad

- **Navegadores modernos**: Chrome, Firefox, Safari, Edge
- **Dispositivos móviles**: iOS y Android
- **Accesibilidad**: WCAG 2.1 AA compliant
- **PWA ready**: Preparado para instalación como app

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes alguna pregunta o sugerencia, por favor:
- Abre un issue en GitHub
- Contacta al desarrollador

---

**Desarrollado con ❤️ para conversiones precisas y rápidas**
# Updated for Vercel compatibility
